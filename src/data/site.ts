export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  shortRole: string;
  education: string[];
  certifications: string[];
  knowsAbout: string[];
  covers: string;
  bio: string[];
  photo: string;
  photoSmall: string;
};

export const team: TeamMember[] = [
  {
    slug: 'donald-lewis',
    photo: '/images/team/donald-lewis.jpg',
    photoSmall: '/images/team/donald-lewis-sm.jpg',
    name: 'Donald Lewis',
    role: 'Executive Director and Nutrition Science Lead',
    shortRole: 'Executive Director',
    education: [
      'Ph.D. in Nutritional Sciences, Cornell University',
      'M.S. in Human Nutrition, Columbia University',
      'B.S. in Dietetics, University of Florida'
    ],
    certifications: [
      'Registered Dietitian Nutritionist (RDN)',
      'Certified Nutrition Specialist (CNS)'
    ],
    knowsAbout: [
      'nutritional epidemiology',
      'clinical nutrition intervention',
      'medical nutrition therapy',
      'evidence-based practice guidelines',
      'nutrition science curriculum design'
    ],
    covers:
      'Nutrition science accuracy, program evaluation, and content strategy across the whole site.',
    bio: [
      'Donald has spent more than twenty-two years in nutrition science, clinical dietetics, and public health nutrition. He has held faculty appointments at several universities and served as Director of Nutrition Programs for a major hospital system, where he was responsible for clinical protocols across inpatient and outpatient services. His published research covers nutritional epidemiology, clinical nutrition interventions, and how dietetics education is delivered.',
      'He is the reason this site will not publish a nutrition claim it cannot defend. Every statement about physiology, metabolism, medical nutrition therapy, or clinical practice goes through him before it goes live, and he is unsentimental about deleting anything that reads well but does not survive contact with the evidence. He is equally hard on the opposite failure, where a page hedges so heavily that a student cannot make a decision from it.',
      'His position on program selection is consistent and blunt. A nutrition degree is a science degree, and a program that lets you avoid biochemistry, physiology, and statistics is preparing you for a job market that will not hire you. He tells students to read the required course list before they read anything else the institution publishes.'
    ]
  },
  {
    slug: 'rachel-weng',
    photo: '/images/team/rachel-weng.jpg',
    photoSmall: '/images/team/rachel-weng-sm.jpg',
    name: 'Rachel Weng',
    role: 'Director of Dietetics Education and Career Pathways',
    shortRole: 'Director of Dietetics Education',
    education: [
      'M.S. in Dietetics, University of California, Davis',
      'B.S. in Nutrition and Food Science, University of Maryland',
      'Graduate of an ACEND accredited program'
    ],
    certifications: [
      'Registered Dietitian Nutritionist (RDN)',
      'Licensed Dietitian (LD), multiple states'
    ],
    knowsAbout: [
      'ACEND accreditation standards',
      'supervised practice and dietetic internships',
      'dietetics curriculum design',
      'RDN credentialing pathways',
      'internship matching'
    ],
    covers:
      'Dietetics careers, supervised practice, accreditation requirements, and student success strategy.',
    bio: [
      'Rachel has sixteen years in dietetics education and career development, including several as Program Director for ACEND accredited programs at more than one university. She has written self-study reports, sat through site visits, built supervised practice rotations from scratch, and negotiated with hospital departments for placement slots. She knows what accreditation language means in practice, which is a narrower skill than it sounds and a rarer one.',
      'She owns the part of this site that decides whether readers actually become practitioners. The route to the RDN credential is a sequence of gates, and each one has rules that are published but not explained anywhere in plain language. Her job here is to explain them in plain language, including the parts that are genuinely unfair and the parts students assume are unfair but are not.',
      'Her recurring argument to students is about supervised practice. She believes the single largest predictor of whether a nutrition graduate has a career is the quality of the practice hours they complete, and she is direct about the cost of treating internship placement as something to think about in the final year rather than the first.'
    ]
  },
  {
    slug: 'matthew-obrien',
    photo: '/images/team/matthew-obrien.jpg',
    photoSmall: '/images/team/matthew-obrien-sm.jpg',
    name: "Matthew O'Brien",
    role: 'Director of Public Health Nutrition and Community Wellness',
    shortRole: 'Director of Public Health Nutrition',
    education: [
      'M.P.H. in Public Health Nutrition, University of North Carolina',
      'B.S. in Community Health, University of Michigan'
    ],
    certifications: [
      'Registered Dietitian Nutritionist (RDN)',
      'Certified Health Education Specialist (CHES)'
    ],
    knowsAbout: [
      'public health nutrition',
      'food access and nutrition equity',
      'population health intervention',
      'nutrition policy evaluation',
      'community wellness programming'
    ],
    covers:
      'Public health nutrition careers, community programs, nutrition policy, and corporate wellness.',
    bio: [
      'Matthew has eighteen years in public health nutrition, community wellness, and nutrition policy. He has served as Nutrition Program Manager for state health departments and for community health organizations, running WIC-adjacent programming, school nutrition initiatives, and food access work in counties where the nearest full grocery store was a thirty minute drive. His published work covers community-based nutrition programs and policy evaluation.',
      'He covers the part of this field where the largest number of people are affected and the smallest number of students are looking. Clinical dietetics gets the attention because it is legible: a hospital, a patient, a care plan. Population nutrition is harder to picture and considerably harder to do well, and it is where policy decisions with ten-year consequences get made by people with a nutrition credential.',
      'His standing position is that individual counseling and population intervention are different professions that share a knowledge base, and that students should decide early which one they are training for. He is also the person on this team most likely to tell you that a nutrition problem is actually a transportation problem, a wage problem, or a zoning problem, and that pretending otherwise is why so many well-designed programs fail.'
    ]
  }
];

export const site = {
  name: 'NutritionSchools.org',
  url: 'https://nutritionschools.org',
  tagline: 'The complete guide to nutrition, dietetics, and nutritional science education.',
  description:
    'Independent research on nutrition, dietetics, and nutritional science degree programs, careers, salaries, and credentialing. Real programs, verified federal wage data, original graduate research, and opinions we will defend.',
  published: '2026-08-14',
  reviewed: '2026-08-14',
  reviewedLabel: 'August 14, 2026',
  team
};

export const teamBySlug = Object.fromEntries(team.map(member => [member.slug, member]));

