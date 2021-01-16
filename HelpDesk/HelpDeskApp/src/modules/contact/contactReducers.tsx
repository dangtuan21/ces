import list from 'src/modules/contact/list/contactListReducers';
import form from 'src/modules/contact/form/contactFormReducers';
import view from 'src/modules/contact/view/contactViewReducers';
import destroy from 'src/modules/contact/destroy/contactDestroyReducers';
import importerReducer from 'src/modules/contact/importer/contactImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
