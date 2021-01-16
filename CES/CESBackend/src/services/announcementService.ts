import AnnouncementRepository from '../database/repositories/announcementRepository';
import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';

/**
 * Handles Announcement operations
 */
export default class AnnouncementService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  /**
   * Creates a Announcement.
   *
   * @param {*} data
   */
  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const record = await AnnouncementRepository.create(data, {
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
        'announcement',
      );

      throw error;
    }
  }

  /**
   * Updates a Announcement.
   *
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const record = await AnnouncementRepository.update(
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
        'announcement',
      );

      throw error;
    }
  }

  /**
   * Destroy all Announcements with those ids.
   *
   * @param {*} ids
   */
  async destroyAll(ids) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await AnnouncementRepository.destroy(id, {
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
   * Finds the Announcement by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return AnnouncementRepository.findById(id, this.options);
  }

  /**
   * Finds Announcements for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  async findAllAutocomplete(search, limit) {
    return AnnouncementRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  /**
   * Finds Announcements based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return AnnouncementRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  /**
   * Imports a list of Announcements.
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
    const count = await AnnouncementRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
