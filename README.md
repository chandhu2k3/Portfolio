# Chandra's Portfolio Website

A modern, CMS-backed portfolio showcasing the journey from Software Engineer to Product Manager — powered by **Next.js**, **Sanity CMS**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Overview

Visitors see a polished public portfolio. You log in to `/studio` and edit everything — case studies, decks, projects, journey, skills, contact — **without touching code**.

- 🎯 Developer → PM transformation journey
- 📊 Product case studies with full narratives + PDF decks
- 💻 Engineering projects & technical expertise
- 🚀 Professional experience & timeline
- ✍️ **Sanity CMS** — edit content in a visual studio
- ⚡ Smooth, modern UI with animations
- 📱 Fully responsive design
- 🔍 SEO optimized

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| CMS | Sanity (`3ksax8m8` / `production`) |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Hosting | Vercel-ready |

## Project Structure

```
├── sanity.config.ts           # Sanity Studio config
├── sanity/schemas/            # CMS content models
│   ├── siteSettings.ts        # Name, hero, contact, about
│   ├── caseStudy.ts           # Case studies + deck PDFs
│   ├── project.ts             # Engineering projects
│   ├── journeyItem.ts         # Timeline entries
│   └── skillCategory.ts       # Skills groups
├── scripts/seed.mjs           # Seed CMS with existing content
├── src/
│   ├── app/
│   │   ├── studio/            # /studio — login-gated CMS editor
│   │   ├── case-studies/      # Listing + [slug] detail pages
│   │   ├── projects/
│   │   ├── journey/
│   │   └── contact/
│   ├── components/            # UI (Navbar, Hero, Cards, Footer…)
│   ├── data/                  # Local fallback content
│   └── lib/
│       ├── sanity.ts          # Client + image helpers
│       ├── queries.ts         # GROQ queries
│       ├── content.ts         # Fetchers (CMS → fallback)
│       └── types.ts           # Shared types
└── public/images/             # Static assets
```

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

### Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server (Turbopack hot-reload) |
| `npm run build` | Production build |
| `npm start` | Run production build |
| `npm run lint` | ESLint |
| `npm run seed` | Push existing content into Sanity |

## Editing Content (CMS)

1. Go to `http://localhost:3000/studio` (or your deployed `/studio`)
2. Log in with your Sanity account
3. Edit any document type:
   - **Site Settings** — name, hero text, email, socials, about, footer
   - **Case Study** — title, narrative, tags, **upload deck PDF**, cover image
   - **Project** — title, summary, tech stack, links, cover image
   - **Journey Item** — timeline milestones
   - **Skill Category** — skills groups
4. **Publish** → the site updates automatically (revalidate 60s)

### First-time seed (optional)

If you want your current content in Sanity:

1. Create a write token: [sanity.io/manage](https://www.sanity.io/manage) → project → API → Tokens
2. Add to `.env.local`:
   ```
   SANITY_API_TOKEN=your_token_here
   ```
3. Run:
   ```bash
   npm run seed
   ```

The site also works **without** Sanity — it falls back to local files in `src/data/`.

## Case Study Detail Pages

Each case study gets `/case-studies/[slug]` with:

- Problem → Research → Solution → Impact narrative
- Key highlights
- **Inline PDF viewer** (uploaded deck)
- **Download Deck** button
- Optional external link

Add a deck in Studio → Case Study → **Case Study Deck (PDF)** → Publish.

## Env Vars (`.env.local`)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=3ksax8m8
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=...          # only needed for npm run seed
```

## Deployment

Deploy to **Vercel**:

1. Push to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Add the env vars above
4. Deploy

## Contact

- 📧 Email: chandrakanthr876@gmail.com

---

© 2026 Nagam Chandrakanth Reddy. All rights reserved.
