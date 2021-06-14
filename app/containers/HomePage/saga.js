import { call, put, takeLatest } from 'redux-saga/effects';
import { setLoading, updateAlert } from '../App/actions';
import { ACCESS_WALLET, CREATE_PRIVATE_KEY } from './constants';
import * as API from '../../api';
import { copyToClipboard } from '../../utils/helpers';
import { LOCAL_STORAGE_PRIVATE_KEY } from '../../utils/constants';
import history from '../../utils/history';
import { updateUserInfo } from '../UserPage/actions';

function* createPrivateKey({ dispatch }) {
  try {
    yield put(setLoading(true));
    const result = yield call(API.createWallet);
    copyToClipboard(result.payload.privateKey);

    const alert = {
      open: true,
      title: 'Alert',
      content:
        'Your private key was copied to clip board.\nPlease store it carefully.',
      onClose: () => dispatch(updateAlert({ open: false })),
    };

    yield put(setLoading(false));
    yield put(updateAlert(alert));
  } catch (error) {
    const alert = {
      open: true,
      title: 'Alert',
      content: `${error.message}`,
      onClose: () => dispatch(updateAlert({ open: false })),
    };

    yield put(setLoading(false));
    yield put(updateAlert(alert));
  }
}

function* accessWallet({ privateKey, dispatch }) {
  if (privateKey.length < 64) {
    const alert = {
      open: true,
      title: 'Alert',
      content: `Your private key is wrong`,
      onClose: () => dispatch(updateAlert({ open: false })),
    };

    yield put(updateAlert(alert));
    return;
  }

  try {
    yield put(setLoading(true));
    const result = yield call(API.getWallet, privateKey);

    localStorage.setItem(LOCAL_STORAGE_PRIVATE_KEY, privateKey);
    yield put(setLoading(false));
    yield put(updateUserInfo(result.payload.address, result.payload.balance));
    
    history.replace('/user');
  } catch (error) {
    const alert = {
      open: true,
      title: 'Alert',
      content: `${error.message}`,
      onClose: () => dispatch(updateAlert({ open: false })),
    };

    yield put(setLoading(false));
    yield put(updateAlert(alert));
  }
}

export default function* homeSaga() {
  yield takeLatest(CREATE_PRIVATE_KEY, createPrivateKey);
  yield takeLatest(ACCESS_WALLET, accessWallet)
}
