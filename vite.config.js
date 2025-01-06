import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Esto es importante para que no se rompan las rutas en producción
  build: {
    outDir: "dist", // Vercel espera el `dist/` por defecto
  },
});
