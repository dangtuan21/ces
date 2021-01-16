import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/contact/importer/contactImporterSelectors';
import ContactService from 'src/modules/contact/contactService';
import fields from 'src/modules/contact/importer/contactImporterFields';
import { i18n } from 'src/i18n';

const contactImporterActions = importerActions(
  'CONTACT_IMPORTER',
  selectors,
  ContactService.import,
  fields,
  i18n('entities.contact.importer.fileName'),
);

export default contactImporterActions;