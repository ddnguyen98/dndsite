import createReducer from '../utils/createReducer';
import { removeIdFromArray, removeIdFromObject } from '../utils/utils';

import {
  REQ_FEATS_PENDING,
  REQ_FEATS_SUCCESS,
  REQ_FEATS_ERROR,
  ADD_FEAT_PENDING,
  ADD_FEAT_SUCCESS,
  ADD_FEAT_ERROR,
  UPDATE_FEAT_PENDING,
  UPDATE_FEAT_SUCCESS,
  UPDATE_FEAT_ERROR,
  DELETE_FEAT_SUCCESS,
  DELETE_FEAT_ERROR,
  DELETE_FEAT_PENDING,
} from '../actionTypes';

const initialState = {
  byId: {},
  allIds: [],
  loadedAt: 0,
  isLoading: false,
  error: null,
};

const featsPending = state => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

const featsSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    loadedAt: Date.now(),
    byId: {
      ...state.byId,
      ...action.data.reduce((obj, feat) => {
        return {
          ...obj,
          [feat.id]: {
            data: feat,
            isLoading: false,
            loadedAt: Date.now(),
            error: null,
          },
        };
      }, {}),
    },
    allIds: [
      ...new Set([...state.allIds, ...action.data.map(feat => feat.id)]),
    ],
  };
};

const featsError = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.err,
  };
};

function featPending(state, action) {
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

function featSuccess(state, action) {
  // clear loading and error, update cache time, add feats
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

function featSaveSuccess(state, action) {
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.payload.id]: {
        isLoading: false,
        error: null,
        loadedAt: Date.now(),
        data: action.payload.data,
      },
    },
    allIds: [...new Set([...state.allIds, action.payload.id])],
  };
}

function deleteSuccess(state, action) {
  return {
    ...state,
    byId: removeIdFromObject(action.payload.id, state.byId),
    allIds: removeIdFromArray(action.payload.id, state.allIds),
  };
}

function featError(state, action) {
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
  [REQ_FEATS_PENDING]: featsPending,
  [REQ_FEATS_SUCCESS]: featsSuccess,
  [REQ_FEATS_ERROR]: featsError,
  [ADD_FEAT_PENDING]: featPending,
  [ADD_FEAT_SUCCESS]: featSuccess,
  [ADD_FEAT_ERROR]: featError,
  [UPDATE_FEAT_PENDING]: featPending,
  [UPDATE_FEAT_SUCCESS]: featSaveSuccess,
  [UPDATE_FEAT_ERROR]: featError,
  [DELETE_FEAT_SUCCESS]: deleteSuccess,
  [DELETE_FEAT_ERROR]: featError,
  [DELETE_FEAT_PENDING]: featPending,
});
