import React, { memo } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MyAppBar from '../../components/MyAppBar';
import ContactsIcon from '@material-ui/icons/Contacts';
import PaymentIcon from '@material-ui/icons/Payment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SendIcon from '@material-ui/icons/Send';
import Card from './Card';
import MyList from '../../components/MyList';
import DonateItem from '../../components/DonateItem';
import ProjectItem from '../../components/ProjectItem';

export const UserPage = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <MyAppBar />
      <Grid container spacing={2} style={{ padding: '2% 2% 0% 2%' }}>
        <Grid container item xs={4}>
          <Card
            title="Address"
            helper="Click to copy"
            content={'xxxxxxxxxxxx'}
            color="#2962ff"
            icon={<ContactsIcon className={classes.icon} />}
          />
        </Grid>
        <Grid container item xs={4}>
          <Card
            title="Balance"
            content={99}
            color="#1e88e5"
            icon={<AccountBalanceWalletIcon className={classes.icon} />}
          />
        </Grid>
        <Grid container item xs={4}>
          <Card
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
          <Card
            color="#4db6ac"
            title="Deposit"
            content=""
            helper="deposit money into your account"
            icon={<PaymentIcon className={classes.icon} />}
          />
          <Card
            color="#00897b"
            title="Donation"
            content=""
            helper="donate to charity projects"
            icon={<SendIcon className={classes.icon} />}
          />
          <Card
            color="#004d40"
            title="Charity Project"
            content=""
            helper="click to create charity project"
            icon={<PaymentIcon className={classes.icon} />}
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

const mapStateToProps = createStructuredSelector({});

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
)(UserPage);