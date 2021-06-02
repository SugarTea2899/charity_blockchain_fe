import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import GlobalStyle from '../../global-styles';
import { makeStyles } from '@material-ui/core';
import { connect, useSelector } from 'react-redux';
import LoadingIndicator from '../../components/LoadingIndicator';
import Alert from '../../components/Alert';
import ConfirmAlert from '../../components/ConfirmAlert';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeSelectAlert, makeSelectConfirmAlert } from './selectors';

export function App({ alert, confirmAlert }) {
  const classes = useStyles();
  const globalState = useSelector(state => state.global);

  return (
    <div className={classes.container}>
      {globalState.loading && <LoadingIndicator />}
      <Alert {...alert} />
      <ConfirmAlert {...confirmAlert} />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
  },
});

const mapStateToProps = createStructuredSelector({
  alert: makeSelectAlert(),
  confirmAlert: makeSelectConfirmAlert(),
});

const withConnect = connect(
  mapStateToProps,
  undefined,
);

export default compose(
  withConnect,
  memo,
)(App);
