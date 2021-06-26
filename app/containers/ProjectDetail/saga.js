import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading, updateAlert, updateConfirmAlert } from '../App/actions';
import * as API from '../../api';
import { ACCEPT_PROJECT, END_PROJECT, ON_ACCEPT, ON_END_PROJECT, ON_PAGE_LOAD, OPEN_DISBURSEMENT_DIALOG, OPEN_DONATION_DIALOG, SEND_DISBURSEMENT_DIALOG, SEND_DONATION_DIALOG } from './constants';
import {
  acceptProject,
  endProject,
  sendDisbursement,
  sendDonation,
  updateDisbursementDialog,
  updateDonationDialog,
  updateEndDialog,
  updateIsAccepted,
  updateProjectDetail,
} from './actions';
import { LOCAL_STORAGE_PRIVATE_KEY } from '../../utils/constants';

export function* onPageLoad({ address }) {
  try {
    yield put(setLoading(true));

    const result = yield call(API.getProjectDetail, address);

    yield put(updateProjectDetail(result.event, result.percentAccepted, result.totalDisbursement));

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

export function* openDonation({dispatch}) {
  const donationDialog = {
    open: true,
    onClose: () => dispatch(updateDonationDialog({open: false})),
    onSend: (address, amount) => dispatch(sendDonation(dispatch ,address, amount))
  }

  yield put(updateDonationDialog(donationDialog));
}

export function* sendDonationSaga({dispatch, address, amount}) {
  try {
    yield put(setLoading(true));

    yield call(API.sendDonation, localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY), amount, address);
    
    const alert = {
      open: true,
      title: 'Alert',
      content: `Donate successfully.`,
      onClose: () => dispatch(updateAlert({ open: false })),
    };

    yield put(updateAlert(alert));
    yield put(setLoading(false));
  } catch (error) {
    const alert = {
      open: true,
      title: 'Error',
      content: error.message,
      onClose: () => dispatch(updateAlert({ open: false })),
    };
    yield put(updateAlert(alert));
    yield put(setLoading(false));
  }
}

export function* endProjectConfirm({dispatch}) {
  const dialog = {
    open: true,
    onClose: () => dispatch(updateEndDialog({open: false})),
    onSend: (projectPrivateKey) => dispatch(endProject(projectPrivateKey))
  };

  yield put(updateEndDialog(dialog));
}

export function* endProjectSaga({projectPrivateKey}) {
  try {
    yield put(setLoading(true));
    yield call(API.endProject, projectPrivateKey);
    yield put(setLoading(false));
  } catch (error) {
    console.log(error.message);
    yield put(setLoading(false));
  }
}

export function* openDisbursementDialog ({dispatch}) {
  const dialog = {
    open: true,
    onClose: () => dispatch(updateDisbursementDialog({open: false})),
    onSend: (amount, projectPrivateKey) => dispatch(sendDisbursement(dispatch, amount, projectPrivateKey))
  };

  yield put(updateDisbursementDialog(dialog));
}

export function* sendDisbursementSaga({dispatch, amount, projectPrivateKey}) {

}

export default function* projectDetailSaga() {
  yield takeLatest(ON_PAGE_LOAD, onPageLoad);
  yield takeLatest(ON_ACCEPT, onAccept);
  yield takeLatest(ACCEPT_PROJECT, acceptProjectSaga);
  yield takeLatest(OPEN_DONATION_DIALOG, openDonation);
  yield takeLatest(SEND_DONATION_DIALOG, sendDonationSaga);
  yield takeLatest(ON_END_PROJECT, endProjectConfirm);
  yield takeLatest(END_PROJECT, endProjectSaga);
  yield takeLatest(OPEN_DISBURSEMENT_DIALOG, openDisbursementDialog);
  yield takeLatest(SEND_DISBURSEMENT_DIALOG, sendDisbursementSaga)
}
