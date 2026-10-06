# Orange Banana website

React + TypeScript app (Vite, Tailwind CSS 3, React Router), prerendered to static HTML at build time. Built from the v22 design.

## Commands

- `npm install` – once
- `npm start` – dev server at http://localhost:3000
- `npm run build` – type-checks, builds, and prerenders every page into `build/`
- `npm run preview` – serves `build/` locally, to check a production build

## Structure

```
index.html                 head: SEO/Open Graph tags, fonts, site-wide schema (Organization, founder, services)
scripts/prerender.mjs      build step: writes one HTML file per sitemap URL, plus the 404 shell
src/
  main.tsx                 browser entry point (hydrates the prerendered HTML)
  entry-server.tsx         build-time entry point, renders one route to HTML
  App.tsx                  routes (one URL per page; pages other than home load on demand)
  index.css                Tailwind + the site's custom CSS (cards, ticker, audit)
  components/
    Layout.tsx             header + page + footer + cookie banner, scroll to top on navigation
    Header.tsx, Footer.tsx
    ConsentBanner.tsx      cookie banner
    ContactForm.tsx        "Book thirty minutes": Formspree (xvzwzbrk) + reCAPTCHA v2
    PageMeta.tsx           per-page title, description, canonical, social tags
    JsonLd.tsx             per-page structured data (Article, FAQ, Service, breadcrumbs...)
    Ticker.tsx, icons.tsx
  consent/                 cookie consent state and consent-gated Google Analytics
  data/                    Messaging Audit questions and score bands
  pages/                   one component per page
public/                    static files copied as-is (favicons, og-image, robots, llms.txt, sitemap)
```

## Prerendering

Most AI crawlers don't run JavaScript, so every page ships as real HTML with its own head tags and schema.
The list of pages comes from `public/sitemap.xml`: **a new page needs a `<loc>` there**, or it is not
prerendered and a direct visit gets a 404. The build fails if a page throws while rendering or has no `<PageMeta>`.
Page code must not touch `window`, `document` or `localStorage` while rendering; do that in an effect.

## Deploying

Hosted on Netlify, which builds with `npm run build` and publishes `build/` (set in the Netlify dashboard, as before).
Netlify serves `/approach` from `build/approach.html`, and any unknown URL gets `build/404.html` with a 404 status.
`.nvmrc` pins Node 22, which Vite needs.

## Going live (the site is pre-launch: hidden from search engines and AI crawlers)

1. `index.html`: delete `<meta name="robots" content="noindex, nofollow" />`.
2. `public/_headers`: delete the `X-Robots-Tag` block.
3. `public/robots.txt`: remove the AI crawler `Disallow: /` group (or switch it to `Allow: /`),
   and add `Sitemap: https://orangebanana.co/sitemap.xml` at the end.
4. After the deploy, submit the sitemap in Google Search Console and Bing Webmaster Tools.
