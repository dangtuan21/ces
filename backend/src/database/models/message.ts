import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Message database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('message');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const MessageSchema = new Schema(
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      messageStatus: {
        type: String,
        enum: [
          "sent",
          "received",
          "working",
          "closed",
          null
        ],
      },
      assignee: {
        type: Schema.Types.ObjectId,
        ref: 'user',
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

  MessageSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  MessageSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  MessageSchema.set('toJSON', {
    getters: true,
  });

  MessageSchema.set('toObject', {
    getters: true,
  });

  return database.model('message', MessageSchema);
};
