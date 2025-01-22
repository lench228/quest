import { QuestItems } from "./quest-items.tsx";
import { ReactNode } from "react";

import QuestItemsSlice, {
  initialState,
  iQuestItemsSlice,
} from "../model/quest-items.slice.ts";
import Mockstore from "../../../shared/mocs/mockstore.tsx";

export default {
  component: QuestItems,
  title: "QuestItems",
  decorators: [
    (story: () => ReactNode) => <div style={{ margin: "3rem" }}>{story()}</div>,
  ],
  tags: ["autodocs"],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: () => ReactNode) => (
      <Mockstore<iQuestItemsSlice>
        slice={QuestItemsSlice}
        preloadedState={{
          [QuestItemsSlice.name]: initialState,
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
};

export const WithPinnedTasks = {
  decorators: [
    (story: () => ReactNode) => {
      const initialValue: iQuestItemsSlice = {
        ...initialState,
        items: [
          { imageUrl: "", type: "image" },
          { imageUrl: "", type: "image" },
          { imageUrl: "", type: "image" },
          { imageUrl: "", type: "image" },
          { imageUrl: "", type: "image" },
        ],
      };

      return (
        <Mockstore<iQuestItemsSlice>
          slice={QuestItemsSlice}
          preloadedState={{
            [QuestItemsSlice.name]: initialValue,
          }}
        >
          {story()}
        </Mockstore>
      );
    },
  ],
};
