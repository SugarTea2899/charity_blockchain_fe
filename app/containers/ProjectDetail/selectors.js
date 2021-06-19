import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProjectDetail = state => state.projectDetail || initialState;

const makeSelectProjectDetail = () =>
  createSelector(
    selectProjectDetail,
    projectDetail => projectDetail.projectDetail,
  );

  
export {
  makeSelectProjectDetail
};
