/**
 * Occupational and credential context for the nutrition ranking.
 *
 * Wage, employment and outlook figures come from O*NET OnLine, which publishes
 * the BLS Occupational Employment and Wage Statistics series. Read 2026-09-01.
 *
 * The credential note matters more in this field than the wage does: a nutrition
 * degree and RDN eligibility are different things, and conflating them is the
 * single most consequential mistake a prospective student can make here.
 */
import type { FieldContext } from '../components/FederalRanking.astro';

export const nutritionContext: FieldContext = {
  field: 'nutrition and dietetics',
  wageYear: 2025,
  occupations: [
    { soc: '29-1031', title: 'Dietitians and Nutritionists', median: 76400, employment: 90900,
      outlook: 'Faster than average (5% to 6%), 2024–2034', entry: 'Graduate degree plus an ACEND-accredited pathway for RDN practice',
      url: 'https://www.onetonline.org/link/summary/29-1031.00' },
  ],
  accreditor: {
    name: 'the ACEND program directory',
    url: 'https://www.eatrightpro.org/acend/accredited-programs/program-directory',
    note: 'A degree in the federal nutrition field is a subject classification, not an accreditation record.',
  },
  credentials: [
    { name: 'Registered Dietitian Nutritionist (RDN)', body: 'Commission on Dietetic Registration', when: 'After a graduate degree, an ACEND pathway and the registration exam',
      detail: 'Three separate requirements, and the degree is only one of them. Since January 2024 a graduate degree has been required to sit the exam at all, but holding one establishes nothing on its own: the ACEND-accredited pathway and its supervised practice hours are what create eligibility. Supervised hours are completed in person regardless of how online the coursework is.' },
    { name: 'Nutrition and Dietetics Technician, Registered (NDTR)', body: 'Commission on Dietetic Registration', when: 'After an accredited associate or DPD pathway',
      detail: 'The technician-level credential, reachable through a shorter accredited route. It is a genuine credential rather than a consolation prize, though it sits below the RDN in both scope of practice and pay.' },
    { name: 'Certified Nutrition Specialist (CNS)', body: 'Board for Certification of Nutrition Specialists', when: 'After a graduate degree plus supervised practice hours',
      detail: 'A separate credential from the RDN with its own governing body, commonly held by graduates of clinical and functional nutrition master’s programs that do not carry ACEND accreditation. State practice laws differ on what it authorises, so check your own state.' },
  ],
};
