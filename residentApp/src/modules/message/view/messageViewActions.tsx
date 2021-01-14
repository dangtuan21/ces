import MessageService from 'src/modules/message/messageService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MESSAGE_VIEW';

const messageViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: messageViewActions.FIND_STARTED,
      });

      const record = await MessageService.find(id);

      dispatch({
        type: messageViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: messageViewActions.FIND_ERROR,
      });

      getHistory().push('/message');
    }
  },
};

export default messageViewActions;
