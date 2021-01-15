import list from 'src/modules/feedback/list/feedbackListReducers';
import form from 'src/modules/feedback/form/feedbackFormReducers';
import view from 'src/modules/feedback/view/feedbackViewReducers';
import destroy from 'src/modules/feedback/destroy/feedbackDestroyReducers';
import importerReducer from 'src/modules/feedback/importer/feedbackImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
