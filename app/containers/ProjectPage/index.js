import React, { memo, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import MyTable from '../../components/MyTable';
import MyAppBar from '../../components/MyAppBar';
import { getProject } from './actions';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import { makeSelectProjectsList } from './selector';

const key = 'projects';

export const ProjectPage = ({projects, getProjects}) => {
  const classes = useStyle();

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    getProjects()
  }, []);

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
  projects: makeSelectProjectsList()
});

const mapDispatchToProps = dispatch => {return {
  getProjects: () => dispatch(getProject())
}};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProjectPage);
