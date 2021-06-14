import React, { memo } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ScrollableTabsButtonAuto from './TabSection';
import MyAppBar from '../../components/MyAppBar';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';

const key = 'home';

export const HomePage = () => {
  const classes = useStyle();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div className={classes.container}>
      <MyAppBar />
      <Grid container>
        <Grid container item xs={4} />
        <Grid container item xs={4} justify="center">
          <img className={classes.logo} src="/logo.png" />
        </Grid>
        <Grid container item xs={4} />
      </Grid>
      <Grid container>
        <Grid container item xs={4} />
        <Grid container item xs={4}>
          <ScrollableTabsButtonAuto />
        </Grid>
        <Grid container item xs={4} />
      </Grid>
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
)(HomePage);
