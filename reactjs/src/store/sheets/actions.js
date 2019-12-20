import {
  REQ_SHEETS_PENDING,
  REQ_SHEETS_SUCCESS,
  REQ_SHEETS_ERROR,
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

export const fetchAwesome = () => ({});
