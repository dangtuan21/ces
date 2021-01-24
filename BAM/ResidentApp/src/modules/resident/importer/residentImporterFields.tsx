import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'firstName',
    label: i18n('entities.resident.fields.firstName'),
    schema: schemas.string(
      i18n('entities.resident.fields.firstName'),
      {},
    ),
  },
  {
    name: 'lastName',
    label: i18n('entities.resident.fields.lastName'),
    schema: schemas.string(
      i18n('entities.resident.fields.lastName'),
      {},
    ),
  },
  {
    name: 'middleName',
    label: i18n('entities.resident.fields.middleName'),
    schema: schemas.string(
      i18n('entities.resident.fields.middleName'),
      {},
    ),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.resident.fields.phoneNumber'),
    schema: schemas.string(
      i18n('entities.resident.fields.phoneNumber'),
      {},
    ),
  },
  {
    name: 'email',
    label: i18n('entities.resident.fields.email'),
    schema: schemas.string(
      i18n('entities.resident.fields.email'),
      {},
    ),
  },
  {
    name: 'property',
    label: i18n('entities.resident.fields.property'),
    schema: schemas.relationToOne(
      i18n('entities.resident.fields.property'),
      {},
    ),
  },
  {
    name: 'user',
    label: i18n('entities.resident.fields.user'),
    schema: schemas.relationToOne(
      i18n('entities.resident.fields.user'),
      {},
    ),
  },
];
