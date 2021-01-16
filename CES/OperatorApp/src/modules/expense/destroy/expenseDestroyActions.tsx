import listActions from 'src/modules/expense/list/expenseListActions';
import ExpenseService from 'src/modules/expense/expenseService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'EXPENSE_DESTROY';

const expenseDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: expenseDestroyActions.DESTROY_STARTED,
      });

      await ExpenseService.destroyAll([id]);

      dispatch({
        type: expenseDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.expense.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/expense');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: expenseDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: expenseDestroyActions.DESTROY_ALL_STARTED,
      });

      await ExpenseService.destroyAll(ids);

      dispatch({
        type: expenseDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.expense.destroyAll.success'),
      );

      getHistory().push('/expense');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: expenseDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default expenseDestroyActions;