/** Degree-level ranking pages. `match` keys into the program index level field. */
export const levels = [
  {
    slug: 'best-nutrition-certificate-programs',
    title: 'Best Nutrition Certificate Programs',
    heading: 'Best Nutrition and Dietetics Certificate Programs',
    match: 'certificate',
    intro:
      'Dietetic internships, individualized supervised practice pathways, and post-baccalaureate certificates. In this field the certificate category is not a shortcut, it is the supervised practice gate.',
    thesis:
      'In most fields a certificate is a skills add-on. In dietetics it is often the credential that decides whether you can sit the RDN examination at all. Read this category as supervised practice, not as a light version of a degree.',
    questions: [
      {
        heading: 'What does a nutrition certificate actually get you?',
        answer:
          'It depends entirely on which kind you are looking at. A dietetic internship or supervised practice certificate completes the practice hours required for RDN examination eligibility, which makes it one of the most consequential credentials in the field. A general nutrition certificate with no supervised practice component is a continuing education product and will not qualify you for a clinical role. These two things share a word and almost nothing else.'
      },
      {
        heading: 'Can a certificate replace a nutrition degree?',
        answer:
          'No, and any program implying otherwise is selling you something. Registered Dietitian Nutritionist eligibility now requires a graduate degree alongside accredited coursework and supervised practice. Certificates sit inside that structure, they do not substitute for it. As a second credential on top of a degree you already hold, a certificate is often exactly the right choice.'
      },
      {
        heading: 'How long do these programs take?',
        answer:
          'Dietetic internships commonly run eight to twelve months full time and carry a documented supervised practice hour requirement, frequently in the region of one thousand hours. Post-baccalaureate coursework certificates vary widely, from two semesters to two years part time. The published hour count is the number to compare, not the calendar length.'
      },
      {
        heading: 'Is a certificate program worth the cost?',
        answer:
          'If it produces a verification statement that makes you examination eligible, it is worth almost any reasonable price, because the alternative is not practising. If it does not, price it as continuing education and judge it on whether it teaches you something an employer will pay for. Ask which of the two you are buying, in writing, before you pay a deposit.'
      }
    ]
  },
  {
    slug: 'best-nutrition-associate-programs',
    title: 'Best Associate in Nutrition Programs',
    heading: 'Best Associate Degree Programs in Nutrition and Dietetic Technology',
    match: 'associate',
    intro:
      'Two-year routes into dietetic technician work, food service supervision, and community nutrition support roles, plus the transfer pathway into a bachelor degree.',
    thesis:
      'The associate degree in this field has one honest use and one dishonest one. The honest use is the Nutrition and Dietetic Technician credential, or a deliberate transfer plan into a four-year program. The dishonest use is selling it as a route to becoming a dietitian, which it is not.',
    questions: [
      {
        heading: 'What job does an associate degree in nutrition lead to?',
        answer:
          'Primarily the Nutrition and Dietetic Technician, Registered credential, which is a real credential with a real examination and a defined scope of practice. BLS reported a May 2024 median annual wage of $37,040 for dietetic technicians. That is a genuine job at a genuine wage, and it is well below the $73,850 median for dietitians and nutritionists. Both numbers are true and you should plan around both.'
      },
      {
        heading: 'Can you become a registered dietitian with an associate degree?',
        answer:
          'No. RDN eligibility requires accredited coursework, supervised practice, and a graduate degree. An associate degree can be the first two years of that path if the credits transfer, which is a question to settle with a named transfer advisor before you enroll, not after.'
      },
      {
        heading: 'Should I do an associate degree or go straight to a bachelor?',
        answer:
          'If cost is the binding constraint and a documented transfer agreement exists, the associate route is financially rational and we would recommend it over debt at a four-year institution. If you already know you want the RDN credential and you can afford the four-year path, go directly. The risk in the associate route is credit loss on transfer, and that risk is manageable only if you manage it deliberately from your first semester.'
      },
      {
        heading: 'How do we rank associate programs?',
        answer:
          'With the same Program Quality Index used across the site, which weights documented curriculum detail, supervised practice content, accreditation, partnerships, completion, and published cost. Community colleges tend to score well on the cost factor and less well on departmental depth, which is an accurate description of the trade rather than a flaw in the measurement.'
      }
    ]
  },
  {
    slug: 'best-nutrition-bachelors-programs',
    title: 'Best Bachelor in Nutrition Programs',
    heading: 'Best Bachelor Degree Programs in Nutrition and Dietetics',
    seoTitle: 'Best Nutrition Schools: Best Bachelor Degree Programs in Nutrition',
    seoDescription:
      'Compare the best nutrition schools offering bachelor degrees in nutrition, dietetics, and nutritional science, with links to every official program page and an honest account of what the degree does and does not qualify you for.',
    lead:
      'The four-year degree is where a nutrition career is either set up properly or quietly sabotaged. Accredited coursework, real science content, and a supervised practice plan are the three things that matter, and only one of them shows up in a ranking.',
    match: 'bachelors',
    flagship: true,
    intro:
      'Four-year degrees in nutrition, dietetics, nutritional science, and food and nutrition, including the accredited coursework route toward the RDN credential.',
    thesis:
      'This is the most consequential decision on the site and the one where institutional prestige matters least. Compare the required science sequence, the accreditation status, and whether the department can actually place you in supervised practice. Ignore the campus photography.',
    questions: [
      {
        heading: 'What are the best nutrition schools for a bachelor degree?',
        answer:
          'The best program for you is the accredited one you can afford whose department has real supervised practice relationships in the region where you want to work. We rank on documented program attributes rather than reputation, and the ranking below is a shortlist tool, not a verdict. A well-run public program at $12,000 a year beats a famous one at $58,000 a year in almost every scenario we can construct.'
      },
      {
        heading: 'What should a bachelor curriculum in nutrition contain?',
        answer:
          'Two semesters of general chemistry, organic chemistry, biochemistry, human anatomy and physiology, microbiology, statistics, and food science, followed by nutrition assessment, medical nutrition therapy, community nutrition, and food service systems management. If a program lets you graduate without biochemistry and medical nutrition therapy, it is a wellness degree wearing a nutrition name.'
      },
      {
        heading: 'Does the bachelor degree alone make you a dietitian?',
        answer:
          'Not any longer. Since 2024 the minimum degree requirement for RDN examination eligibility is a graduate degree, alongside accredited coursework and supervised practice hours. The bachelor degree is the foundation and the accredited coursework carrier, and treating it as the finish line is the single most common planning error we see.'
      },
      {
        heading: 'What can you do with only the bachelor degree?',
        answer:
          'Community nutrition programming, food service management, corporate wellness coordination, WIC and public health program roles, food industry and product work, and health education. These are real careers. What you cannot do is provide medical nutrition therapy in a clinical setting, which in most states requires the RDN credential and licensure.'
      },
      {
        heading: 'How much does an accredited nutrition bachelor cost?',
        answer:
          'Published tuition in our database spans roughly $9,000 to more than $50,000 a year, and the sticker price is close to meaningless before aid. Get the net figure from the financial aid office for your own circumstances, and weight it more heavily than any position in the ranking below. Debt is the strongest predictor of whether this career feels sustainable.'
      }
    ]
  },
  {
    slug: 'best-nutrition-masters-programs',
    title: 'Best Master in Nutrition Programs',
    heading: 'Best Master Degree Programs in Nutrition and Dietetics',
    seoTitle: 'Master in Nutrition: Best Nutrition Masters Degree Programs',
    seoDescription:
      'Compare nutrition masters degree programs including graduate programs that combine accredited coursework with supervised practice, with links to every official program page and an honest read on which route to take.',
    lead:
      'Since 2024 a graduate degree is the minimum for RDN examination eligibility, which changed this category from an enhancement into a requirement. That makes choosing badly here considerably more expensive than it used to be.',
    match: 'masters',
    flagship: true,
    intro:
      'Graduate degrees in nutrition, dietetics, clinical nutrition, and nutritional science, including combined programs that carry both coursework and supervised practice.',
    thesis:
      'The graduate degree requirement means you will be paying for a masters whether or not you wanted one. Given that, the only sensible strategy is to pick a program that also delivers your supervised practice hours, rather than paying twice for two separate gates.',
    questions: [
      {
        heading: 'Do you need a masters degree to become a dietitian?',
        answer:
          'Yes. As of January 2024 the Commission on Dietetic Registration requires a minimum of a graduate degree for eligibility to sit the RDN examination. This is not optional and it is not phased differently by state. Verify the current requirement with the Commission directly, because credentialing rules do change and this one changed recently.'
      },
      {
        heading: 'What is the difference between a graduate program and a masters plus an internship?',
        answer:
          'An ACEND accredited graduate program integrates the required coursework and the supervised practice into one credential, so you finish examination eligible. The older sequence was a bachelor degree carrying accredited coursework, then a separate competitive dietetic internship, then a masters. The integrated route is usually faster and involves one application instead of two. The separate route can be cheaper and gives you more control over where you practise.'
      },
      {
        heading: 'Can you get a nutrition masters online?',
        answer:
          'Yes, and this is the level where online delivery makes the most sense. Graduate coursework in nutrition is reading, analysis, case work, and project work, which transfers to remote delivery well. The supervised practice component does not become remote, it becomes local: credible online programs place you at sites near where you live. Ask exactly who arranges those placements before you enroll.'
      },
      {
        heading: 'Is a nutrition masters worth it if you do not want the RDN?',
        answer:
          'Sometimes, and the test is specific. In public health nutrition, research, and food policy a graduate degree opens doors a bachelor does not, and an MPH in particular is close to a standard credential. In corporate wellness and food service management, two years of experience frequently competes better than two years of tuition. Ask which named capability the degree buys you that your next job would not.'
      },
      {
        heading: 'How long does a nutrition masters take?',
        answer:
          'Two years full time is typical for a coursework masters. Integrated graduate programs that include supervised practice commonly run twenty to twenty-four months, and our database holds programs documenting schedules in that range. Part-time and online enrollment extends this to three or four years, which is the trade many working students correctly choose to make.'
      }
    ]
  },
  {
    slug: 'best-nutrition-doctorate-programs',
    title: 'Best Doctorate in Nutrition Programs',
    heading: 'Best Doctoral Programs in Nutrition and Clinical Nutrition',
    match: 'doctorate',
    intro:
      'Research doctorates in nutritional sciences and practice doctorates in clinical nutrition, which are two different credentials with two different purposes.',
    thesis:
      'A funded research doctorate is a job with a stipend attached. An unfunded doctorate in nutrition is a financial decision dressed as an academic one. That distinction is the entire choice, and it is decided before you accept the offer.',
    questions: [
      {
        heading: 'What is the difference between a PhD and a Doctor of Clinical Nutrition?',
        answer:
          'A PhD in nutritional sciences trains you to produce original research and is the entry credential for academic and senior research positions. A Doctor of Clinical Nutrition is a practice doctorate aimed at advanced clinical practice, often taken by working RDNs. They are not interchangeable, and applying to the wrong one is a common and expensive error.'
      },
      {
        heading: 'Should a nutrition doctorate be funded?',
        answer:
          'A research doctorate, yes, and we would treat an unfunded offer as information about your prospects rather than merely about that department budget. Practice doctorates are more often self-funded, which is legitimate when the credential opens a defined door such as a specific advanced clinical role. Be clear which category you are in, because the financial mathematics are completely different.'
      },
      {
        heading: 'What does a nutrition doctorate lead to?',
        answer:
          'Academic faculty positions, research roles in government and industry, senior clinical leadership, and policy work. Our own Career Outcomes Survey 2026 recorded a median first-position salary of $85,000 for doctoral respondents, the highest of any credential category, on a small subsample. The academic job market for nutrition is its own separate problem and should be researched independently of the degree.'
      },
      {
        heading: 'Do you need the RDN credential alongside a doctorate?',
        answer:
          'For clinical and most applied roles, yes, and the doctorate does not replace it. For laboratory and population research careers it is often unnecessary. If there is any chance you will want to practise or teach practice, get the credential first or during, because retrofitting supervised practice hours around a research career is considerably harder than doing it in sequence.'
      }
    ]
  }
];

