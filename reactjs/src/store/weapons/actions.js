import uuid from 'uuid/v1';
import {
  REQ_WEAPONS_PENDING,
  REQ_WEAPONS_SUCCESS,
  REQ_WEAPONS_ERROR,
  ADD_WEAPON_PENDING,
  ADD_WEAPON_SUCCESS,
  ADD_WEAPON_ERROR,
} from '../actionTypes';

import API from '../../API';

const CACHE_TIME = 1000 * 60 * 5;

export const fetchWeapons = () => ({
  types: [REQ_WEAPONS_PENDING, REQ_WEAPONS_SUCCESS, REQ_WEAPONS_ERROR],
  callAPI: () => API.get('/weapons'),
  shouldCallAPI: state => {
    const { loadedAt, isLoading } = state.weapons;
    if (isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    return !loadedAt || !isCached;
  },
});

export const createWeapon = weapon => {
  const id = uuid();
  return {
    types: [ADD_WEAPON_PENDING, ADD_WEAPON_SUCCESS, ADD_WEAPON_ERROR],
    callAPI: () => API.post('/weapons', { id, ...weapon }),
    payload: { id },
  };
};
