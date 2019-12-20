import uuid from 'uuid/v1';
import {
  REQ_SKILLS_PENDING,
  REQ_SKILLS_SUCCESS,
  REQ_SKILLS_ERROR,
  ADD_SKILL_PENDING,
  ADD_SKILL_SUCCESS,
  ADD_SKILL_ERROR,
  REQ_SKILL_PENDING,
  REQ_SKILL_SUCCESS,
  REQ_SKILL_ERROR,
  UPDATE_SKILL_PENDING,
  UPDATE_SKILL_SUCCESS,
  UPDATE_SKILL_ERROR,
  DELETE_SKILL_PENDING,
  DELETE_SKILL_SUCCESS,
  DELETE_SKILL_ERROR,
} from '../actionTypes';

import API from '../../API';

const CACHE_TIME = 1000 * 60 * 5;

export const fetchSkills = () => ({
  types: [REQ_SKILLS_PENDING, REQ_SKILLS_SUCCESS, REQ_SKILLS_ERROR],
  callAPI: () => API.get('/skills'),
  shouldCallAPI: state => {
    const { loadedAt, isLoading } = state.skills;
    if (isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    return !loadedAt || !isCached;
  },
});

export const createSkill = skill => {
  const id = uuid();
  return {
    types: [ADD_SKILL_PENDING, ADD_SKILL_SUCCESS, ADD_SKILL_ERROR],
    callAPI: () => API.post('/skills', { id, ...skill }),
    payload: { id },
  };
};

export const deleteSkill = id => ({
  types: [DELETE_SKILL_PENDING, DELETE_SKILL_SUCCESS, DELETE_SKILL_ERROR],
  callAPI: () => API.delete(`/skills/${id}`),
  payload: { id },
});
