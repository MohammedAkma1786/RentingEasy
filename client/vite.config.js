import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // Specify the root directory
  build: {
    outDir: "../dist", // Output directory for build files
    rollupOptions: {
      input: "src/index.html", // Specify the entry point
    },
  },
});
