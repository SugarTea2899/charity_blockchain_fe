import React, { memo, useEffect } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MyAppBar from '../../components/MyAppBar';
import MyList from '../../components/MyList';
import DonateItemExpand from '../../components/DonateItemExpan';
import DisbursedItem from '../../components/DisbursedItem';
import { makeSelectProjectDonations } from './selectors';
import { loadProjectDonations } from './actions';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import { makeSelectProjectDetail } from '../ProjectDetail/selectors';

const key = 'projectExplore';

export const ProjectExplore = ({ donations, getDonations, match, project }) => {
  const classes = useStyle();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const getDonationsItem = () => {
    return donations
      .filter((item, index) => index < 5)
      .map((donation, index) => <DonateItemExpand key={index} {...donation} />);
  };

  useEffect(() => {
    getDonations(match.params.id);
  }, []);
  return (
    <div className={classes.container}>
      <MyAppBar />
      <Typography className={classes.projectName}>
        {`# ${project.name}`}
      </Typography>
      <Grid container spacing={2} style={{ padding: '1.5% 2% 0% 2%' }}>
        <Grid container item xs={6} alignItems="flex-start">
          <MyList
            title="Project Donations"
            item={getDonationsItem()}
            onClick={() => {}}
          />
        </Grid>
        <Grid container item xs={6} alignItems="flex-start">
          <MyList
            title="History Disbursed"
            item={[
              <DisbursedItem />,
              <DisbursedItem />,
              <DisbursedItem />,
              <DisbursedItem />,
            ]}
            onClick={() => {}}
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
    fontSize: '1.5rem',
    marginTop: '1.5%',
    marginLeft: '2%',
    fontStyle: 'italic',
  },
});

const mapStateToProps = createStructuredSelector({
  donations: makeSelectProjectDonations(),
  project: makeSelectProjectDetail()
});

const mapDispatchToProps = dispatch => {
  return {
    getDonations: address => dispatch(loadProjectDonations(address)),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProjectExplore);
