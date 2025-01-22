import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TQuestItem } from "../types/types.ts";

export interface iQuestItemsSlice {
  items: TQuestItem[];
}

export const initialState: iQuestItemsSlice = {
  items: [
    {
      type: "image",
      imageUrl: "",
    },
  ],
};

const QuestItemsSlice = createSlice({
  name: "quest-items",
  initialState,
  selectors: {
    selectItems: (store) => store.items,
  },
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push({ type: "image", imageUrl: action.payload });
    },
  },
});

export const { addItem } = QuestItemsSlice.actions;
export const { selectItems } = QuestItemsSlice.selectors;
export type QuestItemState = typeof initialState;

export default QuestItemsSlice;
