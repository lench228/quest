import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HomePage } from "./home-page.tsx";

const meta = {
  title: "Pages/Home",
  component: HomePage,
  parameters: {
    layout: "centered",
    argTypes: {
      disabled: { control: "disabled" },
    },
  },
  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Home: Story = {
  decorators: [
    (Story: () => React.ReactNode) => (
      <div className={" w-[430px] h-[500px] flex flex-col items-center"}>
        <Story />
      </div>
    ),
  ],
};
