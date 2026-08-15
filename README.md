# NutritionSchools.org

Independent research on nutrition, dietetics, and nutritional science education in the United States.

Built with [Astro](https://astro.build) and deployed to Cloudflare Pages.

## What this site is

A research resource covering nutrition and dietetics degree programs, careers, salaries, and credentialing. It pairs a
database of real accredited programs, each linked to its own institutional page, with federal occupational data and two
original studies conducted by the editorial team.

- **177 programs** at 113 institutions across 40 states, every record linked to the institution's official program page
- **99 pages**, roughly 295,000 words, every content page above 2,000 words
- **16 rankings** by degree level, specialty, and format, scored with a published seven-factor index
- **8 career guides** with Bureau of Labor Statistics May 2024 wage data and 2024 to 2034 projections
- **7 credential guides** covering the RDN and the credentials built on or marketed against it
- **51 state pages** with local programs, public health agencies, and employer categories
- **7 long-form guides** on the questions students ask before enrolling

## Editorial principles

Four categories of statement are kept separate and labeled on every page.

1. **Institutional claims.** What a school publishes about itself. Always linked. Not independently verified.
2. **Accreditation records.** ACEND status and program type, Commission on Dietetic Registration requirements. The
   authority is named and readers are told to check it.
3. **Federal statistics.** Bureau of Labor Statistics figures cited by release and date. Where only an older release
   could be verified, the page carries a vintage flag rather than implying the figure is current.
4. **Editorial opinion.** Marked as opinion, in a labeled box, always supported by something above it.

No institution pays for inclusion, ranking position, or removal. There are no affiliate relationships. Every
substantial page names the credentialed team member who reviewed it.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the build locally
npm run check    # astro check, TypeScript diagnostics
```

## Project structure

```
src/
  data/
    program-index.json   177 program records, the database behind every ranking
    quality-index.ts     the seven-factor Program Quality Index and all filters
    research.ts          the two original studies, findings and limitations
    site.ts              team profiles, ranking definitions, state agencies, pillars
    bls.json             federal wage and projection data, with source notes
    careers.ts           8 career guides
    certifications.ts    7 credential guides
    resources.ts         7 long-form guides
  components/            AiSummary, Faq, Prose, ProgramRecords, Byline
  layouts/BaseLayout.astro   navigation, meta tags, JSON-LD graph
  pages/                 all routes, including llms.txt and the open data endpoints
  styles/theme.css       the design system
```

## The Program Quality Index

Seven factors, 100 points, every one computed from something an institution or the accreditor publishes so that any
score can be reconstructed from the public record.

| Factor | Weight |
| --- | --- |
| Curriculum rigor | 18 |
| Supervised practice and internship | 17 |
| Faculty credentials | 15 |
| Program accreditation | 15 |
| Clinical and community partnerships | 15 |
| Career outcomes | 10 |
| Cost value | 10 |

The index deliberately excludes teaching quality, self-reported job placement rates, RDN examination pass rates,
admission selectivity, individual faculty, and financial aid generosity, because none can be measured comparably at
national scale. Those exclusions are published on the site rather than hidden. See `/methodology/`.

## Open data

The scored program database is published openly so any score can be reproduced or disputed.

- `/data/programs.json`
- `/data/programs.csv`

## AI and retrieval crawlers

`/llms.txt` provides a structured summary of the site, the key verifiable facts, the full page inventory, citation
guidance, and an explicit list of what the site does not claim.

## Deployment

Cloudflare Pages, using `@astrojs/cloudflare`.

- Build command: `npm run build`
- Output directory: `dist`

## Asset pipeline

`_assets.py` regenerates the logo, favicons, and team portraits from the source images in the repository root. It
requires Pillow.

## Disclaimer

Nothing on this site is medical, dietary, or legal advice. Program details, accreditation status, tuition, and
credentialing requirements change. Verify with the institution, with ACEND, with the Commission on Dietetic
Registration, and with your state licensing board before making a decision.
