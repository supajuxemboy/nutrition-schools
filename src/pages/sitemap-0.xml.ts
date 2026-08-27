import type { APIRoute } from 'astro';
import { sitemapUrlsetXml } from '../data/site-urls';

export const prerender = true;

/** Alias kept so Search Console submissions of /sitemap-0.xml keep working. */
export const GET: APIRoute = () =>
  new Response(sitemapUrlsetXml(), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
