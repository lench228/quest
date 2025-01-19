import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { RadioButton } from "./radio-button.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Shared/RadioStory",
  component: RadioButton,
  parameters: {
    layout: "centered",
    argTypes: {
      disabled: { control: "disabled" },
    },
  },
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RadioStory: Story = {
  args: {
    text: "ClickMe",
    value: "clickMe",
    id: "1",
    name: "Radio",
  },
};
