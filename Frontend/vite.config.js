// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3001,
//     proxy: {
//       "/api": {
//         target: "http://localhost:4002",
//         changeOrigin: true,
//       },
//     },
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Make sure this matches your backend server URL and port
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
