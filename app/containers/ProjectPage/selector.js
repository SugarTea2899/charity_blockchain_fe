import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProjects = state => state.projects || initialState;

const makeSelectProjectsList = () =>
  createSelector(
    selectProjects,
    projects => projects.list,
  );

export { makeSelectProjectsList };
