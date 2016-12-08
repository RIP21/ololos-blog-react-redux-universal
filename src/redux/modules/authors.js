import initialState from '../../constants/initialState';
/*eslint-disable no-underscore-dangle*/

export const LOAD_AUTHORS = 'authors/LOAD_ALL';
export const LOAD_AUTHORS_FAIL = 'authors/LOAD_ALL_FAIL';
export const LOAD_AUTHORS_SUCCESS = 'authors/LOAD_ALL_SUCCESS';

export default function reducer(state = initialState.authors, action = {}) {
  switch (action.type) {

    case LOAD_AUTHORS:
      return state;
    case LOAD_AUTHORS_SUCCESS:
      return action.result._embedded.authors;
    case LOAD_AUTHORS_FAIL:
      return state;

    default:
      return state;
  }
}

export function loadAuthors() {
  return {
    types: [LOAD_AUTHORS, LOAD_AUTHORS_SUCCESS, LOAD_AUTHORS_FAIL],
    promise: client => client.get('api/authors')
  };
}
