import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import contactEnumerators from 'src/modules/contact/contactEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.contact.fields.name'),
    schema: schemas.string(
      i18n('entities.contact.fields.name'),
      {
        "required": true,
        "min": 2,
        "max": 255
      },
    ),
  },
  {
    name: 'birthdate',
    label: i18n('entities.contact.fields.birthdate'),
    schema: schemas.date(
      i18n('entities.contact.fields.birthdate'),
      {},
    ),
  },
  {
    name: 'gender',
    label: i18n('entities.contact.fields.gender'),
    schema: schemas.enumerator(
      i18n('entities.contact.fields.gender'),
      {
        "options": contactEnumerators.gender
      },
    ),
  },
  {
    name: 'title',
    label: i18n('entities.contact.fields.title'),
    schema: schemas.string(
      i18n('entities.contact.fields.title'),
      {},
    ),
  },
  {
    name: 'company',
    label: i18n('entities.contact.fields.company'),
    schema: schemas.string(
      i18n('entities.contact.fields.company'),
      {},
    ),
  },
  {
    name: 'email',
    label: i18n('entities.contact.fields.email'),
    schema: schemas.string(
      i18n('entities.contact.fields.email'),
      {},
    ),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.contact.fields.phoneNumber'),
    schema: schemas.string(
      i18n('entities.contact.fields.phoneNumber'),
      {},
    ),
  },
];