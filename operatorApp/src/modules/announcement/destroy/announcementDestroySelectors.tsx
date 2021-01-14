import { createSelector } from 'reselect';

const selectRaw = (state) => state.announcement.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const announcementDestroySelectors = {
  selectLoading,
};

export default announcementDestroySelectors;
