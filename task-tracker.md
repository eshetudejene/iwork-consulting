# iWork (ConsultiWork) Website — Task Tracker

Links:
- PRD: `./prd.md`
- Source requirements: `./consultiwork-complete.md`

## Status Overview
- Phase: Foundations
- Owner: Cascade + iWork Team
- Theme: Professional, modern, subtle animations, light/dark
- Stack: Next.js (App Router), Tailwind, shadcn/ui, next-themes, lucide-react, framer-motion

## Milestones
1) Foundations
- [ ] Scaffold Next.js app with Tailwind and App Router
- [ ] Initialize shadcn/ui and add base components
- [ ] Install next-themes and set up theme provider (light/dark)
- [ ] Add tailwindcss-animate and base motion utilities
- [ ] Create base layout, nav, footer

2) Content Sections
- [ ] Hero (Company intro, mission, tagline)
- [ ] Services Overview
- [ ] Our Approach (3 steps)
- [ ] What We Do (detailed portfolio)
- [ ] Our Partners (logos + links)
- [ ] Our Team (profiles)
- [ ] Work With Us (contact info + CTAs)

3) Polish & QA
- [ ] Responsive navigation (desktop/mobile)
- [ ] Subtle animations (entrances, hover, theme toggle)
- [ ] Accessibility pass (WCAG AA)
- [ ] SEO metadata + social (OG/Twitter)
- [ ] Performance pass (Lighthouse 90+ all categories)

4) Launch
- [ ] Vercel deployment
- [ ] Domain mapping
- [ ] Final QA & fixes

## Backlog / Future (post v1)
- [ ] Blog / Case studies / CMS
- [ ] Careers page
- [ ] Advanced contact form + CRM integration
- [ ] Multi-language support
- [ ] Structured data (Organization) JSON-LD

## Detailed Tasks

### Foundations
- [ ] Create Next.js app (TypeScript, ESLint, Tailwind, App Router, `src/` structure, alias `@/*`)
- [ ] Install shadcn CLI and `init`
- [ ] Add shadcn components: `navigation-menu`, `button`, `card`, `accordion`, `avatar`, `badge`, `dropdown-menu`, `sheet`, `tooltip`, `separator`, `skeleton`, `toast`, `input`, `textarea`, `label`, `switch`, `tabs`
- [ ] Install and configure `next-themes` (ThemeProvider, `darkMode: 'class'`)
- [ ] Install `lucide-react` (icons)
- [ ] Install `framer-motion` and `tailwindcss-animate` (add plugin to Tailwind config)
- [ ] Base color palette (neutral base + restrained accent)
- [ ] Global typography via `next/font` (e.g., Inter or Geist)

### Content & UI
- [ ] Build `NavBar` (desktop `NavigationMenu` + mobile `Sheet`)
- [ ] Build `Footer`
- [ ] Hero section with CTA
- [ ] Services overview cards
- [ ] Our Approach (3-step cards with icons)
- [ ] What We Do (detailed bullets, linkable anchors)
- [ ] Partners (logo grid with external links)
- [ ] Team (cards with titles/experience)
- [ ] Work With Us (contact info, CTA buttons)
- [ ] Light/dark theme toggle component

### SEO & Performance
- [ ] Base metadata in `app/layout.tsx`
- [ ] OG/Twitter images (placeholder initially)
- [ ] `next/image` for assets, proper sizes
- [ ] Lazy-load below-the-fold sections
- [ ] No layout shift (reserve image/logo space)

### Accessibility & QA
- [ ] Keyboard navigation + visible focus rings
- [ ] Color contrast checks
- [ ] Prefers-reduced-motion handling
- [ ] Resolve console warnings/errors

### Deployment
- [ ] Create Vercel project and deploy
- [ ] Set up custom domain
- [ ] Final Lighthouse report

## Decisions & Notes
- Prefer shadcn/ui components over custom.
- Animations must be subtle and performance-friendly.
- Content is based on `consultiwork-complete.md` with stakeholder review for any copy edits.
- Placeholder assets okay initially; replace with real logos/headshots when supplied.
