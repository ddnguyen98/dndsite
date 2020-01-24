import {
  REQ_LOGGEDIN_PENDING,
  REQ_LOGGEDIN_SUCCESS,
  REQ_SIGNOUT_SUCCESS,
  REQ_REGISTER_SUCCESS,
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

export const saveUser = signup => {
  const { username, password, email } = signup;
  return {
    types: [REQ_LOGGEDIN_PENDING, REQ_REGISTER_SUCCESS, REQ_LOGGEDIN_ERROR],
    callAPI: () => API.post('/signup', { username, password, email }),
  };
};

export const logout = () => {
  return {
    types: [REQ_LOGGEDIN_PENDING, REQ_SIGNOUT_SUCCESS, REQ_LOGGEDIN_ERROR],
    callAPI: () => {
      return { data: { loggedIn: false } };
    },
  };
};
