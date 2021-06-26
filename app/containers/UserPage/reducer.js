import {
  UPDATE_ADD_AMOUNT_DIALOG,
  UPDATE_CREATE_PROJECT_DIALOG,
  UPDATE_USER_DONATIONS,
  UPDATE_USER_INFO,
  UPDATE_USER_PROJECTS,
} from './constants';

export const initialState = {
  address: '',
  balance: 0,
  amountDonated: 0,
  projects: [],
  donations: [],
  createProjectDialog: {
    open: false,
    onClose: () => {},
    onCreate: () => {},
  },
  addAmountDialog: {
    open: false,
    onClose: () => {},
    onSend: () => {},
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        address: action.address,
        balance: action.balance,
        amountDonated: action.amountDonated,
      };
    case UPDATE_CREATE_PROJECT_DIALOG:
      return { ...state, createProjectDialog: action.dialog };
    case UPDATE_USER_PROJECTS:
      return { ...state, projects: action.projects.slice() };
    case UPDATE_ADD_AMOUNT_DIALOG:
      return { ...state, addAmountDialog: action.addAmountDialog };
    case UPDATE_USER_DONATIONS:
      return { ...state, donations: action.donations.slice() };
    default:
      return state;
  }
};

export default userReducer;
