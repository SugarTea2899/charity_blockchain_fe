import { call, takeLatest, put } from "redux-saga/effects";
import { LOAD_PROJECT_DONATIONS } from "./constants";
import * as API from '../../api';
import { updateProjectDonations } from "./actions";
import { setLoading } from "../App/actions";

export function* loadProjectDonations({address}) {
  try {
    yield put(setLoading(true))
    const result = yield call(API.getProjectDonations, address);

    const projectDonations = result.payload.history.reverse();
    yield put(updateProjectDonations(projectDonations));

    yield put(setLoading(false))
  } catch (error) {
    console.log(error.message);
    yield put(setLoading(false))
  }
}

export default function* projectExploreSaga() {
  yield takeLatest(LOAD_PROJECT_DONATIONS, loadProjectDonations)
}