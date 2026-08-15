/**
 * Unique editorial copy for each ranking page. The program table is already
 * unique. These sections used to be identical across all 17 rankings, which is
 * the crawl-priority problem: Google sees 17 URLs with the same essay and a
 * swapped table. Every block here is written for one category only.
 */

export type RankingCopy = {
  cardCta: string;
  listFraming: string[];
  scoringHeading: string;
  scoring: string[];
  acendHeading: string;
  acend: string[];
  compareHeading: string;
  compareIntro: string;
  compareItems: [string, string][];
  compareClose: string;
  limitsHeading: string;
  limits: string[];
  enrollHeading: string;
  enrollItems: [string, string][];
  meaning: string[];
  outcomesHeading: string;
  outcomes: string[];
  related: [string, string][];
};

export const rankingCopy: Record<string, RankingCopy> = {
  'best-nutrition-certificate-programs': {
    cardCta: 'Compare nutrition certificates →',
    listFraming: [
      'This list is internships, individualized supervised practice pathways, and post-baccalaureate certificates, not weekend coaching products. If two records sit at the same university we keep the stronger scoring one so a hospital system running three internships does not occupy three ranks.'
    ],
    scoringHeading: 'How we score nutrition certificates',
    scoring: [
      'Supervised practice is 17 of 100 points in the index, and in this category it should probably be 40. A dietetic internship exists to deliver practice hours. A general nutrition certificate that documents none of those hours is continuing education, and the index will still give it curriculum and cost points that make it look closer to an internship than it is. Read the ACEND type on each card before you read the score.',
      'Cost value is 10 points, which underweights the real decision. An unpaid internship in a high-cost city can be more expensive than a stipend program with a higher sticker. Reconstruct the other five factors on the methodology page. Do not treat a three-point gap as a reason to pick the unpaid option.'
    ],
    acendHeading: 'Which ACEND codes belong on a certificate',
    acend: [
      'DI is the code that matters here: Dietetic Internship, supervised practice for people who already hold accredited coursework. ISPP-style individualized pathways sit in the same job as a DI even when the label differs. DT is a technician program, a different credential and a different wage. A certificate with no ACEND type is not an RDN gate, no matter how clinical the brochure sounds.',
      'If you already have a DPD verification statement, you are shopping internships. If you do not, a certificate will not invent one. Start with accredited coursework, then come back to this list.'
    ],
    compareHeading: 'When two internships score the same',
    compareIntro:
      'Scores cluster because published hour counts cluster. Separate two internships on the things a national index cannot see.',
    compareItems: [
      ['Stipend against unpaid months', 'Ask for the monthly figure, not whether funding exists. Six unpaid months in Boston is a different product from a modest stipend in a lower-cost city.'],
      ['Named rotation sites', 'Hospital, food service, and community sites should be named, not described as partners. Named sites are a network. Adjectives are a brochure.'],
      ['What happens when a site withdraws', 'Internships with bench depth reassign you. Internships without it tell you withdrawals are rare. Rare is not a plan.'],
      ['Match history', 'Ask what share of last year class matched on the first round, and whether the program is an internship you apply into or a seat you were already admitted to.']
    ],
    compareClose:
      'Those four calls will separate two internships our index cannot separate. The score is a shortlist tool, not a match algorithm.',
    limitsHeading: 'What a certificate ranking cannot see',
    limits: [
      'We cannot see whether last year interns actually sat the RDN exam, or passed it. Pass rates are not published comparably, so we refuse to invent a league table from program anecdotes.',
      'We cannot see rotation quality. A thousand hours in a thin long-term care assignment is not the same thousand hours in acute care plus food service plus community. The hour count is visible. The caseload is not.',
      'We cannot see cost of living during unpaid months. That number decides whether you can accept the internship at all.'
    ],
    enrollHeading: 'Five questions before you accept an internship offer',
    enrollItems: [
      ['Is this an ACEND accredited Dietetic Internship or an unaccredited certificate?', 'Only the first produces a verification statement. Confirm with ACEND, not the landing page.'],
      ['How many supervised practice hours, at which named sites?', 'Get hours and site names in writing. If the reply is a range and a region, you do not have an answer yet.'],
      ['Is there a stipend, and what does housing actually cost near the primary site?', 'Net cost here is lost wages plus rent, not tuition.'],
      ['What share of last year cohort completed on schedule and received a verification statement?', 'Programs that track this will say. Programs that do not are telling you about their reporting.'],
      ['Do I already hold the graduate degree the Commission now requires?', 'An internship without a graduate degree no longer finishes the RDN pathway. Sequence the masters first or pick a graduate program that includes practice.']
    ],
    meaning: [
      'If you want the RDN, treat this page as the practice-hours market, not as a lighter degree. Buy the internship that names sites and pays something, then stop collecting certificates.',
      'If you want a skills add-on for a job you already have, a non-ACEND certificate can be rational. Price it as continuing education and do not expect a hospital to treat it as a licence.'
    ],
    outcomesHeading: 'What a nutrition certificate actually leads to',
    outcomes: [
      'A dietetic internship leads to examination eligibility, then to the same occupation as every other RDN pathway: dietitians and nutritionists, May 2024 median $73,850. The certificate is not a separate career. It is a gate on the clinical career.',
      'A non-practice certificate leads wherever your existing credential already led. Our Career Outcomes Survey 2026 put certificate-level first-position pay at $52,000, the lowest rung, and that figure mixes internships with lighter products. Ask which kind you are buying.'
    ],
    related: [
      ['/rankings/nutrition-programs-with-internship/', 'programs that document supervised practice'],
      ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs'],
      ['/certifications/rdn/', 'RDN credential requirements'],
      ['/careers/registered-dietitian-nutritionist/', 'what RDN work actually pays'],
      ['/resources/how-to-become-a-registered-dietitian-step-by-step/', 'the full RDN sequence']
    ]
  },
  'best-nutrition-associate-programs': {
    cardCta: 'Compare associate nutrition degrees →',
    listFraming: [
      'These are two-year programs, mostly at community colleges, aimed at dietetic technician work, food service supervision, or a documented transfer into a bachelor. One entry per college, so a campus running a technician track and a transfer track does not appear twice.'
    ],
    scoringHeading: 'How we score associate nutrition programs',
    scoring: [
      'Cost value does more work here than the 10-point weight implies. Community colleges exist to keep the first two years cheap, and they should. Curriculum rigor still leads the index at 18 because an associate that skips chemistry is a poor transfer document even if the tuition is low.',
      'Faculty credentials and departmental depth, 15 points, systematically under-score small technician programs. A two-year department will lose to a university running a doctorate. That is a measurement artifact. Use the score to compare associate programs with each other, not with masters programs on another page.'
    ],
    acendHeading: 'ACEND and the technician credential',
    acend: [
      'DT is the code that belongs on this page: Dietetic Technician Program. It is a real accredited pathway to the NDTR credential, with a defined scope below the RDN. An associate with no ACEND type can still transfer into a bachelor, but it cannot make you a technician of record by itself.',
      'Do not confuse a transfer associate with a technician program. One is the first half of a four-year plan. The other is a terminal credential. Ask which you are enrolled in before your second semester, when course selection still has room to move.'
    ],
    compareHeading: 'When two associate programs look equivalent',
    compareIntro:
      'Published tuition will be close. Separate them on transfer mechanics and on whether the technician exam is even on the table.',
    compareItems: [
      ['Named bachelor transfer agreement', 'A written agreement with a specific ACEND DPD or CP beats a verbal we have transferred students before. Credit loss is the failure mode of this route.'],
      ['Whether the program is a DT', 'If you want the NDTR, you need the accredited technician program, not a general nutrition associate. Confirm the type with ACEND.'],
      ['Lab and food production facilities', 'Technician and food service work is physical. A program without a quantity-foods lab is teaching the job from slides.'],
      ['Work-friendly scheduling', 'The point of many associate programs is that you keep your job. Ask a current student whether the labs are actually evening-compatible.']
    ],
    compareClose:
      'If the transfer agreement is real and the net cost is low, the lower-scoring community college is often the better first move. Ranking position is not a reason to start at a private four-year.',
    limitsHeading: 'What an associate ranking cannot see',
    limits: [
      'We cannot see how many credits actually transfer into the bachelor you want. That is a registrar question, specific to two institutions, and it decides whether the cheap route stays cheap.',
      'We cannot see NDTR exam outcomes. Technician pass rates are not published in a form we can rank.',
      'We cannot see whether the associate is being sold as a dietitian degree. Marketing copy does that. The Commission on Dietetic Registration does not.'
    ],
    enrollHeading: 'Five questions before you enroll in an associate program',
    enrollItems: [
      ['Is this an ACEND Dietetic Technician Program or a transfer associate?', 'Those are different products. Get the type in writing.'],
      ['Which bachelor programs have a current articulation agreement, and which courses map?', 'Ask for the course-by-course sheet, not a list of partner names.'],
      ['What is in-district tuition for me, and what fees sit on top?', 'Community college stickers hide lab and program fees that change the math.'],
      ['Can I complete chemistry and anatomy here, or will I still need a university for the science sequence?', 'If the science sequence is incomplete, the transfer plan is incomplete.'],
      ['What job did last year graduates actually take?', 'Technician, food service, or transfer. A program that cannot split those three is mixing outcomes.']
    ],
    meaning: [
      'Use this page if cost is the binding constraint and you can name the bachelor you will transfer into. Do not use it as a cheaper RDN. The Commission closed that door in 2024.',
      'If the NDTR is the job you want, stay on the DT programs and ignore the transfer marketing. Dietetic technicians earned a May 2024 median of $37,040. That is a real wage for a real role, and it is not a dietitian wage.'
    ],
    outcomesHeading: 'Where associate graduates go',
    outcomes: [
      'NDTR roles in hospitals, long-term care, and school nutrition; food service supervision; and transfer into a bachelor. Our survey put associate-level first-position pay at $58,000, which sits between certificate and bachelor and should not be read as an RDN starting salary.',
      'The occupation above you, dietitians and nutritionists, has a May 2024 median of $73,850 and requires the graduate credential. Plan the associate as year one and two of that climb, or as a technician career, not as both at once.'
    ],
    related: [
      ['/rankings/best-nutrition-bachelors-programs/', 'bachelor nutrition programs to transfer into'],
      ['/rankings/most-affordable-nutrition-programs/', 'lower-cost nutrition programs'],
      ['/careers/food-service-manager/', 'food service management careers'],
      ['/certifications/rdn/', 'why an associate cannot make you an RDN'],
      ['/rankings/best-food-service-management-programs/', 'food service management programs']
    ]
  },
  'best-nutrition-bachelors-programs': {
    cardCta: 'Compare bachelor nutrition programs →',
    listFraming: [
      'Four-year degrees in nutrition, dietetics, and nutritional science. When a university runs both a DPD and a nutritional science major we keep the stronger scoring record so departmental size does not buy extra ranks. The other program still appears in the full table below the cards.'
    ],
    scoringHeading: 'How we score bachelor nutrition programs',
    scoring: [
      'Curriculum rigor is 18 points because a bachelor that lets you skip biochemistry is the most expensive mistake on this site. You will not notice it until you apply to a graduate program or an internship and the prerequisite list rejects you. We score named science content, not the word nutrition in the degree title.',
      'Accreditation is 15 points, which is too low if you want the RDN and about right if you want research or food industry. A famous university with no ACEND program will still score well on faculty depth. That is not a recommendation to enroll there for clinical work. Filter this list to accredited programs first, then use the score.'
    ],
    acendHeading: 'DPD against everything else at bachelor level',
    acend: [
      'Most bachelor dietetics programs are DPDs: accredited coursework, no internship included. You still need a separate Dietetic Internship or an integrated graduate program after you finish. A CP at bachelor level is rarer and more valuable because it carries practice hours. If both appear in your shortlist and you want to practise, the CP is the less painful machine.',
      'A nutritional science bachelor with no ACEND type is a science degree. Treat it as preparation for a doctorate, medical school, or industry, not as a delayed dietetics program.'
    ],
    compareHeading: 'When two bachelor programs sit three points apart',
    compareIntro:
      'Three points is usually one published credit-load difference. Decide on science sequence, accreditation, and net cost instead.',
    compareItems: [
      ['Required science list', 'Two semesters of chemistry, organic, biochemistry, anatomy and physiology, microbiology, statistics. If those are electives, keep walking.'],
      ['ACEND type and status', 'DPD, CP, or none. Full accreditation or candidacy. Verify on the ACEND directory, not the viewbook.'],
      ['Net cost after aid, not sticker', 'Public in-state at $12,000 beats private at $58,000 for an equivalent DPD in almost every scenario we can construct.'],
      ['Where the department actually places students', 'Even a DPD has practicum and volunteer pipelines. Ask which hospitals take their undergraduates.']
    ],
    compareClose:
      'The bachelor is where the career is set up or quietly sabotaged. Ranking position is a weak signal next to the course list and the accreditation line.',
    limitsHeading: 'What a bachelor ranking cannot tell you',
    limits: [
      'It cannot tell you whether you will match an internship two years from now. Match rates belong to the internship year, not to the DPD, and they are not published in a form we will scrape into a score.',
      'It cannot tell you teaching quality. A small department with three practitioner faculty can outperform a large unit the index loves for depth.',
      'It cannot tell you whether the bachelor is enough. Since 2024 it is not enough for the RDN. This ranking is the foundation, not the finish.'
    ],
    enrollHeading: 'Five questions before you pick a nutrition bachelor',
    enrollItems: [
      ['Is this specific major ACEND accredited, and as what type?', 'Program-specific, not university-wide. Check ACEND.'],
      ['What is the required course list in year two and three?', 'If biochemistry and medical nutrition therapy are missing, this is a wellness degree.'],
      ['What is my net cost, not the published tuition?', 'Only financial aid can produce this, and it moves the ranking more than any factor we score.'],
      ['Where do graduates go next: internship, graduate program, or jobs that do not need the RDN?', 'Ask for last year destinations, split those three ways.'],
      ['If I want the RDN, which graduate program or internship does this department feed?', 'A DPD without a pipeline is a cliff. A DPD with a named GP partner is a plan.']
    ],
    meaning: [
      'If you want clinical work, discard non-ACEND bachelors before you compare scores. Then pick the cheapest accredited science sequence with a real internship or GP pipeline.',
      'If you do not want the RDN, say so now. Community nutrition, food service, and industry hire bachelor graduates. They do not hire people who spent four years pretending a wellness major was dietetics.'
    ],
    outcomesHeading: 'What a nutrition bachelor buys, and what it does not',
    outcomes: [
      'Our survey put bachelor-level first-position pay at $65,000. The federal May 2024 median for dietitians and nutritionists is $73,850, a full-career figure that assumes the credential. The bachelor without the credential lands in community, food service, wellness, and industry roles, not in hospital MNT.',
      'Food service managers, a related occupation many bachelor graduates actually enter, had a May 2024 median of $65,310 across about 352,800 jobs. That is a larger market than dietetics. It is also the market this degree quietly prepares you for if you skip accreditation.'
    ],
    related: [
      ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs'],
      ['/rankings/best-dietetics-programs/', 'accredited dietetics bachelor and graduate routes'],
      ['/rankings/best-acend-accredited-nutrition-programs/', 'only the ACEND accredited programs'],
      ['/careers/nutritionist/', 'what a nutritionist can do without the RDN'],
      ['/resources/is-nutrition-degree-worth-it/', 'whether a nutrition bachelor pays off']
    ]
  },
  'best-nutrition-masters-programs': {
    cardCta: 'Compare nutrition master\'s programs →',
    listFraming: [
      'Graduate degrees in nutrition, dietetics, clinical nutrition, and nutritional science, including ACEND graduate programs that fold supervised practice into the degree. One entry per institution, so a university running both a coursework MS and a GP does not occupy two ranks. We keep the stronger scoring record and list the other below.'
    ],
    scoringHeading: 'How we score nutrition master\'s programs',
    scoring: [
      'Since January 2024 a graduate degree is required to sit the RDN exam, which changed this category from optional to mandatory for clinical students. The index still weights curriculum rigor at 18 and supervised practice at 17. On a master\'s page those two factors are the whole plot: does this degree include practice hours, or will you pay for a separate internship after you already paid for a graduate degree.',
      'Cost value is only 10 points. That is the weakest part of the index at this level. You are buying two years you cannot skip. Net cost should dominate your shortlist even when it barely moves the score. Faculty depth helps research masters and says little about whether a GP can place you. Read the methodology for the arithmetic, then ignore three-point gaps and ask about placement.'
    ],
    acendHeading: 'GP, MS, and the internship you may still need',
    acend: [
      'An ACEND Graduate Program (GP) combines coursework and supervised practice. Finishing it makes you examination eligible. A coursework master\'s, even at a university that also runs a DPD, does not. DI programs on this list are internships that may sit alongside a masters, not a substitute for knowing which credential you are buying.',
      'If two programs score alike and one is a GP, take the GP unless you have a specific reason to split the degree and the internship. One application, one timeline, one bursar. The split route can be cheaper and can let you choose a city for practice. It is also two competitive processes instead of one.'
    ],
    compareHeading: 'When two master\'s programs score the same',
    compareIntro:
      'At graduate level the index mostly sees accreditation type, published practice hours, and departmental scale. Your decision lives in the gaps.',
    compareItems: [
      ['GP versus MS plus DI', 'Ask whether completing this degree produces a verification statement. If the answer is not yes, you are buying a degree and still shopping internships.'],
      ['Who places you, at which sites', 'Named hospitals and agencies in the region you want to work. Remote coursework with unspecified local placement is the failure mode of online GPs.'],
      ['Net cost for 20 to 24 months', 'Include lost wages if the practice year is full time. A cheaper MS that dumps you into an unpaid DI can cost more than a funded GP.'],
      ['Thesis versus applied project', 'Research careers need a thesis and a lab. Clinical careers need caseload. Do not pay for a thesis you will not use.']
    ],
    compareClose:
      'The graduate degree requirement means a bad master\'s is now a required expense. Compare placement and net cost as if the ranking did not exist. Then use the ranking to break remaining ties.',
    limitsHeading: 'What this master\'s ranking cannot see',
    limits: [
      'RDN exam pass rates, which programs advertise selectively and which we will not turn into a factor.',
      'Whether the graduate program is actually a public health MPH with a nutrition concentration, a clinical GP, or a laboratory MS. Titles collapse those three. Your first job does not.',
      'Assistantships. A funded research MS is a job. An unfunded clinical GP is tuition. The index cannot see your offer letter.'
    ],
    enrollHeading: 'Five questions before you enroll in a nutrition master\'s',
    enrollItems: [
      ['Does this specific program include ACEND accredited supervised practice?', 'If not, budget a separate internship. Confirm with ACEND.'],
      ['Who arranges placements, and at which named sites near me?', 'Especially if the coursework is online. Get names, not regions.'],
      ['What is total net cost, including the practice year?', 'Ask financial aid for your circumstances, then add unpaid months if they exist.'],
      ['What share of last year cohort received a verification statement on time?', 'For a GP this is the outcome that matters. For a coursework MS it is the wrong question, which is information.'],
      ['Is the curriculum clinical MNT, public health, or laboratory science?', 'Pick the door you want. A research MS will not make you a clinical RDN, and a GP is a slow way to enter a lab.']
    ],
    meaning: [
      'If you want the RDN, prefer an ACEND graduate program that includes practice. Paying for a master\'s and then competing for a DI is the old sequence. It still works. It is no longer the default worth paying twice for.',
      'If you do not want the RDN, you still need a reason for the degree. Public health, research, and policy hire masters graduates. Corporate wellness and food service often hire experience instead. Name the capability the degree buys before you sign.'
    ],
    outcomesHeading: 'What nutrition master\'s graduates actually earn and do',
    outcomes: [
      'Our Career Outcomes Survey 2026 put master-level first-position pay at $75,000, against $65,000 at bachelor level. That is our figure from 1,154 self-selected graduates, not a federal starting salary. The Bureau of Labor Statistics May 2024 median of $73,850 for dietitians and nutritionists is a full-career occupational median. Do not average them.',
      'Clinical dietetics was the largest first path in that survey at 28 percent. Community and public health nutrition was 20 percent. A master\'s that is really an MPH will feed the second path more than the first. Read the course list before you read the alumni page.'
    ],
    related: [
      ['/careers/registered-dietitian-nutritionist/', 'RDN career, salary, and the 2024 graduate-degree rule'],
      ['/rankings/best-acend-accredited-nutrition-programs/', 'ACEND accredited graduate and coordinated programs'],
      ['/rankings/online-nutrition-programs/', 'online nutrition master\'s options'],
      ['/certifications/rdn/', 'RDN examination eligibility'],
      ['/resources/how-to-become-a-registered-dietitian-step-by-step/', 'how the master\'s fits the RDN pathway']
    ]
  },
  'best-nutrition-doctorate-programs': {
    cardCta: 'Compare nutrition doctorates →',
    listFraming: [
      'Research PhDs in nutritional sciences and practice doctorates in clinical nutrition. Those are different credentials. One entry per institution keeps a university with both from occupying two ranks; we keep the stronger scoring record and list the rest below.'
    ],
    scoringHeading: 'How we score nutrition doctorates',
    scoring: [
      'Faculty credentials and departmental depth, 15 points, do more honest work here than on any other ranking. A doctorate without research-active faculty is a tuition product. Curriculum rigor still leads, but at this level rigor means a methods sequence and a dissertation or advanced clinical residency, not an extra MNT course.',
      'Cost value at 10 points cannot see the only cost question that matters: is the PhD funded. An unfunded research doctorate is usually a no. A self-funded Doctor of Clinical Nutrition can be a yes if it opens a named advanced practice role. The index will not make that distinction for you.'
    ],
    acendHeading: 'APD and the practice doctorate',
    acend: [
      'APD is Advanced Practice Doctoral, the ACEND type for practice doctorates that can carry supervised practice beyond the RDN. A PhD in nutritional sciences typically has no ACEND type because it is not a credentialing program. Ranking them on the same page is useful only if you already know which job you want.',
      'If you need the RDN and do not have it, a doctorate will not replace it. Get the credential first or inside a program that includes it. Retrofitting a DI around a research career is a miserable way to spend year six.'
    ],
    compareHeading: 'When two doctoral offers look similar on paper',
    compareIntro:
      'Ignore the score until you know funding, advisor, and job target. Then the score is a weak tiebreaker.',
    compareItems: [
      ['Funding', 'Stipend, tuition waiver, years guaranteed. An unfunded PhD offer is information about your prospects in that lab.'],
      ['Advisor, not department', 'You work for one person. Read their last five papers and talk to their current students. The index cannot see an advisor.'],
      ['Practice doctorate versus PhD', 'DCN and similar degrees train advanced clinicians. PhDs train researchers. Applying to the wrong one is an expensive category error.'],
      ['Placement of last five graduates', 'Faculty, industry, government, or still on the market. Ask for names, not adjectives.']
    ],
    compareClose:
      'A funded offer in a lab you respect beats a higher-scoring unfunded program. That sentence is the ranking.',
    limitsHeading: 'What a doctorate ranking cannot see',
    limits: [
      'Advisor quality, which is the actual education.',
      'The academic job market in nutrition, which is tight and not improved by a higher Quality Index score.',
      'Whether the DCN is required for the advanced clinical role you want, or merely preferred in one health system\'s posting.'
    ],
    enrollHeading: 'Five questions before you accept a nutrition doctorate',
    enrollItems: [
      ['Is this a research PhD or a practice doctorate?', 'If the program cannot say in one sentence, keep looking.'],
      ['What is the funding package, in dollars, for how many years?', 'Get it in the offer letter.'],
      ['Where did the last five graduates go?', 'A list of job titles, not a paragraph about diverse careers.'],
      ['Do I already hold the RDN, and does this program require it?', 'Clinical doctorates usually assume it. Research PhDs usually do not.'],
      ['What methods training is required in year one?', 'If the methods sequence is thin, the dissertation will be theater.']
    ],
    meaning: [
      'Take a funded research doctorate if you want to produce evidence. Take a practice doctorate if you are already an RDN and a specific role requires it. Do not take either because you wanted more letters after your name.',
      'Our survey put doctoral first-position pay at $85,000, the highest credential rung, on a small subsample. That is not a reason to self-fund a six-year PhD against a $73,850 occupational median.'
    ],
    outcomesHeading: 'Where nutrition doctorates go',
    outcomes: [
      'Academic faculty, government and industry research, scientific affairs, and senior clinical leadership. Food scientists and technologists had a May 2022 median of $79,860, flagged because that release is older than our other federal figures.',
      'The academic market is its own problem. Count openings in your subfield before you count ranking positions.'
    ],
    related: [
      ['/rankings/best-nutritional-science-programs/', 'nutritional science programs that feed a PhD'],
      ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs first'],
      ['/careers/registered-dietitian-nutritionist/', 'whether you still need the RDN'],
      ['/rankings/best-clinical-nutrition-programs/', 'clinical nutrition at practice level'],
      ['/methodology/', 'how doctoral programs are scored']
    ]
  },
  'best-dietetics-programs': {
    cardCta: 'Compare accredited dietetics programs →',
    listFraming: [
      'The accredited pathway to the RDN: DPD, CP, GP, and DI records. One entry per institution so a university with a DPD and a DI does not take two seats. We keep the stronger score and show the rest in the table.'
    ],
    scoringHeading: 'How we score dietetics programs',
    scoring: [
      'Accreditation is 15 points in a category where it is actually a binary gate. Every program on this page should already clear that gate. If a record slipped in with a dietetics tag and no ACEND type, treat the score as contaminated and verify with ACEND before you look at anything else.',
      'Supervised practice at 17 points is how we separate a GP or CP from a DPD. A DPD can score well on curriculum and still leave you in the internship match. That is not a flaw in the DPD. It is the product. Rank GPs against GPs and DPDs against DPDs in your own shortlist.'
    ],
    acendHeading: 'DPD, CP, GP, and DI on one dietetics list',
    acend: [
      'DPD is coursework only. CP combines coursework and practice, often at bachelor level. GP does the same at graduate level and now matches the Commission\'s degree rule. DI is practice only, for people who already hold a verification statement. Which acronym you need depends on what you have already finished, not on which one scored 84.',
      'Candidacy is not full accreditation. Candidacy programs can enroll you and still fail to grant a verification statement if accreditation is not awarded. Confirm status on the ACEND directory.'
    ],
    compareHeading: 'When two dietetics programs look interchangeable',
    compareIntro:
      'They are not. The acronym is the difference. Then placement geography. Then net cost.',
    compareItems: [
      ['Program type', 'GP or CP if you want one application. DPD plus DI if you want to control where you practise and can tolerate two processes.'],
      ['Named supervised practice sites', 'Especially for CP and GP. A dietetics degree without named sites is a DPD wearing a coordinated label.'],
      ['Verification statement rate', 'What share of last year cohort received one on time. This is the dietetics outcome. Job placement rates are marketing.'],
      ['In-state public versus private', 'The credential is identical. The debt is not. Employers do not pay extra for the private diploma.']
    ],
    compareClose:
      'If you want hospital work, dietetics is the option, not an option. Choose the accredited machine that gets you a verification statement with the least leftover debt.',
    limitsHeading: 'What a dietetics ranking cannot see',
    limits: [
      'Internship match rates for DPD graduates, which vary by year and are not a property of our score.',
      'How brutal the MNT sequence is, which is the part students remember and the index cannot grade.',
      'State licensure after you pass the exam. That is a board question, not a ranking question.'
    ],
    enrollHeading: 'Five questions before you enroll in dietetics',
    enrollItems: [
      ['What ACEND type is this specific program, and is status full or candidacy?', 'Search the directory for the program, not the university.'],
      ['Will I finish examination eligible, or will I still need a DI?', 'If the advisor uses the word typically, ask again.'],
      ['Who arranges practice hours, at which sites?', 'Required for CP, GP, and DI. Still worth asking a DPD about practicum.'],
      ['What is net cost through the verification statement, not through year four?', 'Include the internship year if it is separate.'],
      ['What share of last year cohort is now sitting or has passed the RDN exam?', 'Some programs will not say. That is data.']
    ],
    meaning: [
      'Start here if you want the protected clinical credential. Then read the master\'s ranking, because since 2024 the degree gate sits on top of the accreditation gate.',
      'If you do not want to practise dietetics, leave this page. A dietetics DPD is a poor nutritional science degree and a poor wellness degree. It is a professional sequence.'
    ],
    outcomesHeading: 'What dietetics programs lead to',
    outcomes: [
      'The RDN, then clinical, community, food service, and management roles inside the dietitians and nutritionists occupation: May 2024 median $73,850, about 90,900 jobs, 6 percent projected growth, roughly 6,200 openings a year.',
      'Our survey found 28 percent of graduates in clinical dietetics and 72 percent reporting that employers asked for medical nutrition therapy. That is the dietetics product. Programs that cannot name MNT in the curriculum are in the wrong ranking.'
    ],
    related: [
      ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs'],
      ['/rankings/best-acend-accredited-nutrition-programs/', 'every ACEND type we track'],
      ['/rankings/nutrition-programs-with-internship/', 'programs that document supervised practice'],
      ['/careers/clinical-dietitian/', 'clinical dietitian career and hospital pay'],
      ['/certifications/rdn/', 'RDN requirements and exam']
    ]
  },
  'best-sports-nutrition-programs': {
    cardCta: 'Compare sports nutrition programs →',
    listFraming: [
      'A thin category: degrees and concentrations with sports, exercise, or performance in the published materials. Most sports dietitians did not graduate from a program with sports in the title. They graduated from dietetics and specialised later. Read this list as a concentration overlay, not as a labour market.'
    ],
    scoringHeading: 'How we score sports nutrition programs',
    scoring: [
      'Curriculum rigor still leads, and here it means metabolism, exercise physiology, and biochemistry, not a course called sports nutrition 101. A program that brands heavily and under-teaches science will still pick up partnership points if it lists a team affiliation. That affiliation is not a job.',
      'Accreditation at 15 points is the trap. A sports-branded degree that is not ACEND accredited specialises you for roles that require an RDN you cannot sit for. Filter this list to accredited dietetics first. Then look at whether the concentration is real coursework or a marketing badge.'
    ],
    acendHeading: 'Sports branding versus dietetics accreditation',
    acend: [
      'If the ACEND type is DPD, CP, GP, or DI, you are on a credentialing path that can later take the CSSD. If there is no ACEND type, you are on a kinesiology-adjacent nutrition degree. The CSSD requires an active RDN. There is no sports shortcut around that.',
      'Team partnerships look like clinical partnerships in the index. They are not equivalent. A rotation at a university rec center is not a professional franchise job. Ask how many graduates in five years took a full-time sports dietitian post.'
    ],
    compareHeading: 'When two sports programs look equally exciting',
    compareIntro:
      'Excitement is the problem. Compare them as dietetics programs with an elective, because that is what the job market does.',
    compareItems: [
      ['Is it ACEND accredited?', 'If not, you are specialising for a job you cannot be hired into.'],
      ['Required exercise physiology and metabolism hours', 'A concentration should show up as credits, not as a webpage photo of a starting lineup.'],
      ['Who supervises athlete work, and is it an RDN?', 'If the concentration is run from athletics without dietetics faculty, you are in the wrong building.'],
      ['First jobs of the last cohort', 'Clinical, graduate school, or actual sports. If they cannot split those, assume clinical.']
    ],
    compareClose:
      'The honest sports plan is accredited dietetics, athlete volunteer hours you arrange yourself, then CSSD after you are working. A sports degree that skips that sequence is a souvenir.',
    limitsHeading: 'What a sports nutrition ranking cannot see',
    limits: [
      'How many full-time sports dietitian jobs exist. Federal data does not split them out of dietitians and nutritionists. We will not invent a census.',
      'Whether a listed team affiliation takes students every year or took one intern in 2019.',
      'Pay. Entry sports roles often sit below the $73,850 occupational median because applicant supply is high.'
    ],
    enrollHeading: 'Five questions before you specialise in sports nutrition',
    enrollItems: [
      ['Will this program make me RDN eligible?', 'If no, stop. CSSD comes after RDN, not instead of it.'],
      ['How many required credits are actually sports or exercise science?', 'Count them. Marketing will not.'],
      ['Can I volunteer with athletics in year one?', 'If the department cannot introduce you, you can still email coaches. Do that anyway.'],
      ['What share of alumni work in sports as a primary job?', 'Expect a small number. A large number is a red flag for how they count.'],
      ['What is the clinical backup plan?', 'You will need one. Name it before you enroll.']
    ],
    meaning: [
      'Everybody wants to work with athletes. Almost nobody does it as a first job. Build the clinical credential first. Use this ranking to add coursework, not to replace dietetics.',
      'Our survey found 10 percent of respondents in sports nutrition, larger than the paid market would suggest, which almost certainly includes part-time and hybrid work. Plan your rent on a clinical or collegiate recreation salary, not on a professional team fantasy.'
    ],
    outcomesHeading: 'The sports nutrition job market, without the romance',
    outcomes: [
      'Sports dietitians are counted inside dietitians and nutritionists: May 2024 median $73,850, about 90,900 jobs across every setting. Full-time posts with professional and collegiate teams are a thin slice of that and turn over slowly.',
      'The CSSD sits on top of an active RDN. Read the CSSD credential page before you pick a sports-titled degree. The degree is the wrong object to optimise.'
    ],
    related: [
      ['/careers/sports-nutritionist/', 'sports nutritionist career, without the myth'],
      ['/certifications/cssd/', 'CSSD requirements on top of the RDN'],
      ['/rankings/best-dietetics-programs/', 'accredited dietetics programs to build on'],
      ['/resources/sports-nutrition-career-guide/', 'sports nutrition career guide'],
      ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs']
    ]
  },
  'best-public-health-nutrition-programs': {
    cardCta: 'Compare public health nutrition programs →',
    listFraming: [
      'MPH nutrition tracks, community nutrition degrees, and population health programs. One entry per institution. A school of public health and a dietetics department at the same university do not get two ranks.'
    ],
    scoringHeading: 'How we score public health nutrition programs',
    scoring: [
      'Partnerships, 15 points, are doing real work here. A public health nutrition degree without health department, WIC, or extension relationships is a classroom. Curriculum rigor still counts, but the rigor that matters is epidemiology, biostatistics, and program evaluation, not another MNT elective.',
      'Accreditation is a weaker signal on this page than on dietetics. Many strong MPH nutrition programs are CEPH accredited for public health and not ACEND accredited for dietetics. That is correct for the job. It is incorrect if you quietly wanted the RDN as a backup. Decide which gate you need before you trust the score.'
    ],
    acendHeading: 'When ACEND matters in public health, and when CEPH does',
    acend: [
      'If you want to run WIC or supervise federally funded nutrition programs, many postings still prefer or require the RDN. Then you need ACEND. If you want epidemiology, policy, or program evaluation, you need a real MPH, which is a CEPH conversation, not an ACEND one.',
      'A dual GP plus MPH is the expensive way to keep both doors open. It is also a legitimate way. Do not stumble into it by accident because a ranking mixed the two program types.'
    ],
    compareHeading: 'When two public health nutrition programs score alike',
    compareIntro:
      'Separate them on methods training, practicum site, and whether the RDN is in the plan.',
    compareItems: [
      ['Epidemiology and biostats credits', 'Population work without methods is communications. Count the quantitative courses.'],
      ['Practicum host', 'State health department, local WIC, extension, or a nonprofit. Named hosts beat a required community experience.'],
      ['RDN eligibility', 'Yes, no, or optional via a GP. Get a one-word answer.'],
      ['In-state public MPH tuition', 'Public health salaries do not service private graduate debt as reliably as hospital RDN salaries do.']
    ],
    compareClose:
      'Clinical students ignore this page. That is an opportunity. Population nutrition is where the largest number of people are affected and the smallest number of applicants are looking.',
    limitsHeading: 'What a public health nutrition ranking cannot see',
    limits: [
      'CEPH accreditation, which we do not score because this index was built for dietetics-adjacent programs. Verify CEPH separately for an MPH.',
      'Whether graduates enter government or NGOs. Titles like community nutrition hide both.',
      'Language skills and community trust, which hire people in this field and do not appear in any national score.'
    ],
    enrollHeading: 'Five questions before you pick a public health nutrition degree',
    enrollItems: [
      ['Is this an MPH, an MS in community nutrition, or a dietetics GP with a public health elective?', 'Three different jobs.'],
      ['How many credits of epi, biostats, and evaluation?', 'Ask for the grid.'],
      ['Where do students complete practicum, by name?', 'If the answer is you find your own, you are the placement office.'],
      ['Do graduates need the RDN for the jobs they actually take?', 'Read last year postings, not the viewbook.'],
      ['What is in-state tuition if I am out of state?', 'Some MPH programs have one rate. Most do not.']
    ],
    meaning: [
      'Choose this ranking if you want to change what a county eats, not what a patient eats. Then decide whether the RDN is a complement or a distraction.',
      'Government dietitians and nutritionists sat at a May 2024 median of $74,000. Health education specialists, a common community title, sat at $63,000. Neither is a reason to take on private doctoral-level debt for an MPH.'
    ],
    outcomesHeading: 'Where public health nutrition graduates work',
    outcomes: [
      'WIC, state and local health departments, school nutrition, FQHCs, food policy councils, extension, and federal agencies. Our survey put community and public health nutrition at 20 percent of first paths, second only to clinical.',
      'Extension is the most ignored employer on that list. Every state has one. Almost no nutrition student thinks to look.'
    ],
    related: [
      ['/careers/public-health-nutritionist/', 'public health nutritionist career and agencies'],
      ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs'],
      ['/careers/nutrition-educator/', 'nutrition educator roles'],
      ['/rankings/online-nutrition-programs/', 'online public health nutrition options'],
      ['/resources/nutrition-degree-jobs-what-can-you-do/', 'jobs that are not clinical dietetics']
    ]
  },
  'best-clinical-nutrition-programs': {
    cardCta: 'Compare clinical nutrition programs →',
    listFraming: [
      'A sparse specialty: programs that publish clinical, medical nutrition therapy, or advanced practice language. Many excellent clinical dietitians come from general dietetics GPs that do not use the word clinical in the title. This list is the dedicated subset, not the whole hiring pool.'
    ],
    scoringHeading: 'How we score clinical nutrition programs',
    scoring: [
      'Curriculum rigor is the factor that should terrify you into reading the course list. Clinical work is MNT across organ systems, nutrition support, and pharmacology. A program that scores well on partnerships because it lists a hospital, but electives MNT, is a community program with a medical neighbor.',
      'Supervised practice at 17 points needs to mean acute care hours, not a generic practicum. The index can see that practice is documented. It cannot see whether those hours were ICU or cafeteria. Ask.'
    ],
    acendHeading: 'Clinical titles still need ACEND if you want a hospital job',
    acend: [
      'Hospitals hire RDNs. A clinical nutrition MS that is not ACEND accredited will not put you on a floor, regardless of how many pathophysiology courses it lists. GP and CP are the types that carry practice. DPD is still coursework only.',
      'Advanced practice doctoral clinical programs assume you already hold the RDN. If you do not, you are in the wrong catalog.'
    ],
    compareHeading: 'When two clinical programs look equally rigorous',
    compareIntro:
      'Ask where the hours happen. Then ask about nutrition support. Then ask about net cost.',
    compareItems: [
      ['Acute care rotations', 'Named hospitals, not a healthcare setting. Inpatient experience transfers to outpatient. The reverse transfers poorly.'],
      ['Nutrition support content', 'Enteral and parenteral. If it is not in the syllabus, inpatient hiring managers will notice in week one.'],
      ['Faculty who still see patients', 'Count credentialed practitioners, not adjuncts who last practised in 2009.'],
      ['CDCES and specialty pipelines', 'Diabetes is the volume specialty. A program that never mentions it is not watching the job board.']
    ],
    compareClose:
      'Clinical dietetics is 28 percent of our survey destinations and the best paid common entry. It is also the specialty that punishes a weak science bachelor. Do not use this ranking to paper over a missing biochemistry sequence.',
    limitsHeading: 'What a clinical nutrition ranking cannot see',
    limits: [
      'Caseload intensity during rotations. Two programs with 1,000 hours can produce very different clinicians.',
      'Hospital hiring preferences in your city. Some systems want a year of inpatient before outpatient. The index is national.',
      'Burnout. The work is charting and triage. The ranking cannot tell you whether you will like that.'
    ],
    enrollHeading: 'Five questions before you choose a clinical nutrition program',
    enrollItems: [
      ['Is this ACEND accredited as a GP, CP, or something else?', 'Hospital jobs care about the RDN, not the word clinical on a diploma.'],
      ['What share of supervised hours are inpatient?', 'Get a percentage, not a story.'],
      ['Is nutrition support required?', 'Yes or no. No is a different career.'],
      ['What is the student-to-preceptor ratio at the primary hospital?', 'Programs that know this number have a real site.'],
      ['What do first jobs pay in the last cohort, inpatient versus outpatient?', 'Outpatient care centers paid a May 2024 median of $79,200 for the occupation, hospitals $75,650. Your program should know which one it feeds.']
    ],
    meaning: [
      'If you want a hospital or clinic job, this page is a filter on top of dietetics, not a substitute for it. Take the accredited clinical GP over a prettier unaccredited clinical MS.',
      'Medical nutrition therapy was the most requested skill in our survey at 72 percent. Programs that cannot teach it are not clinical, whatever the title.'
    ],
    outcomesHeading: 'Clinical nutrition pay and destinations',
    outcomes: [
      'Dietitians and nutritionists in outpatient care centers: May 2024 median $79,200. Hospitals: $75,650. Occupational median: $73,850. Clinical is the setting that moves you up that table, not the campus brand.',
      'Our survey: 28 percent clinical dietetics as first path, 72 percent of respondents saying employers asked for MNT. That is the demand signal. Train for it explicitly.'
    ],
    related: [
      ['/careers/clinical-dietitian/', 'clinical dietitian career and inpatient reality'],
      ['/rankings/best-dietetics-programs/', 'accredited dietetics programs'],
      ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs'],
      ['/certifications/cdces/', 'CDCES specialty on top of RDN'],
      ['/certifications/rdn/', 'RDN credential']
    ]
  },
  'best-nutritional-science-programs': {
    cardCta: 'Compare nutritional science programs →',
    listFraming: [
      'Laboratory and population science degrees: nutritional sciences, nutrition science, human nutrition research tracks. One entry per institution. A science major and a DPD at the same university are different products; we keep the stronger score and still list both below.'
    ],
    scoringHeading: 'How we score nutritional science programs',
    scoring: [
      'Curriculum rigor is almost the whole story: biochemistry, metabolism, research methods, statistics. A nutritional science degree that is light on those is a relabeled wellness major. Faculty depth at 15 points is a fair proxy here because graduate and doctoral activity in the unit usually means labs.',
      'ACEND at 15 points will punish some excellent science departments that deliberately do not credential practitioners. That is the correct academic choice and the wrong RDN choice. If you want a licence, leave this ranking and go to dietetics. If you want a PhD or medical school, ignore the missing ACEND chip.'
    ],
    acendHeading: 'Science degrees that are not credentialing degrees',
    acend: [
      'Many nutritional science bachelors have no ACEND type. That is not an incomplete record. It is the design. You will not sit the RDN exam on this degree alone. Some units run a parallel DPD. If both exist, you can often move between them in year two. Confirm in writing while there is still time.',
      'A graduate nutritional science MS or PhD is a research credential. Do not buy it as a clinical workaround. Hospitals will not.'
    ],
    compareHeading: 'When two science programs look equally hard',
    compareIntro:
      'Hard is good. Compare lab access, methods, and where graduates actually go.',
    compareItems: [
      ['Undergraduate research requirement', 'A required lab semester beats an optional honors thesis that three students complete.'],
      ['Chemistry through biochemistry, with lab', 'If organic is optional, this is not a science degree.'],
      ['Medical school and PhD placement', 'Ask for counts. Nutritional science is an underused pre-med strategy when the science is real.'],
      ['Whether a DPD sits next door', 'If you might want the RDN later, the dual-option department is worth more than a higher-scoring pure science unit.']
    ],
    compareClose:
      'This is a biochemistry degree with a subject. Treat it that way. It is the strongest preparation for research and a weak preparation for practice.',
    limitsHeading: 'What a nutritional science ranking cannot see',
    limits: [
      'Lab quality and whether undergraduates pipette or watch.',
      'MCAT and PhD placement, which departments know and we will not scrape from anecdotes.',
      'The May 2022 food scientist wage we cite elsewhere, which is an older federal release and is not this degree\'s only destination.'
    ],
    enrollHeading: 'Five questions before you choose nutritional science',
    enrollItems: [
      ['Is there a parallel ACEND DPD if I change my mind?', 'Year-two transfers are possible only if the courses exist.'],
      ['What is the required chemistry and methods sequence?', 'Get the list. Count labs.'],
      ['How many undergraduates are on a paper or a poster in a typical year?', 'Research culture is visible in that number.'],
      ['Where did last year graduates go: job, MS, PhD, MD, dietetics post-bacc?', 'Five buckets. Ask for five numbers.'],
      ['What does this degree not allow me to do?', 'If the advisor will not say practise dietetics, they are being gentle. You still cannot.']
    ],
    meaning: [
      'Pick nutritional science if you want to study nutrition as a science. Pick dietetics if you want to practise. Students who try to make one degree do both usually get the weaker version of each.',
      'If medical school is the plan, this is often a better major than generic biology. The metabolism is deeper. The chronic disease context is real. The prerequisite overlap is nearly complete.'
    ],
    outcomesHeading: 'Where nutritional science graduates go',
    outcomes: [
      'Labs, food and supplement R&D, regulatory affairs, clinical research coordination, graduate school, and medicine. Food scientists and technologists: median $79,860 from the May 2022 federal release, which we flag as older than our 2024 figures.',
      'They do not go to inpatient MNT without a separate accredited pathway. Our survey\'s 4 percent in food science is a small slice and a reminder that this is not the default nutrition job, even for science majors.'
    ],
    related: [
      ['/rankings/best-nutrition-doctorate-programs/', 'nutrition PhD and clinical doctorates'],
      ['/rankings/best-dietetics-programs/', 'dietetics if you actually want to practise'],
      ['/rankings/best-nutrition-bachelors-programs/', 'bachelor nutrition programs including science tracks'],
      ['/certifications/cns/', 'CNS as a separate advanced-practice route'],
      ['/resources/nutrition-vs-dietetics-whats-the-difference/', 'nutrition versus dietetics']
    ]
  },
  'best-food-service-management-programs': {
    cardCta: 'Compare food service management programs →',
    listFraming: [
      'Food service systems, institutional food, school nutrition, and nutrition management. Thin as a dedicated major, huge as a job market. One entry per institution. Dietetics programs with a management rotation appear here only when the published program is actually a management degree or concentration.'
    ],
    scoringHeading: 'How we score food service management programs',
    scoring: [
      'Partnerships should mean a quantity-foods lab and an institutional practicum, not a hospital name on a dietetics page. Curriculum rigor here is procurement, cost control, HACCP, and human resources plus a nutrition core. If the program is secretly a culinary degree, the index may still like the facilities. You will not get a therapeutic-diet job from culinary alone.',
      'Cost value matters because this occupation pays a May 2024 median of $65,310, below the RDN median. Private tuition against that wage is a worse bet than it is against clinical dietetics. Public programs should rise on this page even when faculty depth is thinner.'
    ],
    acendHeading: 'Management, dietetics, and the RDN optional path',
    acend: [
      'Accredited dietetics supervised practice includes a food service rotation for a reason: every RDN is supposed to understand a kitchen. That does not make every DPD a management degree. If you want to run a hospital food operation, a management-major plus an RDN is the strongest pairing. The RDN is not always required in school nutrition, and it often is in healthcare.',
      'No ACEND type on a hospitality-heavy program means you are competing with hotel-restaurant graduates. Your nutrition coursework is the edge. Lean into it rather than hiding it.'
    ],
    compareHeading: 'When two management programs look equally practical',
    compareIntro:
      'Ask where the practicum kitchen is, who the employer partners are, and whether therapeutic diets are in the syllabus.',
    compareItems: [
      ['Institutional practicum site', 'Hospital, school district, or campus dining. Restaurant-only experience is the wrong kitchen.'],
      ['Therapeutic diet production', 'If the program cannot speak to texture modification and diet order systems, healthcare will not hire the graduate to run food service.'],
      ['Budget and staffing coursework', 'This job is operations. Soft nutrition electives will not save a unit that is over food cost.'],
      ['School nutrition versus healthcare track', 'Different regulations, different hiring. Pick one to be good at first.']
    ],
    compareClose:
      'Students avoid this specialty because it sounds unglamorous. Every hospital and district needs it. That is a durable job in a way a coaching practice is not.',
    limitsHeading: 'What a food service ranking cannot see',
    limits: [
      'Whether you will like operations. Budgets, staffing, health inspections. If that sentence bores you, leave this page.',
      'Certified dietary manager credentials and state school-nutrition certificates, which hire people this ranking does not score.',
      'Union environments and shift work, which define the daily job more than any Quality Index factor.'
    ],
    enrollHeading: 'Five questions before you choose food service management',
    enrollItems: [
      ['Is the practicum in an institutional kitchen?', 'Yes or no. Restaurant stages are a different career.'],
      ['Do I need the RDN for the jobs I want?', 'Healthcare food service often yes. School nutrition sometimes no. Read local postings.'],
      ['What is food cost, labor, and HACCP coverage in the required list?', 'If those are missing, this is not management.'],
      ['What did last year graduates manage in year one?', 'Unit size and setting. A cafe is not a 400-bed hospital.'],
      ['What does the top of this occupation pay?', 'Highest 10 percent of food service managers: above $105,420 as of May 2024. That is not a consolation prize.']
    ],
    meaning: [
      'Treat food service management as a first-choice operations career with a nutrition edge, not as the dietetics leftover. Our survey put 14 percent of graduates here, ahead of sports.',
      'The occupation is about 352,800 jobs, roughly four times dietitians and nutritionists. Scale is the argument. Prestige is not.'
    ],
    outcomesHeading: 'Food service management pay and scale',
    outcomes: [
      'Food service managers: May 2024 median $65,310, lowest 10 percent under $42,380, highest 10 percent above $105,420, 6 percent projected growth. Dietitians and nutritionists: median $73,850 across about 90,900 jobs. Different occupations. The management one is larger.',
      'Our survey: 14 percent first path in food service management, 55 percent saying employers asked for the skill. Students still under-apply. That gap is the opportunity.'
    ],
    related: [
      ['/careers/food-service-manager/', 'food service manager career and wages'],
      ['/rankings/best-dietetics-programs/', 'dietetics if you also want the RDN'],
      ['/rankings/most-affordable-nutrition-programs/', 'lower-cost programs for an operations career'],
      ['/resources/nutrition-degree-jobs-what-can-you-do/', 'jobs besides clinical dietetics'],
      ['/rankings/best-nutrition-associate-programs/', 'associate routes into technician and food service']
    ]
  },
  'online-nutrition-programs': {
    cardCta: 'Compare online nutrition degrees →',
    listFraming: [
      'Every program in our database the institution documents as available online, across certificate through doctorate. One entry per institution. Online is a delivery flag, not a ranking of quality. A weak campus program does not improve on Zoom.'
    ],
    scoringHeading: 'How we score online nutrition programs',
    scoring: [
      'The index does not award points for being online. These programs are scored like everyone else, then filtered. That is intentional. Format is not rigor. What changes online is supervised practice logistics, which the index can only see if the program documents hours or a CP/GP/DI type.',
      'Cost value should matter more to you than the 10 points we give it. Some public universities extend in-state rates to online students. Some private online rates exceed campus in-state. The score will not tell you which you are looking at. The bursar will.'
    ],
    acendHeading: 'Online coursework, local practice',
    acend: [
      'ACEND types still apply. An online GP is a real credentialing path if practice is arranged near you. An online MS with no ACEND type is a flexible science or wellness degree. Marketing will blur that. The directory will not.',
      'You cannot complete supervised practice on a laptop. Anyone implying otherwise is not running an accredited dietetics program. Ask who the local sites are, by name, in your state.'
    ],
    compareHeading: 'When two online programs look equally convenient',
    compareIntro:
      'Convenience is what you already know. Compare placement model, state authorisation, and per-credit price.',
    compareItems: [
      ['Placement model', 'Institution places you, institution helps, or you are on your own. The third model means competing with campus students for slots with no relationship behind you.'],
      ['State authorisation', 'Whether they may enroll a student in your state. This changes. Confirm before the deposit.'],
      ['Per-credit rate that applies to you', 'Online, in-state, out-of-state, military. Annual advertised tuition is a fiction.'],
      ['Synchronous requirements', 'A program that is online but requires Tuesday 9 a.m. labs is not compatible with a day job. Ask for the actual weekly grid.']
    ],
    compareClose:
      'Online nutrition degrees are not easier. They are different. The tell is vagueness about practice hours. If that paragraph is mush, the program is mush.',
    limitsHeading: 'What an online ranking cannot see',
    limits: [
      'Whether employers in your city quietly prefer a local campus. Most screen for credential, not format. Some still ask. We cannot map that by metro.',
      'Proctoring, residency weeks, and immersion labs that make a program less online than the title.',
      'Student support at 10 p.m., which is why working adults enroll and why some programs fail them.'
    ],
    enrollHeading: 'Five questions before you enroll online',
    enrollItems: [
      ['Is the specific program ACEND accredited?', 'Same rule as campus. Verify the program, not the university.'],
      ['Who arranges my supervised practice, at which named sites near me?', 'In writing. Regions are not sites.'],
      ['Are you authorised in my state this term?', 'Ask admissions and confirm independently if the answer is casual.'],
      ['What is the per-credit price I will pay, plus technology and placement fees?', 'Add them. Then compare to the nearest public campus.'],
      ['What is the weekly time pattern?', 'Asynchronous reading is compatible with work. Mandatory weekday Zoom labs may not be.']
    ],
    meaning: [
      'Use online when a job or a family makes campus impossible, and only after placement and accreditation are answered. Do not use online to dodge science labs that a GP still requires in person.',
      'Employers screen for the credential and the caseload. A transcript rarely announces delivery format. A thin placement announces itself in the interview.'
    ],
    outcomesHeading: 'Outcomes are not an online-versus-campus split',
    outcomes: [
      'Our survey did not find a separate online wage. First-position pay followed credential level: $65,000 bachelor, $75,000 master, in a self-selected sample. Format was not the variable. Accreditation and practice were.',
      'Dietitians and nutritionists overall: May 2024 median $73,850. That figure includes people who studied every which way. Do not expect an online premium or an online penalty if the GP and the hours are real.'
    ],
    related: [
      ['/resources/online-nutrition-degrees-are-they-respected/', 'whether employers respect online nutrition degrees'],
      ['/rankings/online-dietetics-programs/', 'online dietetics programs that can lead to the RDN'],
      ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs, campus or online'],
      ['/rankings/best-acend-accredited-nutrition-programs/', 'ACEND accredited programs regardless of format'],
      ['/states/', 'state pages, because placement is local']
    ]
  },
  'online-dietetics-programs': {
    cardCta: 'Compare online dietetics programs →',
    listFraming: [
      'Dietetics programs documented as online, including graduate programs that still require in-person practice. Highest-stakes online category on the site because the credentialing gate does not relax for distance students. One entry per institution.'
    ],
    scoringHeading: 'How we score online dietetics programs',
    scoring: [
      'Supervised practice and accreditation dominate, as they should. An online DPD is a flexible coursework path that still dumps you into the internship match. An online GP that cannot name local sites is a slower way to fail the same gate. We score documented practice, not a distance-learning badge.',
      'Faculty depth will favour large university systems that also run campus GPs. That can be good: bench depth for placements. It can also mean you are a remote add-on to a campus cohort that gets the best sites first. Ask which.'
    ],
    acendHeading: 'Online and examination eligible are not synonyms',
    acend: [
      'Only ACEND accredited program types make you RDN eligible. Online does not change DPD versus GP. Confirm the type and whether status is full or candidacy. Candidacy plus distance plus a new placement network is stacked risk.',
      'State boards generally follow the credential, not the format. State authorisation of the institution is the extra distance-education trap. Confirm both.'
    ],
    compareHeading: 'When two online dietetics programs promise the same flexibility',
    compareIntro:
      'They are promising format. You need them to promise sites.',
    compareItems: [
      ['Named placement sites in your state', 'If they have never placed anyone in your state, you are the pilot. That can work. It should be priced as risk.'],
      ['GP versus online DPD', 'GP finishes eligibility. DPD does not. Do not let the word dietetics hide the acronym.'],
      ['Total cost including travel to immersions', 'Many online GPs still require campus weeks. Budget flights.'],
      ['Preceptor model', 'Program-employed preceptors versus you recruiting your own. Recruiting your own is a part-time job on top of graduate school.']
    ],
    compareClose:
      'An accredited online GP with arranged local placements is an excellent option. An unaccredited online nutrition degree marketed to aspiring dietitians is a trap with a payment plan.',
    limitsHeading: 'What an online dietetics ranking cannot see',
    limits: [
      'Whether the program\'s placement team returns emails in your time zone.',
      'How often distance students lose sites to campus students.',
      'Licensure quirks if you move during the program. Boards and authorisation both care about residency.'
    ],
    enrollHeading: 'Five questions before an online dietetics deposit',
    enrollItems: [
      ['ACEND type and status for this exact program?', 'Directory screenshot, dated.'],
      ['Have you placed students in my state in the last two years, at which facilities?', 'Names.'],
      ['What happens if my site withdraws mid-rotation?', 'A process with a person attached, not a rarely happens.'],
      ['Authorised in my state, this term?', 'Admissions plus your state portal if one exists.'],
      ['All-in cost, including immersions, background checks, and unpaid practice months?', 'A spreadsheet, not a per-credit teaser.']
    ],
    meaning: [
      'Yes, you can become an RDN online, if accreditation and practice are real. Thousands of practising RDNs did coursework at a distance. None of them completed supervised practice at a distance.',
      'If a recruiter leads with flexibility and stalls on sites, end the call. Flexibility is the easy part. Sites are the program.'
    ],
    outcomesHeading: 'Online dietetics leads to the same occupation, or to nothing',
    outcomes: [
      'Pass the exam and you are in the same BLS occupation as campus graduates: May 2024 median $73,850. Fail to secure a verification statement and the degree is an expensive MS. Format will not be what hiring managers argue about. Eligibility will.',
      'Our survey\'s 86 percent employment within six months is a ceiling from a self-selected sample, not an online guarantee. Distance students who scramble for preceptors are exactly the people who miss that window.'
    ],
    related: [
      ['/rankings/online-nutrition-programs/', 'all online nutrition degrees, not only dietetics'],
      ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs'],
      ['/rankings/best-acend-accredited-nutrition-programs/', 'ACEND accredited programs'],
      ['/resources/online-nutrition-degrees-are-they-respected/', 'how employers read online dietetics'],
      ['/careers/registered-dietitian-nutritionist/', 'RDN career after an online GP']
    ]
  },
  'online-nutritionist-programs': {
    cardCta: 'Compare online nutritionist degrees →',
    listFraming: [
      'Online degrees that people shop when they search nutritionist, which is a legal word in some states and a hobby word in others. One entry per institution. Read your state board before you read this list.'
    ],
    scoringHeading: 'How we score online nutritionist programs',
    scoring: [
      'The index still rewards ACEND, science curriculum, and practice. That will rank a GP above a coaching-adjacent nutritionist bachelor, which is the correct order if you want clinical work and the wrong order if you already know you are staying in wellness. This page exists because the search term exists. The score is not an endorsement of the title.',
      'Cost value at 10 points underweights how often these programs are sold on easy payment plans. If the degree cannot lead to a licence where you live, price it as a course, not as a career.'
    ],
    acendHeading: 'Nutritionist on the homepage, dietetics in the directory',
    acend: [
      'If ACEND type is present, you may actually be looking at an online dietetics program that marketing renamed. That is good. Follow the accreditation, not the title.',
      'If ACEND type is absent, you are in unregulated-title territory. Your state may still licence nutritionists under other rules, including CNS pathways. That is a board question. This ranking cannot licence you.'
    ],
    compareHeading: 'When two online nutritionist degrees make the same promise',
    compareIntro:
      'The promise is usually a career as a nutritionist. Ask what that sentence means in your county.',
    compareItems: [
      ['Title protection in your state', 'Licensed, certified, or anyone may use it. If anyone may use it, employers who pay will ask for a different credential.'],
      ['ACEND or not', 'Yes means RDN path. No means something else. Do not let a recruiter say kind of.'],
      ['Scope of practice after graduation', 'Medical nutrition therapy is a no unless you have the RDN and a licence. If the program implies otherwise, leave.'],
      ['Total cost versus a public campus nutrition bachelor', 'Online nutritionist products are often more expensive than the honest local degree.']
    ],
    compareClose:
      'The word nutritionist is the most abused term in this field. An online degree does not settle the abuse. Your statute does.',
    limitsHeading: 'What an online nutritionist ranking cannot see',
    limits: [
      'Your state statute, which we will not summarise as fact because boards revise it.',
      'Whether Instagram is the actual business model. Many graduates of these programs are self-employed. Our survey\'s private practice slice was 7 percent and wished it had more business training.',
      'Issuer quality of stacked coaching certificates the program will try to sell you next.'
    ],
    enrollHeading: 'Five questions before you buy an online nutritionist degree',
    enrollItems: [
      ['What title may I legally use in my state after this degree?', 'Board website, not the program chat.'],
      ['Is this program ACEND accredited?', 'If you wanted dietetics, go to the online dietetics ranking instead.'],
      ['What jobs in my city list this degree by name?', 'Search postings for a week. If none do, believe them.'],
      ['What is the all-in cost, and what else will they try to enroll me in?', 'Certificate stacks are a business model.'],
      ['Who arranges any practice hours?', 'If the degree includes a practicum, treat it with the same suspicion you would an online GP.']
    ],
    meaning: [
      'If you want clinical practice, this is the wrong page. Go to online dietetics and the RDN. If you want wellness, education, or food industry, an online nutrition degree can be rational after you have read the statute.',
      'Do not buy a nutritionist degree as a cheaper dietetics. It is a different destination. Discount tickets to hospitals are not sold.'
    ],
    outcomesHeading: 'What online nutritionist programs lead to',
    outcomes: [
      'Wellness coordination, health education, content, food industry, and unregulated coaching, depending on state law. Health education specialists: May 2024 median $63,000. Dietitians and nutritionists: $73,850, which you do not get from an unaccredited nutritionist title.',
      'Our survey did not treat nutritionist as a separate path. Private practice was 7 percent and corporate wellness 8 percent. Both require you to invent a living. The degree will not do that for you.'
    ],
    related: [
      ['/careers/nutritionist/', 'nutritionist career and why the title is a mess'],
      ['/rankings/online-dietetics-programs/', 'online dietetics if you actually want the RDN'],
      ['/certifications/ln/', 'state licensure, which is the real gate'],
      ['/resources/nutrition-vs-dietetics-whats-the-difference/', 'nutrition versus dietetics'],
      ['/certifications/cnc/', 'coaching certificates, with an honest scope warning']
    ]
  },
  'most-affordable-nutrition-programs': {
    cardCta: 'Compare lower-cost nutrition programs →',
    listFraming: [
      'Sorted by published tuition first, Quality Index second. That is the only ranking on this site that does not lead with the score, because the question is price. Missing tuition sorts last. One entry per institution. Sticker is not net cost.'
    ],
    scoringHeading: 'Why the score is the tiebreaker here, not the sort',
    scoring: [
      'Cost value is 10 points in the index, which is why this page exists as a separate view. A public community college can lose a prestige ranking and still be the correct purchase. We sort on published annual tuition, then use the seven-factor score when two stickers match.',
      'Published tuition is a bad number, and it is the only number we can score nationally. Your net cost after aid is the real ranking. Use this list to find in-state publics and technician programs, then throw the stickers out and call financial aid.'
    ],
    acendHeading: 'Cheap and ineligible is not a bargain',
    acend: [
      'The cheapest program that cannot issue a verification statement is expensive if you wanted the RDN. Filter for ACEND after you sort for price, or you will optimise the wrong variable.',
      'In-state public DPDs and GPs are the legitimate low-cost RDN route. Out-of-state private online with a discount teaser is often not. Check the per-credit rate that applies to you.'
    ],
    compareHeading: 'When two cheap programs look like the same deal',
    compareIntro:
      'The lower sticker wins until you add fees, time to credential, and unpaid practice.',
    compareItems: [
      ['Net price calculator result for you', 'Do this the same week, same household assumptions, two schools.'],
      ['ACEND type', 'A $9,000 DPD plus a later unpaid DI can exceed a $18,000 GP with a stipend.'],
      ['Time to verification statement', 'Years in school are years not earning the $65,000 bachelor-level start in our survey.'],
      ['Residency rules', 'One year of in-state residency can be the highest-return move in this entire field.']
    ],
    compareClose:
      'Debt is the strongest predictor of whether a nutrition career feels sustainable. The median bachelor start in our survey was $65,000. Borrow $120,000 against that and the ranking of the program will not save you.',
    limitsHeading: 'What an affordability ranking cannot see',
    limits: [
      'Aid packages, which vary by student and by year.',
      'Cost of living at the campus or at the internship site.',
      'Opportunity cost of an extra year. A cheaper slower path can lose to a faster slightly more expensive GP.'
    ],
    enrollHeading: 'Five questions before you choose on price',
    enrollItems: [
      ['What is my net cost, from the financial aid office, not the ranking?', 'This page is a shortlist, not a bill.'],
      ['Is the program ACEND accredited for the credential I want?', 'Cheap plus ineligible is a full price education plus a second tuition.'],
      ['What fees sit on top of tuition?', 'Program, lab, online, placement.'],
      ['What does the practice year cost in lost wages?', 'Especially unpaid DIs after a cheap DPD.'],
      ['Can I establish in-state residency, and what is that worth?', 'Run the two-year math.']
    ],
    meaning: [
      'In this field employers screen for the credential, not the expensive alma mater. That is unusually good news. Take the accredited public option.',
      'The cheapest legitimate RDN sequence is still: community college science, in-state public DPD or bachelor, then a public GP or a stipend internship. Executed carefully it produces the same licence as the private route.'
    ],
    outcomesHeading: 'What you are borrowing against',
    outcomes: [
      'Our survey starting medians: certificate $52,000, associate $58,000, bachelor $65,000, master $75,000, doctorate $85,000. Federal occupational median for dietitians and nutritionists: $73,850. Those are the ceilings to borrow against, not promises.',
      'Food service management at $65,310 median across 352,800 jobs is the backup market if you skip the RDN to save money. It is a real market. It is not a clinical career bought at a discount.'
    ],
    related: [
      ['/rankings/best-nutrition-associate-programs/', 'associate nutrition programs, often the cheapest start'],
      ['/rankings/best-acend-accredited-nutrition-programs/', 'accredited programs, because cheap ineligible is not cheap'],
      ['/resources/is-nutrition-degree-worth-it/', 'return on a nutrition degree'],
      ['/resources/nutrition-salary-guide-2026/', 'salary guide to borrow against'],
      ['/rankings/best-nutrition-bachelors-programs/', 'bachelor nutrition programs, public versus private']
    ]
  },
  'nutrition-programs-with-internship': {
    cardCta: 'Compare programs with supervised practice →',
    listFraming: [
      'Programs whose published materials document supervised practice, internships, coordinated pathways, or practicum. This is a documentation filter, not a quality guarantee. One entry per institution. A university that documents hours in a GP and also runs a DPD appears once.'
    ],
    scoringHeading: 'How we score programs that document practice',
    scoring: [
      'Every program on this page already cleared a practice filter, so supervised practice points, 17 of 100, compress. The remaining spread is curriculum, accreditation type, partnerships, and cost. A documented practicum in a non-ACEND wellness degree can still appear here. That practicum will not make you an RDN. Read the chip.',
      'We cannot score hour quality. A published 1,200 hours and a published 800 hours both count as documented. Ask where the hours go. The index saw a number. You need a setting.'
    ],
    acendHeading: 'Documented practice is not always accredited practice',
    acend: [
      'CP, GP, DI, and APD are the ACEND types that carry practice toward the RDN. A practicum listed in a public health MPH is real education and not a verification statement. Both match this filter. Only the first group matches the Commission.',
      'If you are here because 94 percent of our survey said practice was critical, go further: accredited practice, named sites, owner of placement failure. Documentation is the floor we could measure.'
    ],
    compareHeading: 'When two programs both advertise internships',
    compareIntro:
      'Advertising is why they are on this page. Compare who owns the slot.',
    compareItems: [
      ['ACEND type', 'DI, CP, GP, APD versus an unnamed practicum. Different legal objects.'],
      ['Hours, settings, stipend', 'Three numbers. Programs that have them will say all three.'],
      ['Site withdrawal plan', 'Reassignment versus good luck. Only one of those is a program.'],
      ['Share of last cohort finished on schedule', 'Practice is where timelines slip. Ask.']
    ],
    compareClose:
      'The strongest predictor of a nutrition career is not the school name. It is the practice you complete. Students still choose programs without asking how hours are arranged. That is the wrong order.',
    limitsHeading: 'What a supervised-practice ranking cannot see',
    limits: [
      'Whether the documented hours are accredited toward the RDN.',
      'Preceptor quality and whether students are extra pairs of hands or actual learners.',
      'Match competitiveness for standalone DIs, which is a national market this page only partly captures.'
    ],
    enrollHeading: 'Five questions about the practice, not the brand',
    enrollItems: [
      ['How many hours, ACEND accredited or not?', 'Two answers.'],
      ['At which named sites, in which settings?', 'Hospital, food service, community. All three if you want a balanced DI.'],
      ['Who arranges the slot, you or the program?', 'If you, you need a year of lead time and a backup city.'],
      ['Stipend, tuition, and extra fees during practice?', 'Unpaid plus tuition is a common and ugly combination.'],
      ['What happens if a site withdraws?', 'A named coordinator and a bench of alternate sites, or a shrug.']
    ],
    meaning: [
      'Start here after you have picked a credential. Then throw out every program that cannot answer the site question in writing.',
      'Integrated GP and CP programs exist so you are not at the mercy of a separate match. If you can afford the integrated route, it is usually the less fragile machine.'
    ],
    outcomesHeading: 'Why practice hours show up in the wage later',
    outcomes: [
      'Employers interview the caseload. Our survey: 94 percent called supervised practice critical or very important, the strongest consensus we recorded. MNT demand at 72 percent is what those hours were for.',
      'Federal wages attach to the occupation after the credential, not to the internship brand. May 2024 median $73,850 for dietitians and nutritionists. The internship is how you enter that occupation, not a separate career with a separate wage table.'
    ],
    related: [
      ['/rankings/best-nutrition-certificate-programs/', 'dietetic internships and practice certificates'],
      ['/rankings/best-nutrition-masters-programs/', 'graduate programs that include practice'],
      ['/rankings/best-dietetics-programs/', 'accredited dietetics pathways'],
      ['/resources/how-to-become-a-registered-dietitian-step-by-step/', 'where supervised practice sits in the RDN sequence'],
      ['/resources/nutrition-career-outcomes/', 'survey finding: 94 percent said practice was critical']
    ]
  },
  'best-acend-accredited-nutrition-programs': {
    cardCta: 'Compare ACEND accredited programs →',
    listFraming: [
      'Institutions holding any ACEND program type we record: DPD, CP, GP, DI, DT, APD. This is the subset where the RDN gate is actually open. One entry per institution. A university with a DPD and a DI still occupies one rank; we keep the stronger score.'
    ],
    scoringHeading: 'How we score programs that already cleared ACEND',
    scoring: [
      'Accreditation is 15 points, and on this page everyone already has some version of it. Remaining spread comes from practice intensity, curriculum detail, partnerships, faculty depth, completion, and cost. A candidate program can appear if we recorded the type. Candidacy is not full accreditation. Treat those scores as provisional.',
      'Because the gate is held constant, this ranking is the fairest place to let cost and practice separate publics from privates. A famous DPD and an in-state GP may land near each other. Your debt will not.'
    ],
    acendHeading: 'You are looking at program types, not university brands',
    acend: [
      'ACEND accredits programs, not institutions. A regionally accredited university can run a nutrition BA that does not lead to the RDN. That BA is not on this page. If a recruiter says the university is accredited, ask for the program type.',
      'Full versus candidacy: candidacy means the self-study and site visit are not done. Students can enroll. If accreditation is later denied, the verification statement is the casualty. Confirm current status on the ACEND directory the week you apply.'
    ],
    compareHeading: 'When two accredited programs score within three points',
    compareIntro:
      'Accreditation already matched. Separate them on type, sites, and net cost.',
    compareItems: [
      ['Type', 'GP or CP finishes eligibility. DPD does not. DI is practice only. DT is technician. APD is advanced practice.'],
      ['Status', 'Accredited versus candidate. Candidate is a different risk product.'],
      ['Practice ownership', 'Integrated versus match. Pick your tolerance for a second competitive process.'],
      ['Net cost through the verification statement', 'Include the DI year if you are on a DPD.']
    ],
    compareClose:
      'If it is not ACEND accredited, you cannot become an RDN. That is the credentialing rule, not our opinion. This page is the only ranking that already applied that rule.',
    limitsHeading: 'What an ACEND ranking cannot see',
    limits: [
      'Exam pass rates, still unpublished comparably.',
      'Whether candidacy will convert. We cannot predict a site visit.',
      'Teaching quality inside an accredited shell. Accreditation is a floor.'
    ],
    enrollHeading: 'Five questions even after you see the ACEND chip',
    enrollItems: [
      ['What is the program type, and is status accredited or candidate?', 'Directory, not brochure.'],
      ['Will I finish examination eligible in this program alone?', 'Yes only for CP, GP, DI (if you already have coursework), DT, and some APD.'],
      ['Who arranges practice, at which sites?', 'Still the question. Accreditation does not answer it.'],
      ['What is net cost through the verification statement?', 'The chip is not a scholarship.'],
      ['When was the last site visit, and when is the next?', 'Programs in a self-study year are busy. That can be good or chaotic.']
    ],
    meaning: [
      'Start here if the RDN is the goal. Then use the master\'s ranking because the graduate-degree rule sits on top of accreditation. Then use the internship ranking to see who documents hours.',
      'Do not waste years on a nutrition degree that cannot issue a verification statement. Famous campuses do this every year. The directory is free. Use it.'
    ],
    outcomesHeading: 'Accredited programs lead to the occupation. Unaccredited ones do not.',
    outcomes: [
      'The Commission requires ACEND coursework and ACEND practice plus a graduate degree. Clear those and you enter dietitians and nutritionists: May 2024 median $73,850, about 90,900 jobs, roughly 6,200 openings a year.',
      'Our survey\'s 86 percent six-month employment is among graduates, many of whom finished accredited pathways. It is not a claim about unaccredited nutrition bachelors. Do not cite it that way.'
    ],
    related: [
      ['/rankings/best-dietetics-programs/', 'dietetics programs by type'],
      ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs'],
      ['/rankings/nutrition-programs-with-internship/', 'programs that document supervised practice'],
      ['/certifications/rdn/', 'RDN eligibility rules'],
      ['/resources/how-to-become-a-registered-dietitian-step-by-step/', 'step by step through ACEND, practice, and the exam']
    ]
  }
};

