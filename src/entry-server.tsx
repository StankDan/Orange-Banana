import { StrictMode } from "react";
import { prerender } from "react-dom/static";
import { StaticRouter } from "react-router";
import App from "./App";
import { HeadCollectorContext } from "./components/PageMeta";

export type PrerenderedPage = {
  html: string;
  head: { title?: string; description?: string; path?: string };
};

/** Renders one route to HTML at build time, waiting for its lazy page code to load. */
export async function render(url: string): Promise<PrerenderedPage> {
  const head: PrerenderedPage["head"] = {};
  const errors: unknown[] = [];
  const { prelude } = await prerender(
    <StrictMode>
      <HeadCollectorContext.Provider value={head}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadCollectorContext.Provider>
    </StrictMode>,
    // React would otherwise log the error and ship the page half empty; fail the build instead.
    { onError: (error) => void errors.push(error) },
  );
  if (errors.length) throw errors[0];
  const html = await new Response(prelude).text();
  return { html, head };
}
