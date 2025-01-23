import type { Meta, StoryObj } from "@storybook/react";

import { SettingsWrapper } from "./settings-wrapper.tsx";
import PrimarySettings from "./primary-settings.tsx";

const meta = {
  title: "Widgets/Settings",
  component: SettingsWrapper,
  parameters: {
    layout: "centered",

    argTypes: {
      disabled: { control: "disabled" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SettingsWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SettingsStoryFirstStep: Story = {
  args: { children: <PrimarySettings /> },
};
