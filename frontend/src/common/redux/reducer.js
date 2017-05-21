import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import auth from "./auth";
import authors from "./authors";
import posts from "./posts";
import error from "./error";

export default combineReducers({
  routing: routerReducer,
  auth,
  authors,
  posts,
  error
});
