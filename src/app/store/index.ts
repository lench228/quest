import { configureStore } from "@reduxjs/toolkit";
import QuestItemsSlice from "../../entities/quest-items/model/quest-items.slice.ts";

export const store = configureStore({
  reducer: {
    [QuestItemsSlice.name]: QuestItemsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
