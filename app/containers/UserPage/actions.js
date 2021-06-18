import {
  CREATE_PROJECT_REQUEST,
  ON_CREATE_PROJECT_DIALOG,
  ON_PAGE_LOAD,
  UPDATE_CREATE_PROJECT_DIALOG,
  UPDATE_USER_INFO,
  UPDATE_USER_PROJECTS,
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
  dispatch,
});

export const updateUserProjects = projects => ({
  type: UPDATE_USER_PROJECTS,
  projects,
});

export const onPageLoad = () => ({
  type: ON_PAGE_LOAD,
});
