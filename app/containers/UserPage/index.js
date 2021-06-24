import React, { memo, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MyAppBar from '../../components/MyAppBar';
import ContactsIcon from '@material-ui/icons/Contacts';
import PaymentIcon from '@material-ui/icons/Payment';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MyCard from './MyCard';
import MyList from '../../components/MyList';
import DonateItem from '../../components/DonateItem';
import ProjectItem from '../../components/ProjectItem';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import {
  makeSelectAddress,
  makeSelectBalance,
  makeSelectCreateProject,
  makeSelectUserProject,
} from './selectors';
import CreateProject from './CreateProject';
import { onCreateProjectDialog, onPageLoad } from './actions';
import { LOCAL_STORAGE_PRIVATE_KEY } from '../../utils/constants';
import history from '../../utils/history';

const key = 'user';

export const UserPage = ({
  address,
  balance,
  userProjects,
  createProjectDialog,
  onCreateProject,
  onLoad,
}) => {
  const classes = useStyle();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onLoad();
  }, []);

  const getProjectItems = () => {
    return userProjects.map((item, index) => <ProjectItem key={index} {...item.event} />)
  }

  if (!localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY)) {
    history.push('/')
  }
  return (
    <div className={classes.container}>
      <MyAppBar />
      <CreateProject {...createProjectDialog} />
      <Grid container spacing={2} style={{ padding: '2% 2% 0% 2%' }}>
        <Grid container item xs={4}>
          <MyCard
            title="Address"
            helper="Click to copy"
            content={address}
            color="#2962ff"
            icon={<ContactsIcon className={classes.icon} />}
          />
        </Grid>
        <Grid container item xs={4}>
          <MyCard
            title="Balance"
            content={balance}
            color="#1e88e5"
            icon={<AccountBalanceWalletIcon className={classes.icon} />}
          />
        </Grid>
        <Grid container item xs={4}>
          <MyCard
            title="Amount Donated"
            content="500000"
            color="#303f9f"
            icon={<MonetizationOnIcon className={classes.icon} />}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{ padding: '0% 2% 2% 2%' }}
        alignItems="flex-start"
      >
        <Grid container item xs={4}>
          <MyList
            title="Your donations"
            item={[
              <DonateItem />,
              <DonateItem />,
              <DonateItem />,
              <DonateItem />,
              <DonateItem />,
            ]}
            onClick={() => {}}
          />
        </Grid>
        <Grid container item xs={4}>
          <MyList
            title="Your projects"
            item={getProjectItems()}
            onClick={() => history.push('/user/projects')}
          />
        </Grid>
        <Grid container item xs={4} alignItems="flex-start" direction="column">
          <MyCard
            color="#4db6ac"
            title="Deposit"
            content=""
            helper="deposit money into your account"
            icon={<PaymentIcon className={classes.icon} />}
          />
          <MyCard
            color="#00897b"
            title="Charity Project"
            content=""
            helper="click to create charity project"
            icon={<AddBoxIcon className={classes.icon} />}
            onClick={onCreateProject}
          />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyle = makeStyles({
  container: {
    height: '100%',
    width: '100%',
  },
  icon: {
    width: '100%',
    fontSize: '4rem',
    color: 'white',
  },
});

const mapStateToProps = createStructuredSelector({
  address: makeSelectAddress(),
  balance: makeSelectBalance(),
  createProjectDialog: makeSelectCreateProject(),
  userProjects: makeSelectUserProject(),
});

const mapDispatchToProps = dispatch => {
  return {
    onCreateProject: () => dispatch(onCreateProjectDialog(dispatch)),
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
)(UserPage);
