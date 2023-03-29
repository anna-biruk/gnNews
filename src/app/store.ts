import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import newsReducer from "../features/news/newsSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
