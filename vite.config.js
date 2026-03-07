import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: path.resolve("./src"),
  build: {
    lib: {
      entry: "log2textarea.mjs", // Your entry point
      name: "Log2textarea", // The name of the global variable
      fileName: (format) => `log2textarea.${format}.js`, // Output file name
      formats: ["iife", "umd", "cjs", "esm"], // Output format (UMD for browser compatibility)
    },
    outDir: "../dist", // Output directory
    emptyOutDir: true, // also necessary
  },
});
