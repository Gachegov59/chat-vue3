import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";
// @ts-ignore
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "./src/styles/index.scss";
            `,
      },
    },
  },
});
