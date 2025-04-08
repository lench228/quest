import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  base: '.',
  resolve: {
    alias: {
      features: "/src/features",
      pages: "/src/pages",
      entities: "/src/entities",
      shared: "/src/shared",
      app: "/src/app",
      widgets: "/src/widgets",
    },
  },
});
