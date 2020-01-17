import createReducer from '../utils/createReducer';
import { removeIdFromArray, removeIdFromObject } from '../utils/utils';

import {
  REQ_SHEETS_SUCCESS,
  REQ_SHEETS_ERROR,
  REQ_SHEETS_PENDING,
  ADD_SHEET_PENDING,
  ADD_SHEET_SUCCESS,
  ADD_SHEET_ERROR,
  REQ_SHEET_PENDING,
  REQ_SHEET_SUCCESS,
  REQ_SHEET_ERROR,
  UPDATE_SHEET_PENDING,
  UPDATE_SHEET_SUCCESS,
  UPDATE_SHEET_ERROR,
  DELETE_SHEET_PENDING,
  DELETE_SHEET_SUCCESS,
  DELETE_SHEET_ERROR,
} from '../actionTypes';

const initialState = {
  byId: {},
  allIds: [],
  loadedAt: 0,
  isLoading: false,
  error: null,
};

const sheetsPending = state => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

const sheetsSuccess = (state, action) => {
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

const sheetsError = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.err,
  };
};

function sheetPending(state, action) {
  // set loading state and clear error
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.payload.id]: {
        ...state.byId[action.payload.id],
        isLoading: true,
        error: null,
      },
    },
  };
}

function deleteSuccess(state, action) {
  return {
    ...state,
    byId: removeIdFromObject(action.payload.id, state.byId),
    allIds: removeIdFromArray(action.payload.id, state.allIds),
  };
}

function sheetSuccess(state, action) {
  // clear loading and error, update cache time, add sheets
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.payload.id]: {
        isLoading: false,
        error: null,
        loadedAt: Date.now(),
        data: action.data,
      },
    },
    allIds: [...new Set([...state.allIds, action.payload.id])],
  };
}

function sheetError(state, action) {
  // clear loading and set error
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.payload.id]: {
        ...state.byId[action.payload.id],
        isLoading: false,
        error: action.err,
      },
    },
  };
}

export default createReducer(initialState, {
  [REQ_SHEETS_PENDING]: sheetsPending,
  [REQ_SHEETS_SUCCESS]: sheetsSuccess,
  [REQ_SHEETS_ERROR]: sheetsError,
  [ADD_SHEET_PENDING]: sheetPending,
  [ADD_SHEET_SUCCESS]: sheetSuccess,
  [ADD_SHEET_ERROR]: sheetError,
  [REQ_SHEET_PENDING]: sheetPending,
  [REQ_SHEET_SUCCESS]: sheetSuccess,
  [REQ_SHEET_ERROR]: sheetError,
  [UPDATE_SHEET_PENDING]: sheetPending,
  [UPDATE_SHEET_SUCCESS]: sheetSuccess,
  [UPDATE_SHEET_ERROR]: sheetError,
  [DELETE_SHEET_PENDING]: sheetPending,
  [DELETE_SHEET_SUCCESS]: deleteSuccess,
  [DELETE_SHEET_ERROR]: sheetError,
});
