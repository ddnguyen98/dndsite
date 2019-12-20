import uuid from 'uuid/v1';
import {
  REQ_SPELLS_PENDING,
  REQ_SPELLS_SUCCESS,
  REQ_SPELLS_ERROR,
  ADD_SPELL_PENDING,
  ADD_SPELL_SUCCESS,
  ADD_SPELL_ERROR,
} from '../actionTypes';

import API from '../../API';

const CACHE_TIME = 1000 * 60 * 5;

export const fetchSpells = () => ({
  types: [REQ_SPELLS_PENDING, REQ_SPELLS_SUCCESS, REQ_SPELLS_ERROR],
  callAPI: () => API.get('/spells'),
  shouldCallAPI: state => {
    const { loadedAt, isLoading } = state.spells;
    if (isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    return !loadedAt || !isCached;
  },
});

export const createSpell = spell => {
  const id = uuid();
  return {
    types: [ADD_SPELL_PENDING, ADD_SPELL_SUCCESS, ADD_SPELL_ERROR],
    callAPI: () => API.post('/spells', { id, ...spell }),
    payload: { id },
  };
};
