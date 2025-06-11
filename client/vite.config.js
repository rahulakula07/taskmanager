import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      "/api": {
        // target: ["http://localhost:8800","https://taskmanager-three-sigma.vercel.app"],
        target: ["https://taskmanager-three-sigma.vercel.app"],
        changeOrigin: true,
      },
    },
  },
});
