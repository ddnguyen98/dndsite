import uuid from 'uuid/v1';
import {
  REQ_SHEETS_PENDING,
  REQ_SHEETS_SUCCESS,
  REQ_SHEETS_ERROR,
  ADD_SHEET_PENDING,
  ADD_SHEET_SUCCESS,
  ADD_SHEET_ERROR,
} from '../actionTypes';

import API from '../../API';

const CACHE_TIME = 1000 * 60 * 5;

export const fetchSheets = () => ({
  types: [REQ_SHEETS_PENDING, REQ_SHEETS_SUCCESS, REQ_SHEETS_ERROR],
  callAPI: () => API.get('/characters'),
  shouldCallAPI: state => {
    const { loadedAt, isLoading } = state.sheets;
    // if sheets are currently loading don't call
    if (isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
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
