import MaintenanceRequestService from 'src/modules/maintenanceRequest/maintenanceRequestService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MAINTENANCEREQUEST_VIEW';

const maintenanceRequestViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: maintenanceRequestViewActions.FIND_STARTED,
      });

      const record = await MaintenanceRequestService.find(id);

      dispatch({
        type: maintenanceRequestViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: maintenanceRequestViewActions.FIND_ERROR,
      });

      getHistory().push('/maintenance-request');
    }
  },
};

export default maintenanceRequestViewActions;
