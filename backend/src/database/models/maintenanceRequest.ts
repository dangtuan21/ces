import mongoose from 'mongoose';
import FileSchema from './schemas/fileSchema';
const Schema = mongoose.Schema;

/**
 * MaintenanceRequest database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('maintenanceRequest');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const MaintenanceRequestSchema = new Schema(
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      attachment: [FileSchema],
      category: {
        type: String,
        enum: [
          "water",
          "electric",
          "gas",
          null
        ],
      },
      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  MaintenanceRequestSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  MaintenanceRequestSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  MaintenanceRequestSchema.set('toJSON', {
    getters: true,
  });

  MaintenanceRequestSchema.set('toObject', {
    getters: true,
  });

  return database.model('maintenanceRequest', MaintenanceRequestSchema);
};
