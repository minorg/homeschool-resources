// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // site: 'https://minorg.github.io',
  site: "https://homeschool-resources.minorgordon.net",
  vite: {
    plugins: [tailwindcss()],
  },
});