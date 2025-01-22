import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TQuestItem = {
  type: string;
  imageUrl: string;
};

interface iQuestItems {
  items: TQuestItem[];
}

const initialState: iQuestItems = {
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

export default QuestItemsSlice;
