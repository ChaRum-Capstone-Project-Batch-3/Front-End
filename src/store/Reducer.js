import { combineReducers } from "@reduxjs/toolkit";
import thread from "./thread/ThreadSlicer";

const rootReducers = combineReducers({
  thread
});

export default rootReducers;
