import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import InputWrapper from "./input-wrapper.tsx";

const meta = {
  title: "Shared/InputStory",
  component: InputWrapper,
  parameters: {
    layout: "centered",
    argTypes: {
      disabled: { control: "disabled" },
    },
  },
  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof InputWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
  args: {
    id: "name",
    placeholder: "Название",
    label: "Название",
    validate: (text: string) =>
      text.length < 10 ? "" : "Слишком длинное название",
    variant: "text",
  },
};

export const InputColorStory: Story = {
  args: {
    id: "name",
    placeholder: "Название",
    label: "Название",
    validate: (text: string) =>
      text.match("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")
        ? ""
        : "Некорректный Hex формат",
    variant: "color",
  },
};
