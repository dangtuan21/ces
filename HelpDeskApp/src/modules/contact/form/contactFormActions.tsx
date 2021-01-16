import ContactService from 'src/modules/contact/contactService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CONTACT_FORM';

const contactFormActions = {
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
        type: contactFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ContactService.find(id);
      }

      dispatch({
        type: contactFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: contactFormActions.INIT_ERROR,
      });

      getHistory().push('/contact');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: contactFormActions.CREATE_STARTED,
      });

      await ContactService.create(values);

      dispatch({
        type: contactFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.contact.create.success'),
      );

      getHistory().push('/contact');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: contactFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: contactFormActions.UPDATE_STARTED,
      });

      await ContactService.update(id, values);

      dispatch({
        type: contactFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.contact.update.success'),
      );

      getHistory().push('/contact');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: contactFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default contactFormActions;
