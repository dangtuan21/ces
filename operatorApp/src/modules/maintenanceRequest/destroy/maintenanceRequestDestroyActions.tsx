import listActions from 'src/modules/maintenanceRequest/list/maintenanceRequestListActions';
import MaintenanceRequestService from 'src/modules/maintenanceRequest/maintenanceRequestService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MAINTENANCEREQUEST_DESTROY';

const maintenanceRequestDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: maintenanceRequestDestroyActions.DESTROY_STARTED,
      });

      await MaintenanceRequestService.destroyAll([id]);

      dispatch({
        type: maintenanceRequestDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.maintenanceRequest.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/maintenance-request');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: maintenanceRequestDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: maintenanceRequestDestroyActions.DESTROY_ALL_STARTED,
      });

      await MaintenanceRequestService.destroyAll(ids);

      dispatch({
        type: maintenanceRequestDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.maintenanceRequest.destroyAll.success'),
      );

      getHistory().push('/maintenance-request');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: maintenanceRequestDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default maintenanceRequestDestroyActions;
