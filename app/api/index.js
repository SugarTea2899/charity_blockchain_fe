import { fetchData } from '../utils/apiClient';

export const createWallet = () => {
  return fetchData('post', '/wallet');
};

export const getWallet = (privateKey) => {
  return fetchData('get', '/wallet', undefined, privateKey);
}
