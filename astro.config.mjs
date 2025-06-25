import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import partytown from "@astrojs/partytown";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    icon(),
  ],

  build: {
    inlineStylesheets: "always",
  },

  compressHTML: true,
  prefetch: true,
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});
