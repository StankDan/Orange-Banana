const SEGMENTS = [
  "Retail Brokers",
  "Wholesale Brokers",
  "MGA & MGU Program Business",
  "E&S Specialty Lines",
  "Program Administrators",
  "Reinsurance Intermediaries",
];

/** The scrolling list of segments. Rendered twice so the loop is seamless. */
export function TickerTrack() {
  return (
    <div className="marquee-track flex items-center whitespace-nowrap text-xs sm:text-sm font-extrabold uppercase tracking-wider">
      {[...SEGMENTS, ...SEGMENTS].map((segment, i) => (
        <span key={i} className="mx-4 sm:mx-6 flex items-center gap-3 sm:gap-4" aria-hidden={i >= SEGMENTS.length}>
          {segment} <span className="text-white">★</span>
        </span>
      ))}
    </div>
  );
}

/** The orange ticker banner that sits under a hero. */
export function Ticker() {
  return (
    <div className="bg-brand-orange text-brand-dark py-3 sm:py-4 overflow-hidden border-y border-brand-dark">
      <TickerTrack />
    </div>
  );
}
