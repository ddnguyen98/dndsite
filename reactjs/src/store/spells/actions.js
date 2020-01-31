import uuid from 'uuid/v1';
import {
  REQ_SPELLS_PENDING,
  REQ_SPELLS_SUCCESS,
  REQ_SPELLS_ERROR,
  ADD_SPELL_PENDING,
  ADD_SPELL_SUCCESS,
  ADD_SPELL_ERROR,
  DELETE_SPELL_PENDING,
  DELETE_SPELL_SUCCESS,
  DELETE_SPELL_ERROR,
  UPDATE_SPELL_PENDING,
  UPDATE_SPELL_SUCCESS,
  UPDATE_SPELL_ERROR,
} from '../actionTypes';

import API from '../../API';

// Actions called from components come here, go through 3 types based on loading
// Next used function in utils to post or get data based on given data
// If needed will send payload with response data

const CACHE_TIME = 1000 * 60 * 5;

export const fetchSpells = id => ({
  types: [REQ_SPELLS_PENDING, REQ_SPELLS_SUCCESS, REQ_SPELLS_ERROR],
  callAPI: () => API.get(`/spells?characterId=${id}`),
  shouldCallAPI: state => {
    const { loadedAt, isLoading } = state.spells;
    if (isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    return !loadedAt || !isCached;
  },
});

export const createSpell = characterId => {
  const id = uuid();
  return {
    types: [ADD_SPELL_PENDING, ADD_SPELL_SUCCESS, ADD_SPELL_ERROR],
    callAPI: () => API.post('/spells', { id, characterId }),
    payload: { id },
  };
};

export const updateSpell = spell => ({
  types: [UPDATE_SPELL_PENDING, UPDATE_SPELL_SUCCESS, UPDATE_SPELL_ERROR],
  callAPI: () => API.put(`/spells/${spell.id}`, spell.data),
  payload: { id: spell.id, data: spell.data },
});

export const deleteSpell = id => ({
  types: [DELETE_SPELL_PENDING, DELETE_SPELL_SUCCESS, DELETE_SPELL_ERROR],
  callAPI: () => API.delete(`/spells/${id}`),
  payload: { id },
});
