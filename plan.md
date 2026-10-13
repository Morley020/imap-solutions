# iMap website refinement

## Direction
A multi-page enterprise website with practical Zambian product stories. Preserve brand, joint venture, Whitewood strategic partnership, prior VirTech client attribution, the company address and coming-soon socials. Do not edit the unrelated RAIS Word document.

## Design
- **Movement:** editorial industrial modernism, restrained dark canvas and confident serif headlines.
- **Principles:** specific language, spacious asymmetric layouts, visible product evidence, accessible predictable navigation.
- **Palette:** exact user tokens: bg-dark #0B0F17; bg-card #131B2A; border-color #1E293B; primary #2563EB; primary-accent #3B82F6; cyan-accent #06B6D4; text-main #F8FAFC; text-muted #94A3B8; card-hover #1E293B. No purple gradients, glow meshes, particles or isometric art.
- **Layout:** wide editorial hero, ruled service rows rather than a dense card grid; generous product features, compact credible project list, clear inquiry endpoint.
- **Typography:** Newsreader display serif, Source Sans 3 body; self-hosted fonts with readable fallback, intentional tracking and line height.
- **Motifs:** numbered ruled rows, understated cyan markers, accurate non-glowing Zambia silhouette in the company context.
- **Interactions:** real navigation, focused forms and disclosures; 160–240ms hover/focus, one-time 12px scroll reveal with reduced-motion support. No hover lifts on every element, jitter or scroll hijacking.
- **Brand essence:** a locally grounded team connecting software, evidence and IT infrastructure for Zambian organisations. Practical, accountable, thoughtful.
- **Voice:** 'Software, data and IT infrastructure for Zambian organisations.' / 'Tell us what your team needs to do.'
- **Logo:** preserve supplied iMap mark and wordmark, small clear header footprint. Signature brand colour is #2563EB.

## Pages
Home; service directory; digital systems/data/AI; infrastructure/networking/support; security/communications; research/evaluation; products overview; NyoniLine detail; Lumikiza detail; RAIS direction; selected work; about/vision/mission/partner/sectors/careers; insights plus NyoniLine field perspective; contact; privacy.

No empty 'learn more' links: each linked page has specific content, deliverables, limits and a contextual inquiry link. NyoniLine is in active development, field/sync/AI features are intended capabilities, not a deployed or clinically validated guarantee. Its supplied screen has illustrative data. Lumikiza is Whitewood’s platform; any new visual is explicitly a concept, not the live interface. RAIS is approved product direction, not launched software. Preserve iMap Analytics concept and Zambia Service Watch development in overview without inventing feature readiness.

## Build
Keep dependency-free HTML/CSS/JS; source content and shared HTML renderer generate committed static pages. Browser renders meaningful initial HTML without JS. Build copies only public assets/pages. Preview server supports directory index routes and real 404s. Use self-hosted fonts and optimised image assets. No new runtime backend or database. Contact form prepares a mailto draft and says it does not submit automatically; no fake booking confirmation.

## Structure
- `site-content.js`: authored service/product/editorial content.
- `generate-site.js`: shared header/footer, metadata and static page generation.
- `index.html` and route folders: generated, crawlable pages.
- `styles.css`, `script.js`: shared responsive design and purposeful interaction.
- `assets/`: original logos/map/profile, user NyoniLine screen, labelled concept images, fonts.
- `public/`: route manifest, robots, sitemap, favicon.
- `build.js`, `server.js`: dependency-free output/Preview handling.

Canonical origin: existing public GitHub-linked Vercel site https://imap-solutions.vercel.app, not an assumed domain. Preserve separate managed origin and GitHub deployment history. Save the managed checkpoint; prepare GitHub changes on its own existing main history. Publish after design preview unless continuing publication is explicitly authorised.

## Source guidance applied
Andy Crestodina homepage article (user-supplied LinkedIn URL) and Orbit Media specificity article: descriptive visible H1; short intro; small logo; specific paths; useful imagery; qualified proof; no carousel; clear CTA/destination match; multiple relevant routes for curious visitors; accessible mobile menu; specific FAQs; restrained footer socials. No fabricated testimonials, metrics, certification seals or actual-client photographs.
