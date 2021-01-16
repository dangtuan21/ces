import listActions from 'src/modules/contact/list/contactListActions';
import ContactService from 'src/modules/contact/contactService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CONTACT_DESTROY';

const contactDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: contactDestroyActions.DESTROY_STARTED,
      });

      await ContactService.destroyAll([id]);

      dispatch({
        type: contactDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.contact.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/contact');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: contactDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: contactDestroyActions.DESTROY_ALL_STARTED,
      });

      await ContactService.destroyAll(ids);

      dispatch({
        type: contactDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.contact.destroyAll.success'),
      );

      getHistory().push('/contact');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: contactDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default contactDestroyActions;
