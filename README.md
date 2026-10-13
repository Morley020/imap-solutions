# iMap Digital Solutions website

A dependency-free, multi-page marketing website with the requested charcoal/cobalt palette and editorial typography. The current refinement is intended for review before live publication.

## Run and build

Requires Node.js 22 or later. There are no runtime dependencies to install.

```bash
npm run generate
npm start
npm run check
npm run build
```

Preview listens on port 3000. `npm run build` regenerates 16 meaningful HTML pages and copies only public pages, CSS, browser JS and assets to `dist/`. Generated output and secret files are not committed.

## Edit content

`site-content.js` contains company facts, services, projects and image paths. `generate-site.js` provides shared layouts and the remaining authored product/editorial content. Regenerate after changing either. `styles.css` and `script.js` are shared across pages. The route manifest is derived from the generated page set; do not add an empty route declaration.

The static page paths cover the homepage, a service directory and four grouped detail pages, product portfolio, NyoniLine, Lumikiza, RAIS, selected work, About, field notes and the NyoniLine article, contact and website privacy.

## Assets and claims

The NyoniLine screen is supplied by iMap and shows example farm data. Lumikiza imagery is an illustrative interface concept, not a live screenshot. The field photograph is illustrative, not a customer deployment. Images are local assets so both Preview and Vercel can serve the same files. Fonts are self-hosted Latin subsets of Newsreader and Source Sans 3, both available under the SIL Open Font License; source licences are included in `assets/fonts/`.

NyoniLine is in active development. RAIS is an approved direction. Lumikiza belongs to Whitewood Management Services. Work summaries are attributed to VirTech. No blanket uptime, certification, diagnosis, pilot-result or emergency-response guarantee is made. The company profile PDF follows the same claims and address.

The enquiry form prepares an email draft or copies the message. It does not submit data to a website database or book an appointment automatically. Request-a-call links select the relevant topic. No analytics, newsletter subscription or automated chatbot has been added.

## Vercel

Use framework **Other**, build command `npm run build`, output directory `dist`. Existing `vercel.json` on the GitHub deployment branch preserves this configuration. Directory-index routes work without an SPA fallback. Canonicals, Open Graph URLs and sitemap use the existing public site `https://imap-solutions.vercel.app`; change `origin` in `site-content.js` only when a real custom domain is connected.

This review branch does not replace the live main-branch site. Merge only after reviewing the design and confirming publication. The separate Manus-managed repository remains the canonical Preview/checkpoint store.

## Guidance and content decisions

The supplied Crestodina homepage article informed the visible descriptive H1, specific navigation/CTAs, credible work attribution, genuine app screen, explicit product stages, FAQs and restrained footer. See `content-notes.md` for source links and qualifications. The unrelated RAIS Word approval/blueprint documents are not edited by this website revision.