export const careerRankingLinks: Record<string, [string, string][]> = {
  'registered-dietitian-nutritionist': [
    ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs'],
    ['/rankings/best-acend-accredited-nutrition-programs/', 'ACEND accredited dietetics pathways'],
    ['/rankings/nutrition-programs-with-internship/', 'programs that include supervised practice']
  ],
  nutritionist: [
    ['/rankings/best-nutrition-bachelors-programs/', 'bachelor nutrition programs'],
    ['/rankings/online-nutritionist-programs/', 'online nutritionist degrees'],
    ['/rankings/best-dietetics-programs/', 'dietetics programs if you want the protected title']
  ],
  'clinical-dietitian': [
    ['/rankings/best-clinical-nutrition-programs/', 'clinical nutrition programs'],
    ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs'],
    ['/rankings/best-dietetics-programs/', 'accredited dietetics programs']
  ],
  'public-health-nutritionist': [
    ['/rankings/best-public-health-nutrition-programs/', 'public health nutrition programs'],
    ['/rankings/best-nutrition-masters-programs/', 'nutrition master\'s and MPH tracks'],
    ['/rankings/online-nutrition-programs/', 'online public health nutrition options']
  ],
  'sports-nutritionist': [
    ['/rankings/best-sports-nutrition-programs/', 'sports nutrition programs'],
    ['/rankings/best-dietetics-programs/', 'dietetics programs to build the RDN first'],
    ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs']
  ],
  'food-service-manager': [
    ['/rankings/best-food-service-management-programs/', 'food service management programs'],
    ['/rankings/best-nutrition-associate-programs/', 'associate programs into technician and food service'],
    ['/rankings/most-affordable-nutrition-programs/', 'lower-cost nutrition programs']
  ],
  'nutrition-educator': [
    ['/rankings/best-public-health-nutrition-programs/', 'public health nutrition programs'],
    ['/rankings/best-nutrition-bachelors-programs/', 'bachelor nutrition programs'],
    ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs']
  ],
  'corporate-wellness-coordinator': [
    ['/rankings/online-nutrition-programs/', 'online nutrition programs for working adults'],
    ['/rankings/best-nutrition-bachelors-programs/', 'bachelor nutrition programs'],
    ['/rankings/best-public-health-nutrition-programs/', 'public health nutrition programs']
  ]
};

