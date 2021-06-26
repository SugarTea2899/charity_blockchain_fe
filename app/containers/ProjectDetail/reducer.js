import {
  UPDATE_DONATION_DIALOG,
  UPDATE_END_DIALOG,
  UPDATE_IS_ACCEPTED,
  UPDATE_PROJECT_DETAIL,
} from './constants';

export const initialState = {
  projectDetail: {
    name: '',
    description: '',
    status: 0,
    startDate: '1/1/2020',
    endDate: '1/1/2020',
    amountDonated: 0,
  },
  percentAccepted: 0,
  isAccepted: false,
  donationDialog: {
    open: false,
    onSend: () => {},
    onClose: () => {},
  },
  endDialog: {
    open: false,
    onSend: () => {},
    onClose: () => {},
  },
};

const projectDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROJECT_DETAIL:
      return {
        ...state,
        projectDetail: action.projectDetail,
        percentAccepted: action.percentAccepted,
      };
    case UPDATE_IS_ACCEPTED:
      return { ...state, isAccepted: action.isAccepted };
    case UPDATE_DONATION_DIALOG:
      return { ...state, donationDialog: action.donationDialog };
    case UPDATE_END_DIALOG:
      return { ...state, endDialog: action.endDialog };
    default:
      return state;
  }
};

export default projectDetailReducer;
