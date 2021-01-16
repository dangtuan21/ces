import ResidentService from 'src/modules/resident/residentService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'RESIDENT_FORM';

const residentFormActions = {
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
        type: residentFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ResidentService.find(id);
      }

      dispatch({
        type: residentFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: residentFormActions.INIT_ERROR,
      });

      getHistory().push('/resident');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: residentFormActions.CREATE_STARTED,
      });

      await ResidentService.create(values);

      dispatch({
        type: residentFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.resident.create.success'),
      );

      getHistory().push('/resident');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: residentFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: residentFormActions.UPDATE_STARTED,
      });

      await ResidentService.update(id, values);

      dispatch({
        type: residentFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.resident.update.success'),
      );

      getHistory().push('/resident');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: residentFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default residentFormActions;
