import listActions from 'src/modules/resident/list/residentListActions';
import ResidentService from 'src/modules/resident/residentService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'RESIDENT_DESTROY';

const residentDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: residentDestroyActions.DESTROY_STARTED,
      });

      await ResidentService.destroyAll([id]);

      dispatch({
        type: residentDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.resident.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/resident');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: residentDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: residentDestroyActions.DESTROY_ALL_STARTED,
      });

      await ResidentService.destroyAll(ids);

      dispatch({
        type: residentDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.resident.destroyAll.success'),
      );

      getHistory().push('/resident');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: residentDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default residentDestroyActions;
