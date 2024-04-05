import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profiloReducer from "../reducers/profiloReducers";
import expReducers from "../reducers/expReducers";
import postReducers from "../reducers/postReducers";
import commentReducers from "../reducers/commentReducers";

const unifiedReducer = combineReducers({
  profilo: profiloReducer,
  exp: expReducers,
  post: postReducers,
  comment: commentReducers,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
