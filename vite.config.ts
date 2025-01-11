import { defineConfig } from 'vite';

export default defineConfig({
  // ... other config options
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/index.css";`,
      },
    },
  },
});
