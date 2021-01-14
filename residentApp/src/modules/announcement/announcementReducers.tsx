import list from 'src/modules/announcement/list/announcementListReducers';
import form from 'src/modules/announcement/form/announcementFormReducers';
import view from 'src/modules/announcement/view/announcementViewReducers';
import destroy from 'src/modules/announcement/destroy/announcementDestroyReducers';
import importerReducer from 'src/modules/announcement/importer/announcementImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
