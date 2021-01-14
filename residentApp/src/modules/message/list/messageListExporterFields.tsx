import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.message.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.message.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.message.fields.description'),
  },
  {
    name: 'messageStatus',
    label: i18n('entities.message.fields.messageStatus'),
  },
  {
    name: 'assignee',
    label: i18n('entities.message.fields.assignee'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.message.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.message.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