export const certRankingLinks: Record<string, [string, string][]> = {
  rdn: [
    ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs'],
    ['/rankings/best-acend-accredited-nutrition-programs/', 'ACEND accredited programs'],
    ['/rankings/best-dietetics-programs/', 'accredited dietetics programs']
  ],
  cns: [
    ['/rankings/best-nutritional-science-programs/', 'nutritional science programs'],
    ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs']
  ],
  cssd: [
    ['/rankings/best-sports-nutrition-programs/', 'sports nutrition programs'],
    ['/rankings/best-dietetics-programs/', 'dietetics programs that lead to the RDN first']
  ],
  cdces: [
    ['/rankings/best-clinical-nutrition-programs/', 'clinical nutrition programs'],
    ['/rankings/best-dietetics-programs/', 'accredited dietetics programs']
  ],
  ln: [
    ['/rankings/best-nutrition-bachelors-programs/', 'bachelor nutrition programs'],
    ['/rankings/best-acend-accredited-nutrition-programs/', 'ACEND accredited programs']
  ],
  cnc: [
    ['/rankings/best-nutrition-certificate-programs/', 'nutrition certificate programs'],
    ['/rankings/online-nutritionist-programs/', 'online nutritionist degrees']
  ],
  csw: [
    ['/rankings/online-nutritionist-programs/', 'online nutritionist programs'],
    ['/rankings/best-public-health-nutrition-programs/', 'public health nutrition programs']
  ]
};

