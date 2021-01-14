import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/message/importer/messageImporterSelectors';
import MessageService from 'src/modules/message/messageService';
import fields from 'src/modules/message/importer/messageImporterFields';
import { i18n } from 'src/i18n';

const messageImporterActions = importerActions(
  'MESSAGE_IMPORTER',
  selectors,
  MessageService.import,
  fields,
  i18n('entities.message.importer.fileName'),
);

export default messageImporterActions;