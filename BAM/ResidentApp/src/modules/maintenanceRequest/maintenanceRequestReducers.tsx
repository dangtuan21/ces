import list from 'src/modules/maintenanceRequest/list/maintenanceRequestListReducers';
import form from 'src/modules/maintenanceRequest/form/maintenanceRequestFormReducers';
import view from 'src/modules/maintenanceRequest/view/maintenanceRequestViewReducers';
import destroy from 'src/modules/maintenanceRequest/destroy/maintenanceRequestDestroyReducers';
import importerReducer from 'src/modules/maintenanceRequest/importer/maintenanceRequestImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
