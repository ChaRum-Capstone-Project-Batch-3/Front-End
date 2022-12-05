import { combineReducers } from "@reduxjs/toolkit";
import topic from "./thread/ThreadSlicer";

const rootReducers = combineReducers({
  topic
});

export default rootReducers;