/** Specialty ranking pages. `tag` matches the classifier in the program index. */
export const specialties = [
  {
    slug: 'best-dietetics-programs',
    title: 'Best Dietetics Programs',
    heading: 'Best Dietetics Programs in the United States',
    seoTitle: 'Best Dietetics Programs: Accredited Dietetics Degrees',
    seoDescription:
      'Compare accredited dietetics programs including didactic programs, coordinated programs, graduate programs, and dietetic internships, with links to every official program page.',
    lead:
      'Dietetics is the accredited, licensed, examinable version of nutrition. It is the largest category we track and the only one with a national credentialing gate at the end of it.',
    tag: 'dietetics',
    flagship: true,
    intro:
      'The accredited pathway to the Registered Dietitian Nutritionist credential, covering didactic coursework, coordinated programs, integrated graduate programs, and supervised practice.',
    thesis:
      'If you want to work in a hospital, dietetics is not one option among several, it is the option. Everything else in nutrition is a career you can build without a credential. This one has a gate, and the gate is the reason it pays more.',
    questions: [
      {
        heading: 'What is the difference between nutrition and dietetics?',
        answer:
          'Dietetics is a regulated profession with an accreditation body, a national examination, and state licensure in most states. Nutrition is a field of study, and the job titles that come from it are largely unregulated. In practical terms, dietetics leads to the RDN credential and to clinical practice authority. A nutrition degree without the accredited pathway leads to community, education, food industry, and wellness roles.'
      },
      {
        heading: 'What are DPD, CP, GP, and DI programs?',
        answer:
          'A Didactic Program in Dietetics delivers the accredited coursework and produces a verification statement, but not the practice hours. A Coordinated Program combines coursework and supervised practice in one credential. A Graduate Program does the same at the graduate level, which is the route that now aligns with the graduate degree requirement. A Dietetic Internship supplies supervised practice to people who already hold accredited coursework. Which acronym applies to you depends entirely on what you have already completed.'
      },
      {
        heading: 'Does the program have to be ACEND accredited?',
        answer:
          'For the RDN credential, yes, without exception. Coursework from a program that is not accredited by the Accreditation Council for Education in Nutrition and Dietetics will not make you examination eligible, regardless of how rigorous it was or how well regarded the institution is. Check the accreditation status directly with ACEND rather than trusting a program page, and check whether the status is full accreditation or candidacy.'
      },
      {
        heading: 'How competitive is dietetic internship placement?',
        answer:
          'Historically difficult enough that unmatched applicants were a structural feature of the field rather than an unlucky exception. The shift toward integrated graduate programs is changing this, because those programs admit you to coursework and practice together. This is the strongest argument for the integrated route and the reason we weight documented supervised practice at 17 points in our index.'
      },
      {
        heading: 'What do dietitians earn?',
        answer:
          'BLS reported a May 2024 median annual wage of $73,850 for dietitians and nutritionists, against $49,500 across all occupations, with the lowest 10 percent under $48,830 and the highest 10 percent above $101,760. Outpatient care centers paid the highest industry median at $79,200. The occupation held about 90,900 jobs with roughly 6,200 openings a year and 6 percent projected growth through 2034.'
      }
    ]
  },
  {
    slug: 'best-sports-nutrition-programs',
    title: 'Best Sports Nutrition Programs',
    heading: 'Best Sports Nutrition and Human Performance Programs',
    seoTitle: 'Sports Nutrition Degree: Best Sports Nutrition Programs',
    seoDescription:
      'Compare sports nutrition degree programs and human performance nutrition tracks, with links to every official program page and an honest account of how small this job market actually is.',
    lead:
      'Sports nutrition is the most romanticized specialization in this field. It is also one of the smallest. Both of those facts should shape how you plan for it.',
    tag: 'sports',
    sparse: true,
    intro:
      'Degree programs and concentrations in sports nutrition, exercise nutrition, and human performance, mapped against where the jobs actually are.',
    thesis:
      'Everybody wants to work with athletes. Very few people get to, and almost nobody does it as a first job. If you are genuinely called to this, build it on top of a clinical credential rather than instead of one, because the clinical credential is what pays your rent while you get there.',
    questions: [
      {
        heading: 'How many sports nutrition jobs are there?',
        answer:
          'Far fewer than the number of students who want them. Federal data does not break sports dietitians out as a separate occupation; they are counted inside dietitians and nutritionists, which holds about 90,900 jobs in total across every setting. Full-time sports nutrition positions with professional and collegiate teams number in the low thousands at most, and they turn over slowly. We will not put a precise figure on it because no published source supports one.'
      },
      {
        heading: 'What credential do sports dietitians hold?',
        answer:
          'Almost universally the RDN credential first, then the Board Certified Specialist in Sports Dietetics on top of it. The CSSD requires an active RDN, documented practice experience, and a specialty examination. The order matters: sports nutrition is a specialization layered onto clinical competence, not a substitute route into the profession.'
      },
      {
        heading: 'Do you need a sports nutrition degree?',
        answer:
          'No, and chasing a program with the word sports in its title can actively hurt you. What you need is an accredited dietetics pathway with strong exercise physiology, metabolism, and biochemistry coursework, plus practical experience with athletes that you go and get yourself. A sports-branded degree that is not ACEND accredited leaves you specialised for a job you cannot be credentialed for.'
      },
      {
        heading: 'What do sports nutritionists earn?',
        answer:
          'The honest answer is that the range is wide and the bottom of it is low. Entry-level collegiate and private-sector sports nutrition roles frequently pay below the $73,850 federal median for dietitians and nutritionists, because the supply of willing applicants is high. Professional team and elite performance roles pay considerably more. Our own Career Outcomes Survey 2026 found 10 percent of respondents in sports nutrition, which is a larger share than the job numbers suggest and probably reflects part-time and hybrid roles.'
      },
      {
        heading: 'How should I plan a sports nutrition career?',
        answer:
          'Get the RDN credential through an accredited program, take every exercise physiology and metabolism course available, volunteer with athletic programs from your first year, then pursue the CSSD once you have practice hours. Keep a clinical or community role as your financial base while you build the athlete work. People who plan it this way end up in sports nutrition. People who specialise first usually do not.'
      }
    ]
  },
  {
    slug: 'best-public-health-nutrition-programs',
    title: 'Best Public Health Nutrition Programs',
    heading: 'Best Public Health and Community Nutrition Programs',
    seoTitle: 'Public Health Nutrition Degree: Best MPH Nutrition Programs',
    seoDescription:
      'Compare public health nutrition degree programs including MPH nutrition tracks and community nutrition degrees, with links to every official program page and federal wage context.',
    lead:
      'Public health nutrition is where the largest number of people are affected and the smallest number of students are looking. That imbalance is an opportunity if you can read it correctly.',
    tag: 'public-health',
    flagship: true,
    intro:
      'Degrees and graduate tracks in public health nutrition, community nutrition, and population health, including MPH nutrition concentrations.',
    thesis:
      'Clinical dietetics treats one patient at a time. Population nutrition changes what is available to a county. The second is harder to picture, harder to do well, and where the decisions with ten-year consequences get made. It is also the part of this field most students never seriously consider.',
    questions: [
      {
        heading: 'What is public health nutrition?',
        answer:
          'It is the practice of improving nutrition at population scale through programs, policy, education, and food systems rather than through individual counseling. In practice it means WIC and school nutrition programs, food access initiatives, state and local health department work, policy analysis, and community intervention design. The unit of analysis is a population, not a patient.'
      },
      {
        heading: 'Do you need an MPH for public health nutrition?',
        answer:
          'Frequently yes for anything beyond entry level, and the MPH in public health nutrition is close to a standard credential in this part of the field. Epidemiology, biostatistics, program evaluation, and policy are the four subjects that separate people who run programs from people who staff them, and they live at the graduate level. BLS reported a May 2024 median of $83,980 for epidemiologists, which indicates what that quantitative training is worth.'
      },
      {
        heading: 'Do you need the RDN credential for public health nutrition?',
        answer:
          'Not always, and this is one of the few areas of nutrition where a strong career is genuinely available without it. Many public health nutrition positions accept an MPH with relevant experience. That said, the RDN opens more doors than it closes, and federally funded nutrition programs frequently specify it for supervisory roles. Check the actual job postings in the state you want to work in before you decide to skip it.'
      },
      {
        heading: 'What do public health nutritionists earn?',
        answer:
          'Government employment of dietitians and nutritionists, excluding state and local education and hospitals, showed a May 2024 median of $74,000, effectively at the occupational median of $73,850. Health education specialists, a closely related occupation that many community nutrition roles map to, showed a median of $63,000 across about 71,800 jobs. Public health work generally trades some compensation for stability, benefits, and pension access.'
      },
      {
        heading: 'Where do public health nutrition graduates work?',
        answer:
          'State and local health departments, WIC agencies, school districts and state education departments, federally qualified health centers, food banks and food policy councils, nonprofit community health organizations, university extension services, and federal agencies. Extension services are consistently the most overlooked employer in this list and one of the more interesting places to build a career.'
      }
    ]
  },
  {
    slug: 'best-clinical-nutrition-programs',
    title: 'Best Clinical Nutrition Programs',
    heading: 'Best Clinical Nutrition and Medical Nutrition Therapy Programs',
    tag: 'clinical',
    sparse: true,
    intro:
      'Programs oriented toward clinical practice, medical nutrition therapy, and advanced practice in healthcare settings.',
    thesis:
      'Clinical dietetics is the largest single destination in this field and the best paid entry point. It is also the one that will test whether you actually learned biochemistry, because a care plan for a patient on dialysis with poorly controlled diabetes is not a wellness conversation.',
    questions: [
      {
        heading: 'What is clinical nutrition?',
        answer:
          'The application of nutrition science to the treatment of disease in a healthcare setting, delivered as medical nutrition therapy. It covers nutrition assessment, diagnosis, intervention, and monitoring for conditions including diabetes, kidney disease, cardiovascular disease, cancer, gastrointestinal disorders, and critical illness. It is clinical work with clinical accountability, documented in a medical record.'
      },
      {
        heading: 'What credential does clinical nutrition practice require?',
        answer:
          'The RDN credential, plus state licensure or certification in the majority of states. Medical nutrition therapy is a defined scope of practice, and in most states providing it without the credential is not merely unwise but a legal problem. This is the single least negotiable requirement anywhere on this site.'
      },
      {
        heading: 'What does clinical dietetics pay?',
        answer:
          'BLS reported a May 2024 median of $75,650 for dietitians and nutritionists working in hospitals and $79,200 in outpatient care centers, against the $73,850 occupational median. Our own Career Outcomes Survey 2026 found clinical dietetics to be the largest single destination at 28 percent of respondents, and medical nutrition therapy the most requested skill at 72 percent.'
      },
      {
        heading: 'What should a clinical nutrition curriculum include?',
        answer:
          'Advanced medical nutrition therapy across organ systems, nutrition support including enteral and parenteral feeding, pathophysiology, pharmacology and nutrient interactions, nutrition assessment including physical examination, and documented clinical rotations. If a program does not name nutrition support and pharmacology in its curriculum, it is not preparing you for inpatient practice.'
      },
      {
        heading: 'How do I become competitive for clinical roles?',
        answer:
          'Prioritise supervised practice in an acute care setting even if a community placement would be easier to arrange, because acute experience transfers downward and community experience does not transfer upward as readily. Then pursue a specialty credential in the population you want to serve. The Certified Diabetes Care and Education Specialist credential is the most broadly useful of these for most clinical dietitians.'
      }
    ]
  },
  {
    slug: 'best-nutritional-science-programs',
    title: 'Best Nutritional Science Programs',
    heading: 'Best Nutritional Science and Nutrition Science Programs',
    seoTitle: 'Nutritional Science Degree: Best Nutrition Science Programs',
    seoDescription:
      'Compare nutritional science and nutrition science degree programs, the research-oriented route into nutrition, with links to every official program page.',
    lead:
      'Nutritional science is the research end of this field. It is the strongest preparation for graduate study and medicine, and the weakest preparation for practice, and programs are not always clear about which one they are.',
    tag: 'nutritional-science',
    flagship: true,
    intro:
      'Science-oriented degrees in nutritional sciences, nutrition science, and human nutrition, including research and pre-professional tracks.',
    thesis:
      'A nutritional science degree is a biochemistry degree with a subject specialization. That is its strength and its trap. It will prepare you superbly for a doctorate or for medical school, and it will not, on its own, let you work as a dietitian. Know which door you are opening.',
    questions: [
      {
        heading: 'What is the difference between nutritional science and dietetics?',
        answer:
          'Nutritional science studies nutrition as a laboratory and population science: metabolism, molecular nutrition, nutritional biochemistry, epidemiology. Dietetics is professional preparation for practice, with accreditation and a credentialing examination attached. A nutritional science degree is usually the more demanding science education. A dietetics degree is the one that leads to a licence.'
      },
      {
        heading: 'Can you become an RDN with a nutritional science degree?',
        answer:
          'Only if the program also carries ACEND accredited coursework, which many nutritional science degrees deliberately do not. This catches a meaningful number of students who assume any nutrition-named degree is on the credentialing path. Confirm the accreditation status in writing before your second year, when the required course sequence still has room to adjust.'
      },
      {
        heading: 'Is nutritional science good preparation for medical school?',
        answer:
          'Unusually good, and it is an underused strategy. The prerequisite overlap is nearly complete, the biochemistry is deeper than in many biology programs, and you arrive with a genuine understanding of metabolism and chronic disease that most applicants lack. If you are considering medicine and interested in nutrition, this is a stronger route than a generic biology major.'
      },
      {
        heading: 'What careers does nutritional science lead to?',
        answer:
          'Research in academic, government, and industry laboratories, food and supplement product development, regulatory affairs, scientific and medical communications, clinical research coordination, and graduate or professional study. BLS reported a median of $79,860 for food scientists and technologists, though that figure comes from the May 2022 release and should be checked against the current one.'
      },
      {
        heading: 'Do you need a graduate degree in nutritional science?',
        answer:
          'For research work, effectively yes: the bachelor degree qualifies you to assist with research rather than to design it. For industry and regulatory roles a bachelor degree plus relevant internship experience is frequently sufficient to start. The honest test is whether the roles you want in five years list a graduate degree in their postings today.'
      }
    ]
  },
  {
    slug: 'best-food-service-management-programs',
    title: 'Best Food Service Management Programs',
    heading: 'Best Food Service and Nutrition Management Programs',
    tag: 'food-service',
    sparse: true,
    intro:
      'Programs in food service systems management, institutional food service, and food and nutrition management, including the hospital and school nutrition route.',
    thesis:
      'Food service management is the most quietly employable specialization in nutrition and the one students avoid because it sounds unglamorous. Every hospital, school district, and long-term care facility in the country needs someone who can run a food operation and understand a therapeutic diet. That is a durable job in a way that a wellness coaching practice is not.',
    questions: [
      {
        heading: 'What does a food service manager in healthcare actually do?',
        answer:
          'Runs the operation: procurement, menu systems, therapeutic diet production, food safety and regulatory compliance, budget, staffing, and the interface with clinical nutrition. In a hospital or long-term care setting this is a licensed, inspected, high-consequence operation, and the therapeutic diet component is why a nutrition credential matters rather than only a hospitality one.'
      },
      {
        heading: 'What does food service management pay?',
        answer:
          'BLS reported a May 2024 median annual wage of $65,310 for food service managers across about 352,800 jobs, with the lowest 10 percent under $42,380 and the highest 10 percent above $105,420, and 6 percent projected growth through 2034. The scale of that occupation is the point: it is roughly four times the size of dietitians and nutritionists.'
      },
      {
        heading: 'Do you need a nutrition degree for food service management?',
        answer:
          'Not in the general market, where BLS lists a high school diploma plus experience as typical entry. You do need one for the institutional and healthcare segment, where therapeutic diets, regulatory compliance, and clinical coordination are part of the job. That segment is where a nutrition graduate has a genuine advantage and less competition.'
      },
      {
        heading: 'Is this a fallback career?',
        answer:
          'We would argue the opposite, and we would argue it from the wage table. The top decile of food service managers earns above $105,420, which exceeds the top decile for dietitians and nutritionists at $101,760. Our Career Outcomes Survey 2026 found 14 percent of respondents in food service management and identified it as the fourth most requested skill at 55 percent. Treating it as a consolation prize is a misreading of the data.'
      },
      {
        heading: 'What should the curriculum include?',
        answer:
          'Food systems management, quantity food production, procurement and cost control, food safety and HACCP, human resource management, and financial management, alongside the nutrition core. A management practicum in an institutional setting is the component that matters most, and it is a required element of accredited dietetics supervised practice for exactly this reason.'
      }
    ]
  }
];

