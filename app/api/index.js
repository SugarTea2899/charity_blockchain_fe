import { fetchData } from '../utils/apiClient';

export const createWallet = name => {
  return fetchData('post', '/wallet', { name });
};

export const accessWallet = privateKey => {
  return fetchData('post', '/wallet-access', undefined, privateKey);
}

export const getWallet = privateKey => {
  return fetchData('get', '/wallet', undefined, privateKey);
};

export const createProject = (project, privateKey) => {
  return fetchData('post', '/event', project, privateKey);
};

export const getUserProjects = privateKey => {
  return fetchData('get', '/event/mine', undefined, privateKey);
};

export const getProjectDetail = address => {
  return fetchData('get', `/event/detail?address=${address}`);
};

export const getProjects = () => {
  return fetchData('get', '/event');
};

export const acceptProject = (privateKey, address) => {
  return fetchData('post', '/event/accept', { address }, privateKey);
};

export const checkIsAccepted = (privateKey, address) => {
  return fetchData('post', '/event/checkAccept', {address}, privateKey);
}
