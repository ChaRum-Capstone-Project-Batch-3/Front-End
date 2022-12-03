import { combineReducers } from "@reduxjs/toolkit";
import login from "./AuthSlicer";

const rootReducers = combineReducers({
  login,
});

export default rootReducers;
