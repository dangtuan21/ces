import TicketRepository from '../database/repositories/ticketRepository';
import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';

/**
 * Handles Ticket operations
 */
export default class TicketService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  /**
   * Creates a Ticket.
   *
   * @param {*} data
   */
  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const record = await TicketRepository.create(data, {
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
        'ticket',
      );

      throw error;
    }
  }

  /**
   * Updates a Ticket.
   *
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const record = await TicketRepository.update(
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
        'ticket',
      );

      throw error;
    }
  }

  /**
   * Destroy all Tickets with those ids.
   *
   * @param {*} ids
   */
  async destroyAll(ids) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await TicketRepository.destroy(id, {
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
   * Finds the Ticket by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return TicketRepository.findById(id, this.options);
  }

  /**
   * Finds Tickets for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  async findAllAutocomplete(search, limit) {
    return TicketRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  /**
   * Finds Tickets based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return TicketRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  /**
   * Imports a list of Tickets.
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
    const count = await TicketRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
