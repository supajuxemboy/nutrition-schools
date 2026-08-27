import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${site.url}/sitemap.xml</loc>
    <lastmod>${site.reviewed}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${site.url}/sitemap-0.xml</loc>
    <lastmod>${site.reviewed}</lastmod>
  </sitemap>
</sitemapindex>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
};
