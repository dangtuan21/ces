import ExpenseRepository from '../database/repositories/expenseRepository';
import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';

/**
 * Handles Expense operations
 */
export default class ExpenseService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  /**
   * Creates a Expense.
   *
   * @param {*} data
   */
  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const record = await ExpenseRepository.create(data, {
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
        'expense',
      );

      throw error;
    }
  }

  /**
   * Updates a Expense.
   *
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const record = await ExpenseRepository.update(
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
        'expense',
      );

      throw error;
    }
  }

  /**
   * Destroy all Expenses with those ids.
   *
   * @param {*} ids
   */
  async destroyAll(ids) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await ExpenseRepository.destroy(id, {
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
   * Finds the Expense by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return ExpenseRepository.findById(id, this.options);
  }

  /**
   * Finds Expenses for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  async findAllAutocomplete(search, limit) {
    return ExpenseRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  /**
   * Finds Expenses based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return ExpenseRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  /**
   * Imports a list of Expenses.
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
    const count = await ExpenseRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
