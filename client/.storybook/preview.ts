import type { Preview } from "@storybook/react";
// .storybook/preview.ts
import { ModeDecorator } from "./modeDecorator";
import "../src/styles/output.css";
export const decorators = [ModeDecorator];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      stylePreview: true,
      darkClass: "dark",
      lightClass: "",
    },
  },
};

export default preview;
