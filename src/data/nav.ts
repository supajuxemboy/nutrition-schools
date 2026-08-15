import { levels, specialties, modifiers, stateList } from './site';
import { careers } from './careers';
import { certifications } from './certifications';
import { resources } from './resources';
import { rankingCopy } from './ranking-copy';

const sectionLabel: Record<string, string> = {
  rankings: 'Rankings',
  careers: 'Careers',
  certifications: 'Certifications',
  states: 'States',
  resources: 'Resources',
  research: 'Research',
  methodology: 'Methodology',
  about: 'About',
  data: 'Data'
};

const slugLabel = Object.fromEntries([
  ...levels.map(item => [item.slug, item.title]),
  ...specialties.map(item => [item.slug, item.title]),
  ...modifiers.map(item => [item.slug, item.title]),
  ...careers.map(item => [item.slug, item.title]),
  ...certifications.map(item => [item.slug, item.short]),
  ...resources.map(item => [item.slug, item.title]),
  ...stateList,
  ['nutrition-career-outcomes', 'Career Outcomes Survey 2026'],
  ['programs.json', 'Program data'],
  ['programs.csv', 'Program data CSV']
]);

const titleCase = (value: string) =>
  decodeURIComponent(value).replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

export function crumbLabel(part: string, pathParts: string[], index: number): string {
  if (index === 0) return sectionLabel[part] ?? titleCase(part);
  return slugLabel[part] ?? titleCase(part);
}

type Link = [string, string];

const CATALOG: Record<string, Link[]> = {
  rankings: [
    ['/methodology/', 'How we score programs'],
    ['/rankings/best-acend-accredited-nutrition-programs/', 'ACEND accredited programs'],
    ['/careers/registered-dietitian-nutritionist/', 'RDN career guide'],
    ['/certifications/rdn/', 'RDN credential'],
    ['/resources/how-to-become-a-registered-dietitian-step-by-step/', 'How to become an RDN']
  ],
  careers: [
    ['/certifications/', 'All credentials compared'],
    ['/resources/how-to-become-a-registered-dietitian-step-by-step/', 'RDN pathway'],
    ['/resources/nutrition-career-outcomes/', 'Career Outcomes Survey 2026'],
    ['/rankings/best-acend-accredited-nutrition-programs/', 'ACEND accredited programs'],
    ['/states/', 'Programs by state']
  ],
  certifications: [
    ['/careers/registered-dietitian-nutritionist/', 'RDN career guide'],
    ['/rankings/best-dietetics-programs/', 'Best dietetics programs'],
    ['/resources/how-to-become-a-registered-dietitian-step-by-step/', 'RDN pathway'],
    ['/resources/nutrition-vs-dietetics-whats-the-difference/', 'Nutrition vs dietetics'],
    ['/methodology/', 'Ranking methodology']
  ],
  states: [
    ['/rankings/', 'National rankings'],
    ['/rankings/online-nutrition-programs/', 'Online nutrition programs'],
    ['/rankings/best-acend-accredited-nutrition-programs/', 'ACEND accredited programs'],
    ['/resources/how-to-become-a-registered-dietitian-step-by-step/', 'How to become an RDN'],
    ['/resources/nutrition-career-outcomes/', 'Career Outcomes Survey 2026']
  ],
  resources: [
    ['/rankings/', 'Program rankings'],
    ['/careers/', 'Career guides'],
    ['/certifications/', 'Credentials'],
    ['/resources/nutrition-career-outcomes/', 'Career Outcomes Survey 2026'],
    ['/methodology/', 'How we score programs']
  ],
  research: [
    ['/methodology/', 'Program Quality Index'],
    ['/resources/nutrition-career-outcomes/', 'Survey findings in full'],
    ['/rankings/', 'Rankings built from this research'],
    ['/careers/', 'Career guides'],
    ['/about/', 'Who conducted it']
  ],
  methodology: [
    ['/research/', 'Original research'],
    ['/rankings/', 'All rankings'],
    ['/rankings/best-acend-accredited-nutrition-programs/', 'ACEND accredited ranking'],
    ['/resources/nutrition-career-outcomes/', 'Career Outcomes Survey 2026'],
    ['/about/', 'Editorial policy']
  ],
  about: [
    ['/methodology/', 'Methodology'],
    ['/research/', 'Original research'],
    ['/rankings/', 'Program rankings'],
    ['/careers/', 'Career guides'],
    ['/resources/', 'Guides']
  ]
};

const FALLBACK: Link[] = [
  ['/rankings/', 'Program rankings'],
  ['/careers/', 'Career guides'],
  ['/certifications/', 'Credentials'],
  ['/resources/', 'Guides'],
  ['/methodology/', 'Methodology']
];

export function relatedLinks(pathname: string): Link[] {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'rankings' && parts[1] && rankingCopy[parts[1]]) {
    return rankingCopy[parts[1]].related.filter(([href]) => href !== pathname);
  }
  const section = parts[0] ?? '';
  const candidates = CATALOG[section] ?? FALLBACK;
  return candidates.filter(([href]) => href !== pathname && href !== `${pathname}`);
}
