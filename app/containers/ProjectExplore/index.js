import React, { memo } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MyAppBar from '../../components/MyAppBar';
import MyList from '../../components/MyList';
import DonateItemExpand from '../../components/DonateItemExpan';
import DisbursedItem from '../../components/DisbursedItem';

export const ProjectExplore = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <MyAppBar />
      <Typography className={classes.projectName}>
        # Từ Thiện Miền Trung
      </Typography>
      <Grid container spacing={2} style={{ padding: '1.5% 2% 0% 2%' }}>
        <Grid container item xs={6}>
          <MyList
            title="Project Donations"
            item={[
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
)(ProjectExplore);
