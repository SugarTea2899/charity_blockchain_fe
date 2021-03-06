import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUser = state => state.user || initialState;

const makeSelectAddress = () =>
  createSelector(
    selectUser,
    userState => userState.address,
  );

const makeSelectAmountDonated = () =>
  createSelector(
    selectUser,
    userState => userState.amountDonated,
  );

const makeSelectBalance = () =>
  createSelector(
    selectUser,
    userState => userState.balance,
  );

const makeSelectCreateProject = () =>
  createSelector(
    selectUser,
    userState => userState.createProjectDialog,
  );

const makeSelectUserProject = () =>
  createSelector(
    selectUser,
    userState => userState.projects,
  );

const makeSelectUserDonations = () =>
  createSelector(
    selectUser,
    userState => userState.donations,
  );

const makeSelectAddAmountDialog = () =>
  createSelector(
    selectUser,
    userState => userState.addAmountDialog,
  );

export {
  makeSelectAddress,
  makeSelectBalance,
  makeSelectCreateProject,
  makeSelectUserProject,
  makeSelectAddAmountDialog,
  makeSelectUserDonations,
  makeSelectAmountDonated
};
