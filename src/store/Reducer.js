import { combineReducers } from "@reduxjs/toolkit";
import login from "./auth/AuthSlicer";
import topic from "./topic/TopicSlicer";

const rootReducers = combineReducers({
  login,
  topic,
});

export default rootReducers;
