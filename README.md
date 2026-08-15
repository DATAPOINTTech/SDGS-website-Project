# SDGS Welfare Organization — Next.js site

This is a starter Next.js + Tailwind site scaffolded from the demo content at https://sdgs-demo.netlify.app/.

Setup

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

Deploy to Vercel

- Connect this repository to Vercel and deploy — Vercel will auto-detect Next.js.

Notes and next steps

- I couldn't locate downloadable image URLs programmatically from the demo site. The scaffold uses SVG placeholders in `public/images`.
- If you want, I can (a) attempt a deeper crawl to fetch images, (b) download screenshots, or (c) replace placeholders with royalty-free photographs.
 - The current scaffold uses curated royalty-free images from Unsplash for the hero and project cards. I have also downloaded local copies of the demo site's assets into `public/images` including: `SDGS-logo-landscape.png`, `SDGS-logo-portrait.png`, `project_medical.jpeg`, `project_flood_camp.jpeg`, `project_relief.jpeg`, `project_education.jpeg`, `project_flood_medical.jpeg`, `project_ramzan_rashan.jpeg`, `project_tree_plantation.jpeg`, `footer_bg.png`, `section_bg01.png`, `section_bg02.png`, `section_bg03.png`, `form.png`, and `favicon.ico`. To change images, replace those files.