/** Modifier ranking pages, filtered by attribute rather than subject. */
export const modifiers = [
  {
    slug: 'online-nutrition-programs',
    title: 'Online Nutrition Programs',
    heading: 'Best Online Nutrition Degree Programs',
    seoTitle: 'Nutrition Degree Online: Best Online Nutrition Programs',
    seoDescription:
      'Compare accredited online nutrition degree programs at every credential level, with links to every official program page and the supervised practice question you must answer before enrolling.',
    lead:
      'An online nutrition degree is a legitimate route into this profession, and the format is not the thing that decides whether it works. Supervised practice is. That question has a specific answer for every program, and you can get it before you pay anything.',
    flagship: true,
    intro:
      'Programs the institution documents as available online, across certificate, bachelor, master, and doctoral levels.',
    thesis:
      'Online nutrition degrees are not easier. They are different, and for many students they are the only option that fits a job and a family. The real risk is not the delivery format, it is enrolling in a program that is vague about who arranges your supervised practice hours. That vagueness is the tell.',
    questions: [
      {
        heading: 'Can you get a nutrition degree online?',
        answer:
          'Yes, at every credential level, and our database tracks programs with institution-documented online delivery across dietetics, nutritional science, public health nutrition, and clinical nutrition. Coursework transfers to online delivery well. Supervised practice does not become remote, it becomes local, and how a program handles that is the question worth asking first.'
      },
      {
        heading: 'Are online nutrition degrees respected by employers?',
        answer:
          'Employers screen for the credential, the accreditation, and the practice experience behind it. A transcript does not usually announce delivery format, and an accredited online program that placed you in a real hospital rotation is not a weaker qualification. An unaccredited online program is a weaker qualification, and that would be equally true on campus.'
      },
      {
        heading: 'How does supervised practice work in an online program?',
        answer:
          'Three models exist and they are not equivalent. The strongest arranges placements for you at partner sites near where you live. The middle model helps you secure your own placement with named support. The weakest tells you that placement is your responsibility, which in practice means competing with local campus-based students for the same slots without an institutional relationship behind you. Ask which of the three you are being sold, and get the answer in writing.'
      },
      {
        heading: 'Will an online degree make me eligible for the RDN examination?',
        answer:
          'Only if the program holds ACEND accreditation for the relevant program type, exactly as with a campus program. Accreditation is program-specific rather than institution-wide, so verify the individual program with ACEND rather than relying on a general statement about the university. Also confirm whether the status is full accreditation or candidacy, because they carry different risk.'
      },
      {
        heading: 'What does an online nutrition degree cost?',
        answer:
          'Published tuition varies enormously and online delivery does not reliably mean cheaper. Some public institutions charge in-state rates to online students regardless of residency, which is the single best value in this category. Others charge a distinct online rate that exceeds in-state tuition. Ask for the per-credit figure that would apply to you specifically, plus any technology and placement fees.'
      }
    ]
  },
  {
    slug: 'online-dietetics-programs',
    title: 'Online Dietetics Programs',
    heading: 'Best Online Dietetics Degree Programs',
    seoTitle: 'Dietetics Degree Online: Best Online Dietetics Programs',
    seoDescription:
      'Compare online dietetics degree programs including accredited graduate programs and online dietitian degree options, with links to every official program page and the accreditation checks that matter.',
    lead:
      'An online dietitian degree only means something if the program is ACEND accredited and can place you in supervised practice. Those two conditions do most of the work. The delivery format does very little of it.',
    onlineTag: 'dietetics',
    intro:
      'Dietetics programs documented as available online, including integrated graduate programs that carry supervised practice.',
    thesis:
      'This is the highest stakes category on the site, because dietetics has a credentialing gate and online programs vary more than campus programs in how seriously they treat it. An accredited online graduate program with arranged placements is an excellent option. An unaccredited online nutrition degree marketed to aspiring dietitians is a trap with tuition attached.',
    questions: [
      {
        heading: 'Can you become a registered dietitian with an online degree?',
        answer:
          'Yes, provided the program is ACEND accredited for its program type and delivers or arranges the required supervised practice. Thousands of practising RDNs completed accredited coursework online. What you cannot do is complete supervised practice remotely, because it involves patients, kitchens, and communities, so expect a local in-person component regardless of how the coursework is delivered.'
      },
      {
        heading: 'What should I verify before enrolling in an online dietetics program?',
        answer:
          'Four things, all answerable in advance: the ACEND accreditation status of the specific program and whether it is full or candidacy, who arranges supervised practice placements and at which named sites, whether the institution is authorised to enroll students in your state, and the total cost including placement and technology fees. Get all four in writing and keep the reply.'
      },
      {
        heading: 'Is an online dietetics program cheaper?',
        answer:
          'Not reliably. The genuine bargains are public institutions that extend in-state tuition to online students, and our database holds several. Private online programs frequently cost more than a local public campus program, and the convenience is real but it is not free. Compare the per-credit figure that applies to you rather than the advertised annual rate.'
      },
      {
        heading: 'How long does an online dietetics program take?',
        answer:
          'Integrated graduate programs commonly document twenty to twenty-four month schedules, and our database holds programs publishing figures in that range alongside supervised practice hour counts. A bachelor completion program is typically two years after transfer. Part-time enrollment, which is why many students choose online in the first place, extends both substantially.'
      },
      {
        heading: 'Does online delivery affect licensure?',
        answer:
          'Licensure is granted by state boards and generally follows the credential rather than the delivery format, so an accredited online pathway is normally acceptable. The complication is state authorisation, which governs whether an institution may enroll a student in your state at all, and which changes. Confirm both with the state board and the institution before you enroll.'
      }
    ]
  },
  {
    slug: 'online-nutritionist-programs',
    title: 'Online Nutritionist Programs',
    heading: 'Best Online Nutritionist Degree Programs',
    seoTitle: 'Nutritionist Degree Online: Best Online Nutritionist Programs',
    seoDescription:
      'Compare online nutritionist degree programs and what the nutritionist title actually permits in your state, with links to every official program page.',
    lead:
      'Before you compare online nutritionist degrees, understand what the word nutritionist means legally where you live. In some states it means nothing. In others it is a protected title with an examination behind it.',
    onlineAny: true,
    intro:
      'Online degree programs leading to nutritionist and nutrition professional roles, across bachelor and graduate levels.',
    thesis:
      'The word nutritionist is the most abused term in this field. In some states anyone may use it. In others it is protected and requires a licence. That variation is why an online nutritionist degree can be either a serious credential or a certificate of participation, and the program page will rarely tell you which.'
  },
  {
    slug: 'most-affordable-nutrition-programs',
    title: 'Most Affordable Nutrition Programs',
    heading: 'Most Affordable Nutrition and Dietetics Programs',
    intro:
      'Lower-cost routes into nutrition and dietetics, led by public in-state institutions, community colleges, and programs publishing tuition below the category median.',
    thesis:
      'Debt is the single biggest determinant of whether a nutrition career feels like a profession or a trap. The median start for a bachelor graduate in our own survey was $65,000. Borrow $120,000 against that and you have bought yourself a decade of constrained choices, regardless of which ranking the program appeared in.',
    questions: [
      {
        heading: 'How do you define affordable?',
        answer:
          'By published tuition in our database, weighted toward public institutions and community colleges, and read against the credential level. This is a proxy rather than a price. Net cost after aid is the figure that matters, it is specific to you, and only the financial aid office can produce it.'
      },
      {
        heading: 'Does a cheaper program hurt your career?',
        answer:
          'In this field, very little, provided it is accredited. Employers screen for the RDN credential, the accreditation, and the practice experience. They do not pay a premium for an expensive alma mater in the way that some professions do. This is unusually good news if you are paying in-state tuition.'
      },
      {
        heading: 'What is the cheapest legitimate route to the RDN credential?',
        answer:
          'Community college prerequisites with a documented transfer agreement, an in-state public bachelor carrying ACEND accredited coursework, then an accredited graduate program with integrated supervised practice, ideally at a public institution charging in-state rates. Executed carefully, that sequence costs a fraction of the private route and produces an identical credential.'
      },
      {
        heading: 'What costs do students forget to budget for?',
        answer:
          'Supervised practice is the big one: relocation or commuting to placement sites, unpaid or low-paid practice months, professional liability insurance, background checks, immunisations, and uniforms. Then examination and application fees, licensure fees, and association membership. These items regularly add several thousand dollars at exactly the point when you have the least income.'
      }
    ]
  },
  {
    slug: 'nutrition-programs-with-internship',
    title: 'Nutrition Programs With Supervised Practice',
    heading: 'Nutrition Programs With Supervised Practice and Internships',
    seoTitle: 'Nutrition Programs With Supervised Practice and Internships',
    seoDescription:
      'Nutrition and dietetics programs that document supervised practice, dietetic internships, coordinated pathways, or practicum placements, with links to every official program page.',
    lead:
      'Supervised practice is the part of a nutrition education that decides your career, and it is the part most easily glossed over in a program brochure. These are the programs whose published materials document it.',
    intro:
      'Programs documenting supervised practice, dietetic internships, coordinated pathways, practicum, or clinical rotations in their published materials.',
    thesis:
      'The strongest predictor of nutrition career success is not the school on your diploma. It is the supervised practice you complete. In our own survey, 94 percent of graduates called it critical or very important to their career. Yet students routinely choose a program without confirming how practice hours will be arranged, which is the one thing they should confirm first.',
    questions: [
      {
        heading: 'Why does supervised practice matter this much?',
        answer:
          'Three reasons. It is a requirement for RDN examination eligibility, so without it you cannot be credentialed. It is what employers actually interview about, because it is the only evidence that you have applied nutrition science to a real person. And in our Career Outcomes Survey 2026, 94 percent of 1,154 respondents described it as critical or very important to their career, which was the strongest consensus in the entire study.'
      },
      {
        heading: 'How many supervised practice hours are required?',
        answer:
          'Accredited programs document their hour requirements, and figures commonly fall in the region of one thousand hours, with programs in our database publishing counts from the high hundreds upward. The requirement is set by ACEND standards rather than by the institution, so verify the current figure with ACEND and check what the specific program publishes.'
      },
      {
        heading: 'What is the difference between coordinated and separate supervised practice?',
        answer:
          'A coordinated or integrated program admits you to coursework and supervised practice together, so completing the degree makes you examination eligible. The separate route means completing accredited coursework, then applying independently to a dietetic internship, which historically has been competitive enough that unmatched applicants were a normal outcome. One application beats two.'
      },
      {
        heading: 'What questions should I ask about supervised practice?',
        answer:
          'How many hours, at which named sites, arranged by whom, in what settings, with what stipend or cost, and what happens if a placement falls through. Ask what proportion of last year students completed on schedule. A program that cannot answer these specifically is telling you something, and you should treat the vagueness as the answer.'
      }
    ]
  },
  {
    slug: 'best-acend-accredited-nutrition-programs',
    title: 'Best ACEND Accredited Nutrition Programs',
    heading: 'Best ACEND Accredited Nutrition and Dietetics Programs',
    seoTitle: 'Best ACEND Accredited Nutrition Programs',
    seoDescription:
      'Compare ACEND accredited nutrition and dietetics programs, the only programs that can make you eligible for the RDN examination, with links to every official program page.',
    lead:
      'If it is not ACEND accredited, you cannot become an RDN. That is not our opinion, it is the credentialing rule. This ranking is the subset of our database where that gate is actually open.',
    flagship: true,
    intro:
      'Programs at institutions holding an ACEND accredited program of any type: didactic, coordinated, graduate, dietetic internship, dietetic technician, or advanced practice doctoral.',
    thesis:
      'Not all nutrition programs are created equal. If a program is not accredited by the Accreditation Council for Education in Nutrition and Dietetics, you cannot become a Registered Dietitian Nutritionist, no matter how rigorous the coursework or how famous the university. ACEND is the gatekeeper to the profession. Do not waste years on a program that cannot issue a verification statement.',
    questions: [
      {
        heading: 'What is ACEND accreditation?',
        answer:
          'The Accreditation Council for Education in Nutrition and Dietetics is the accrediting body for dietetics education in the United States. It accredits specific programs, not institutions. A university can be regionally accredited and still have a nutrition degree that does not lead to the RDN credential. That distinction is the single most expensive misunderstanding in this field.'
      },
      {
        heading: 'Can you become an RDN without an ACEND accredited program?',
        answer:
          'No. The Commission on Dietetic Registration requires ACEND accredited coursework and ACEND accredited supervised practice, plus a graduate degree, before you are eligible to sit the examination. There is no alternative pathway for domestic applicants, and any program implying otherwise is selling you something. International applicants have a separate, documented process, which is not a shortcut around accreditation.'
      },
      {
        heading: 'What is the difference between full accreditation and candidacy?',
        answer:
          'Full accreditation means the program has completed a self-study and a site visit and currently meets ACEND standards. Candidacy for accreditation means the program is in the process and has not yet been granted full status. Candidacy programs can enroll students, but they carry more risk: if accreditation is not granted, those students may not receive a verification statement. Confirm the current status with ACEND, not with the program brochure.'
      },
      {
        heading: 'Does ACEND accreditation guarantee a good program?',
        answer:
          'No, and we would rather say that than pretend a binary flag is a ranking. Accreditation is a floor, not a ceiling. It tells you the program can make you examination eligible. It does not tell you whether the department arranges strong placements, whether faculty still practise, or whether the net cost is sane. That is why accredited programs still get scored on the other six factors in our index, and why accreditation is 15 of 100 points rather than a veto that hides everything else.'
      },
      {
        heading: 'How do I verify ACEND accreditation myself?',
        answer:
          'Search the ACEND accredited program directory for the specific program, not the university. Check the program type (DPD, CP, GP, DI, DT, or APD) and whether the status is accredited or candidate. Save a copy of what you see. Program pages lag, marketing copy overstates, and accreditation is the one fact that is cheap to confirm and expensive to get wrong.'
      }
    ]
  }
];

