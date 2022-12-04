import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./auth/AuthReducer";

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
