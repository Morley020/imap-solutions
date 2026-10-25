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

`npm run generate` creates the page files, route manifest, sitemap, robots file, favicon and 404 page. `npm run check` performs JavaScript syntax checks. `npm run build` creates a clean Vercel output in `dist/`.

## Source of truth

- `site-content.js` — company facts, services, sectors, projects, technology references and media paths.
- `generate-site.js` — shared page templates, navigation, footer, metadata and page content.
- `styles.css` — responsive layout, navy-and-gold visual system, light mode and motion rules.
- `script.js` — navigation, search, colour mode, enquiry preparation and 404 recovery search.
- `build.js` — clean static build used by Vercel.
- `server.js` — lightweight local preview server.
- `assets/` — approved website images, logos, fonts and the downloadable company profile PDF.
- `public/routes.json` — generated route manifest used by the website search and build process.

When changing content or routes, update the source files and run `npm run build` before committing. Do not edit generated page files by hand.

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
