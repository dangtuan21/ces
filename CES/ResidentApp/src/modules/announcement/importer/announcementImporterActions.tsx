import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/announcement/importer/announcementImporterSelectors';
import AnnouncementService from 'src/modules/announcement/announcementService';
import fields from 'src/modules/announcement/importer/announcementImporterFields';
import { i18n } from 'src/i18n';

const announcementImporterActions = importerActions(
  'ANNOUNCEMENT_IMPORTER',
  selectors,
  AnnouncementService.import,
  fields,
  i18n('entities.announcement.importer.fileName'),
);

export default announcementImporterActions;