import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.resident.fields.id'),
  },
  {
    name: 'firstName',
    label: i18n('entities.resident.fields.firstName'),
  },
  {
    name: 'lastName',
    label: i18n('entities.resident.fields.lastName'),
  },
  {
    name: 'middleName',
    label: i18n('entities.resident.fields.middleName'),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.resident.fields.phoneNumber'),
  },
  {
    name: 'email',
    label: i18n('entities.resident.fields.email'),
  },
  {
    name: 'property',
    label: i18n('entities.resident.fields.property'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.resident.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.resident.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
