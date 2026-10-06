import { createContext, useContext, useEffect } from "react";

const SITE_URL = "https://orangebanana.co";

type PageMetaProps = {
  title: string;
  description: string;
  /** Path of the page, used for the canonical and og:url. */
  path: string;
};

/**
 * Filled in while a page is prerendered at build time, where effects never run,
 * so the build can write each page's own head tags into its HTML file.
 */
export const HeadCollectorContext = createContext<Partial<PageMetaProps> | null>(null);

function setMeta(selector: string, attr: "name" | "property", key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

/** Keeps the document title, description, canonical and social tags in step with the current page. */
export default function PageMeta({ title, description, path }: PageMetaProps) {
  const collector = useContext(HeadCollectorContext);
  if (collector) Object.assign(collector, { title, description, path });

  useEffect(() => {
    const url = SITE_URL + path;
    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path]);

  return null;
}
