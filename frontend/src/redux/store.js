// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import jobSlice from "./jobSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
  },
});
