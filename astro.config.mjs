// @ts-checknpm
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jbradleyjohnson.com",
  integrations: [preact()]
});