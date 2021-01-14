import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.expense.fields.id'),
  },
  {
    name: 'category',
    label: i18n('entities.expense.fields.category'),
  },
  {
    name: 'amount',
    label: i18n('entities.expense.fields.amount'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'property',
    label: i18n('entities.expense.fields.property'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'payDate',
    label: i18n('entities.expense.fields.payDate'),
  },
  {
    name: 'vendor',
    label: i18n('entities.expense.fields.vendor'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.expense.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.expense.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
