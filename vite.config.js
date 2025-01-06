import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Base para rutas relativas
  build: {
    outDir: "dist", // Carpeta de salida para Vercel
  },
});
