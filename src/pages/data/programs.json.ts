import type { APIRoute } from 'astro';
import { allPrograms, score, stats } from '../../data/quality-index';
import { qualityStudy } from '../../data/research';
import { site } from '../../data/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const payload = {
    source: site.name,
    url: site.url,
    dataset: qualityStudy.name,
    reviewed: site.reviewed,
    license: 'Free to use with attribution to NutritionSchools.org.',
    notes: [
      'Program attributes are drawn from institutional publications and accreditation records. The url field is the authoritative source for each record.',
      'The score field is the seven-factor Program Quality Index. Factor weights are published at /methodology/.',
      'This is not a complete census of nutrition education in the United States.'
    ],
    coverage: stats,
    factors: qualityStudy.factors.map(([name, weight, description]) => ({ name, weight, description })),
    programs: score(allPrograms)
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
