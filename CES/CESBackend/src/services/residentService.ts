import ResidentRepository from '../database/repositories/residentRepository';
import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';

/**
 * Handles Resident operations
 */
export default class ResidentService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  /**
   * Creates a Resident.
   *
   * @param {*} data
   */
  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const record = await ResidentRepository.create(data, {
        ...this.options,
        session,
      });

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'resident',
      );

      throw error;
    }
  }

  /**
   * Updates a Resident.
   *
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const record = await ResidentRepository.update(
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
        'resident',
      );

      throw error;
    }
  }

  /**
   * Destroy all Residents with those ids.
   *
   * @param {*} ids
   */
  async destroyAll(ids) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await ResidentRepository.destroy(id, {
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
   * Finds the Resident by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return ResidentRepository.findById(id, this.options);
  }

  /**
   * Finds Residents for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  async findAllAutocomplete(search, limit) {
    return ResidentRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  /**
   * Finds Residents based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return ResidentRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  /**
   * Imports a list of Residents.
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
    const count = await ResidentRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
