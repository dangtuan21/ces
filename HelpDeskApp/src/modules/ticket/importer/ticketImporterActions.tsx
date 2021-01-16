import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/ticket/importer/ticketImporterSelectors';
import TicketService from 'src/modules/ticket/ticketService';
import fields from 'src/modules/ticket/importer/ticketImporterFields';
import { i18n } from 'src/i18n';

const ticketImporterActions = importerActions(
  'TICKET_IMPORTER',
  selectors,
  TicketService.import,
  fields,
  i18n('entities.ticket.importer.fileName'),
);

export default ticketImporterActions;