export const stateList: [string, string][] = [
  ['alabama', 'Alabama'], ['alaska', 'Alaska'], ['arizona', 'Arizona'], ['arkansas', 'Arkansas'],
  ['california', 'California'], ['colorado', 'Colorado'], ['connecticut', 'Connecticut'],
  ['delaware', 'Delaware'], ['district-of-columbia', 'District of Columbia'], ['florida', 'Florida'],
  ['georgia', 'Georgia'], ['hawaii', 'Hawaii'], ['idaho', 'Idaho'], ['illinois', 'Illinois'],
  ['indiana', 'Indiana'], ['iowa', 'Iowa'], ['kansas', 'Kansas'], ['kentucky', 'Kentucky'],
  ['louisiana', 'Louisiana'], ['maine', 'Maine'], ['maryland', 'Maryland'], ['massachusetts', 'Massachusetts'],
  ['michigan', 'Michigan'], ['minnesota', 'Minnesota'], ['mississippi', 'Mississippi'], ['missouri', 'Missouri'],
  ['montana', 'Montana'], ['nebraska', 'Nebraska'], ['nevada', 'Nevada'], ['new-hampshire', 'New Hampshire'],
  ['new-jersey', 'New Jersey'], ['new-mexico', 'New Mexico'], ['new-york', 'New York'],
  ['north-carolina', 'North Carolina'], ['north-dakota', 'North Dakota'], ['ohio', 'Ohio'],
  ['oklahoma', 'Oklahoma'], ['oregon', 'Oregon'], ['pennsylvania', 'Pennsylvania'], ['rhode-island', 'Rhode Island'],
  ['south-carolina', 'South Carolina'], ['south-dakota', 'South Dakota'], ['tennessee', 'Tennessee'],
  ['texas', 'Texas'], ['utah', 'Utah'], ['vermont', 'Vermont'], ['virginia', 'Virginia'],
  ['washington', 'Washington'], ['west-virginia', 'West Virginia'], ['wisconsin', 'Wisconsin'], ['wyoming', 'Wyoming']
];

