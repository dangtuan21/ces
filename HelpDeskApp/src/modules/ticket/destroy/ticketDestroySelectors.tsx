import { createSelector } from 'reselect';

const selectRaw = (state) => state.ticket.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const ticketDestroySelectors = {
  selectLoading,
};

export default ticketDestroySelectors;
