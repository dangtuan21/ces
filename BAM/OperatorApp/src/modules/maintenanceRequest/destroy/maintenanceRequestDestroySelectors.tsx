import { createSelector } from 'reselect';

const selectRaw = (state) => state.maintenanceRequest.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const maintenanceRequestDestroySelectors = {
  selectLoading,
};

export default maintenanceRequestDestroySelectors;
