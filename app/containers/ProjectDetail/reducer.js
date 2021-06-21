import { UPDATE_PROJECT_DETAIL } from "./constants";

export const initialState = {
  projectDetail: {
    name: '',
    description: '',
    status: 0,
    startDate: '1/1/2020',
    endDate: '1/1/2020',
    amountDonated: 0
  },
  percentAccepted: 0,
}

const projectDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROJECT_DETAIL:
      return {...state, projectDetail: action.projectDetail, percentAccepted: action.percentAccepted}
    default:
      return state;
  }
}

export default projectDetailReducer;
