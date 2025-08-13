# iWork (ConsultiWork) Website — Product Requirements Document (PRD)

Version: 1.0
Owner: Cascade (AI) + iWork Team
Date: 2025-08-08

## 1) Summary
Build a modern, professional, fast, and accessible marketing website for iWork Technologies PLC (brand: ConsultiWork). The site should clearly communicate the company’s value, services, approach, partners, leadership, and provide an effective contact/CTA path. It must look impressive yet professional, support light/dark mode, and use clean, performance-friendly animations. Stack: Next.js (App Router), Tailwind CSS, shadcn/ui (prefer shadcn components), deployed on Vercel.

## 2) Goals & Objectives
- Clearly present who iWork/ConsultiWork is and what value it provides.
- Showcase core services, detailed portfolio of offerings, and the 3-step approach.
- Build trust via leadership profiles and strategic partners.
- Drive inquiries via clear CTAs and contact section.
- Deliver a premium, modern, and credible brand experience.
- Ensure top-notch performance (Core Web Vitals), accessibility, and SEO.

## 3) Key Success Metrics (KPIs)
- Conversion: Contact clicks/form submissions.
- Engagement: Time on page, scroll depth to service/approach sections.
- Performance: Lighthouse 90+ on Performance/Accessibility/Best Practices/SEO.
- Technical: No console errors, smooth 60fps animations, CLS < 0.1, LCP < 2.5s.

## 4) Target Audience
- SMEs seeking digital transformation and operational improvements.
- Growing businesses needing performance improvement consulting.
- Organizations seeking strategic consulting and technology integration.

## 5) Scope (In-Scope Features)
Based on `consultiwork-complete.md`:
- Home (single-page with anchors) including:
  - Hero: brand intro, mission, tagline.
  - Services overview + linkable detailed sections.
  - Our Approach: 3-step process.
  - What We Do: Detailed service portfolio (Management/Business Consulting, Web Design & Dev, Enterprise Software & AI Solutions).
  - Our Partners: Partner logos + links.
  - Our Team: Leadership profiles with roles/expertise.
  - Work With Us: Contact info, address, email, phone, CTA(s).
- Global Nav + Footer.
- Light/Dark mode toggle.
- Clean, subtle animations for entrances, hover states, and micro-interactions.
- Professional color theme (not overly colorful).
- SEO metadata and social share (OG/Twitter) defaults.
- Accessibility best practices.

Out of scope (for v1): Blog/Case Studies/CMS, multi-language, careers, complex forms/CRM integrations. These can be considered later.

## 6) Information Architecture & Routes
- App uses Next.js App Router (`app/`), single primary page with section anchors.
- Routes:
  - `/` (home)
    - `#services`, `#our-approach`, `#what-we-do`, `#our-partners`, `#our-team`, `#work-with-us`
  - (Optional future) `/privacy`, `/terms` (basic pages).

## 7) Content Requirements
- Company Overview: name, mission, tagline from source doc.
- Services: Three fundamentals + detailed portfolio bullets (as provided).
- Approach: 3 steps with concise descriptive bullets.
- Partners: Logo images or text logos with links.
- Team: Headshots (if available), titles, experience, expertise.
- Contact: Phone, email, address (rendered accessibly), CTA buttons.
- Footer: Company legal name, minimal nav, copyright.

## 8) Design & Brand
- Visual Style: Clean, spacious, modern; calm professional palette.
- Color Palette: Neutral base (zinc/stone/slate) with a restrained accent (e.g., emerald or blue). Final accent can be tuned with stakeholders.
- Typography: Modern sans (e.g., Geist or Inter via `next/font`), optional mono for code accents.
- Components: Use shadcn/ui for primitives (NavigationMenu, Button, Card, Accordion, Avatar, Badge, DropdownMenu, Sheet for mobile nav, Tooltip, Input/Textarea/Form, Separator, Skeleton/Toast as needed).
- Imagery: Subtle geometric shapes, partner logos, team headshots (if provided). Avoid clutter.
- Iconography: `lucide-react` (works well with shadcn).

## 9) Interaction & Motion
- Use `tailwindcss-animate` and light `framer-motion` for:
  - Section fade/slide in on view (staggered, subtle).
  - Hover states on cards/buttons (scale/translate < 1.02, subtle shadows).
  - Theme toggle transitions.
- Performance guardrails: Prefer CSS transitions; keep motion GPU-friendly; limit simultaneous animated elements.

## 10) Accessibility
- Keyboard navigable, visible focus states.
- Color contrast meets WCAG AA.
- Semantic HTML landmarks and ARIA where suitable.
- Reduced motion respect via `prefers-reduced-motion`.

## 11) Technical Stack
- Next.js 14+ (App Router), React Server Components where beneficial.
- Tailwind CSS with `tailwindcss-animate`.
- shadcn/ui initialized with default styles; prefer shadcn over custom.
- Theming via `next-themes` (class strategy) with light/dark.
- Icons via `lucide-react`.
- Optional: `framer-motion` for tasteful animations.
- Image optimization via `next/image`.
- Deployment: Vercel.
- Node: >= 18.

## 12) SEO
- Proper `<title>`, `<meta>` descriptions per page/section.
- Open Graph and Twitter Card defaults.
- Sitemap and robots; canonical URL.
- Structured data (org) optional.

## 13) Performance
- Optimize images; use `next/image` with appropriate sizes.
- Lazy-load below-the-fold sections.
- Avoid layout shifts (reserve space for images/logos).
- Tree-shake and code-split where applicable.

## 14) Security & Privacy
- No PII storage. Contact is email/phone first for v1.
- Add basic legal pages later if needed.

## 15) Risks & Mitigations
- Asset availability (logos, headshots): Use placeholders; add real assets when provided.
- Scope creep: Keep v1 to defined sections; log future ideas in tracker.
- Animation-performance tradeoff: Keep motion minimal and test CWV.

## 16) Milestones & Deliverables
1) Foundations
   - PRD + Task Tracker
   - Scaffold Next.js app with Tailwind + shadcn
   - Theme provider (light/dark), base layout, navigation/footer
2) Content Sections
   - Hero + Services overview
   - Our Approach (3 steps) + What We Do details
   - Partners + Team
   - Contact/CTA
3) Polish
   - Animations, accessibility pass, SEO metadata, favicon/OG images
4) Launch
   - Vercel deployment, domain setup, QA and fixes

## 17) Acceptance Criteria (v1)
- All sections present with content from `consultiwork-complete.md`.
- Light/dark mode works and is persisted.
- Smooth, subtle animations without jank.
- Lighthouse: >=90 Performance/Accessibility/Best Practices/SEO on fast 4G.
- No console errors; no visual regressions on mobile/desktop.
- Deployed and accessible via public URL.
