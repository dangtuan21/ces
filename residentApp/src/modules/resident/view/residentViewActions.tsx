import ResidentService from 'src/modules/resident/residentService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RESIDENT_VIEW';

const residentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: residentViewActions.FIND_STARTED,
      });

      const record = await ResidentService.find(id);

      dispatch({
        type: residentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: residentViewActions.FIND_ERROR,
      });

      getHistory().push('/resident');
    }
  },
};

export default residentViewActions;
