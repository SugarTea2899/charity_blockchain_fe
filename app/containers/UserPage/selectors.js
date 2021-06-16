import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUser = state => state.user || initialState;

const makeSelectAddress = () =>
  createSelector(
    selectUser,
    userState => userState.address,
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

export { makeSelectAddress, makeSelectBalance, makeSelectCreateProject };