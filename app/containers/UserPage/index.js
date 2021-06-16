import React, { memo } from 'react';
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
import { makeSelectAddress, makeSelectBalance, makeSelectCreateProject } from './selectors';
import CreateProject from './CreateProject';
import { onCreateProjectDialog } from './actions';

const key = 'user';

export const UserPage = ({address, balance, createProjectDialog, onCreateProject}) => {
  const classes = useStyle();
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

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
            item={[
              <ProjectItem />,
              <ProjectItem />,
              <ProjectItem />,
              <ProjectItem />,
              <ProjectItem />,
            ]}
            onClick={() => {}}
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
          <MyCard
            color="#004d40"
            title="Disbursement Request"
            content=""
            helper="5 requests waiting for your approve"
            icon={<NotificationsIcon className={classes.icon} />}
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
});

const mapDispatchToProps = dispatch => {
  return {
    onCreateProject: () => dispatch(onCreateProjectDialog(dispatch))
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
