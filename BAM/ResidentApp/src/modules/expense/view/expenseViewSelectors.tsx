import { createSelector } from 'reselect';

const selectRaw = (state) => state.expense.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const expenseViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default expenseViewSelectors;
