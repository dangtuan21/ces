import { createSelector } from 'reselect';

const selectRaw = (state) => state.announcement.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const announcementViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default announcementViewSelectors;
