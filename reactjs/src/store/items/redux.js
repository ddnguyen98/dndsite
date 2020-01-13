import createReducer from '../utils/createReducer';
import { removeIdFromArray, removeIdFromObject } from '../utils/utils';

import {
  REQ_ITEMS_PENDING,
  REQ_ITEMS_SUCCESS,
  REQ_ITEMS_ERROR,
  ADD_ITEM_PENDING,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_ERROR,
  DELETE_ITEM_PENDING,
  UPDATE_ITEM_PENDING,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_ERROR,
} from '../actionTypes';

const initialState = {
  byId: {},
  allIds: [],
  loadedAt: 0,
  isLoading: false,
  error: null,
};

const itemsPending = state => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

const itemsSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    loadedAt: Date.now(),
    byId: {
      ...state.byId,
      ...action.data.reduce((obj, item) => {
        return {
          ...obj,
          [item.id]: {
            data: item,
            isLoading: false,
            loadedAt: Date.now(),
            error: null,
          },
        };
      }, {}),
    },
    allIds: [
      ...new Set([...state.allIds, ...action.data.map(item => item.id)]),
    ],
  };
};

const itemsError = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.err,
  };
};

function itemPending(state, action) {
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

function itemSuccess(state, action) {
  // clear loading and error, update cache time, add items
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

function itemSaveSuccess(state, action) {
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

function itemError(state, action) {
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
  [REQ_ITEMS_PENDING]: itemsPending,
  [REQ_ITEMS_SUCCESS]: itemsSuccess,
  [REQ_ITEMS_ERROR]: itemsError,
  [ADD_ITEM_PENDING]: itemPending,
  [ADD_ITEM_SUCCESS]: itemSuccess,
  [ADD_ITEM_ERROR]: itemError,
  [DELETE_ITEM_PENDING]: itemPending,
  [DELETE_ITEM_SUCCESS]: deleteSuccess,
  [DELETE_ITEM_ERROR]: itemError,
  [UPDATE_ITEM_PENDING]: itemPending,
  [UPDATE_ITEM_SUCCESS]: itemSaveSuccess,
  [UPDATE_ITEM_ERROR]: itemError,
});
