import list from 'src/modules/expense/list/expenseListReducers';
import form from 'src/modules/expense/form/expenseFormReducers';
import view from 'src/modules/expense/view/expenseViewReducers';
import destroy from 'src/modules/expense/destroy/expenseDestroyReducers';
import importerReducer from 'src/modules/expense/importer/expenseImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
