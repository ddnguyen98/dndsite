import createReducer from '../utils/createReducer';

import {
  REQ_SPELLS_PENDING,
  REQ_SPELLS_SUCCESS,
  REQ_SPELLS_ERROR,
  ADD_SPELL_PENDING,
  ADD_SPELL_SUCCESS,
  ADD_SPELL_ERROR,
} from '../actionTypes';

const initialState = {
  byId: {},
  allIds: [],
  loadedAt: 0,
  isLoading: false,
  error: null,
};

const spellsPending = state => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

const spellsSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    loadedAt: Date.now(),
    byId: {
      ...state.byId,
      ...action.data.reduce((obj, spell) => {
        return {
          ...obj,
          [spell.id]: {
            data: spell,
            isLoading: false,
            loadedAt: Date.now(),
            error: null,
          },
        };
      }, {}),
    },
    allIds: [
      ...new Set([...state.allIds, ...action.data.map(spell => spell.id)]),
    ],
  };
};

const spellsError = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.err,
  };
};

function spellPending(state, action) {
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

function spellSuccess(state, action) {
  // clear loading and error, update cache time, add spells
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

function spellError(state, action) {
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
  [REQ_SPELLS_PENDING]: spellsPending,
  [REQ_SPELLS_SUCCESS]: spellsSuccess,
  [REQ_SPELLS_ERROR]: spellsError,
  [ADD_SPELL_PENDING]: spellPending,
  [ADD_SPELL_SUCCESS]: spellSuccess,
  [ADD_SPELL_ERROR]: spellError,
});
