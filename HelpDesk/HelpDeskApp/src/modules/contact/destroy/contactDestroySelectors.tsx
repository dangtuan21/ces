import { createSelector } from 'reselect';

const selectRaw = (state) => state.contact.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const contactDestroySelectors = {
  selectLoading,
};

export default contactDestroySelectors;
