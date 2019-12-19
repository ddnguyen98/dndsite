import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import callAPI from './utils/callAPIMiddleware';

import sheets from './sheets/redux';
import skills from './skills/redux';

const rootReducer = combineReducers({
  sheets,
  skills,
});

const middleware = applyMiddleware(thunkMiddleware, callAPI, createLogger());
export default createStore(rootReducer, middleware);
