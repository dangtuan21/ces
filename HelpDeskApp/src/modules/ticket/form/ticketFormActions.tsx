import TicketService from 'src/modules/ticket/ticketService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'TICKET_FORM';

const ticketFormActions = {
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
        type: ticketFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await TicketService.find(id);
      }

      dispatch({
        type: ticketFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: ticketFormActions.INIT_ERROR,
      });

      getHistory().push('/ticket');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: ticketFormActions.CREATE_STARTED,
      });

      await TicketService.create(values);

      dispatch({
        type: ticketFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.ticket.create.success'),
      );

      getHistory().push('/ticket');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: ticketFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ticketFormActions.UPDATE_STARTED,
      });

      await TicketService.update(id, values);

      dispatch({
        type: ticketFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.ticket.update.success'),
      );

      getHistory().push('/ticket');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: ticketFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default ticketFormActions;
