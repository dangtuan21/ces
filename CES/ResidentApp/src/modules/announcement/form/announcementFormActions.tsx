import AnnouncementService from 'src/modules/announcement/announcementService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ANNOUNCEMENT_FORM';

const announcementFormActions = {
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
        type: announcementFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AnnouncementService.find(id);
      }

      dispatch({
        type: announcementFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: announcementFormActions.INIT_ERROR,
      });

      getHistory().push('/announcement');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: announcementFormActions.CREATE_STARTED,
      });

      await AnnouncementService.create(values);

      dispatch({
        type: announcementFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.announcement.create.success'),
      );

      getHistory().push('/announcement');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: announcementFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: announcementFormActions.UPDATE_STARTED,
      });

      await AnnouncementService.update(id, values);

      dispatch({
        type: announcementFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.announcement.update.success'),
      );

      getHistory().push('/announcement');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: announcementFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default announcementFormActions;
