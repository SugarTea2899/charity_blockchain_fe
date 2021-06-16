import {
  CREATE_PROJECT_REQUEST,
  ON_CREATE_PROJECT_DIALOG,
  UPDATE_CREATE_PROJECT_DIALOG,
  UPDATE_USER_INFO,
} from './constants';

export const updateUserInfo = (address, balance) => ({
  type: UPDATE_USER_INFO,
  address,
  balance,
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
  dispatch
});
