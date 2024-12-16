import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // Root directory is the current directory
  build: {
    outDir: "dist", // Output directory for build files
    rollupOptions: {
      input: "./index.html", // Specify the entry point in the root directory
    },
  },
});
