import { UPDATE_CREATE_PROJECT_DIALOG, UPDATE_USER_INFO, UPDATE_USER_PROJECTS } from './constants';

export const initialState = {
  address: '',
  balance: 0,
  projects: [],
  createProjectDialog: {
    open: false,
    onClose: () => {},
    onCreate: () => {},
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return { ...state, address: action.address, balance: action.balance };
    case UPDATE_CREATE_PROJECT_DIALOG:
      return { ...state, createProjectDialog: action.dialog };
    case UPDATE_USER_PROJECTS:
      return {...state, projects: action.projects.slice()}
    default:
      return state;
  }
};

export default userReducer;
