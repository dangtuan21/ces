import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import maintenanceRequestEnumerators from 'src/modules/maintenanceRequest/maintenanceRequestEnumerators';

export default [
  {
    name: 'title',
    label: i18n('entities.maintenanceRequest.fields.title'),
    schema: schemas.string(
      i18n('entities.maintenanceRequest.fields.title'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.maintenanceRequest.fields.description'),
    schema: schemas.string(
      i18n('entities.maintenanceRequest.fields.description'),
      {},
    ),
  },
  {
    name: 'attachment',
    label: i18n('entities.maintenanceRequest.fields.attachment'),
    schema: schemas.files(
      i18n('entities.maintenanceRequest.fields.attachment'),
      {},
    ),
  },
  {
    name: 'category',
    label: i18n('entities.maintenanceRequest.fields.category'),
    schema: schemas.enumerator(
      i18n('entities.maintenanceRequest.fields.category'),
      {
        "options": maintenanceRequestEnumerators.category
      },
    ),
  },
];