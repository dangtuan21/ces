import AnnouncementService from 'src/modules/announcement/announcementService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ANNOUNCEMENT_VIEW';

const announcementViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: announcementViewActions.FIND_STARTED,
      });

      const record = await AnnouncementService.find(id);

      dispatch({
        type: announcementViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: announcementViewActions.FIND_ERROR,
      });

      getHistory().push('/announcement');
    }
  },
};

export default announcementViewActions;
