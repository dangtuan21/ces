import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.maintenanceRequest.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.maintenanceRequest.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.maintenanceRequest.fields.description'),
  },
  {
    name: 'attachment',
    label: i18n('entities.maintenanceRequest.fields.attachment'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'category',
    label: i18n('entities.maintenanceRequest.fields.category'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.maintenanceRequest.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.maintenanceRequest.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
