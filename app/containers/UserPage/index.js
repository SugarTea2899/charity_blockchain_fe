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
  makeSelectAddAmountDialog,
  makeSelectAddress,
  makeSelectAmountDonated,
  makeSelectBalance,
  makeSelectCreateProject,
  makeSelectUserDonations,
  makeSelectUserProject,
} from './selectors';
import CreateProject from './CreateProject';
import {
  onCopyAddress,
  onCreateProjectDialog,
  onPageLoad,
  openAddAmountDialog,
} from './actions';
import { LOCAL_STORAGE_PRIVATE_KEY } from '../../utils/constants';
import history from '../../utils/history';
import AddAmount from './AddAmount';

const key = 'user';

export const UserPage = ({
  address,
  amountDonated,
  balance,
  userProjects,
  userDonations,
  createProjectDialog,
  addAmountDialog,
  onCreateProject,
  onLoad,
  onAddAmount,
  onCopy,
}) => {
  const classes = useStyle();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onLoad();
  }, []);

  const getProjectItems = () => {
    return userProjects
      .filter((item, index) => index < 5)
      .map((item, index) => <ProjectItem key={index} {...item.event} />);
  };

  const getDonationItems = () => {
    return userDonations
      .filter((item, index) => index < 5)
      .map((item, index) => <DonateItem key={index} {...item} />);
  };

  if (!localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY)) {
    history.push('/');
  }
  return (
    <div className={classes.container}>
      <MyAppBar />
      <CreateProject {...createProjectDialog} />
      <AddAmount {...addAmountDialog} />
      <Grid container spacing={2} style={{ padding: '2% 2% 0% 2%' }}>
        <Grid container item xs={4}>
          <MyCard
            title="Address"
            helper="Click to copy"
            content={address}
            color="#2962ff"
            icon={<ContactsIcon className={classes.icon} />}
            onClick={() => onCopy(address)}
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
            content={amountDonated}
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
            item={getDonationItems()}
            onClick={() => history.push('/user/donations')}
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
            onClick={onAddAmount}
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
  userDonations: makeSelectUserDonations(),
  addAmountDialog: makeSelectAddAmountDialog(),
  amountDonated: makeSelectAmountDonated(),
});

const mapDispatchToProps = dispatch => {
  return {
    onCreateProject: () => dispatch(onCreateProjectDialog(dispatch)),
    onLoad: () => dispatch(onPageLoad()),
    onAddAmount: () => dispatch(openAddAmountDialog(dispatch)),
    onCopy: address => dispatch(onCopyAddress(address, dispatch)),
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
