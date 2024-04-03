import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profiloReducer from "../reducers/profiloReducers";
import expReducers from "../reducers/expReducers";

const unifiedReducer = combineReducers({
  profilo: profiloReducer,
  exp: expReducers,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
