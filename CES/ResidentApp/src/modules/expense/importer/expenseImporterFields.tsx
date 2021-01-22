import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import expenseEnumerators from 'src/modules/expense/expenseEnumerators';

export default [
  {
    name: 'category',
    label: i18n('entities.expense.fields.category'),
    schema: schemas.enumerator(
      i18n('entities.expense.fields.category'),
      {
        "options": expenseEnumerators.category
      },
    ),
  },
  {
    name: 'amount',
    label: i18n('entities.expense.fields.amount'),
    schema: schemas.decimal(
      i18n('entities.expense.fields.amount'),
      {},
    ),
  },
  {
    name: 'property',
    label: i18n('entities.expense.fields.property'),
    schema: schemas.relationToOne(
      i18n('entities.expense.fields.property'),
      {},
    ),
  },
  {
    name: 'payDate',
    label: i18n('entities.expense.fields.payDate'),
    schema: schemas.date(
      i18n('entities.expense.fields.payDate'),
      {},
    ),
  },
  {
    name: 'vendor',
    label: i18n('entities.expense.fields.vendor'),
    schema: schemas.string(
      i18n('entities.expense.fields.vendor'),
      {},
    ),
  },
];