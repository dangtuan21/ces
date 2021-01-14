import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import messageEnumerators from 'src/modules/message/messageEnumerators';

export default [
  {
    name: 'title',
    label: i18n('entities.message.fields.title'),
    schema: schemas.string(
      i18n('entities.message.fields.title'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.message.fields.description'),
    schema: schemas.string(
      i18n('entities.message.fields.description'),
      {},
    ),
  },
  {
    name: 'messageStatus',
    label: i18n('entities.message.fields.messageStatus'),
    schema: schemas.enumerator(
      i18n('entities.message.fields.messageStatus'),
      {
        "options": messageEnumerators.messageStatus
      },
    ),
  },
  {
    name: 'assignee',
    label: i18n('entities.message.fields.assignee'),
    schema: schemas.relationToOne(
      i18n('entities.message.fields.assignee'),
      {},
    ),
  },
];