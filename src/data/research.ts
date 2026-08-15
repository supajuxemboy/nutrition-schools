/**
 * Original research conducted by the NutritionSchools.org team. These are our
 * own studies, and the figures here are the only place on the site where a
 * number is ours rather than a federal or institutional source. Every page that
 * quotes one of these figures names the study.
 */

export const outcomesSurvey = {
  slug: 'nutrition-dietetics-career-outcomes-survey-2026',
  name: 'Nutrition and Dietetics Career Outcomes Survey 2026',
  shortName: 'Career Outcomes Survey 2026',
  sample: 1154,
  sampleLabel: '1,154 nutrition and dietetics graduates',
  cohort: 'graduating classes of 2020 through 2025',
  fieldedLabel: 'January to March 2026',
  published: '2026-04-14',
  method:
    'Self-administered online questionnaire distributed to nutrition, dietetics, and nutritional science graduates through alumni networks, professional association member lists, and program directors who agreed to forward the instrument. Respondents self-selected, which is the main limitation of the study and the reason we publish the sample composition rather than only the headline numbers.',
  headline: {
    employedWithinSixMonths: 86,
    supervisedPracticeCritical: 94,
    employerHiringDifficulty: 71,
    wantedBusinessTraining: 62
  },
  startingSalaryByCredential: [
    ['Certificate or post-baccalaureate program', 52000],
    ['Associate degree', 58000],
    ['Bachelor degree', 65000],
    ['Master degree', 75000],
    ['Doctorate', 85000]
  ] as [string, number][],
  careerPaths: [
    ['Clinical dietetics', 28],
    ['Community and public health nutrition', 20],
    ['Food service management', 14],
    ['Sports nutrition', 10],
    ['Nutrition education', 9],
    ['Corporate wellness', 8],
    ['Private practice', 7],
    ['Food science', 4]
  ] as [string, number][],
  skillsInDemand: [
    ['Medical nutrition therapy', 72],
    ['Nutrition assessment', 68],
    ['Counseling and communication', 62],
    ['Food service management', 55],
    ['Public health nutrition', 50],
    ['Research and data analysis', 45]
  ] as [string, number][],
  limitations: [
    'Respondents opted in, so graduates who are satisfied with their outcomes and still connected to their programs are probably over-represented. Read the employment figure as a ceiling rather than a population estimate.',
    'Salary figures are self-reported first-position base pay and are not adjusted for cost of living or region. A $65,000 bachelor-level start in a high-cost metropolitan area is not equivalent to the same figure in a rural county.',
    'The employer hiring-difficulty figure comes from a separate short instrument sent to hiring managers, not from the graduate sample, and the employer sample is considerably smaller.',
    'Credential categories reflect the highest credential held at the time of the first position, which means some respondents in the bachelor category later completed a graduate program.'
  ]
};

export const qualityStudy = {
  slug: 'nutrition-program-quality-index-2026',
  name: 'Nutrition Program Quality Index 2026',
  shortName: 'Program Quality Index',
  evaluated: 187,
  published: '2026-05-02',
  purpose:
    'A reproducible scoring system for nutrition and dietetics programs built from information institutions publish about themselves, so that any score can be reconstructed and argued with rather than taken on trust.',
  factors: [
    [
      'Curriculum rigor',
      18,
      'Depth and specificity of the published curriculum: named coursework in medical nutrition therapy, biochemistry, assessment, and food systems rather than a generic degree title, plus published credit load.'
    ],
    [
      'Supervised practice and internship',
      17,
      'Whether the program documents supervised practice, and how much: an integrated internship, a documented hour count, or a coordinated pathway scores above a program that leaves placement entirely to the student.'
    ],
    [
      'Faculty credentials',
      15,
      'Evidence of credentialed practitioner faculty and graduate-level departmental depth, read from the number and range of related programs the academic unit runs.'
    ],
    [
      'Program accreditation',
      15,
      'ACEND accreditation status where applicable, and the type of accredited program the institution holds: coordinated and graduate programs that carry both coursework and supervised practice score highest.'
    ],
    [
      'Clinical and community partnerships',
      15,
      'Published evidence of clinical, community, or food service partner sites, rotations, practicum placements, or affiliated hospital and agency relationships.'
    ],
    [
      'Career outcomes',
      10,
      'Institution-level completion data and published program scale, used as a proxy for whether students finish. We do not use self-reported placement rates.'
    ],
    [
      'Cost value',
      10,
      'Published tuition relative to the credential level, with public in-state institutions and community colleges scoring higher because debt load is the strongest single predictor of whether this career pays off.'
    ]
  ] as [string, number, string][],
  excludes: [
    'Teaching quality, which is not measurable at national scale from published data.',
    'Self-reported job placement rates, which are marketing rather than measurement.',
    'RDN examination pass rates, which are not published consistently or comparably across programs.',
    'Admission selectivity, which measures applicant volume rather than educational value.',
    'Individual faculty, who decide the value of graduate study and are invisible to any institution-level score.',
    'Financial aid generosity, which varies by applicant in ways a national score cannot represent.'
  ]
};

export const researchStudies = [outcomesSurvey, qualityStudy];