export const resourceRankingLinks: Record<string, [string, string][]> = {
  'nutrition-vs-dietetics-whats-the-difference': [
    ['/rankings/best-dietetics-programs/', 'accredited dietetics programs'],
    ['/rankings/best-nutritional-science-programs/', 'nutritional science programs']
  ],
  'how-to-become-a-registered-dietitian-step-by-step': [
    ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs'],
    ['/rankings/best-acend-accredited-nutrition-programs/', 'ACEND accredited programs'],
    ['/rankings/nutrition-programs-with-internship/', 'programs with supervised practice']
  ],
  'nutrition-degree-jobs-what-can-you-do': [
    ['/rankings/best-food-service-management-programs/', 'food service management programs'],
    ['/rankings/best-public-health-nutrition-programs/', 'public health nutrition programs']
  ],
  'is-nutrition-degree-worth-it': [
    ['/rankings/most-affordable-nutrition-programs/', 'lower-cost nutrition programs'],
    ['/rankings/best-nutrition-masters-programs/', 'compare nutrition master\'s programs']
  ],
  'online-nutrition-degrees-are-they-respected': [
    ['/rankings/online-nutrition-programs/', 'online nutrition degrees'],
    ['/rankings/online-dietetics-programs/', 'online dietetics programs']
  ],
  'nutrition-salary-guide-2026': [
    ['/rankings/most-affordable-nutrition-programs/', 'lower-cost nutrition programs'],
    ['/rankings/best-nutrition-masters-programs/', 'master\'s programs against graduate-level pay']
  ],
  'sports-nutrition-career-guide': [
    ['/rankings/best-sports-nutrition-programs/', 'sports nutrition programs'],
    ['/rankings/best-dietetics-programs/', 'dietetics programs to complete first']
  ]
};

export function copyFor(slug: string): RankingCopy {
  const copy = rankingCopy[slug];
  if (!copy) {
    throw new Error(`Missing unique ranking copy for ${slug}`);
  }
  return copy;
}
