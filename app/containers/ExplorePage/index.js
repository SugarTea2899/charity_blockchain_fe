import React, { memo, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MyAppBar from '../../components/MyAppBar';
import MyList from '../../components/MyList';
import DonateItemExpand from '../../components/DonateItemExpan';
import ProjectItemExpand from '../../components/ProjectItemExpand';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import { onPageLoad } from './actions';
import {
  makeSelectExploreDonations,
  makeSelectExploreProjects,
} from './selectors';

const key = 'explore';

export const ExplorePage = ({ onLoad, exploreProjects, exploreDonations }) => {
  const classes = useStyle();

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onLoad();
  }, []);

  const getProjectsItem = () => {
    return exploreProjects.map((project, index) => (
      <ProjectItemExpand key={index} {...project} />
    ));
  };

  return (
    <div className={classes.container}>
      <MyAppBar />
      <Grid container spacing={2} style={{ padding: '2%' }}>
        <Grid container item xs={6} alignItems='flex-start'>
          <MyList
            title="Donations"
            item={[
              <DonateItemExpand />,
              <DonateItemExpand />,
              <DonateItemExpand />,
              <DonateItemExpand />,
              <DonateItemExpand />,
            ]}
            onClick={() => {}}
          />
        </Grid>
        <Grid container item xs={6} alignItems='flex-start'>
          <MyList
            title="Charity Projects"
            item={getProjectsItem()}
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
});

const mapStateToProps = createStructuredSelector({
  exploreProjects: makeSelectExploreProjects(),
  exploreDonations: makeSelectExploreDonations(),
});

const mapDispatchToProps = dispatch => {
  return {
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
)(ExplorePage);
