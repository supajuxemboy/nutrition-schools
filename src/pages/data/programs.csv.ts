import type { APIRoute } from 'astro';
import { allPrograms, score } from '../../data/quality-index';

export const prerender = true;

const COLUMNS = [
  'score', 'program', 'school', 'department', 'location', 'stateName', 'state', 'level',
  'tags', 'online', 'control', 'tuition', 'gradRate', 'acendType', 'accreditation', 'acendDetail', 'url'
] as const;

const cell = (value: unknown) => {
  if (value === null || value === undefined) return '';
  const text = Array.isArray(value) ? value.join('; ') : String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

export const GET: APIRoute = () => {
  const rows = score(allPrograms).map(program =>
    COLUMNS.map(column => cell((program as Record<string, unknown>)[column])).join(',')
  );

  return new Response([COLUMNS.join(','), ...rows].join('\n'), {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
