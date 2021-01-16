import list from 'src/modules/ticket/list/ticketListReducers';
import form from 'src/modules/ticket/form/ticketFormReducers';
import view from 'src/modules/ticket/view/ticketViewReducers';
import destroy from 'src/modules/ticket/destroy/ticketDestroyReducers';
import importerReducer from 'src/modules/ticket/importer/ticketImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
