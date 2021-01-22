import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/expense/importer/expenseImporterSelectors';
import ExpenseService from 'src/modules/expense/expenseService';
import fields from 'src/modules/expense/importer/expenseImporterFields';
import { i18n } from 'src/i18n';

const expenseImporterActions = importerActions(
  'EXPENSE_IMPORTER',
  selectors,
  ExpenseService.import,
  fields,
  i18n('entities.expense.importer.fileName'),
);

export default expenseImporterActions;