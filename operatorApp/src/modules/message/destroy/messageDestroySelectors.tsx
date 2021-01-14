import { createSelector } from 'reselect';

const selectRaw = (state) => state.message.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const messageDestroySelectors = {
  selectLoading,
};

export default messageDestroySelectors;
