import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: netlify()
});