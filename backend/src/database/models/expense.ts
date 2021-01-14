import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Expense database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('expense');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ExpenseSchema = new Schema(
    {
      category: {
        type: String,
        enum: [
          "waste",
          "water_repair",
          "electric_repair",
          "security",
          null
        ],
      },
      amount: {
        type: Number,
      },
      property: {
        type: Schema.Types.ObjectId,
        ref: 'property',
      },
      payDate: {
        type: String,
      },
      vendor: {
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

  ExpenseSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  ExpenseSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ExpenseSchema.set('toJSON', {
    getters: true,
  });

  ExpenseSchema.set('toObject', {
    getters: true,
  });

  return database.model('expense', ExpenseSchema);
};
