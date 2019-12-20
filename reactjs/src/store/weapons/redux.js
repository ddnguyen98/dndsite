import createReducer from '../utils/createReducer';
import { removeIdFromArray, removeIdFromObject } from '../utils/utils';

import {
  REQ_WEAPONS_PENDING,
  REQ_WEAPONS_SUCCESS,
  REQ_WEAPONS_ERROR,
  ADD_WEAPON_PENDING,
  ADD_WEAPON_SUCCESS,
  ADD_WEAPON_ERROR,
  DELETE_WEAPON_PENDING,
  DELETE_WEAPON_SUCCESS,
  DELETE_WEAPON_ERROR,
} from '../actionTypes';

const initialState = {
  byId: {},
  allIds: [],
  loadedAt: 0,
  isLoading: false,
  error: null,
};

const weaponsPending = state => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

const weaponsSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    loadedAt: Date.now(),
    byId: {
      ...state.byId,
      ...action.data.reduce((obj, weapon) => {
        return {
          ...obj,
          [weapon.id]: {
            data: weapon,
            isLoading: false,
            loadedAt: Date.now(),
            error: null,
          },
        };
      }, {}),
    },
    allIds: [
      ...new Set([...state.allIds, ...action.data.map(weapon => weapon.id)]),
    ],
  };
};

const weaponsError = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.err,
  };
};

function weaponPending(state, action) {
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

function weaponSuccess(state, action) {
  // clear loading and error, update cache time, add weapons
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

function deleteSuccess(state, action) {
  return {
    ...state,
    byId: removeIdFromObject(action.payload.id, state.byId),
    allIds: removeIdFromArray(action.payload.id, state.allIds),
  };
}

function weaponError(state, action) {
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
  [REQ_WEAPONS_PENDING]: weaponsPending,
  [REQ_WEAPONS_SUCCESS]: weaponsSuccess,
  [REQ_WEAPONS_ERROR]: weaponsError,
  [ADD_WEAPON_PENDING]: weaponPending,
  [ADD_WEAPON_SUCCESS]: weaponSuccess,
  [ADD_WEAPON_ERROR]: weaponError,
  [DELETE_WEAPON_PENDING]: weaponPending,
  [DELETE_WEAPON_SUCCESS]: deleteSuccess,
  [DELETE_WEAPON_ERROR]: weaponError,
});
