export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const LOCAL_STORAGE_PRIVATE_KEY = 'private-key';

export const API_URL = 'http://localhost:5000';

export const SOCKET_URL = 'http://localhost:7000';

export const MessageType = {
  UI_UPDATE_BLOCKCHAIN: 1001,
  UI_UPDATE_POOL: 1002,
  UI_ADD_EVENT: 1003,
  UI_ACCEPT_EVENT: 1004,
  UI_DISBURSEMENT: 1005,
  UI_FORCE_END_EVENT: 1006,
}
