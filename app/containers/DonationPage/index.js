import React, { memo, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DonationTable from '../../components/DonationTable';
import MyAppBar from '../../components/MyAppBar';
import { ON_PAGE_LOAD } from './constants';
import { makeSelectDonations } from './selectors';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import { onPageLoad } from './actions';

const key = 'donations';

export const DonationPage = ({ onLoad, donations }) => {
  const classes = useStyle();

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onLoad();
  }, []);


  return (
    <div className={classes.container}>
      <MyAppBar />
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
  donations: makeSelectDonations()
});

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(onPageLoad()),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DonationPage);
