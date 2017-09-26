import * as postsActions from '../redux/posts'
import * as authorsAction from '../redux/authors'

export const loadAuthorsAndPosts = () => (dispatch, getState) => {
  if (!postsActions.isLoaded(getState())) {
    return Promise.all([
      dispatch(postsActions.loadPosts()),
      dispatch(authorsAction.loadAuthors()),
    ])
  }
}
