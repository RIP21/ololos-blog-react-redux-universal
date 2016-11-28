/* eslint-disable new-cap  */

import {UserAuthWrapper} from 'redux-auth-wrapper';

export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.authentication, // how to get the user state
  failureRedirectPath: '/login',
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
  predicate: authentication => authentication.isAuthenticated
});

export const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.authentication, // how to get the user state
  authenticatingSelector: state => state.authentication.loading,
  LoadingComponent: null,
  failureRedirectPath: '/',
  wrapperDisplayName: 'UserIsNotAuthenticated', // a nice name for this auth check
  predicate: authentication => !authentication.isAuthenticated,
  allowRedirectBack: false
});

export const VisibleToUser = UserAuthWrapper({
  authSelector: state => state.authentication, // how to get the user state
  wrapperDisplayName: 'VisibleToUser', // a nice name for this auth check
  predicate: authentication => authentication.isAuthenticated,
  FailureComponent: null
});
