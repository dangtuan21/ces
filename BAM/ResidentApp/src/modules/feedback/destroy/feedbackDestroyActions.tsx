import listActions from 'src/modules/feedback/list/feedbackListActions';
import FeedbackService from 'src/modules/feedback/feedbackService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'FEEDBACK_DESTROY';

const feedbackDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: feedbackDestroyActions.DESTROY_STARTED,
      });

      await FeedbackService.destroyAll([id]);

      dispatch({
        type: feedbackDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.feedback.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/feedback');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: feedbackDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: feedbackDestroyActions.DESTROY_ALL_STARTED,
      });

      await FeedbackService.destroyAll(ids);

      dispatch({
        type: feedbackDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.feedback.destroyAll.success'),
      );

      getHistory().push('/feedback');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: feedbackDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default feedbackDestroyActions;
