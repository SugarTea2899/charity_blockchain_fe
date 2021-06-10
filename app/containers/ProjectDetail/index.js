import React, { memo } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MyAppBar from '../../components/MyAppBar';
import Information from '../../components/Infomation';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import SendIcon from '@material-ui/icons/Send';
import HistoryIcon from '@material-ui/icons/History';
import PaymentIcon from '@material-ui/icons/Payment';
import MyCard from '../UserPage/MyCard';

export const ProjectDetail = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <MyAppBar />
      <Grid container>
        <Grid container item xs={8} alignItems="flex-start">
          <Card className={classes.cardContainer}>
            <CardHeader
              title="Từ Thiện Miền Nam"
              classes={{
                title: classes.cardTitle,
                root: classes.headerRoot,
              }}
            />
            <CardContent style={{ padding: '0%' }}>
              <Information title="ID:" content="1234" markBlue />
              <Information
                title="Description:"
                content="Cuu tro dong bao lu lut tinh XYZ"
              />
              <Information
                title="Start Date:"
                content="01-01-2021"
                customColor="#bdbdbd"
              />
              <Information
                title="End Date:"
                content="01-01-2022"
                customColor="#bdbdbd"
              />
              <Information title="Representative:" content="Tran Quang Thien" />
              <Information title="Address Key:" content="1712785" />
              <Information
                title="Status:"
                content="Waiting"
                customColor="red"
                isBold
              />
              <Information
                title="Approval Rate:"
                content="80%"
                customColor="#00e676"
                isBold
              />
              <Information title="Amount Donated:" content="100000" markBlue />
              <Information title="Disbursed:" content="100000" markBlue />
            </CardContent>
          </Card>
        </Grid>
        <Grid container item xs={4} style={{ padding: '2% 2% 0% 2%' }}>
          <MyCard
            title="Accept"
            content=""
            helper="accept this project"
            color="#2196f3"
            icon={<ThumbUpAltIcon className={classes.icon} />}
          />
          <MyCard
            title="Donate"
            content=""
            helper="donate to this project"
            color="#2196f3"
            icon={<SendIcon className={classes.icon} />}
          />
          <MyCard
            title="History"
            content=""
            helper="All transactions related to this project"
            color="#1976d2"
            icon={<HistoryIcon className={classes.icon} />}
          />
          <MyCard
            title="Disburse"
            content=""
            helper="send disburse for all users donated"
            color="#1565c0"
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
  projectName: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: '3%',
    marginTop: '1%',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    fontStyle: 'italic',
  },
  headerRoot: {
    borderBottom: '1px #e0e0e0 solid',
  },
  cardContainer: {
    marginTop: '3%',
    marginLeft: '3%',
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
)(ProjectDetail);
