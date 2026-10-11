# iMap Digital Solutions Limited

Static company website featuring a Zambia network-map hero, six technology capabilities, products including Lumikiza, detailed IT services, research, company information, sectors, careers, and contact details. Whitewood Services is the Strategic Management Partner. Social profiles are marked Coming soon until their URLs are provided.

## Local preview

Requires Node.js 20 or later. No dependencies are needed.

```bash
npm start
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

The build writes only website files to `dist/`, including the homepage, styles, scripts, route manifest, logos, Zambia map, and company-profile PDF. The server, source documentation, and archived ZIP are not exposed in the deployed output.

## Vercel

Connect Vercel to `Morley020/imap-solutions`, production branch `main`, and leave Root Directory at the repository root. The committed `vercel.json` selects Framework Preset **Other**, build command **npm run build**, and output directory **dist**. Do not select Next.js for this static implementation. A push to `main` triggers deployment when the Vercel Git integration is enabled.

The original uploaded ZIP is preserved for history; Vercel deploys the extracted, current source files, not the ZIP.

## Structure

- `index.html`: current homepage, embedded styles, and interactions
- `assets/`: iMap logo, Zambia outline, and downloadable company profile
- `public/manus-routes.json`: website route declaration
- `build.js`: dependency-free static build
- `vercel.json`: production deployment configuration
- `server.js`: local preview only
- `company-profile.md`: editable source for the PDF

## Contact form

The contact form opens the visitor’s email application with a prepared message. It does not submit to a server or save inquiry records.

## Map attribution

Zambia outline adapted from NordNordWest’s [Zambia location map](https://commons.wikimedia.org/wiki/File:Zambia_location_map.svg), licensed [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). The colours and visual presentation have been adapted for the iMap website.
