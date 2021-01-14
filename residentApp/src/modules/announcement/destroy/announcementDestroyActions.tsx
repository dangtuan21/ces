import listActions from 'src/modules/announcement/list/announcementListActions';
import AnnouncementService from 'src/modules/announcement/announcementService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ANNOUNCEMENT_DESTROY';

const announcementDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: announcementDestroyActions.DESTROY_STARTED,
      });

      await AnnouncementService.destroyAll([id]);

      dispatch({
        type: announcementDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.announcement.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/announcement');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: announcementDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: announcementDestroyActions.DESTROY_ALL_STARTED,
      });

      await AnnouncementService.destroyAll(ids);

      dispatch({
        type: announcementDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.announcement.destroyAll.success'),
      );

      getHistory().push('/announcement');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: announcementDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default announcementDestroyActions;
