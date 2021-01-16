import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Contact database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('contact');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ContactSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
      },
      birthdate: {
        type: String,
      },
      gender: {
        type: String,
        enum: [
          "male",
          "female",
          null
        ],
      },
      title: {
        type: String,
      },
      company: {
        type: String,
      },
      email: {
        type: String,
      },
      phoneNumber: {
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

  ContactSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  ContactSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ContactSchema.set('toJSON', {
    getters: true,
  });

  ContactSchema.set('toObject', {
    getters: true,
  });

  return database.model('contact', ContactSchema);
};