/**
 * State public health agencies. These are the primary public-sector employer of
 * nutrition graduates in each state and the administering body for WIC and
 * community nutrition programs.
 */
export const stateAgencies: Record<string, { name: string; url: string }> = {
  alabama: { name: 'Alabama Department of Public Health', url: 'https://www.alabamapublichealth.gov/' },
  alaska: { name: 'Alaska Department of Health', url: 'https://health.alaska.gov/' },
  arizona: { name: 'Arizona Department of Health Services', url: 'https://www.azdhs.gov/' },
  arkansas: { name: 'Arkansas Department of Health', url: 'https://www.healthy.arkansas.gov/' },
  california: { name: 'California Department of Public Health', url: 'https://www.cdph.ca.gov/' },
  colorado: { name: 'Colorado Department of Public Health and Environment', url: 'https://cdphe.colorado.gov/' },
  connecticut: { name: 'Connecticut Department of Public Health', url: 'https://portal.ct.gov/dph' },
  delaware: { name: 'Delaware Division of Public Health', url: 'https://dhss.delaware.gov/dhss/dph/' },
  'district-of-columbia': { name: 'DC Health', url: 'https://dchealth.dc.gov/' },
  florida: { name: 'Florida Department of Health', url: 'https://www.floridahealth.gov/' },
  georgia: { name: 'Georgia Department of Public Health', url: 'https://dph.georgia.gov/' },
  hawaii: { name: 'Hawaii State Department of Health', url: 'https://health.hawaii.gov/' },
  idaho: { name: 'Idaho Department of Health and Welfare', url: 'https://healthandwelfare.idaho.gov/' },
  illinois: { name: 'Illinois Department of Public Health', url: 'https://dph.illinois.gov/' },
  indiana: { name: 'Indiana Department of Health', url: 'https://www.in.gov/health/' },
  iowa: { name: 'Iowa Department of Health and Human Services', url: 'https://hhs.iowa.gov/' },
  kansas: { name: 'Kansas Department of Health and Environment', url: 'https://www.kdhe.ks.gov/' },
  kentucky: { name: 'Kentucky Department for Public Health', url: 'https://www.chfs.ky.gov/agencies/dph/' },
  louisiana: { name: 'Louisiana Department of Health', url: 'https://ldh.la.gov/' },
  maine: { name: 'Maine Center for Disease Control and Prevention', url: 'https://www.maine.gov/dhhs/mecdc/' },
  maryland: { name: 'Maryland Department of Health', url: 'https://health.maryland.gov/' },
  massachusetts: { name: 'Massachusetts Department of Public Health', url: 'https://www.mass.gov/orgs/department-of-public-health' },
  michigan: { name: 'Michigan Department of Health and Human Services', url: 'https://www.michigan.gov/mdhhs' },
  minnesota: { name: 'Minnesota Department of Health', url: 'https://www.health.state.mn.us/' },
  mississippi: { name: 'Mississippi State Department of Health', url: 'https://msdh.ms.gov/' },
  missouri: { name: 'Missouri Department of Health and Senior Services', url: 'https://health.mo.gov/' },
  montana: { name: 'Montana Department of Public Health and Human Services', url: 'https://dphhs.mt.gov/' },
  nebraska: { name: 'Nebraska Department of Health and Human Services', url: 'https://dhhs.ne.gov/' },
  nevada: { name: 'Nevada Division of Public and Behavioral Health', url: 'https://dpbh.nv.gov/' },
  'new-hampshire': { name: 'New Hampshire Division of Public Health Services', url: 'https://www.dhhs.nh.gov/programs-services/population-health' },
  'new-jersey': { name: 'New Jersey Department of Health', url: 'https://www.nj.gov/health/' },
  'new-mexico': { name: 'New Mexico Department of Health', url: 'https://www.nmhealth.org/' },
  'new-york': { name: 'New York State Department of Health', url: 'https://www.health.ny.gov/' },
  'north-carolina': { name: 'North Carolina Division of Public Health', url: 'https://publichealth.nc.gov/' },
  'north-dakota': { name: 'North Dakota Health and Human Services', url: 'https://www.hhs.nd.gov/' },
  ohio: { name: 'Ohio Department of Health', url: 'https://odh.ohio.gov/' },
  oklahoma: { name: 'Oklahoma State Department of Health', url: 'https://oklahoma.gov/health.html' },
  oregon: { name: 'Oregon Health Authority, Public Health Division', url: 'https://www.oregon.gov/oha/ph/' },
  pennsylvania: { name: 'Pennsylvania Department of Health', url: 'https://www.health.pa.gov/' },
  'rhode-island': { name: 'Rhode Island Department of Health', url: 'https://health.ri.gov/' },
  'south-carolina': { name: 'South Carolina Department of Public Health', url: 'https://dph.sc.gov/' },
  'south-dakota': { name: 'South Dakota Department of Health', url: 'https://doh.sd.gov/' },
  tennessee: { name: 'Tennessee Department of Health', url: 'https://www.tn.gov/health.html' },
  texas: { name: 'Texas Department of State Health Services', url: 'https://www.dshs.texas.gov/' },
  utah: { name: 'Utah Department of Health and Human Services', url: 'https://dhhs.utah.gov/' },
  vermont: { name: 'Vermont Department of Health', url: 'https://www.healthvermont.gov/' },
  virginia: { name: 'Virginia Department of Health', url: 'https://www.vdh.virginia.gov/' },
  washington: { name: 'Washington State Department of Health', url: 'https://doh.wa.gov/' },
  'west-virginia': { name: 'West Virginia Bureau for Public Health', url: 'https://dhhr.wv.gov/bph/' },
  wisconsin: { name: 'Wisconsin Department of Health Services', url: 'https://www.dhs.wisconsin.gov/' },
  wyoming: { name: 'Wyoming Department of Health', url: 'https://health.wyo.gov/' }
};

