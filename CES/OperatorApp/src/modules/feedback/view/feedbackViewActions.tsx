import FeedbackService from 'src/modules/feedback/feedbackService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'FEEDBACK_VIEW';

const feedbackViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: feedbackViewActions.FIND_STARTED,
      });

      const record = await FeedbackService.find(id);

      dispatch({
        type: feedbackViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: feedbackViewActions.FIND_ERROR,
      });

      getHistory().push('/feedback');
    }
  },
};

export default feedbackViewActions;
