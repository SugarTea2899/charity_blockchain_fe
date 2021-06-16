import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading, updateAlert } from '../App/actions';
import { createProjectRequest, updateCreateProjectDialog } from './actions';
import { CREATE_PROJECT_REQUEST, ON_CREATE_PROJECT_DIALOG } from './constants';
import * as API from '../../api';
import { LOCAL_STORAGE_PRIVATE_KEY } from '../../utils/constants';

export function* showCreateProjectDialog({ dispatch }) {
  const dialog = {
    open: true,
    onClose: () => dispatch(updateCreateProjectDialog({ open: false })),
    onCreate: project => dispatch(createProjectRequest(project, dispatch)),
  };

  yield put(updateCreateProjectDialog(dialog));
}

export function* createProject({ project, dispatch }) {
  try {
    yield put(setLoading(true));
    yield call(API.createProject, project, localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY));

    const alert = {
      open: true,
      title: 'Alert',
      content: `Project is created successfully.`,
      onClose: () => dispatch(updateAlert({ open: false })),
    };

    yield put(updateAlert(alert));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setLoading(false));
  }
}

export default function* userSaga() {
  yield takeLatest(ON_CREATE_PROJECT_DIALOG, showCreateProjectDialog);
  yield takeLatest(CREATE_PROJECT_REQUEST, createProject);
}
