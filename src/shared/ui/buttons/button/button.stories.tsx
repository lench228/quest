import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Shared/ButtonStory",
  component: Button,
  parameters: {
    layout: "centered",

    argTypes: {
      disabled: { control: "disabled" },
    },
  },
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ButtonPrimary: Story = {
  args: {
    variant: "primary",
    children: "Кнопка",
    disabled: false,
  },
};

export const ButtonPrimaryDisabled: Story = {
  args: {
    variant: "primary",
    children: "Кнопка",
    disabled: true,
  },
};

export const ButtonSecondary: Story = {
  args: {
    variant: "secondary",
    children: "Кнопка",
    disabled: false,
  },
};

export const ButtonSecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    children: "Кнопка",
    disabled: true,
  },
};

export const ButtonCancel: Story = {
  args: {
    variant: "cancel",
    children: "Кнопка",
    disabled: false,
  },
};

export const ButtonCancelDisabled: Story = {
  args: {
    variant: "cancel",
    children: "Кнопка",
    disabled: true,
  },
};
