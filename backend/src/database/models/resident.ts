import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Resident database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('resident');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ResidentSchema = new Schema(
    {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      middleName: {
        type: String,
      },
      phoneNumber: {
        type: String,
      },
      email: {
        type: String,
      },
      property: {
        type: Schema.Types.ObjectId,
        ref: 'property',
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

  ResidentSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  ResidentSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ResidentSchema.set('toJSON', {
    getters: true,
  });

  ResidentSchema.set('toObject', {
    getters: true,
  });

  return database.model('resident', ResidentSchema);
};
