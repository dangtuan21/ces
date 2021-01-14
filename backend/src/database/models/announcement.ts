import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Announcement database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('announcement');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const AnnouncementSchema = new Schema(
    {
      title: {
        type: String,
      },
      description: {
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

  AnnouncementSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  AnnouncementSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  AnnouncementSchema.set('toJSON', {
    getters: true,
  });

  AnnouncementSchema.set('toObject', {
    getters: true,
  });

  return database.model('announcement', AnnouncementSchema);
};
