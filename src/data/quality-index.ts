import programIndex from './program-index.json';
import { qualityStudy } from './research';

export type ProgramRecord = {
  state: string;
  stateName: string;
  school: string;
  department: string;
  location: string;
  program: string;
  url: string;
  curriculumUrl: string;
  online: boolean;
  level: string;
  tags: string[];
  /** Institutional control as published: public, private nonprofit, or for profit. */
  control: string;
  /** Published annual tuition, where the institution publishes one. */
  tuition: number | null;
  /** Institution-level completion rate, where published. */
  gradRate: number | null;
  /** ACEND program types held at this institution: DPD, CP, GP, DI, DT, APD. */
  acendType: string;
  /** ACEND accreditation status as published: Accredited or Candidate for Accreditation. */
  accreditation: string;
  /** Published program detail: credit load, supervised practice hours, focus areas. */
  acendDetail: string;
};

export const allPrograms = programIndex as ProgramRecord[];

/** Programs grouped by institution, used for the depth and ladder factors. */
const bySchool = new Map<string, ProgramRecord[]>();
for (const program of allPrograms) {
  const key = `${program.state}::${program.school}`;
  const list = bySchool.get(key) ?? [];
  list.push(program);
  bySchool.set(key, list);
}

const count = (text: string, expression: RegExp) => (text.match(expression) ?? []).length;

/** Typical published annual tuition ceilings by credential, used by the cost factor. */
const COST_CEILING: Record<string, number> = {
  certificate: 20000,
  associate: 12000,
  bachelors: 32000,
  masters: 38000,
  doctorate: 44000,
  other: 30000
};

/**
 * The NutritionSchools.org Program Quality Index.
 *
 * Seven factors, 100 points, weighted as published in the Nutrition Program
 * Quality Index 2026 methodology: curriculum rigor 18, supervised practice 17,
 * faculty credentials 15, program accreditation 15, clinical and community
 * partnerships 15, career outcomes 10, cost value 10.
 *
 * Every factor is computed from something an institution or an accreditor
 * publishes, so any score can be reconstructed from the record. It measures
 * documented program characteristics. It does not measure teaching quality,
 * examination pass rates, or graduate salaries, and it is not a prediction that
 * any individual will be hired.
 */
export function qualityIndex(program: ProgramRecord): number {
  const siblings = bySchool.get(`${program.state}::${program.school}`) ?? [program];
  const title = `${program.program} ${program.department}`.toLowerCase();
  const detail = program.acendDetail.toLowerCase();
  const acend = program.acendType.toUpperCase();

  // 1. Curriculum rigor (18). Named science and practice content in the program
  //    title, plus published credit load and focus areas in the accredited record.
  const namedContent = count(
    title,
    /nutrition|dietetic|clinical|medical|science|biochem|food|public health|community|sports|performance|management|therapy/g
  );
  const publishedCredits = /\b\d+\s*credits?\b/.test(detail) ? 4 : 0;
  const publishedAreas = /areas highlighted/.test(detail) ? 3 : 0;
  const rigor = Math.min(18, 5 + Math.min(6, namedContent * 1.5) + publishedCredits + publishedAreas);

  // 2. Supervised practice and internship (17). An hour count in the published
  //    record scores highest, then an accredited program type that carries
  //    practice, then a title that names practice content.
  const hasHours = /supervised[- ]practice hours|\b\d[\d,]*\s*hours\b/.test(detail);
  const carriesPractice = /\b(CP|GP|DI|APD)\b/.test(acend);
  const titlePractice = /internship|supervised|practicum|practice|experiential|coordinated|rotation/.test(title);
  const practice = Math.min(
    17,
    3 + (hasHours ? 7 : 0) + (carriesPractice ? 5 : 0) + (titlePractice ? 4 : 0)
  );

  // 3. Faculty credentials (15). Read from departmental depth and graduate
  //    presence, which is the observable proxy for credentialed practitioner
  //    faculty at national scale.
  const hasDoctorate = siblings.some(s => s.level === 'doctorate');
  const hasMasters = siblings.some(s => s.level === 'masters');
  const depth = Math.min(7, siblings.length * 1.6);
  const faculty = Math.min(15, 4 + depth + (hasDoctorate ? 4 : hasMasters ? 2.5 : 0));

  // 4. Program accreditation (15). ACEND accreditation status and the type of
  //    accredited program the institution holds.
  const fullyAccredited = /^accredited/i.test(program.accreditation);
  const candidate = /candidate/i.test(program.accreditation);
  const ladder = new Set(acend.split(/[,\s]+/).filter(Boolean)).size;
  const accreditation = Math.min(
    15,
    (fullyAccredited ? 8 : candidate ? 5 : acend ? 4 : 0) + Math.min(4, ladder * 2) + (carriesPractice ? 3 : 0)
  );

  // 5. Clinical and community partnerships (15). Published focus areas naming
  //    clinical, community, or food service placement settings, plus subject
  //    classification breadth.
  const settings = count(detail, /medical nutrition therapy|community|public health|foodservice|food service|clinical|research/g);
  const appliedTags = program.tags.filter(t =>
    ['clinical', 'public-health', 'food-service', 'dietetics', 'sports'].includes(t)
  ).length;
  const partnerships = Math.min(15, 3 + Math.min(7, settings * 2.5) + Math.min(5, appliedTags * 2.5));

  // 6. Career outcomes (10). Institution-level completion, where published. We
  //    do not use self-reported placement rates.
  const outcomes =
    program.gradRate === null ? 5 : Math.min(10, 2 + (program.gradRate / 100) * 8);

  // 7. Cost value (10). Published tuition against the credential ceiling, with
  //    a premium for public institutions because debt load drives whether this
  //    career pays off.
  const ceiling = COST_CEILING[program.level] ?? COST_CEILING.other;
  const isPublic = /public/i.test(program.control) || /community college|state (university|college)|technical college/i.test(program.school);
  const priceScore =
    program.tuition === null ? 5 : Math.max(1, 8 - (program.tuition / ceiling) * 6);
  const cost = Math.min(10, priceScore + (isPublic ? 2 : 0));

  const total = rigor + practice + faculty + accreditation + partnerships + outcomes + cost;
  return Math.round(Math.min(100, total) * 10) / 10;
}

