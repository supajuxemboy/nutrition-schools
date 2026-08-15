import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `# NutritionSchools.org
# All crawlers welcome, including AI and retrieval crawlers. If you cite us,
# please carry the source attribution and stated limitations with the figure.

User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap-index.xml

# Structured summary for language models and retrieval systems
# ${site.url}/llms.txt

# Open data
# ${site.url}/data/programs.json
# ${site.url}/data/programs.csv
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
