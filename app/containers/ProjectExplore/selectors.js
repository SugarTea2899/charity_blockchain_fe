import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProjectExplore = state => state.projectExplore || initialState;

const makeSelectProjectDonations = () =>
  createSelector(
    selectProjectExplore,
    projectExplore => projectExplore.donations,
  );

export { makeSelectProjectDonations };
