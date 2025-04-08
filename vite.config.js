// // vite.config.js
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   plugins: [react()],
//   // optimizeDeps: {
//   //   exclude: ["@react-three/drei"],
//   // }
// });

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    force: true,
  },
});
