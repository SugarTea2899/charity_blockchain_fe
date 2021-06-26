import React, { memo, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import { makeStyles } from '@material-ui/core';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import GlobalStyle from '../../global-styles';
import LoadingIndicator from '../../components/LoadingIndicator';
import Alert from '../../components/Alert';
import ConfirmAlert from '../../components/ConfirmAlert';
import { makeSelectAlert, makeSelectConfirmAlert } from './selectors';
import UserPage from '../UserPage';
import ExplorePage from '../ExplorePage';
import ProjectDetail from '../ProjectDetail';
import ProjectExplore from '../ProjectExplore';
import ProjectPage  from '../ProjectPage';
import DonationPage from '../DonationPage';
import UserProjectPage from '../UserProjectPage';
import UserDonationPage from '../UserDonationPage';
import ProjectDonationsPage from '../ProjectDonationPage';
import ProjectDisbursementPage from '../ProjectDisbursementPage';
import socket from '../../utils/socketClient';

export function App({ alert, confirmAlert }) {
  const classes = useStyles();
  const globalState = useSelector(state => state.global);

  useEffect(() => {
    socket.on('message', (message) => {
      console.log(message.type, '--------------------------------------------------------------');
    });

    return () => {
      socket.off('message');
    }
  }, [])
  return (
    <div className={classes.container}>
      {globalState.loading && <LoadingIndicator />}
      <Alert {...alert} />
      <ConfirmAlert {...confirmAlert} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/user/projects" component={UserProjectPage} />
        <Route path="/user/donations" component={UserDonationPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/projects/:id/disbursements" component={ProjectDisbursementPage} />
        <Route path="/projects/:id/donations" component={ProjectDonationsPage} />
        <Route path="/projects/:id/history" component={ProjectExplore} />
        <Route path="/projects/:id" component={ProjectDetail} />
        <Route path="/projects" component={ProjectPage} />
        <Route path="/donations" component={DonationPage} />
        
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
