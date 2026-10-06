// Writes a real HTML file for every page in the sitemap, so crawlers that don't run
// JavaScript (most AI crawlers) see the page's text, head tags and structured data.
// Runs after the client build and the server build (see "build" in package.json).
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

process.env.NODE_ENV = "production";

const SITE_URL = "https://orangebanana.co";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = join(root, "build");
const ssrDir = join(root, "build-ssr");

const { render } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);
const template = await readFile(join(buildDir, "index.html"), "utf8");
const sitemap = await readFile(join(root, "public", "sitemap.xml"), "utf8");

// The sitemap is the list of indexable pages; files like the audit PDF are skipped.
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map(([, loc]) => loc.slice(SITE_URL.length) || "/")
  .filter((path) => !/\.[a-z0-9]+$/i.test(path));

const escapeAttr = (value) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

// The replacement goes in through a function: page text like "$45,000" must not be read as "$4" + "5,000".
function replaceOnce(html, pattern, replacement, label) {
  const found = typeof pattern === "string" ? html.includes(pattern) : pattern.test(html);
  if (!found) throw new Error(`prerender: ${label} not found in index.html`);
  return html.replace(pattern, () => replacement);
}

function withHead(html, { title, description, path }) {
  const url = escapeAttr(SITE_URL + path);
  const t = escapeAttr(title);
  const d = escapeAttr(description);
  const meta = (attr, key, content) => [
    new RegExp(`<meta ${attr}="${key}" content="[^"]*" />`),
    `<meta ${attr}="${key}" content="${content}" />`,
    key,
  ];
  for (const [pattern, replacement, label] of [
    [/<title>[^<]*<\/title>/, `<title>${t}</title>`, "title"],
    meta("name", "description", d),
    meta("property", "og:title", t),
    meta("property", "og:description", d),
    meta("property", "og:url", url),
    meta("name", "twitter:title", t),
    meta("name", "twitter:description", d),
    [/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, "canonical"],
  ]) {
    html = replaceOnce(html, pattern, replacement, label);
  }
  return html;
}

for (const path of paths) {
  const { html, head } = await render(path);
  if (head.path !== path) {
    throw new Error(`prerender: ${path} rendered as ${head.path ?? "a page without <PageMeta>"}`);
  }
  const page = replaceOnce(
    withHead(template, head),
    '<div id="root"></div>',
    `<div id="root">${html}</div>`,
    "#root",
  );
  // /approach -> approach.html, which Netlify and Cloudflare Pages serve at /approach with no trailing-slash redirect.
  const file = path === "/" ? "index.html" : `${path.slice(1)}.html`;
  await mkdir(dirname(join(buildDir, file)), { recursive: true });
  await writeFile(join(buildDir, file), page);
  console.log(`prerendered ${path} -> build/${file}`);
}

// Any other URL gets the empty app shell with a real 404 status (Netlify serves 404.html on its own);
// the router then sends the visitor home. noindex keeps it out of search results.
await writeFile(
  join(buildDir, "404.html"),
  replaceOnce(template, "<head>", '<head>\n    <meta name="robots" content="noindex" />', "<head>"),
);
console.log("wrote the app shell -> build/404.html");

await rm(ssrDir, { recursive: true, force: true });
