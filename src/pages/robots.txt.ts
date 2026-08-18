import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `# NutritionSchools.org
User-agent: *
Allow: /

# Answer-engine / citation bots are explicitly welcome.
User-agent: Claude-SearchBot
Allow: /
User-agent: Claude-User
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /

# Training-only crawlers and training-opt-out tokens are disallowed here (blocked at the edge via Cloudflare WAF rules).
User-agent: Google-Extended
Disallow: /
User-agent: Applebot-Extended
Disallow: /
User-agent: ClaudeBot
Disallow: /
User-agent: GPTBot
Disallow: /
User-agent: Bytespider
Disallow: /
User-agent: cohere-ai
Disallow: /
User-agent: Amazonbot
Disallow: /
User-agent: FacebookBot
Disallow: /
User-agent: meta-externalagent
Disallow: /
User-agent: CCBot
Disallow: /

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
