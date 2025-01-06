import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Esto está bien
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "slick-carousel/slick/slick.css";`,
      },
    },
  },
});
