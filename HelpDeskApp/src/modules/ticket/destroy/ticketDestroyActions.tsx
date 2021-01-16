import listActions from 'src/modules/ticket/list/ticketListActions';
import TicketService from 'src/modules/ticket/ticketService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'TICKET_DESTROY';

const ticketDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: ticketDestroyActions.DESTROY_STARTED,
      });

      await TicketService.destroyAll([id]);

      dispatch({
        type: ticketDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.ticket.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/ticket');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: ticketDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: ticketDestroyActions.DESTROY_ALL_STARTED,
      });

      await TicketService.destroyAll(ids);

      dispatch({
        type: ticketDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.ticket.destroyAll.success'),
      );

      getHistory().push('/ticket');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: ticketDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default ticketDestroyActions;
