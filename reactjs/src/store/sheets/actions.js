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
  UPDATE_SHEET_PENDING,
  UPDATE_SHEET_SUCCESS,
  UPDATE_SHEET_ERROR,
  DELETE_SHEET_PENDING,
  DELETE_SHEET_SUCCESS,
  DELETE_SHEET_ERROR,
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

export const createSheet = () => {
  const id = uuid();
  return {
    types: [ADD_SHEET_PENDING, ADD_SHEET_SUCCESS, ADD_SHEET_ERROR],
    callAPI: () => API.post('/characters', { id }),
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

export const updateSheet = sheet => ({
  types: [UPDATE_SHEET_PENDING, UPDATE_SHEET_SUCCESS, UPDATE_SHEET_ERROR],
  callAPI: () => API.put(`/characters/${sheet.id}`),
  payload: { id: sheet.id, data: sheet.inputs },
});

export const deleteSheet = id => ({
  types: [DELETE_SHEET_PENDING, DELETE_SHEET_SUCCESS, DELETE_SHEET_ERROR],
  callAPI: () => API.delete(`/characters/${id}`),
  payload: { id },
});
