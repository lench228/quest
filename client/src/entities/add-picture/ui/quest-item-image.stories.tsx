import type { Meta, StoryObj } from "@storybook/react";

import { QuestItemImage } from "./quest-item-image.tsx";

const meta = {
  title: "Entities/QuestItemImage",
  component: QuestItemImage,
  parameters: {
    layout: "centered",

    argTypes: {
      disabled: { control: "disabled" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof QuestItemImage>;

export default meta;
type Story = StoryObj<typeof meta>;

import bg from "../../../assets/bg/image.png";

export const QuestItemImageStory: Story = {
  args: { imageUrl: bg, total: 1, order: 1 },
};
