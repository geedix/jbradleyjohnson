// @ts-checknpm
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // site: "https://github.com/geedix/jbradleyjohnson",
  site: "https://www.jbradleyjohnson.net",
  trailingSlash: "ignore",
  integrations: [preact()]
});