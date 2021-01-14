import MongooseRepository from './mongooseRepository';
import MongooseQueryUtils from '../utils/mongooseQueryUtils';
import AuditLogRepository from './auditLogRepository';
import Error404 from '../../errors/Error404';
import { IRepositoryOptions } from './IRepositoryOptions';
import Property from '../models/property';
import FileRepository from './fileRepository';
import Order from '../models/order';
import Resident from '../models/resident';
import Expense from '../models/expense';

/**
 * Handles database operations for the Property.
 * See https://mongoosejs.com/docs/index.html to learn how to customize it.
 */
class PropertyRepository {
  /**
   * Creates the Property.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  static async create(data, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    const currentUser = MongooseRepository.getCurrentUser(
      options,
    );

    const [record] = await Property(
      options.database,
    ).create(
      [
        {
          ...data,
          tenant: currentTenant.id,
          createdBy: currentUser.id,
          updatedBy: currentUser.id,
        },
      ],
      MongooseRepository.getSessionOptionsIfExists(options),
    );

    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options,
    );

    

    return this.findById(record.id, options);
  }

  /**
   * Updates the Property.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  static async update(id, data, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let record = await MongooseRepository.wrapWithSessionIfExists(
      Property(options.database).findById(id),
      options,
    );

    if (
      !record ||
      String(record.tenant) !== String(currentTenant.id)
    ) {
      throw new Error404();
    }

    await MongooseRepository.wrapWithSessionIfExists(
      Property(options.database).updateOne(
        { _id: id },
        {
          ...data,
          updatedBy: MongooseRepository.getCurrentUser(
            options,
          ).id,
        },
      ),
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      id,
      data,
      options,
    );

    record = await this.findById(id, options);



    return record;
  }

  /**
   * Deletes the Property.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async destroy(id, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let record = await MongooseRepository.wrapWithSessionIfExists(
      Property(options.database).findById(id),
      options,
    );

    if (
      !record ||
      String(record.tenant) !== String(currentTenant.id)
    ) {
      throw new Error404();
    }

    await MongooseRepository.wrapWithSessionIfExists(
      Property(options.database).deleteOne({ _id: id }),
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      id,
      record,
      options,
    );

    await MongooseRepository.destroyRelationToMany(
      id,
      Order(options.database),
      'products',
      options,
    );

    await MongooseRepository.destroyRelationToOne(
      id,
      Resident(options.database),
      'property',
      options,
    );

    await MongooseRepository.destroyRelationToOne(
      id,
      Expense(options.database),
      'property',
      options,
    );
  }

  /**
   * Counts the number of Propertys based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  static async count(filter, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    return MongooseRepository.wrapWithSessionIfExists(
      Property(options.database).countDocuments({
        ...filter,
        tenant: currentTenant.id,
      }),
      options,
    );
  }

  /**
   * Finds the Property and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async findById(id, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let record = await MongooseRepository.wrapWithSessionIfExists(
      Property(options.database)
        .findById(id),
      options,
    );

    if (
      !record ||
      String(record.tenant) !== String(currentTenant.id)
    ) {
      throw new Error404();
    }

    return this._fillFileDownloadUrls(record);
  }

  /**
   * Finds the Propertys based on the query.
   * See https://mongoosejs.com/docs/queries.html to learn how
   * to customize the queries.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let criteriaAnd: any = [];
    
    criteriaAnd.push({
      tenant: currentTenant.id,
    });

    if (filter) {
      if (filter.id) {
        criteriaAnd.push({
          ['_id']: MongooseQueryUtils.uuid(filter.id),
        });
      }

      if (filter.name) {
        criteriaAnd.push({
          name: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.name,
            ),
            $options: 'i',
          },
        });
      }

      if (filter.unitPriceRange) {
        const [start, end] = filter.unitPriceRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            unitPrice: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            unitPrice: {
              $lte: end,
            },
          });
        }
      }

      if (filter.propertyType) {
        criteriaAnd.push({
          propertyType: filter.propertyType
        });
      }

      if (filter.bedRoomsRange) {
        const [start, end] = filter.bedRoomsRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            bedRooms: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            bedRooms: {
              $lte: end,
            },
          });
        }
      }

      if (filter.fullBathRoomsRange) {
        const [start, end] = filter.fullBathRoomsRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            fullBathRooms: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            fullBathRooms: {
              $lte: end,
            },
          });
        }
      }

      if (filter.halfBathRoomsRange) {
        const [start, end] = filter.halfBathRoomsRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            halfBathRooms: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            halfBathRooms: {
              $lte: end,
            },
          });
        }
      }

      if (filter.areaRange) {
        const [start, end] = filter.areaRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            area: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            area: {
              $lte: end,
            },
          });
        }
      }

      if (filter.headLine) {
        criteriaAnd.push({
          headLine: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.headLine,
            ),
            $options: 'i',
          },
        });
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteriaAnd.push({
            ['createdAt']: {
              $gte: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          criteriaAnd.push({
            ['createdAt']: {
              $lte: end,
            },
          });
        }
      }
    }

    const sort = MongooseQueryUtils.sort(
      orderBy || 'createdAt_DESC',
    );

    const skip = Number(offset || 0) || undefined;
    const limitEscaped = Number(limit || 0) || undefined;
    const criteria = criteriaAnd.length
      ? { $and: criteriaAnd }
      : null;

    let rows = await Property(options.database)
      .find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort);

    const count = await Property(
      options.database,
    ).countDocuments(criteria);

    rows = await Promise.all(
      rows.map(this._fillFileDownloadUrls),
    );

    return { rows, count };
  }

  /**
   * Lists the Propertys to populate the autocomplete.
   * See https://mongoosejs.com/docs/queries.html to learn how to
   * customize the query.
   *
   * @param {Object} search
   * @param {number} limit
   */
  static async findAllAutocomplete(search, limit, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let criteriaAnd: Array<any> = [{
      tenant: currentTenant.id,
    }];

    if (search) {
      criteriaAnd.push({
        $or: [
          {
            _id: MongooseQueryUtils.uuid(search),
          },
          {
            name: {
              $regex: MongooseQueryUtils.escapeRegExp(search),
              $options: 'i',
            }
          },          
        ],
      });
    }

    const sort = MongooseQueryUtils.sort('name_ASC');
    const limitEscaped = Number(limit || 0) || undefined;

    const criteria = { $and: criteriaAnd };

    const records = await Property(options.database)
      .find(criteria)
      .limit(limitEscaped)
      .sort(sort);

    return records.map((record) => ({
      id: record.id,
      label: record.name,
    }));
  }

  /**
   * Creates an audit log of the operation.
   *
   * @param {string} action - The action [create, update or delete].
   * @param {object} id - The record id
   * @param {object} data - The new data passed on the request
   * @param {object} options
   */
  static async _createAuditLog(action, id, data, options: IRepositoryOptions) {
    await AuditLogRepository.log(
      {
        entityName: Property(options.database).modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }

  static async _fillFileDownloadUrls(record) {
    if (!record) {
      return null;
    }

    const output = record.toObject
      ? record.toObject()
      : record;

    output.photos = await FileRepository.fillDownloadUrl(
      output.photos,
    );

    return output;
  }
}

export default PropertyRepository;
