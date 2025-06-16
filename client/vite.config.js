import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: ["http://localhost:8800","https://taskmanager-backend-y240.onrender.com"],
        // target: ["https://taskmanager-backend-y240.onrender.com"],
        changeOrigin: true,
      },
    },
  },
});




