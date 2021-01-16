import mongoose from 'mongoose';
import FileSchema from './schemas/fileSchema';
const Schema = mongoose.Schema;

/**
 * Property database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('property');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const PropertySchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
      },
      description: {
        type: String,
        maxlength: 21845,
      },
      unitPrice: {
        type: Number,
        required: true,
        min: 0.01,
        max: 99999,
      },
      photos: [FileSchema],
      propertyType: {
        type: String,
        enum: [
          "luxury",
          "normal",
          null
        ],
      },
      bedRooms: {
        type: Number,
      },
      fullBathRooms: {
        type: Number,
      },
      halfBathRooms: {
        type: Number,
      },
      area: {
        type: Number,
      },
      headLine: {
        type: String,
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

  PropertySchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  PropertySchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  PropertySchema.set('toJSON', {
    getters: true,
  });

  PropertySchema.set('toObject', {
    getters: true,
  });

  return database.model('property', PropertySchema);
};
