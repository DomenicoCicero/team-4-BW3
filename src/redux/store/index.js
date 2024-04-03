import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profiloReducer from "../reducers/profiloReducers";

const unifiedReducer = combineReducers({
  profilo: profiloReducer,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
