import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import UserDonationTable from '../../components/UserDonationTable';
import MyAppBar from '../../components/MyAppBar';
import { makeSelectUserDonations } from '../UserPage/selectors';
import DonationTable from '../../components/DonationTable';

export const UserDonationPage = ({ donations }) => {
  const classes = useStyle();

  const formatDonations = () =>
    donations.map(donation => ({ ...donation, name: donation.nameEvent }));
  return (
    <div className={classes.container}>
      <MyAppBar />
      <DonationTable donations={formatDonations()} hideFromColumn />
    </div>
  );
};

const useStyle = makeStyles({
  container: {
    height: '100%',
    width: '100%',
  },
  logo: {
    width: '45%',
    padding: '5% 0% 8% 0%',
  },
});

const mapStateToProps = createStructuredSelector({
  donations: makeSelectUserDonations(),
});

const mapDispatchToProps = dispatch => {
  return {};
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(UserDonationPage);
