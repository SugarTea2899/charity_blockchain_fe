import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading, updateAlert } from '../App/actions';
import { createProjectRequest, onPageLoad, updateCreateProjectDialog, updateUserInfo, updateUserProjects } from './actions';
import { CREATE_PROJECT_REQUEST, ON_CREATE_PROJECT_DIALOG, ON_PAGE_LOAD } from './constants';
import * as API from '../../api';
import { LOCAL_STORAGE_PRIVATE_KEY } from '../../utils/constants';
import history from '../../utils/history';

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
    const result = yield call(API.createProject, project, localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY));
    yield put(onPageLoad());

    const alert = {
      open: true,
      title: 'Alert',
      content: `Project is created successfully. Project private key: ${result.payload.privateKey}.`,
      onClose: () => dispatch(updateAlert({ open: false })),
    };

    yield put(updateAlert(alert));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setLoading(false));
  }
}

export function* onLoad() {
  if (localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY)) {
    try {
      yield put(setLoading(true));

      const userProjectsRes = yield call(API.getUserProjects, localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY));
      const result = yield call(API.getWallet, localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY));
      
      yield put(updateUserInfo(result.payload.address, result.payload.balance));
      yield put(updateUserProjects(userProjectsRes.payload.events.reverse().filter((item, index) => index < 5)));

      yield put(setLoading(false));
    } catch (error) {
      console.log(error.message);
      localStorage.removeItem(LOCAL_STORAGE_PRIVATE_KEY);
      history.replace('/')
      yield put(setLoading(false));
    }
  }
}

export default function* userSaga() {
  yield takeLatest(ON_CREATE_PROJECT_DIALOG, showCreateProjectDialog);
  yield takeLatest(CREATE_PROJECT_REQUEST, createProject);
  yield takeLatest(ON_PAGE_LOAD, onLoad);
}
