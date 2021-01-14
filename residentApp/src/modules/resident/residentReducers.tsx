import list from 'src/modules/resident/list/residentListReducers';
import form from 'src/modules/resident/form/residentFormReducers';
import view from 'src/modules/resident/view/residentViewReducers';
import destroy from 'src/modules/resident/destroy/residentDestroyReducers';
import importerReducer from 'src/modules/resident/importer/residentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
