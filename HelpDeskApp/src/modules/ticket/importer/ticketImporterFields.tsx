import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import ticketEnumerators from 'src/modules/ticket/ticketEnumerators';

export default [
  {
    name: 'title',
    label: i18n('entities.ticket.fields.title'),
    schema: schemas.string(
      i18n('entities.ticket.fields.title'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.ticket.fields.description'),
    schema: schemas.string(
      i18n('entities.ticket.fields.description'),
      {},
    ),
  },
  {
    name: 'attachment',
    label: i18n('entities.ticket.fields.attachment'),
    schema: schemas.files(
      i18n('entities.ticket.fields.attachment'),
      {},
    ),
  },
  {
    name: 'category',
    label: i18n('entities.ticket.fields.category'),
    schema: schemas.enumerator(
      i18n('entities.ticket.fields.category'),
      {
        "options": ticketEnumerators.category
      },
    ),
  },
  {
    name: 'comment',
    label: i18n('entities.ticket.fields.comment'),
    schema: schemas.string(
      i18n('entities.ticket.fields.comment'),
      {},
    ),
  },
  {
    name: 'tag',
    label: i18n('entities.ticket.fields.tag'),
    schema: schemas.string(
      i18n('entities.ticket.fields.tag'),
      {},
    ),
  },
  {
    name: 'ticketType',
    label: i18n('entities.ticket.fields.ticketType'),
    schema: schemas.enumerator(
      i18n('entities.ticket.fields.ticketType'),
      {
        "options": ticketEnumerators.ticketType
      },
    ),
  },
  {
    name: 'ticketStatus',
    label: i18n('entities.ticket.fields.ticketStatus'),
    schema: schemas.enumerator(
      i18n('entities.ticket.fields.ticketStatus'),
      {
        "options": ticketEnumerators.ticketStatus
      },
    ),
  },
];