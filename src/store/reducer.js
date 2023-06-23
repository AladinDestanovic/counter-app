import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { counterSlice } from "./counterSlice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  count: counterSlice.reducer
  // test: testSlice.reducer,
});