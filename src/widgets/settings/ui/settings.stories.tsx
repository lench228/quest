import type { Meta, StoryObj } from "@storybook/react";

import { SettingsWrapper } from "./settings-wrapper";
import {PrimarySettings} from "./primary-settings";
import { ReactNode } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
  decorators: [
    (story: () => ReactNode) => (
      <div className={"h-screen w-screen"}>
        <DndProvider backend={HTML5Backend}>{story()}</DndProvider>
      </div>
    ),
  ],
  args: { children: <PrimarySettings /> },
};
