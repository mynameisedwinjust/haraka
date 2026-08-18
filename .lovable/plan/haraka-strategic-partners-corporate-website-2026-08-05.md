# HARAKA Strategic Partners — Corporate Website

Enterprise-grade marketing site: Accenture-style structure, Pipedrive-orange conversion energy, Apple-level whitespace and restraint. Built around the tagline "Move With Purpose."

## Decisions I made for you

- **Copy**: no company profile was attached, so I'll write professional, realistic copy in HARAKA's voice (services, industries, products, values, Kigali contact block). Every factual placeholder — phone, address, leadership names, client logos — will be clearly swappable, and you can hand me the profile later to replace it wholesale.
- **Stack**: Lovable builds on React 19 + TanStack Start (SSR, file-based routing) instead of Next.js. Everything else from your spec stands: TypeScript, Tailwind, shadcn UI, Framer Motion, React Hook Form + Zod, Lucide.
- **Backend**: phase 1 ships static content with fully validated forms. Blog/careers CMS, form submissions and consultation booking come in phase 2 on Lovable Cloud (built-in database, auth, storage — no external accounts).
- **Sequencing**: phase 1 delivers the design system plus the pages that carry the brand. Deep leaf pages (12 industries, 8 products, insights, careers) follow, reusing the templates built in phase 1.

## Phase 1 — build now

**Design system** (`src/styles.css`)
- Orange `#F97316` primary, navy `#0B1F3A` secondary, white / `#F8FAFC` / `#1F2937` neutrals, all as oklch semantic tokens with a full dark-mode set.
- Inter via a root `<link>`, large display scale, tight tracking on headings.
- Tokens for elevation, section rhythm, and a navy→orange accent gradient.

**Global chrome** (`__root.tsx`)
- Sticky navigation that shrinks on scroll, with a mega menu for Services / Industries / Products / Technology.
- Dark mode toggle, mobile drawer nav.
- Navy footer: four link columns, contact block, socials, newsletter field.
- Floating WhatsApp button, cookie consent bar, scroll-to-top.

**Pages**
1. `/` — Hero (mouse-follow gradient over navy, one primary CTA), trusted-by strip, about intro, four service pillars, industries grid, technology ecosystem, featured products, why HARAKA with animated counters, five-step delivery process, testimonials carousel, insights preview, contact CTA band.
2. `/about` — story, mission, vision, values grid, interactive vertical timeline, leadership grid.
3. `/services` + four detail pages: Business Consulting & Strategy, Technology Solutions, Project Delivery & Managed Services, Digital Products & Innovation. Shared template: hero, overview, offerings, benefits, process, technologies, CTA.
4. `/industries` — hub with all 12 industries; template ready for detail pages.
5. `/products` — hub with all 8 products; template ready for detail pages.
6. `/technology` — interactive ecosystem across Cloud, AI, Enterprise Software, Engineering, Automation, Analytics.
7. `/contact` — React Hook Form + Zod form, consultation request, embedded Kigali map, office details, hours, socials.

**Cross-cutting**
- Per-route `head()` metadata, JSON-LD (Organization sitewide, Service on service pages), `sitemap.xml` server route, `robots.txt`.
- Breadcrumbs on all non-home routes, WCAG AA contrast and focus states, keyboard-accessible menus.
- Framer Motion: hero reveal, scroll-triggered section reveals, counter animation, card hover lift, page transitions. Restrained — never on every element.
- Generated brand photography and product screenshots; lazy-loaded below the fold.
- Your uploaded logo becomes the nav mark and the favicon.

## Phase 2 — after phase 1 lands

Lovable Cloud backend: contact + consultation submissions with an admin inbox, blog/insights CMS with categories, search and filtering, careers listings with an application portal, newsletter storage. Individual industry and product detail pages. Multi-language scaffolding (EN / FR / RW).

## Technical notes

- Routes are file-based under `src/routes/`; service pages use a shared data-driven template so the twelve industry and eight product pages later require data, not new layouts.
- All content lives in typed data modules (`src/content/*`) so swapping in the real company profile is a data edit, not a rewrite.
- No hash-anchor sections for major content — each section that deserves indexing gets its own route.
