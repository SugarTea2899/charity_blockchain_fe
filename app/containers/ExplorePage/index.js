import React, { memo } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MyAppBar from '../../components/MyAppBar';
import MyList from '../../components/MyList';
import DonateItemExpand from '../../components/DonateItemExpan';
import ProjectItemExpand from '../../components/ProjectItemExpand';

export const ExplorePage = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <MyAppBar />
      <Grid container spacing={2} style={{ padding: '2%' }}>
        <Grid container item xs={6}>
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
        <Grid container item xs={6}>
          <MyList
            title="Charity Projects"
            item={[
              <ProjectItemExpand />,
              <ProjectItemExpand />,
              <ProjectItemExpand />,
              <ProjectItemExpand />,
              <ProjectItemExpand />,
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
)(ExplorePage);
