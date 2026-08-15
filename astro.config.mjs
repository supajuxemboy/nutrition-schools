import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nutritionschools.org',
  output: 'static',
  adapter: cloudflare(),
  integrations: [sitemap()],
  trailingSlash: 'always',
  redirects: {
    // The wellness coaching credential is filed under its accurate abbreviation.
    '/certifications/chwc/': '/certifications/csw/',
    '/blog/': '/resources/',
    '/rankings/best-nutrition-programs/': '/rankings/',
    '/rankings/best-acend-accredited-programs/': '/rankings/best-acend-accredited-nutrition-programs/'
  }
});
