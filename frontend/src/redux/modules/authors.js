/*eslint-disable no-underscore-dangle*/
export const LOAD_AUTHORS = 'authors/LOAD_ALL';
export const LOAD_AUTHORS_FAIL = 'authors/LOAD_ALL_FAIL';
export const LOAD_AUTHORS_SUCCESS = 'authors/LOAD_ALL_SUCCESS';

export default function reducer(state = [], action = {}) {
  switch (action.type) {

    case LOAD_AUTHORS:
      return {
        ...state,
        loaded: true,
        loading: false,
      };
    case LOAD_AUTHORS_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        authors: action.result._embedded.authors
      };
    case LOAD_AUTHORS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.authors && globalState.authors.loaded;
}

export function loadAuthors() {
  return {
    types: [LOAD_AUTHORS, LOAD_AUTHORS_SUCCESS, LOAD_AUTHORS_FAIL],
    promise: client => client.get('/authors')
  };
}
