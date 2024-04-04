import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profiloReducer from "../reducers/profiloReducers";
import expReducers from "../reducers/expReducers";
import postReducers from "../reducers/postReducers";

const unifiedReducer = combineReducers({
  profilo: profiloReducer,
  exp: expReducers,
  post: postReducers,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
