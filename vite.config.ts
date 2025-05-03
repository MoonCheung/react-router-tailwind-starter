import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  plugins: [reactRouter(), tsconfigPaths(), tailwindcss()],
});
