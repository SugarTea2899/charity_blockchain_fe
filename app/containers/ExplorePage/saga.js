import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading } from '../App/actions';
import { loadExploreProject, onLoadExploreDonation, onLoadExploreProject } from './actions';
import {
  ON_LOAD_EXPLORE_DONATION,
  ON_LOAD_EXPLORE_PROJECT,
  ON_PAGE_LOAD,
} from './constants';
import * as API from '../../api';

export function* onPageLoad() {
  yield put(onLoadExploreDonation());
  yield put(onLoadExploreProject());
}

export function* loadExploreProjectSaga() {
  try {
    yield put(setLoading(true));

    const result = yield call(API.getProjects);
    
    const exploreProjects = result.payload.events.filter((item, index) => index < 5).reverse();
    yield put(loadExploreProject(exploreProjects));

    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
  }
}

export function* loadExploreDonationSaga() {}

export default function* exploreSaga() {
  yield takeLatest(ON_PAGE_LOAD, onPageLoad);
  yield takeLatest(ON_LOAD_EXPLORE_PROJECT, loadExploreProjectSaga);
  yield takeLatest(ON_LOAD_EXPLORE_DONATION, loadExploreDonationSaga);
}
