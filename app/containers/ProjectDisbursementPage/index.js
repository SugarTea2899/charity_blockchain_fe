import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ProjectDisbursementTable from '../../components/ProjectDisbursementTable';
import MyAppBar from '../../components/MyAppBar';

export const ProjectDisbursementPage = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <MyAppBar/>
      <ProjectDisbursementTable/>
    </div>
  );
};

const useStyle = makeStyles({
  container: {
    height: '100%',
    width: '100%',
  },
  logo: {
    width: '45%',
    padding: '5% 0% 8% 0%',
  },
});

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => {return {}};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProjectDisbursementPage);
