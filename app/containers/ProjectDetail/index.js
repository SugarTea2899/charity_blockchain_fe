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
import { onAccept, onEndProject, onPageLoad, openDonationDialog } from './actions';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import {
  makeSelectDonationDialog,
  makeSelectEndDialog,
  makeSelectIsAccepted,
  makeSelectPercentAccepted,
  makeSelectProjectDetail,
  makeSelectTotalDisbursement,
} from './selectors';
import {
  formatDate,
  getColorFromStatusCode,
  getStatusFromStatusCode,
  hideCharacter,
} from '../../utils/helpers';
import { LOCAL_STORAGE_PRIVATE_KEY } from '../../utils/constants';
import CreateDonation from './CreateDonation';
import { makeSelectAddress } from '../UserPage/selectors';
import history from '../../utils/history';
import CreateDisbursement from './CreateDisbursement';
import { ColorButton } from '../../components/ColorButton';
import EndProjectDialog from './endProjectDialog';

const key = 'projectDetail';

export const ProjectDetail = ({
  onLoad,
  onAccept,
  onOpenDonation,
  onEndProject,
  isAccepted,
  address, //creator address
  match,
  project,
  percentAccepted,
  totalDisbursement,
  donationDialog,
  endDialog,
}) => {
  const classes = useStyle();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const isLogin = localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY)
    ? true
    : false;

  const isOwner = address === project.creator;

  useEffect(() => {
    onLoad(match.params.id);
  }, []);

  return (
    <div className={classes.container}>
      <CreateDonation {...donationDialog} address={project.address} />
      <CreateDisbursement  />
      <EndProjectDialog {...endDialog} />
      <MyAppBar />
      <Grid container>
        <Grid container item xs={8} alignItems="flex-start">
          <Card className={classes.cardContainer}>
            <CardHeader
              title={project.name}
              action={
                project.status !== 2 &&
                isOwner && <ColorButton onClick={onEndProject} fullWidth>End Project</ColorButton>
              }
              classes={{
                title: classes.cardTitle,
                root: classes.headerRoot,
                action: classes.action,
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
              <Information
                title="Representative:"
                content={project.creatorName}
              />
              <Information
                title="Address Key:"
                content={project.creator}
                markBlue
              />
              <Information
                title="Status:"
                content={getStatusFromStatusCode(project.status)}
                customColor={getColorFromStatusCode(project.status)}
                isBold
              />
              <Information
                title="Approval Rate:"
                content={`${percentAccepted.toFixed(2) * 100}%`}
                customColor={getColorFromStatusCode(project.status)}
                isBold
              />
              <Information
                title="Amount Donated:"
                content={project.amountDonated}
                markBlue
              />
              <Information title="Disbursed:" content={totalDisbursement} markBlue />
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          item
          xs={4}
          style={{ padding: '2% 2% 0% 2%' }}
          alignItems="flex-start"
        >
          {isLogin && !isOwner && project.status === 0 && (
            <>
              <MyCard
                title={isAccepted ? 'Accepted' : 'Accept'}
                content=""
                helper={
                  isAccepted
                    ? 'you have accepted this project'
                    : 'accept this project'
                }
                color={isAccepted ? '#bdbdbd' : '#2196f3'}
                icon={<ThumbUpAltIcon className={classes.icon} />}
                onClick={
                  isAccepted ? () => {} : () => onAccept(match.params.id)
                }
              />
            </>
          )}

          {isLogin && (
            <MyCard
              title="Donate"
              content=""
              helper={project.status === 1 ? "donate to this project" : "you cannot donate to this project"}
              color={project.status === 1 ? "#2196f3" : "#bdbdbd"}
              icon={<SendIcon className={classes.icon} />}
              onClick={project.status === 1 ? onOpenDonation : () => {}}
            />
          )}

          <MyCard
            title="History"
            content=""
            helper="All transactions related to this project"
            color="#1976d2"
            icon={<HistoryIcon className={classes.icon} />}
            onClick={() => history.push(`/projects/${match.params.id}/history`)}
          />

          {isLogin && isOwner && (
            <MyCard
              title="Disburse"
              content=""
              helper="send disburse for all users donated"
              color="#1565c0"
              icon={<PaymentIcon className={classes.icon} />}
            />
          )}
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
  action: {
    width: '20%',
    paddingTop: '0.6%',
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
  percentAccepted: makeSelectPercentAccepted(),
  address: makeSelectAddress(),
  isAccepted: makeSelectIsAccepted(),
  donationDialog: makeSelectDonationDialog(),
  endDialog: makeSelectEndDialog(),
  totalDisbursement: makeSelectTotalDisbursement(),
});

const mapDispatchToProps = dispatch => {
  return {
    onLoad: address => dispatch(onPageLoad(address)),
    onAccept: address => dispatch(onAccept(dispatch, address)),
    onOpenDonation: () => dispatch(openDonationDialog(dispatch)),
    onEndProject: () => dispatch(onEndProject(dispatch))
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
