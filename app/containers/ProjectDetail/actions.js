import {
  ACCEPT_PROJECT,
  ON_ACCEPT,
  ON_PAGE_LOAD,
  UPDATE_PROJECT_DETAIL,
} from './constants';

export const onPageLoad = address => ({
  type: ON_PAGE_LOAD,
  address,
});

export const onAccept = (dispatch, address) => ({
  type: ON_ACCEPT,
  dispatch,
  address
});

export const acceptProject = (address) => ({
  type: ACCEPT_PROJECT,
  address
});

export const updateProjectDetail = projectDetail => ({
  type: UPDATE_PROJECT_DETAIL,
  projectDetail,
});
