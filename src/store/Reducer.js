import { combineReducers } from "@reduxjs/toolkit";
<<<<<<< HEAD
import thread from "./thread/ThreadSlicer";

const rootReducers = combineReducers({
  thread
=======
import login from "./auth/AuthSlicer";
import topic from "./topic/TopicSlicer";

const rootReducers = combineReducers({
  login,
  topic,
>>>>>>> dev
});

export default rootReducers;
