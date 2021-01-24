import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.announcement.fields.title'),
    schema: schemas.string(
      i18n('entities.announcement.fields.title'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.announcement.fields.description'),
    schema: schemas.string(
      i18n('entities.announcement.fields.description'),
      {},
    ),
  },
];