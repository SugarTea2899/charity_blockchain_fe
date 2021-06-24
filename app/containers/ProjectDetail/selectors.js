import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProjectDetail = state => state.projectDetail || initialState;

const makeSelectProjectDetail = () =>
  createSelector(
    selectProjectDetail,
    projectDetail => projectDetail.projectDetail,
  );

const makeSelectPercentAccepted = () =>
  createSelector(
    selectProjectDetail,
    projectDetail => projectDetail.percentAccepted,
  );

const makeSelectIsAccepted = () =>
  createSelector(
    selectProjectDetail,
    projectDetail => projectDetail.isAccepted,
  );

export {
  makeSelectProjectDetail,
  makeSelectPercentAccepted,
  makeSelectIsAccepted,
};
