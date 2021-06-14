import { UPDATE_USER_INFO } from './constants';

export const updateUserInfo = (address, balance) => ({
  type: UPDATE_USER_INFO,
  address,
  balance,
});
