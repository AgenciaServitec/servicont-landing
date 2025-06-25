import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
