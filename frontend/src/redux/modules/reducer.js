import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import auth from './auth';
import authors from './authors';
import posts from './posts';
import error from './error';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  authors,
  posts,
  error
});
