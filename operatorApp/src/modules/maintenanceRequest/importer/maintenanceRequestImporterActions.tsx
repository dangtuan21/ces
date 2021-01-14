import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/maintenanceRequest/importer/maintenanceRequestImporterSelectors';
import MaintenanceRequestService from 'src/modules/maintenanceRequest/maintenanceRequestService';
import fields from 'src/modules/maintenanceRequest/importer/maintenanceRequestImporterFields';
import { i18n } from 'src/i18n';

const maintenanceRequestImporterActions = importerActions(
  'MAINTENANCEREQUEST_IMPORTER',
  selectors,
  MaintenanceRequestService.import,
  fields,
  i18n('entities.maintenanceRequest.importer.fileName'),
);

export default maintenanceRequestImporterActions;