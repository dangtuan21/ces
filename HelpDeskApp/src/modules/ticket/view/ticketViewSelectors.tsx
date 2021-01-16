import { createSelector } from 'reselect';

const selectRaw = (state) => state.ticket.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const ticketViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default ticketViewSelectors;
