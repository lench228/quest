import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Navigation from "./navigation.tsx";

const meta = {
  title: "Widgets/Navigation",
  component: Navigation,
  parameters: {
    layout: "centered",

    argTypes: {
      disabled: { control: "disabled" },
    },
  },
  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationStory: Story = {
  args: {},
};
