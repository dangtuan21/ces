import FeedbackRepository from '../database/repositories/feedbackRepository';
import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import UserRoleChecker from './iam/userRoleChecker';

/**
 * Handles Feedback operations
 */
export default class FeedbackService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  /**
   * Creates a Feedback.
   *
   * @param {*} data
   */
  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const record = await FeedbackRepository.create(data, {
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
        'feedback',
      );

      throw error;
    }
  }

  /**
   * Updates a Feedback.
   *
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const record = await FeedbackRepository.update(
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
        'feedback',
      );

      throw error;
    }
  }

  /**
   * Destroy all Feedbacks with those ids.
   *
   * @param {*} ids
   */
  async destroyAll(ids) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await FeedbackRepository.destroy(id, {
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
   * Finds the Feedback by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return FeedbackRepository.findById(id, this.options);
  }

  /**
   * Finds Feedbacks for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  async findAllAutocomplete(search, limit) {
    return FeedbackRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  /**
   * Finds Feedbacks based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    if (UserRoleChecker.isOperator(this.options)) {
      return FeedbackRepository.findAndCountAll(
        args,
        this.options,
      );
    } else {
      args.filter = {
        ...args.filter,
        createdBy: this.options.currentUser.id,
      };
      return FeedbackRepository.findAndCountAll(
        args,
        this.options,
      );
    }

    // return FeedbackRepository.findAndCountAll(
    //   args,
    //   this.options,
    // );
  }

  /**
   * Imports a list of Feedbacks.
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
    const count = await FeedbackRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
