import uuid from 'uuid/v1';
import {
  REQ_ITEMS_PENDING,
  REQ_ITEMS_SUCCESS,
  REQ_ITEMS_ERROR,
  ADD_ITEM_PENDING,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  UPDATE_ITEM_PENDING,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_ERROR,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_ERROR,
  DELETE_ITEM_PENDING,
} from '../actionTypes';

import API from '../../API';

const CACHE_TIME = 1000 * 60 * 5;

export const fetchItems = id => ({
  types: [REQ_ITEMS_PENDING, REQ_ITEMS_SUCCESS, REQ_ITEMS_ERROR],
  callAPI: () => API.get(`/items?characterId=${id}`),
  shouldCallAPI: state => {
    const { loadedAt, isLoading } = state.items;
    if (isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    return !loadedAt || !isCached;
  },
});

export const createItem = characterId => {
  const id = uuid();
  return {
    types: [ADD_ITEM_PENDING, ADD_ITEM_SUCCESS, ADD_ITEM_ERROR],
    callAPI: () => API.post('/items', { id, characterId }),
    payload: { id },
  };
};

export const updateItem = item => ({
  types: [UPDATE_ITEM_PENDING, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_ERROR],
  callAPI: () => API.put(`/items/${item.id}`, item.data),
  payload: { id: item.id, data: item.data },
});

export const deleteItem = id => ({
  types: [DELETE_ITEM_PENDING, DELETE_ITEM_SUCCESS, DELETE_ITEM_ERROR],
  callAPI: () => API.delete(`/items/${id}`),
  payload: { id },
});
