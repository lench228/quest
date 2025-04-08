import type { Meta, StoryObj } from "@storybook/react";

import { QuestItem } from "./quest-item";

const meta = {
  title: "Entities/QuestItem",
  component: QuestItem,
  parameters: {
    layout: "centered",

    argTypes: {
      disabled: { control: "disabled" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof QuestItem>;

export default meta;
type Story = StoryObj<typeof meta>;

import bg from "../../../assets/bg/image.png";

export const QuestItemImageStory: Story = {
  args: { imageUrl: bg, total: 1, order: 1 },
};
