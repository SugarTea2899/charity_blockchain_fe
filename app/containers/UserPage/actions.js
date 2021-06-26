import {
  ADD_AMOUNT,
  CREATE_PROJECT_REQUEST,
  ON_CREATE_PROJECT_DIALOG,
  ON_PAGE_LOAD,
  OPEN_ADD_AMOUNT_DIALOG,
  UPDATE_ADD_AMOUNT_DIALOG,
  UPDATE_CREATE_PROJECT_DIALOG,
  UPDATE_USER_DONATIONS,
  UPDATE_USER_INFO,
  UPDATE_USER_PROJECTS,
} from './constants';

export const updateUserInfo = (address, balance, amountDonated) => ({
  type: UPDATE_USER_INFO,
  address,
  balance,
  amountDonated
});

export const updateCreateProjectDialog = dialog => ({
  type: UPDATE_CREATE_PROJECT_DIALOG,
  dialog,
});

export const onCreateProjectDialog = dispatch => ({
  type: ON_CREATE_PROJECT_DIALOG,
  dispatch,
});

export const createProjectRequest = (project, dispatch) => ({
  type: CREATE_PROJECT_REQUEST,
  project,
  dispatch,
});

export const updateUserProjects = projects => ({
  type: UPDATE_USER_PROJECTS,
  projects,
});

export const updateUserDonations = donations => ({
  type: UPDATE_USER_DONATIONS,
  donations,
});

export const onPageLoad = () => ({
  type: ON_PAGE_LOAD,
});

export const updateAddAmountDialog = addAmountDialog => ({
  type: UPDATE_ADD_AMOUNT_DIALOG,
  addAmountDialog,
});

export const openAddAmountDialog = dispatch => ({
  type: OPEN_ADD_AMOUNT_DIALOG,
  dispatch,
});

export const addAmount = amount => ({
  type: ADD_AMOUNT,
  amount,
});

