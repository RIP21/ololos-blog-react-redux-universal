import * as types from '../../constants/actionTypes';
import initialState from '../../constants/initialState';

export function loadAuthors() {
  return {
    types: [types.LOAD_AUTHORS, types.LOAD_AUTHORS_SUCCESS, types.LOAD_AUTHORS_FAIL],
    promise: client => client.get('/api/authors')
  };
}

export default function authorReducer(state = initialState.authors, action = {}) {
  switch (action.type) {

    case types.LOAD_AUTHORS:
      return state;
    case types.LOAD_AUTHORS_SUCCESS:
      return action.result._embedded.authors;
    case types.LOAD_AUTHORS_FAIL:
      return state;

    default:
      return state;
  }
}

