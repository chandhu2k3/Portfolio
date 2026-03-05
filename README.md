# Chandra's Portfolio Website

A modern, professional portfolio website showcasing the journey from Software Engineer to Product Manager.

## Overview

This is a **Next.js 14** portfolio built with **TypeScript**, **Tailwind CSS**, and **Framer Motion** animations. It presents:

- 🎯 Developer → PM transformation journey
- 📊 Product case studies with strategic insights
- 💻 Engineering projects & technical expertise
- 🚀 Professional experience & timeline
- ⚡ Smooth, modern UI with animations
- 📱 Fully responsive design
- 🔍 SEO optimized

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Hosting**: Ready for Vercel deployment

## Project Structure

```
src/
├── app/                    # Next.js pages & routes
│   ├── layout.tsx         # Root layout with Navbar
│   ├── page.tsx           # Homepage
│   ├── journey/           # Journey page
│   ├── projects/          # Projects page
│   ├── case-studies/      # Case studies page
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── JourneyTimeline.tsx
│   ├── ProjectsGrid.tsx
│   ├── CaseStudiesGrid.tsx
│   └── ContactSection.tsx
├── data/                  # Static content & configuration
│   ├── journey.ts
│   ├── projects.ts
│   ├── caseStudies.ts
│   └── skills.ts
└── styles/               # Global styles
```

## Key Features

### 1. Navbar

- Sticky navigation with blur effect on scroll
- Mobile-responsive hamburger menu
- Smooth scroll links to sections
- Gradient branding

### 2. Hero Section

- Eye-catching headline with gradient text
- Clear value proposition
- Call-to-action buttons
- Animated scroll indicator

### 3. About Section

- Personal story & background
- Skills organized by category
- Professional strengths highlight

### 4. Journey Timeline

- Developer to PM transformation timeline
- Visual timeline with icons
- Interactive animations
- 7 key milestone events

### 5. Projects Grid

- 6 featured projects
- Tech stack badges
- Links to GitHub & Live demos
- Hover effects

### 6. Case Studies

- 6 detailed product case studies
- Category tags (Design Thinking, Product Strategy, Research, UX/UI, AI)
- Key highlights & outcomes
- Links to full case studies

### 7. Contact Section

- Email, GitHub, LinkedIn links
- Contact form (frontend ready)
- Professional dark theme

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server with hot-reload
npm run dev
```

Visit `http://localhost:3000` to see the portfolio.

### Development Commands

```bash
# Standard development mode (recommended)
npm run dev

# Development with nodemon file watcher
npm run dev:watch

# Build for production
npm run build

# Run production build
npm start

# Check for linting errors
npm run lint
```

## Hot-Reload & Auto-Restart

The project is configured for automatic restart on file changes:

### **Option 1: Next.js Built-in Hot-Reload (Default)**

```bash
npm run dev
```

- Uses Next.js's built-in hot-reload with Turbopack
- Fastest recompilation
- **Recommended for most development**
- Automatically detects changes in `src/` directory

### **Option 2: Nodemon Watcher**

```bash
npm run dev:watch
```

- Uses nodemon for explicit file watching
- Watches: TypeScript, TSX, JSON, and CSS files
- Useful if hot-reload isn't working as expected
- Automatically restarts server on any file changes in `src/`

**Configuration Files:**

- `nodemon.json` - Nodemon configuration
- `.env.local` - Environment variables

## Development

### Adding New Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: "my-project",
  title: "Project Name",
  summary: "Brief description",
  techStack: ["React", "TypeScript"],
  github: "https://github.com/...",
  liveDemo: "https://...",
}
```

### Adding New Case Studies

Edit `src/data/caseStudies.ts`:

```typescript
{
  id: "my-case-study",
  title: "Case Study Name",
  category: "Product Strategy",
  summary: "Summary",
  highlights: ["Point 1", "Point 2"],
}
```

### Updating Skills

Edit `src/data/skills.ts` to add/remove skill categories and items.

### Updating Journey Timeline

Edit `src/data/journey.ts` to modify milestone events.

## Customization

### Colors & Branding

- Update Tailwind config in `tailwind.config.ts`
- Modify gradient colors in components
- Change gradient colors from `from-blue-600 to-purple-600`

### Fonts

- Fonts are configured in `src/app/layout.tsx`
- Uses `Geist` fonts from Google Fonts

### Contact Information

- Update email in `src/components/ContactSection.tsx`
- Update GitHub/LinkedIn URLs
- Add form backend integration as needed

## Building for Production

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push repository to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel automatically detects Next.js and deploys

```bash
# Deploy from CLI
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
# Build static files
npm run build

# Deploy the `.next` folder to Netlify
```

## Performance

- **Lighthouse Score Goal**: 90+
- **Load Time Target**: < 2 seconds
- **Optimizations**:
  - Image optimization
  - Code splitting
  - CSS-in-JS (Tailwind)
  - Server-side rendering (Next.js)
  - Static generation where possible

## SEO

- ✅ Meta tags for all pages
- ✅ Open Graph tags for social sharing
- ✅ Mobile-friendly responsive design
- ✅ Fast page load times
- ✅ Semantic HTML structure
- ✅ Ready for sitemap generation

## Future Enhancements (V2)

- [ ] Blog system with MDX
- [ ] Detailed case study pages
- [ ] Dark mode toggle
- [ ] CMS integration (Sanity/Notion)
- [ ] Analytics dashboard
- [ ] Custom domain setup
- [ ] Newsletter signup

## Scripts

```bash
npm run dev        # ⚡ Start development server with hot-reload (Turbopack)
npm run dev:watch  # 👀 Alternative: Start with nodemon file watcher
npm run build      # 🏗️  Build for production
npm run start      # 🚀 Start production server
npm run lint       # 🔍 Check for linting errors
```

### What Each Script Does:

| Command             | Purpose                                             | Use When                        |
| ------------------- | --------------------------------------------------- | ------------------------------- |
| `npm run dev`       | Starts Next.js dev server with Turbopack hot-reload | Daily development (recommended) |
| `npm run dev:watch` | Starts server with nodemon file watcher             | If hot-reload isn't working     |
| `npm run build`     | Creates optimized production build                  | Before deploying                |
| `npm run start`     | Runs production build locally                       | Testing production build        |
| `npm run lint`      | Checks code quality with ESLint                     | Code review before commit       |

## File Watching & Auto-Reload

**The project automatically restarts when you change files:**

- ✅ **Watches**: `.ts`, `.tsx`, `.json`, `.css` files in `src/` directory
- ✅ **Ignores**: `node_modules`, `.next`, `.git`, `public`
- ✅ **Delay**: 500ms between file change and restart (prevents double-restarts)

**How it works:**

1. You save a file
2. Server automatically detects the change
3. Project restarts within 500ms
4. Browser auto-refreshes (hot-reload)

## Contact

- 📧 Email: chandra@example.com
- 🔗 LinkedIn: [linkedin.com/in/chandra](https://linkedin.com)
- 💻 GitHub: [github.com/chandra](https://github.com)

---

© 2025 Chandra Kanth Reddy. All rights reserved.
