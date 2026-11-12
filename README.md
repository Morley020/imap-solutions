# iMap Digital Solutions website

This repository contains the dependency-free static website for **iMap Digital Solutions Limited**, a Zambia-based consultancy and technology delivery partner. The site presents iMap’s consultancy, AI and automation, IT, cybersecurity, research and business intelligence, telecoms, and software development capabilities.

## Technology

- Node.js 22 or later
- Plain HTML, CSS and browser JavaScript
- A small Node.js static-site generator
- Vercel static deployment
- No runtime or third-party package dependencies

## Local development

Install Node.js 22 or later, then run:

```bash
npm run generate
npm run check
npm start
```

The local preview runs at [http://localhost:3000](http://localhost:3000).

`npm run generate` creates the page files, route manifests, sitemap, robots file, favicon and 404 page. `npm run check` performs JavaScript syntax checks. `npm run build` creates a clean Vercel output in `dist/`.

## Visual system

The 2026 refresh follows a **“Signal & terrain”** direction: an editorial, consultancy-grade interface built from a deep navy field, a single warm gold signal, cream paper surfaces and topographic line work. Key ideas:

- **Typography** — Newsreader (display serif) for headlines, Source Sans 3 for body and interface text, both self-hosted as WebP/woff2 subsets in `assets/fonts/`.
- **Layout** — asymmetric, image-led heroes with a capability index; wide alternating bands; editorial service rows and numbered proof cards rather than a uniform card grid.
- **Signature elements** — a generated topographic texture (`assets/topo-texture.webp`) behind tinted sections and page heroes, a generated signal-mesh texture (`assets/signal-texture.webp`) behind the closing call to action, and a gold rule/underline motif.
- **Motion** — scroll-triggered reveals with light stagger, a reading-progress bar, gentle hero parallax, count-up hero figures and a marquee of client types. All motion respects `prefers-reduced-motion`.
- **Light mode** — a cream, paper-like alternative palette with a darker gold for text contrast; the choice is stored in `localStorage`.

Design tokens live at the top of `styles.css`. The gold used for text (`--gold`) is intentionally darker in light mode than the fill gold (`--gold-fill`) used on buttons.

## Source of truth

- `site-content.js` — company facts, services, sectors, projects, technology references and media paths.
- `generate-site.js` — shared page templates, navigation, footer, metadata and page content.
- `styles.css` — responsive layout, navy-and-gold visual system, light mode and motion rules.
- `script.js` — navigation, search, colour mode, scroll effects, enquiry preparation and 404 recovery search.
- `build.js` — clean static build used by Vercel.
- `server.js` — lightweight local preview server.
- `app.config.ts` — project branding metadata (logo URL) used by the Manus workspace.
- `assets/` — approved website images, logos, fonts, local technology icons and the downloadable company profile PDF.
- `assets/tech/` — locally served Simple Icons SVGs for the technology page. Simple Icons are CC0; the underlying product marks remain trademarks of their owners.
- `public/routes.json` — generated route manifest used by the website search and build process.
- `public/manus-routes.json` — generated route manifest used for platform route discovery and preview navigation.

When changing content or routes, update the source files and run `npm run build` before committing. Do not edit generated page files by hand.

## Responsive behaviour

The layout is fluid from 320 px phones to large desktops. Key breakpoints: 1180 px (navigation tightening), 1000 px (mobile drawer and stacked hero), 900 px (single-column editorial sections and product heroes), 760 px (cards and service rows stack, full-width actions), 600 px (wrapping buttons and larger tap targets) and 420 px (compact forms and footer). The mobile drawer is full-height, scroll-locked and closes on link, outside click or Escape.

Headlines use `clamp()` sizing, grids collapse to one column, tables and fixed-width elements are avoided, and every page was checked at 320, 360, 375, 390, 414, 480, 600, 768, 820, 1024, 1280, 1440 and 1920 px for horizontal overflow. Photography uses `srcset`/`sizes` so phones download 1000 px variants, and the home hero image is preloaded with `imagesrcset`.

## Image and performance notes

Photography is supplied as responsive WebP derivatives (`assets/*.webp`) with explicit width and height attributes to avoid layout shift. The three original JPEGs (about 14 MB combined) were replaced by derivatives totalling roughly 450 KB. Logos and the NyoniLine preview are WebP, and the light-mode logo is lazy-loaded until the theme is switched. The home page now transfers about 450 KB on mobile across 11 requests, with a local LCP around 0.5 s and no measurable layout shift. Hero imagery is eager and high priority; supporting images are lazy-loaded. Technology logos are served locally rather than from a third-party CDN, removing external requests and blocked-icon failures.

## Build and deployment

Vercel uses the following configuration from `vercel.json`:

- Framework: Other
- Install command: no dependencies are installed
- Build command: `npm run build`
- Output directory: `dist`

The production website is [https://imapsolutions.co.zm](https://imapsolutions.co.zm). Canonical URLs, sitemap entries and structured organization metadata are generated from the origin configured in `site-content.js`.

## Content and asset notes

The website distinguishes active products, concepts and illustrative material. NyoniLine is in active development. RAIS is an approved direction. Lumikiza is a strategic partner platform and its visual is an illustrative concept. The field and infrastructure images are used as illustrative delivery-context imagery. The company profile PDF is intentionally available for download and will be replaced with a custom profile document in a later phase.

The enquiry form prepares an email draft or copies the enquiry for the visitor to send. It does not submit information to a website database or book appointments automatically. The site does not include analytics, a newsletter subscription or an automated chatbot.

## Licence and ownership

The website content, company information, brand assets and iMap-specific media belong to iMap Digital Solutions Limited or their respective rights holders. Do not reuse them without permission. Font licence notices are included in `assets/fonts/`.
