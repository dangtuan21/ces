import mongoose from 'mongoose';
import FileSchema from './schemas/fileSchema';
const Schema = mongoose.Schema;

/**
 * Ticket database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('ticket');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const TicketSchema = new Schema(
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
      comment: {
        type: String,
      },
      tag: {
        type: String,
      },
      ticketType: {
        type: String,
        enum: [
          "question",
          "problem",
          "request",
          null
        ],
      },
      ticketStatus: {
        type: String,
        enum: [
          "open",
          "pending",
          "resolved",
          "closed",
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

  TicketSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  TicketSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  TicketSchema.set('toJSON', {
    getters: true,
  });

  TicketSchema.set('toObject', {
    getters: true,
  });

  return database.model('ticket', TicketSchema);
};
