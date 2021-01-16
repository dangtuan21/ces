import { createSelector } from 'reselect';

const selectRaw = (state) => state.resident.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const residentViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default residentViewSelectors;
