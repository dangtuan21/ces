import MaintenanceRequestRepository from '../database/repositories/maintenanceRequestRepository';
import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import UserRoleChecker from './iam/userRoleChecker';

/**
 * Handles MaintenanceRequest operations
 */
export default class MaintenanceRequestService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  /**
   * Creates a MaintenanceRequest.
   *
   * @param {*} data
   */
  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const record = await MaintenanceRequestRepository.create(
        data,
        {
          ...this.options,
          session,
        },
      );

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'maintenanceRequest',
      );

      throw error;
    }
  }

  /**
   * Updates a MaintenanceRequest.
   *
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const record = await MaintenanceRequestRepository.update(
        id,
        data,
        {
          ...this.options,
          session,
        },
      );

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'maintenanceRequest',
      );

      throw error;
    }
  }

  /**
   * Destroy all MaintenanceRequests with those ids.
   *
   * @param {*} ids
   */
  async destroyAll(ids) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await MaintenanceRequestRepository.destroy(id, {
          ...this.options,
          session,
        });
      }

      await MongooseRepository.commitTransaction(session);
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  /**
   * Finds the MaintenanceRequest by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return MaintenanceRequestRepository.findById(
      id,
      this.options,
    );
  }

  /**
   * Finds MaintenanceRequests for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  async findAllAutocomplete(search, limit) {
    return MaintenanceRequestRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  /**
   * Finds MaintenanceRequests based on the query.
   *
   * @param {*} args
   */
  // async findAndCountAll__(args) {
  //   return MaintenanceRequestRepository.findAndCountAll(
  //     args,
  //     this.options,
  //   );
  // }
  async findAndCountAll(args) {
    console.log('ttt new findAndCountAll');
    if (UserRoleChecker.isOperator(this.options)) {
      return MaintenanceRequestRepository.findAndCountAll(
        args,
        this.options,
      );
    } else {
      args.filter = {
        ...args.filter,
        createdBy: this.options.currentUser.id,
      };
      return MaintenanceRequestRepository.findAndCountAll(
        args,
        this.options,
      );
    }
  }
  /**
   * Imports a list of MaintenanceRequests.
   *
   * @param {*} data
   * @param {*} importHash
   */
  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  /**
   * Checks if the import hash already exists.
   * Every item imported has a unique hash.
   *
   * @param {*} importHash
   */
  async _isImportHashExistent(importHash) {
    const count = await MaintenanceRequestRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
