import { combineReducers } from "@reduxjs/toolkit";
import login from "./auth/AuthSlicer";

const rootReducers = combineReducers({
  login,
});

export default rootReducers;
