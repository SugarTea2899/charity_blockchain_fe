import { call, put, takeLatest } from "redux-saga/effects";
import { setLoading } from "../App/actions";
import { ON_PAGE_LOAD } from "./constants";
import * as API from '../../api';
import { updateDonationsList } from "./actions";

export function* onPageLoad() {
  try {
    yield put(setLoading(true));
    
    const result = yield call(API.getDonations);

    yield put(updateDonationsList(result.payload.history.reverse()));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log(error.message);
  }
}

export default function* donationsSaga() {
  yield takeLatest(ON_PAGE_LOAD, onPageLoad)
}