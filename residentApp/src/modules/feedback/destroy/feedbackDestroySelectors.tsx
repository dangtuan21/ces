import { createSelector } from 'reselect';

const selectRaw = (state) => state.feedback.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const feedbackDestroySelectors = {
  selectLoading,
};

export default feedbackDestroySelectors;
