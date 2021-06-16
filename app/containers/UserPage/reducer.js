import { UPDATE_CREATE_PROJECT_DIALOG, UPDATE_USER_INFO } from './constants';

export const initialState = {
  address: '',
  balance: 0,
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
    default:
      return state;
  }
};

export default userReducer;
