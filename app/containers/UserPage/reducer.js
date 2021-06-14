import { UPDATE_USER_INFO } from "./constants";

export const initialState = {
  address: '',
  balance: 0
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {...state, address: action.address, balance: action.balance}
    default:
      return state;
  }
}

export default userReducer;
