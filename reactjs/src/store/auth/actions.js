import {
  REQ_LOGGEDIN_PENDING,
  REQ_LOGGEDIN_SUCCESS,
  REQ_SIGNOUT_SUCCESS,
  REQ_REGISTER_SUCCESS,
  REQ_FORGOT_SUCCESS,
  REQ_LOGGEDIN_ERROR,
  REQ_RESET_SUCCESS,
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

export const forgot = forget => {
  const { email } = forget;
  return {
    types: [REQ_LOGGEDIN_PENDING, REQ_FORGOT_SUCCESS, REQ_LOGGEDIN_ERROR],
    callAPI: () => API.post('/forgot', { email }),
  };
};

export const reset = rese => {
  const { verifyPassword, newPassword, token } = rese;
  return {
    types: [REQ_LOGGEDIN_PENDING, REQ_RESET_SUCCESS, REQ_LOGGEDIN_ERROR],
    callAPI: () => API.post('/reset', { verifyPassword, newPassword, token }),
  };
};
