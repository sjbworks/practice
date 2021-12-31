import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  build: {
    outDir: "../public",
  },
  esbuild: {
    jsxInject: "import React from 'react';",
  },
  plugins: [reactRefresh(), tsconfigPaths()],
});
