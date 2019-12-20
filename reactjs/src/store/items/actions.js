import uuid from 'uuid/v1';
import {
  REQ_ITEMS_PENDING,
  REQ_ITEMS_SUCCESS,
  REQ_ITEMS_ERROR,
  ADD_ITEM_PENDING,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
} from '../actionTypes';

import API from '../../API';

const CACHE_TIME = 1000 * 60 * 5;

export const fetchItems = () => ({
  types: [REQ_ITEMS_PENDING, REQ_ITEMS_SUCCESS, REQ_ITEMS_ERROR],
  callAPI: () => API.get('/items'),
  shouldCallAPI: state => {
    const { loadedAt, isLoading } = state.items;
    if (isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    return !loadedAt || !isCached;
  },
});

export const createItem = item => {
  const id = uuid();
  return {
    types: [ADD_ITEM_PENDING, ADD_ITEM_SUCCESS, ADD_ITEM_ERROR],
    callAPI: () => API.post('/items', { id, ...item }),
    payload: { id },
  };
};
