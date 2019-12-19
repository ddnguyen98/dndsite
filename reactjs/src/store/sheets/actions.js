import uuid from 'uuid/v1';
import {
  REQ_SHEETS_PENDING,
  REQ_SHEETS_SUCCESS,
  REQ_SHEETS_ERROR,
  ADD_SHEET_PENDING,
  ADD_SHEET_SUCCESS,
  ADD_SHEET_ERROR,
  REQ_SHEET_PENDING,
  REQ_SHEET_SUCCESS,
  REQ_SHEET_ERROR,
} from '../actionTypes';

import API from '../../API';

const CACHE_TIME = 1000 * 60 * 5;

export const fetchSheets = () => ({
  types: [REQ_SHEETS_PENDING, REQ_SHEETS_SUCCESS, REQ_SHEETS_ERROR],
  callAPI: () => API.get('/characters'),
  shouldCallAPI: state => {
    const { loadedAt, isLoading } = state.sheets;
    if (isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    return !loadedAt || !isCached;
  },
});

export const createSheet = sheet => {
  const id = uuid();
  return {
    types: [ADD_SHEET_PENDING, ADD_SHEET_SUCCESS, ADD_SHEET_ERROR],
    callAPI: () => API.post('/characters', { id, ...sheet }),
    payload: { id },
  };
};

export const fetchSheet = id => ({
  types: [REQ_SHEET_PENDING, REQ_SHEET_SUCCESS, REQ_SHEET_ERROR],
  callAPI: () => API.get(`/characters/${id}`),
  shouldCallAPI: state => {
    const sheet = state.sheets.byId[id] || {};
    const { loadedAt, isLoading } = sheet;
    if (!sheet || isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    return !loadedAt || !isCached;
  },
  payload: { id },
});
