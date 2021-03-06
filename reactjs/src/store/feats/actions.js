import uuid from 'uuid/v1';
import {
  REQ_FEATS_PENDING,
  REQ_FEATS_SUCCESS,
  REQ_FEATS_ERROR,
  ADD_FEAT_PENDING,
  ADD_FEAT_SUCCESS,
  ADD_FEAT_ERROR,
  UPDATE_FEAT_PENDING,
  UPDATE_FEAT_SUCCESS,
  UPDATE_FEAT_ERROR,
  DELETE_FEAT_SUCCESS,
  DELETE_FEAT_ERROR,
  DELETE_FEAT_PENDING,
} from '../actionTypes';

import API from '../../API';

const CACHE_TIME = 1000 * 60 * 5;

export const fetchFeats = () => ({
  types: [REQ_FEATS_PENDING, REQ_FEATS_SUCCESS, REQ_FEATS_ERROR],
  callAPI: () => API.get('/feats'),
  shouldCallAPI: state => {
    const { loadedAt, isLoading } = state.feats;
    if (isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    return !loadedAt || !isCached;
  },
});

export const createFeat = feat => {
  const id = uuid();
  return {
    types: [ADD_FEAT_PENDING, ADD_FEAT_SUCCESS, ADD_FEAT_ERROR],
    callAPI: () => API.post('/feats', { id, ...feat }),
    payload: { id },
  };
};

export const updateFeat = feat => ({
  types: [UPDATE_FEAT_PENDING, UPDATE_FEAT_SUCCESS, UPDATE_FEAT_ERROR],
  callAPI: () => API.put(`/feats/${feat.id}`),
  payload: { id: feat.id, data: feat.data },
});

export const deleteFeat = id => ({
  types: [DELETE_FEAT_PENDING, DELETE_FEAT_SUCCESS, DELETE_FEAT_ERROR],
  callAPI: () => API.delete(`/feats/${id}`),
  payload: { id },
});