/** The five pillars of nutrition education, used on the homepage and methodology. */
export const pillars = [
  {
    title: 'Science Foundation',
    body:
      'Biochemistry, physiology, and statistics are not hurdles standing between you and the interesting part. They are the interesting part, and they are what separates a nutrition professional from someone with opinions about food. A program that lets you skip them is not doing you a favour.'
  },
  {
    title: 'Clinical Skills',
    body:
      'Nutrition assessment and medical nutrition therapy are the applied core of this profession, and medical nutrition therapy was the single most requested skill in our own graduate survey at 72 percent. Ask how many hours of assessment practice a program actually delivers, in a real setting, with a real caseload.'
  },
  {
    title: 'Community Engagement',
    body:
      'Most nutrition problems are not individual. They are population problems shaped by food access, income, and geography. Programs with genuine community placements produce graduates who can work at that scale, and 20 percent of our survey respondents landed in community and public health nutrition.'
  },
  {
    title: 'Professional Credentialing',
    body:
      'ACEND accreditation, supervised practice hours, the RDN examination, and state licensure form a single chain, and a break anywhere in it stops you practising. This is the part of the field that is entirely knowable in advance and most often discovered too late.'
  },
  {
    title: 'Career Outcomes',
    body:
      'Where graduates go, in what roles, at what pay. We use federal wage and projection data by occupation plus our own graduate survey, rather than institutional placement claims, because the first two are measurement and the third is marketing.'
  }
];

export const rankingGroups = [
  { label: 'By degree level', items: levels },
  { label: 'By specialty', items: specialties },
  { label: 'By format, cost, and accreditation', items: modifiers }
];
