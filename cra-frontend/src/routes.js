import React from 'react'
import { IndexRoute, Route } from 'react-router'

import {
  App,
  AuthorPage,
  EditPostPage,
  Home,
  About,
  Login,
  ManagePostsPage,
  NotFound,
  PostPage,
  PrivateRoute as privateRoute,
} from './containers'

export default function() {
  //eslint-disable-line
  /**
   * Please keep routes in alphabetical order
   */
  const requireLogin = privateRoute()
  return (
    <Route path="/" component={App}>
      {/* Home (main) route */}
      <IndexRoute component={Home} />

      {/* Routes requiring login */}
      <Route>
        <Route
          path="admin/create/post"
          component={requireLogin(EditPostPage)}
        />
        <Route
          path="admin/edit/post/:id"
          component={requireLogin(EditPostPage)}
        />
        <Route path="admin/posts" component={requireLogin(ManagePostsPage)} />
      </Route>

      {/* Routes */}
      <Route path="about" component={About} />
      <Route path="login" component={Login} />
      <Route path="post/:id" component={PostPage} />
      <Route path="author/:id" component={AuthorPage} />

      {/* Catch all route */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  )
}
