import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TQuestItem } from "../types/types";

export interface iQuestItemsSlice {
  items: TQuestItem[];
  isSliderOpen: boolean;
}

export const initialState: iQuestItemsSlice = {
  items: [
    {
      type: "image",
      imageUrl: "",
    },
  ],
  isSliderOpen: true,
};

const QuestItemsSlice = createSlice({
  name: "quest-items",
  initialState,
  selectors: {
    selectItems: (store) => store.items,
    selectIsSliderOpen: (store) => store.isSliderOpen,
  },
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push({ type: "image", imageUrl: action.payload });
    },
    toggleSlider: (state, action: PayloadAction<boolean>) => {
      state.isSliderOpen = action.payload;
    },
  },
});

export const { addItem, toggleSlider } = QuestItemsSlice.actions;
export const { selectItems, selectIsSliderOpen } = QuestItemsSlice.selectors;
export type QuestItemState = typeof initialState;

export default QuestItemsSlice;
