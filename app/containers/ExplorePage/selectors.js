import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectExplore = state => state.explore || initialState;

const makeSelectExploreProjects = () =>
  createSelector(
    selectExplore,
    explore => explore.projects,
  );

const makeSelectExploreDonations = () =>
  createSelector(
    selectExplore,
    explore => explore.donations,
  );

export { makeSelectExploreProjects, makeSelectExploreDonations };