export type ScoredProgram = ProgramRecord & { score: number };

export function score(programs: ProgramRecord[]): ScoredProgram[] {
  return programs
    .map(program => ({ ...program, score: qualityIndex(program) }))
    .sort((a, b) => b.score - a.score || a.school.localeCompare(b.school));
}

/** One entry per institution, keeping that institution's strongest record. */
export function topByInstitution(programs: ScoredProgram[], limit = 25): ScoredProgram[] {
  const seen = new Set<string>();
  const out: ScoredProgram[] = [];
  for (const program of programs) {
    const key = `${program.state}::${program.school}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(program);
    if (out.length >= limit) break;
  }
  return out;
}

export const byLevel = (level: string) => allPrograms.filter(p => p.level === level);
export const byTag = (tag: string) => allPrograms.filter(p => p.tags.includes(tag));
export const byState = (state: string) => allPrograms.filter(p => p.state === state);
export const onlinePrograms = () => allPrograms.filter(p => p.online);

/** Public institutions and community colleges, the affordability proxy. */
export const affordablePrograms = () =>
  allPrograms.filter(
    p =>
      /public/i.test(p.control) ||
      /community college|state (university|college)|technical college|university of/i.test(p.school)
  );

/** Programs whose published record documents supervised practice content. */
export const practicePrograms = () =>
  allPrograms.filter(
    p =>
      /internship|supervised|practicum|practice|experiential|coordinated/i.test(`${p.program} ${p.department}`) ||
      /supervised[- ]practice hours/i.test(p.acendDetail) ||
      /\b(CP|GP|DI|APD)\b/.test(p.acendType.toUpperCase())
  );

/** Programs at institutions holding an ACEND accredited program of any type. */
export const accreditedPrograms = () => allPrograms.filter(p => p.acendType.trim().length > 0);

const tuitionValues = allPrograms.map(p => p.tuition).filter((t): t is number => t !== null);

export const stats = {
  programs: allPrograms.length,
  schools: new Set(allPrograms.map(p => `${p.state}::${p.school}`)).size,
  states: new Set(allPrograms.map(p => p.state)).size,
  online: allPrograms.filter(p => p.online).length,
  accredited: new Set(accreditedPrograms().map(p => `${p.state}::${p.school}`)).size,
  withPractice: practicePrograms().length,
  evaluated: qualityStudy.evaluated,
  medianTuition: (() => {
    if (!tuitionValues.length) return null;
    const sorted = [...tuitionValues].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
  })()
};

export const indexFactors = qualityStudy.factors;

/** Display labels for the subject classification chips. */
export const tagLabel: Record<string, string> = {
  dietetics: 'Dietetics',
  clinical: 'Clinical',
  'public-health': 'Public Health',
  sports: 'Sports',
  'nutritional-science': 'Nutrition Science',
  'food-service': 'Food Service',
  'food-science': 'Food Science',
  'nutrition-education': 'Education'
};

export const levelLabel: Record<string, string> = {
  certificate: 'Certificate',
  associate: 'Associate',
  bachelors: 'Bachelor',
  masters: 'Master',
  doctorate: 'Doctorate',
  other: 'Program'
};

/** ACEND program type descriptions, used wherever a type code is shown. */
export const acendTypes: Record<string, string> = {
  DPD: 'Didactic Program in Dietetics: accredited coursework, no supervised practice',
  CP: 'Coordinated Program: accredited coursework and supervised practice combined',
  GP: 'Graduate Program: accredited coursework and supervised practice at graduate level',
  DI: 'Dietetic Internship: supervised practice for those holding accredited coursework',
  DT: 'Dietetic Technician Program: the associate level route to the NDTR credential',
  APD: 'Advanced Practice Doctoral Program in clinical nutrition'
};
