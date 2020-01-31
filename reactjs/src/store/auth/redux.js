import createReducer from '../utils/createReducer';

import {
  REQ_LOGGEDIN_PENDING,
  REQ_LOGGEDIN_SUCCESS,
  REQ_LOGGEDIN_ERROR,
  REQ_SIGNOUT_SUCCESS,
  REQ_REGISTER_SUCCESS,
  REQ_FORGOT_SUCCESS,
  REQ_RESET_SUCCESS,
} from '../actionTypes';

const initialState = {
  loggedIn: !!localStorage.getItem('token'),
  isLoading: false,
};

function loginPending(state, action) {
  // set loading state and clear error
  return {
    ...state,
    isLoading: true,
    error: null,
  };
}

function loginSuccess(state, action) {
  if (action.data.token) {
    localStorage.setItem('token', action.data.token);
  } else {
    localStorage.removeItem('token');
  }
  // clear loading and error, update cache time, add feats
  return {
    ...state,
    loggedIn: action.data.loggedInState,
    isLoading: false,
    error: null,
  };
}

const loginError = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.err,
  };
};

export default createReducer(initialState, {
  [REQ_LOGGEDIN_PENDING]: loginPending,
  [REQ_LOGGEDIN_SUCCESS]: loginSuccess,
  [REQ_SIGNOUT_SUCCESS]: loginSuccess,
  [REQ_FORGOT_SUCCESS]: loginSuccess,
  [REQ_RESET_SUCCESS]: loginSuccess,
  [REQ_REGISTER_SUCCESS]: loginSuccess,
  [REQ_LOGGEDIN_ERROR]: loginError,
});
