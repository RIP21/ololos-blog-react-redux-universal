import * as types from '../../constants/actionTypes';
import initialState from '../../constants/initialState';

export function loadPosts() {
  return {
    types: [types.LOAD_POSTS, types.LOAD_POSTS_SUCCESS, types.LOAD_POSTS_FAIL],
    promise: client => client.get('api/posts')
  };
}

export default function postReducer(state = initialState.posts, action = {}) {
  switch (action.type) {

    case types.LOAD_POSTS:
      return state;
    case types.LOAD_POSTS_SUCCESS:
      return action.result._embedded.posts;
    case types.LOAD_POSTS_FAIL:
      return state;

    default:
      return state;
  }
}

