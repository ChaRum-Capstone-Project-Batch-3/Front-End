import { combineReducers } from "@reduxjs/toolkit";
import login from "./auth/AuthSlicer";
import topic from "./topic/TopicSlicer";
import thread from "./thread/ThreadSlicer";

const rootReducers = combineReducers({
  login,
  topic,
  thread
});

export default rootReducers;
