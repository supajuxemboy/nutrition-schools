import { site, levels, specialties, modifiers, stateList } from './site';
import { careers } from './careers';
import { certifications } from './certifications';
import { resources } from './resources';

/** Every public HTML page that should appear in the sitemap and in crawl maps. */
export function allCanonicalPaths(): string[] {
  return [...new Set([
    '/',
    '/rankings/',
    ...levels.map(item => `/rankings/${item.slug}/`),
    ...specialties.map(item => `/rankings/${item.slug}/`),
    ...modifiers.map(item => `/rankings/${item.slug}/`),
    '/careers/',
    ...careers.map(item => `/careers/${item.slug}/`),
    '/certifications/',
    ...certifications.map(item => `/certifications/${item.slug}/`),
    '/states/',
    ...stateList.map(([slug]) => `/states/${slug}/`),
    '/resources/',
    ...resources.map(item => `/resources/${item.slug}/`),
    '/resources/nutrition-career-outcomes/',
    '/research/',
    '/methodology/',
    '/about/'
  ])];
}

export function absoluteUrl(path: string): string {
  return new URL(path, site.url + '/').toString();
}

export const statePages = stateList.map(([slug, name]) => ({
  slug,
  name,
  path: `/states/${slug}/`
}));

export function sitemapUrlsetXml(): string {
  const urls = allCanonicalPaths()
    .map(
      path =>
        `<url><loc>${absoluteUrl(path)}</loc><lastmod>${site.reviewed}</lastmod><changefreq>weekly</changefreq></url>`
    )
    .join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}
