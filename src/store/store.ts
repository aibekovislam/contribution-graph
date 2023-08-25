import { configureStore } from "@reduxjs/toolkit";
import contributionsReducer from "./features/dateSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    contributions: contributionsReducer,
  },
});

export default store;
