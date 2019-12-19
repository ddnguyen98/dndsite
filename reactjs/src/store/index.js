import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import callAPI from './utils/callAPIMiddleware';

import sheets from './sheets/redux';
import skills from './skills/redux';
import feats from './feats/redux';

const rootReducer = combineReducers({
  sheets,
  skills,
  feats,
});

const middleware = applyMiddleware(thunkMiddleware, callAPI, createLogger());
export default createStore(rootReducer, middleware);
