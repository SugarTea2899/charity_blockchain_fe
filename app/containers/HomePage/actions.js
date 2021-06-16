import { CREATE_PRIVATE_KEY, ACCESS_WALLET } from "./constants";

export const createPrivateKey = (dispatch, name) => ({
  type: CREATE_PRIVATE_KEY,
  dispatch,
  name
})

export const accessWallet = (privateKey, dispatch) => ({
  type: ACCESS_WALLET,
  privateKey,
  dispatch
})