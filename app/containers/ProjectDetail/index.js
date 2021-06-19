import React, { memo, useEffect } from 'react';
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
import { onAccept, onPageLoad } from './actions';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import { makeSelectProjectDetail } from './selectors';
import {
  formatDate,
  getColorFromStatusCode,
  getStatusFromStatusCode,
} from '../../utils/helpers';
import { LOCAL_STORAGE_PRIVATE_KEY } from '../../utils/constants';
import CreateDonation from './CreateDonation';

const key = 'projectDetail';

export const ProjectDetail = ({ onLoad, onAccept, match, project }) => {
  const classes = useStyle();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const isLogin = localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY)
    ? true
    : false;

  useEffect(() => {
    onLoad(match.params.id);
  }, []);

  return (
    <div className={classes.container}>
      <CreateDonation />
      <MyAppBar />
      <Grid container>
        <Grid container item xs={8} alignItems="flex-start">
          <Card className={classes.cardContainer}>
            <CardHeader
              title={project.name}
              classes={{
                title: classes.cardTitle,
                root: classes.headerRoot,
              }}
            />
            <CardContent style={{ padding: '0%' }}>
              <Information title="Description:" content={project.description} />
              <Information
                title="Start Date:"
                content={formatDate(new Date(project.startDate))}
                customColor="#bdbdbd"
              />
              <Information
                title="End Date:"
                content={formatDate(new Date(project.endDate))}
                customColor="#bdbdbd"
              />
              <Information title="Representative:" content="Tran Quang Thien" />
              <Information title="Address Key:" content="1712785" />
              <Information
                title="Status:"
                content={getStatusFromStatusCode(project.status)}
                customColor={getColorFromStatusCode(project.status)}
                isBold
              />
              <Information
                title="Approval Rate:"
                content="80%"
                customColor="#00e676"
                isBold
              />
              <Information
                title="Amount Donated:"
                content={project.amountDonated}
                markBlue
              />
              <Information title="Disbursed:" content="100000" markBlue />
            </CardContent>
          </Card>
        </Grid>
        <Grid container item xs={4} style={{ padding: '2% 2% 0% 2%' }} alignItems='flex-start'>
          {isLogin && (
            <>
              <MyCard
                title="Donate"
                content=""
                helper="donate to this project"
                color="#2196f3"
                icon={<SendIcon className={classes.icon} />}
              />

              <MyCard
                title="Accept"
                content=""
                helper="accept this project"
                color="#2196f3"
                icon={<ThumbUpAltIcon className={classes.icon} />}
                onClick={onAccept}
              />
            </>
          )}

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

const mapStateToProps = createStructuredSelector({
  project: makeSelectProjectDetail(),
});

const mapDispatchToProps = dispatch => {
  return {
    onLoad: address => dispatch(onPageLoad(address)),
    onAccept: () => dispatch(onAccept(dispatch))
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProjectDetail);
