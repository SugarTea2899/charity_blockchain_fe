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

const makeSelectTotalDisbursement = () =>
  createSelector(
    selectProjectDetail,
    projectDetail => projectDetail.totalDisbursement,
  );

const makeSelectIsAccepted = () =>
  createSelector(
    selectProjectDetail,
    projectDetail => projectDetail.isAccepted,
  );

const makeSelectDonationDialog = () =>
  createSelector(
    selectProjectDetail,
    projectDetail => projectDetail.donationDialog,
  );

const makeSelectEndDialog = () =>
  createSelector(
    selectProjectDetail,
    projectDetail => projectDetail.endDialog,
  );
export {
  makeSelectProjectDetail,
  makeSelectPercentAccepted,
  makeSelectIsAccepted,
  makeSelectDonationDialog,
  makeSelectEndDialog,
  makeSelectTotalDisbursement
};
