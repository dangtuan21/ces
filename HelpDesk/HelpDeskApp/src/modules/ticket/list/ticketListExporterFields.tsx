import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.ticket.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.ticket.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.ticket.fields.description'),
  },
  {
    name: 'attachment',
    label: i18n('entities.ticket.fields.attachment'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'category',
    label: i18n('entities.ticket.fields.category'),
  },
  {
    name: 'comment',
    label: i18n('entities.ticket.fields.comment'),
  },
  {
    name: 'tag',
    label: i18n('entities.ticket.fields.tag'),
  },
  {
    name: 'ticketType',
    label: i18n('entities.ticket.fields.ticketType'),
  },
  {
    name: 'ticketStatus',
    label: i18n('entities.ticket.fields.ticketStatus'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.ticket.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.ticket.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
