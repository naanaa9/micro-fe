import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
  name: "host_app",
  remotes: {
    remote_app: "http://localhost:5001/assets/remoteEntry.js",
  },
  shared: [
    "react",
    "react-dom",
    "react-router-dom" // ⬅️ TAMBAHKAN
  ],
})
  ],
  server: {
    port: 5000,
  },
  build: {
    target: "esnext",
  },
});
