import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice/counterSlice";

const rootReducer = combineReducers({
  currentUser: counterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;