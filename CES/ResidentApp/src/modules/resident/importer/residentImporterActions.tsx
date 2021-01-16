import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/resident/importer/residentImporterSelectors';
import ResidentService from 'src/modules/resident/residentService';
import fields from 'src/modules/resident/importer/residentImporterFields';
import { i18n } from 'src/i18n';

const residentImporterActions = importerActions(
  'RESIDENT_IMPORTER',
  selectors,
  ResidentService.import,
  fields,
  i18n('entities.resident.importer.fileName'),
);

export default residentImporterActions;