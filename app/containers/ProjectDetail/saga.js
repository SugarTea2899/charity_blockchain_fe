import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading, updateConfirmAlert } from '../App/actions';
import * as API from '../../api';
import { ACCEPT_PROJECT, ON_ACCEPT, ON_PAGE_LOAD } from './constants';
import {
  acceptProject,
  updateIsAccepted,
  updateProjectDetail,
} from './actions';
import { LOCAL_STORAGE_PRIVATE_KEY } from '../../utils/constants';

export function* onPageLoad({ address }) {
  try {
    yield put(setLoading(true));

    const result = yield call(API.getProjectDetail, address);

    yield put(updateProjectDetail(result.event, result.percentAccepted));

    if (localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY)) {
      const checkAcceptResult = yield call(
        API.checkIsAccepted,
        localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY),
        address,
      );

      yield put(updateIsAccepted(checkAcceptResult.accepted));
    }
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
  }
}

export function* onAccept({ dispatch, address }) {
  try {
    const confirmAlert = {
      open: true,
      title: 'Accept Charity Project',
      content: 'Do you want to accept this project?',
      onYes: () => {
        dispatch(acceptProject(address));
        dispatch(updateConfirmAlert({ open: false }));
      },
      onNo: () => dispatch(updateConfirmAlert({ open: false })),
    };

    yield put(updateConfirmAlert(confirmAlert));
  } catch (error) {}
}

export function* acceptProjectSaga({ address }) {
  try {
    yield put(setLoading(true));

    yield call(
      API.acceptProject,
      localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY),
      address,
    );

    yield put(updateIsAccepted(true));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error.message);
    yield put(setLoading(false));
  }
}

export default function* projectDetailSaga() {
  yield takeLatest(ON_PAGE_LOAD, onPageLoad);
  yield takeLatest(ON_ACCEPT, onAccept);
  yield takeLatest(ACCEPT_PROJECT, acceptProjectSaga);
}
