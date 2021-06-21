import { call, put, takeLatest } from "redux-saga/effects";
import { setLoading } from "../App/actions";
import { GET_PROJECTS } from "./constants";
import * as API from '../../api';
import { updateProject } from "./actions";

export function* getProjects() {
  try {
    yield put(setLoading(true));

    const results = yield call(API.getProjects);
    const projects = results.payload.events.reverse();
    
    yield put(updateProject(projects));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
  }
}

export default function* projectsSaga() {
  yield takeLatest(GET_PROJECTS, getProjects)
}