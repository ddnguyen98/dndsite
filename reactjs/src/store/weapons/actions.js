import uuid from 'uuid/v1';
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
  UPDATE_WEAPON_PENDING,
  UPDATE_WEAPON_SUCCESS,
  UPDATE_WEAPON_ERROR,
} from '../actionTypes';

import API from '../../API';

const CACHE_TIME = 1000 * 60 * 5;

export const fetchWeapons = id => ({
  types: [REQ_WEAPONS_PENDING, REQ_WEAPONS_SUCCESS, REQ_WEAPONS_ERROR],
  callAPI: () => API.get(`/weapons?characterId=${id}`),
  shouldCallAPI: state => {
    const { loadedAt, isLoading } = state.weapons;
    if (isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    return !loadedAt || !isCached;
  },
});

export const createWeapon = characterId => {
  const id = uuid();
  return {
    types: [ADD_WEAPON_PENDING, ADD_WEAPON_SUCCESS, ADD_WEAPON_ERROR],
    callAPI: () => API.post('/weapons', { id, characterId }),
    payload: { id },
  };
};

export const updateWeapon = weapon => ({
  types: [UPDATE_WEAPON_PENDING, UPDATE_WEAPON_SUCCESS, UPDATE_WEAPON_ERROR],
  callAPI: () => API.put(`/weapons/${weapon.id}`, weapon.data),
  payload: { id: weapon.id, data: weapon.data },
});

export const deleteWeapon = id => ({
  types: [DELETE_WEAPON_PENDING, DELETE_WEAPON_SUCCESS, DELETE_WEAPON_ERROR],
  callAPI: () => API.delete(`/weapons/${id}`),
  payload: { id },
});
