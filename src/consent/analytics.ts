/*
   DEPLOY NOTE
   Analytics must not load until consent is given. The GA4 loader lives
   in loadAnalytics() below and nothing else may reference it.
   Anything added later, a LinkedIn Insight Tag for example, goes in the
   same function and gets a row in the Cookie Policy table before it ships.

   In the GA4 property, switch off Google signals and ad personalisation
   so the Cookie Policy stays true. Keep "Page changes based on browser history
   events" on in Enhanced measurement: that is what counts page views here,
   since the site changes pages without reloading.
*/
const GA_MEASUREMENT_ID = "G-5P69TXBTLH";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let loaded = false;

export function loadAnalytics(): void {
  if (loaded || !GA_MEASUREMENT_ID) return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // gtag.js expects the real arguments object, not an array
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(script);
}
