import ExpenseService from 'src/modules/expense/expenseService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'EXPENSE_FORM';

const expenseFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: expenseFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ExpenseService.find(id);
      }

      dispatch({
        type: expenseFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: expenseFormActions.INIT_ERROR,
      });

      getHistory().push('/expense');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: expenseFormActions.CREATE_STARTED,
      });

      await ExpenseService.create(values);

      dispatch({
        type: expenseFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.expense.create.success'),
      );

      getHistory().push('/expense');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: expenseFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: expenseFormActions.UPDATE_STARTED,
      });

      await ExpenseService.update(id, values);

      dispatch({
        type: expenseFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.expense.update.success'),
      );

      getHistory().push('/expense');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: expenseFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default expenseFormActions;
