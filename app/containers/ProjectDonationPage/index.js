import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ProjectDonationTable from '../../components/ProjectDonationTable';
import MyAppBar from '../../components/MyAppBar';
import DonationTable from '../../components/DonationTable';
import { makeSelectProjectDonations } from '../ProjectExplore/selectors';

export const ProjectDonationsPage = ({donations}) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <MyAppBar/>
      <DonationTable donations={donations} />
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
  donations: makeSelectProjectDonations()
});

const mapDispatchToProps = dispatch => {return {}};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProjectDonationsPage);
