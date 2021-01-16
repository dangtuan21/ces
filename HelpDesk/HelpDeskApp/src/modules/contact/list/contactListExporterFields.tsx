import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.contact.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.contact.fields.name'),
  },
  {
    name: 'birthdate',
    label: i18n('entities.contact.fields.birthdate'),
  },
  {
    name: 'gender',
    label: i18n('entities.contact.fields.gender'),
  },
  {
    name: 'title',
    label: i18n('entities.contact.fields.title'),
  },
  {
    name: 'company',
    label: i18n('entities.contact.fields.company'),
  },
  {
    name: 'email',
    label: i18n('entities.contact.fields.email'),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.contact.fields.phoneNumber'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.contact.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.contact.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
