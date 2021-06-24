import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MyTable from '../../components/MyTable';
import MyAppBar from '../../components/MyAppBar';
import { makeSelectUserProject } from '../UserPage/selectors';

export const UserProjectPage = ({projects}) => {
  const classes = useStyle();
  console.log(projects)
  return (
    <div className={classes.container}>
      <MyAppBar />
      <MyTable projects={projects} />
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

const mapStateToProps = createStructuredSelector({
  projects: makeSelectUserProject()
});

const mapDispatchToProps = dispatch => {return {}};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(UserProjectPage);
