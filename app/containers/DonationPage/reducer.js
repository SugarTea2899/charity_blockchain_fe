import { UPDATE_DONATIONS_LIST } from "./constants";

export const initialState = {
  list: [],
}

const DonationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DONATIONS_LIST:
      return {...state, list: action.donations}
    default:
      return state;
  }
}

export default DonationsReducer;
