# lukas-ott.github.io

My personal website, built with [Astro](https://astro.build) and published at
https://lukas-ott.github.io/.

## Working on it

Needs Node.js 22 (`nvm use` picks it up from `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Every push to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`).

## Where things are

- `src/pages/`: About (`index.astro`), Experience and Projects.
- `src/content/projects/`: one Markdown file per project; `order` sets the order on the page.
- `src/layouts/Base.astro`: the shared header, footer and page head.
- `src/styles/global.css`: colours, fonts and shared styles.
- `public/lukas-ott-cv.pdf`: the CV linked on the site.
