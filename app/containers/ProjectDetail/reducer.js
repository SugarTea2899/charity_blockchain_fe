import { UPDATE_IS_ACCEPTED, UPDATE_PROJECT_DETAIL } from './constants';

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
    default:
      return state;
  }
};

export default projectDetailReducer;
