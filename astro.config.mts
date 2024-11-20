import mdx from '@astrojs/mdx'
// @ts-check
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://mertsismanoglu.com',
  integrations: [mdx(), sitemap()],
})
