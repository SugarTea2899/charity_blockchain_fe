import {
  ACCEPT_PROJECT,
  END_PROJECT,
  ON_ACCEPT,
  ON_END_PROJECT,
  ON_PAGE_LOAD,
  OPEN_DISBURSEMENT_DIALOG,
  OPEN_DONATION_DIALOG,
  SEND_DISBURSEMENT_DIALOG,
  SEND_DONATION_DIALOG,
  UPDATE_DISBURSEMENT_DIALOG,
  UPDATE_DONATION_DIALOG,
  UPDATE_END_DIALOG,
  UPDATE_IS_ACCEPTED,
  UPDATE_PROJECT_DETAIL,
} from './constants';

export const onPageLoad = address => ({
  type: ON_PAGE_LOAD,
  address,
});

export const onAccept = (dispatch, address) => ({
  type: ON_ACCEPT,
  dispatch,
  address,
});

export const acceptProject = address => ({
  type: ACCEPT_PROJECT,
  address,
});

export const updateProjectDetail = (projectDetail, percentAccepted) => ({
  type: UPDATE_PROJECT_DETAIL,
  projectDetail,
  percentAccepted,
});

export const updateIsAccepted = isAccepted => ({
  type: UPDATE_IS_ACCEPTED,
  isAccepted,
});

export const updateDonationDialog = donationDialog => ({
  type: UPDATE_DONATION_DIALOG,
  donationDialog,
});

export const openDonationDialog = dispatch => ({
  type: OPEN_DONATION_DIALOG,
  dispatch,
});

export const sendDonation = (dispatch, address, amount) => ({
  type: SEND_DONATION_DIALOG,
  address,
  amount,
  dispatch,
});

export const updateDisbursementDialog = disbursementDialog => ({
  type: UPDATE_DISBURSEMENT_DIALOG,
  disbursementDialog,
});

export const openDisbursementDialog = dispatch => ({
  type: OPEN_DISBURSEMENT_DIALOG,
  dispatch,
});

export const sendDisbursement = (dispatch, amount) => ({
  type: SEND_DISBURSEMENT_DIALOG,
  amount,
  dispatch,
});

export const onEndProject = dispatch => ({
  type: ON_END_PROJECT,
  dispatch,
});

export const endProject = (projectPrivateKey) => ({
  type: END_PROJECT,
  projectPrivateKey
})

export const updateEndDialog = (endDialog) => ({
  type: UPDATE_END_DIALOG,
  endDialog
})
