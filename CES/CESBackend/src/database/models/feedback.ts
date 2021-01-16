import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Feedback database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('feedback');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const FeedbackSchema = new Schema(
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      feedbackStatus: {
        type: String,
        enum: [
          "pending",
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

  FeedbackSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  FeedbackSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  FeedbackSchema.set('toJSON', {
    getters: true,
  });

  FeedbackSchema.set('toObject', {
    getters: true,
  });

  return database.model('feedback', FeedbackSchema);
};
