import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.announcement.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.announcement.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.announcement.fields.description'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.announcement.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.announcement.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
