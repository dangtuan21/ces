import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.feedback.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.feedback.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.feedback.fields.description'),
  },
  {
    name: 'feedbackStatus',
    label: i18n('entities.feedback.fields.feedbackStatus'),
  },
  {
    name: 'assignee',
    label: i18n('entities.feedback.fields.assignee'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.feedback.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.feedback.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
