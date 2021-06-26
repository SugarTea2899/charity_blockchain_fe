import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDonations = state => state.donations || initialState;

const makeSelectDonations = () =>
  createSelector(
    selectDonations,
    donations => donations.list,
  );
export { makeSelectDonations };
