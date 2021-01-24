import { createSelector } from 'reselect';

const selectRaw = (state) => state.resident.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const residentDestroySelectors = {
  selectLoading,
};

export default residentDestroySelectors;
