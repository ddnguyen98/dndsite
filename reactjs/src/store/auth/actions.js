import {
  REQ_LOGGEDIN_PENDING,
  REQ_LOGGEDIN_SUCCESS,
  REQ_LOGGEDIN_ERROR,
} from '../actionTypes';

import API from '../../API';

export const loginAccount = login => {
  const { username, password } = login;
  return {
    types: [REQ_LOGGEDIN_PENDING, REQ_LOGGEDIN_SUCCESS, REQ_LOGGEDIN_ERROR],
    callAPI: () => API.post('/login', { username, password }),
  };
};

export const saveUser = id => ({
  types: [REQ_LOGGEDIN_PENDING, REQ_LOGGEDIN_SUCCESS, REQ_LOGGEDIN_ERROR],
  callAPI: () => API.get(`/feats?characterId=${id}`),
});

export const logout = id => ({
  types: [REQ_LOGGEDIN_PENDING, REQ_LOGGEDIN_SUCCESS, REQ_LOGGEDIN_ERROR],
  callAPI: () => API.get(`/feats?characterId=${id}`),
});
