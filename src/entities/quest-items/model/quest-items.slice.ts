import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TQuestItem } from "../types/types";
import {v4 as uuidv4} from "uuid";

export interface iQuestItemsSlice {
  items: TQuestItem[];
  isSliderOpen: boolean;
}

export const initialState: iQuestItemsSlice = {
  items: [
    {
      type: "image",
      imageUrl: "",
      id: "",
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
      state.items.push({ type: "image", imageUrl: action.payload, id: uuidv4()});
    },
    addImage: (state, action: PayloadAction<{ previewUrl: string, order: number }>) => {
      if(state.items[action.payload.order - 1]){
        state.items[action.payload.order - 1].imageUrl = action.payload.previewUrl;
      }

    },

    toggleSlider: (state, action: PayloadAction<boolean>) => {
      state.isSliderOpen = action.payload;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, toggleSlider, removeItem, addImage} = QuestItemsSlice.actions;
export const { selectItems, selectIsSliderOpen } = QuestItemsSlice.selectors;
export type QuestItemState = typeof initialState;

export default QuestItemsSlice;
