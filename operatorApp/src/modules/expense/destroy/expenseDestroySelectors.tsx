import { createSelector } from 'reselect';

const selectRaw = (state) => state.expense.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const expenseDestroySelectors = {
  selectLoading,
};

export default expenseDestroySelectors;
