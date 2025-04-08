import { PaginatorSlides } from "./paginator-slides.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/PaginatorSlidesStory",
  component: PaginatorSlides,
  parameters: {
    layout: "centered",
    argTypes: { disabled: { control: "disabled" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PaginatorSlides>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PaginatorStory: Story = {
  args: {
    order: 1,
    total: 10,
  },
};
