import createReducer from '../utils/createReducer';
import { removeIdFromArray, removeIdFromObject } from '../utils/utils';

import {
  REQ_SKILLS_PENDING,
  REQ_SKILLS_SUCCESS,
  REQ_SKILLS_ERROR,
  ADD_SKILL_PENDING,
  ADD_SKILL_SUCCESS,
  ADD_SKILL_ERROR,
  REQ_SKILL_PENDING,
  REQ_SKILL_SUCCESS,
  REQ_SKILL_ERROR,
  UPDATE_SKILL_PENDING,
  UPDATE_SKILL_SUCCESS,
  UPDATE_SKILL_ERROR,
  DELETE_SKILL_PENDING,
  DELETE_SKILL_SUCCESS,
  DELETE_SKILL_ERROR,
} from '../actionTypes';

const initialState = {
  byId: {},
  allIds: [],
  loadedAt: 0,
  isLoading: false,
  error: null,
};

const skillsPending = state => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

const skillsSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    loadedAt: Date.now(),
    byId: {
      ...state.byId,
      ...action.data.reduce((obj, skill) => {
        return {
          ...obj,
          [skill.id]: {
            data: skill,
            isLoading: false,
            loadedAt: Date.now(),
            error: null,
          },
        };
      }, {}),
    },
    allIds: [
      ...new Set([...state.allIds, ...action.data.map(skill => skill.id)]),
    ],
  };
};

const skillsError = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.err,
  };
};

function skillPending(state, action) {
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

function skillSuccess(state, action) {
  // clear loading and error, update cache time, add skills
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

function skillSaveSuccess(state, action) {
  console.log(state);
  console.log(action);
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
  console.log(action);
  return {
    ...state,
    byId: removeIdFromObject(action.payload.id, state.byId),
    allIds: removeIdFromArray(action.payload.id, state.allIds),
  };
}

function skillError(state, action) {
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
  [REQ_SKILLS_PENDING]: skillsPending,
  [REQ_SKILLS_SUCCESS]: skillsSuccess,
  [REQ_SKILLS_ERROR]: skillsError,
  [ADD_SKILL_PENDING]: skillPending,
  [ADD_SKILL_SUCCESS]: skillSuccess,
  [ADD_SKILL_ERROR]: skillError,
  [REQ_SKILL_PENDING]: skillPending,
  [REQ_SKILL_SUCCESS]: skillSuccess,
  [REQ_SKILL_ERROR]: skillError,
  [UPDATE_SKILL_PENDING]: skillPending,
  [UPDATE_SKILL_SUCCESS]: skillSaveSuccess,
  [UPDATE_SKILL_ERROR]: skillError,
  [DELETE_SKILL_PENDING]: skillPending,
  [DELETE_SKILL_SUCCESS]: deleteSuccess,
  [DELETE_SKILL_ERROR]: skillError,
});
