import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Defines Vite config for React development and build.
 * @returns {import("vite").UserConfig} Vite configuration object.
 */
export default defineConfig({
  plugins: [react()],
});
