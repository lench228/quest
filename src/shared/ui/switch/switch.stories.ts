import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./switch.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Shared/SwitchStory",
  component: Switch,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [
        { name: "Dark", value: "#2b2b33" },
        { name: "Light", value: "#f2f2f2" },
      ],
      default: "Light",
    },
    argTypes: {
      disabled: { control: "disabled" },
    },
  },
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SwitchTwoStory: Story = {
  args: {
    name: "string",
    values: [
      { text: "Значение 1", value: "Значение 1" },
      { text: "Значение 2", value: "Значение 2" },
    ],
  },
};

export const SwitchFourStory: Story = {
  args: {
    name: "string",
    values: [
      { text: "Значение 1", value: "Значение 1" },
      { text: "Значение 2", value: "Значение 2" },
      { text: "Значение 3", value: "Значение 3" },
      { text: "Значение 4", value: "Значение 4" },
    ],
  },
};
