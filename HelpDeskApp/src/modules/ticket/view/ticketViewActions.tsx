import TicketService from 'src/modules/ticket/ticketService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TICKET_VIEW';

const ticketViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: ticketViewActions.FIND_STARTED,
      });

      const record = await TicketService.find(id);

      dispatch({
        type: ticketViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: ticketViewActions.FIND_ERROR,
      });

      getHistory().push('/ticket');
    }
  },
};

export default ticketViewActions;
