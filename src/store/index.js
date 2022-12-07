import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./Reducer";

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

<<<<<<< HEAD
export default store;
=======
export default store;
>>>>>>> dev
