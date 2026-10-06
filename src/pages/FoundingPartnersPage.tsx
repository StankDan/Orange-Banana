import { Link } from "react-router";
import { ArrowRight } from "../components/icons";
import PageMeta from "../components/PageMeta";
import JsonLd from "../components/JsonLd";

export default function FoundingPartnersPage() {
  return (
    <main className="flex-grow bg-brand-dark text-white">
      <PageMeta
        title={"Founding Partners: Brand Strategy for Independent Insurance Firms · Orange Banana"}
        description={
          "Three founding seats for the U.S. practice. Two months on the brand, six months putting it to work, $45,000 on founding terms."
        }
        path="/founding-partners"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://orangebanana.co/founding-partners#service",
          name: "Founding partner program",
          serviceType: "Brand strategy and marketing for insurance businesses",
          description:
            "Months 1 to 2: brand strategy and identity (discovery, competitive analysis, positioning, messaging, visual identity, brand experience map and implementation roadmap). Months 3 to 8: the Growth retainer. Option to continue on founding terms for up to 24 months.",
          provider: { "@id": "https://orangebanana.co#practice" },
          areaServed: { "@type": "Country", name: "United States" },
          audience: {
            "@type": "BusinessAudience",
            audienceType:
              "Independent retail brokers, wholesale brokers, MGAs, MGUs and program business in P&C, E&S and specialty lines",
          },
          offers: {
            "@type": "Offer",
            "@id": "https://orangebanana.co/founding-partners#offer",
            url: "https://orangebanana.co/founding-partners",
            price: "45000",
            priceCurrency: "USD",
            description: "$5,625 per month for eight months. List price $77,000. Three seats.",
            eligibleQuantity: { "@type": "QuantitativeValue", maxValue: 3, unitText: "founding seats" },
            seller: { "@id": "https://orangebanana.co#practice" },
          },
        }}
      />
      {/* 01 · HERO */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-44 md:pb-28 min-h-[78vh] flex items-center bg-brand-dark text-white overflow-hidden hero-glow border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-slate border border-brand-orange/40 text-brand-orange font-mono text-xs font-semibold tracking-wider uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" /> Three founding seats ·
            2027
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white max-w-4xl">
            We're opening the U.S. practice with three{" "}
            <span className="inline-block bg-brand-orange text-white px-3.5 sm:px-5 py-1 rounded-full shadow-xl transform -rotate-1">
              founding partners.
            </span>
          </h1>
          <div className="space-y-3 text-lg sm:text-2xl text-slate-300 font-normal leading-relaxed max-w-3xl pt-2">
            <p>Two months on the brand. Six months putting it to work.</p>
            <p className="text-slate-200">Limited founding terms.</p>
          </div>
          <div className="pt-4">
            <Link
              to="/start-a-conversation"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base hover:bg-white hover:text-brand-dark transition-all shadow-xl inline-flex items-center justify-center gap-3 text-center"
            >
              Start a conversation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* 02 · WHY NOW */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-20 border-b border-slate-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark">
            Why is this{" "}
            <span className="inline-block bg-brand-orange text-white px-3.5 sm:px-5 py-1 rounded-full shadow-md transform rotate-1">
              offered now.
            </span>
          </h2>
          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl pt-2">
            <p>
              Most firms decide next year's budget between September and November. A conversation in December
              is a conversation about the year after.
            </p>
            <p>
              So the seats are being filled now, and each one starts when your budget says it can. January for
              most, later in the year for anyone who needs the room. What matters is that it's planned rather
              than squeezed in.
            </p>
            <p>The three seats close when they're taken, not on a date.</p>
          </div>
        </div>
      </section>
      {/* 03 · WHAT YOU GET */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Eight months to start,
            <br />
            twenty four to continue.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-teal/40 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono text-brand-cyan font-semibold block">Months 1 to 2</span>{" "}
                <h3 className="text-xl sm:text-2xl font-bold text-white">01 · Brand strategy and identity</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  We start with what you already have and how your team describes you today. Then discovery,
                  competitive analysis in your niche, positioning and value proposition, messaging for every
                  audience you serve, visual identity, and a brand experience map across all touchpoints, with
                  an implementation roadmap.
                </p>
              </div>
            </div>
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-orange/40 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono text-brand-orange font-semibold block">Months 3 to 8</span>{" "}
                <h3 className="text-xl sm:text-2xl font-bold text-white">02 · Growth Retainer</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Two social channels for the company and LinkedIn for two people in leadership, articles and
                  a monthly newsletter, email marketing, quarterly case studies, two campaigns built around a
                  specific line or program, and paid media managed, with media spend paid direct to the
                  platform.
                </p>
              </div>
            </div>
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-terracotta/40 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono text-brand-terracotta font-semibold block">
                  After month 8
                </span>{" "}
                <h3 className="text-xl sm:text-2xl font-bold text-white">03 · After month 8</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Option to continue collaboration under the exact same founding terms and pricing for up to
                  24 months, with zero long-term lock-in and a simple 30-day notice period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 04 · THE INVESTMENT */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24 border-b border-slate-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="axios-card axios-card-orange bg-white border-2 border-brand-dark p-8 sm:p-12 rounded-3xl space-y-6 shadow-xl max-w-4xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange block">
              Founding client investment
            </span>{" "}
            <div className="space-y-2 border-b border-slate-200 pb-6">
              <div className="text-sm font-mono text-slate-400 line-through">List $77,000</div>
              <div className="text-3xl sm:text-5xl font-extrabold text-brand-dark">$5,625 / month</div>
              <div className="text-sm sm:text-base font-semibold text-slate-600">
                $45,000 total, paid in eight equal installments
              </div>
            </div>
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-bold text-brand-dark">
                Eight months from the date you start. No hourly billing, ever.
              </p>
              <p>
                <strong className="text-brand-dark">After the eight months:</strong> continue on the Growth
                Retainer at the founding rate of $6,000/mo, list $8,500, guaranteed for 24 months. Month to
                month from there, 30 days' notice.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 05 · WHAT WE ASK IN RETURN */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Founding pricing is a partnership,{" "}
            <span className="whitespace-nowrap">
              not a{" "}
              <span className="inline-block bg-brand-orange text-white px-3.5 sm:px-5 py-1 rounded-full shadow-md transform -rotate-1">
                discount.
              </span>
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
            A new practice can't buy proof. It has to be earned once, with the firms willing to go first.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-2">
            <div className="axios-card bg-brand-slate p-6 rounded-2xl border border-white/10 space-y-3">
              <span className="text-brand-orange font-mono font-bold text-sm block">01</span>{" "}
              <h3 className="font-bold text-base text-white">A case study with real results.</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We agree at the start which numbers get tracked, and who supplies them.
              </p>
            </div>
            <div className="axios-card bg-brand-slate p-6 rounded-2xl border border-white/10 space-y-3">
              <span className="text-brand-teal font-mono font-bold text-sm block">02</span>{" "}
              <h3 className="font-bold text-base text-white">A testimonial we can publish.</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Written after the work, not before.
              </p>
            </div>
            <div className="axios-card bg-brand-slate p-6 rounded-2xl border border-white/10 space-y-3">
              <span className="text-brand-cyan font-mono font-bold text-sm block">03</span>{" "}
              <h3 className="font-bold text-base text-white">One introduction to your network.</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">One, not a list.</p>
            </div>
          </div>
          <p className="text-slate-400 font-mono text-xs sm:text-sm pt-4">
            That is the whole trade. The price reflects it.
          </p>
        </div>
      </section>
      {/* 06 · WHO THIS SUITS + HOW WE START */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24 border-b border-slate-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark">
              Three seats, and not every firm <span className="whitespace-nowrap">should take one.</span>
            </h2>
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl pt-2">
              <p>
                This works for independent firms punching above their size. Retail brokers, wholesale brokers,
                MGAs, MGUs, and program business, in P&amp;C, E&amp;S, and specialty lines.
              </p>
              <p>
                It doesn't work for anyone shopping for a website or a logo with no interest in the thinking
                underneath it.
              </p>
            </div>
          </div>
          <div className="space-y-6 pt-2 border-t border-slate-300">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark pt-8 sm:pt-10">
              Send an email. We book{" "}
              <span className="inline-block bg-brand-orange text-white px-3.5 sm:px-5 py-1 rounded-full shadow-md transform rotate-1">
                thirty minutes.
              </span>
            </h2>
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl pt-2">
              <p>You describe where things aren't landing. We tell you what we'd look at first.</p>
              <p>
                Nobody has to decide anything on that call. If it looks like a fit, you get fixed scope, a
                fixed fee, and fixed dates, and you take whatever time you need with it.
              </p>
            </div>
            <div className="pt-4">
              <Link
                to="/start-a-conversation"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base hover:bg-brand-dark transition-all shadow-xl inline-flex items-center justify-center gap-3 text-center"
              >
                Start a conversation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 08 · CLOSING */}
      <section className="bg-brand-dark text-white py-20 sm:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Three founding partner seats.
          </h2>
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
            Once they're taken, the founding rate goes with them.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/start-a-conversation"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-base hover:bg-white hover:text-brand-dark transition-all shadow-xl flex items-center justify-center gap-3 text-center"
            >
              Start a conversation <ArrowRight className="w-5 h-5" />
            </Link>{" "}
            <Link
              to="/messaging-audit"
              className="text-xs sm:text-sm text-brand-cyan hover:underline font-mono text-center"
            >
              Not ready for a call? Take the quick audit instead. →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
