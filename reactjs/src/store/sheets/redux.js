import createReducer from '../utils/createReducer';

import {
  REQ_SHEETS_SUCCESS,
  REQ_SHEETS_ERROR,
  REQ_SHEETS_PENDING,
} from '../actionTypes';

const initialState = {
  byId: {},
  allIds: [],
  loadedAt: 0,
  isLoading: false,
  error: null,
};

const sheetPending = state => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

const sheetSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    loadedAt: Date.now(),
    byId: {
      ...state.byId,
      ...action.data.reduce((obj, sheet) => {
        return {
          ...obj,
          [sheet.id]: {
            data: sheet,
            isLoading: false,
            loadedAt: Date.now(),
            error: null,
          },
        };
      }, {}),
    },
    allIds: [
      ...new Set([...state.allIds, ...action.data.map(sheet => sheet.id)]),
    ],
  };
};

const sheetError = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.err,
  };
};

export default createReducer(initialState, {
  [REQ_SHEETS_PENDING]: sheetPending,
  [REQ_SHEETS_SUCCESS]: sheetSuccess,
  [REQ_SHEETS_ERROR]: sheetError,
});
