import ExpenseService from 'src/modules/expense/expenseService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EXPENSE_VIEW';

const expenseViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: expenseViewActions.FIND_STARTED,
      });

      const record = await ExpenseService.find(id);

      dispatch({
        type: expenseViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: expenseViewActions.FIND_ERROR,
      });

      getHistory().push('/expense');
    }
  },
};

export default expenseViewActions;
