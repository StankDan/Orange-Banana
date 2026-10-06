import { Link } from "react-router";
import { ArrowRight } from "../components/icons";
import PageMeta from "../components/PageMeta";
import JsonLd from "../components/JsonLd";

export default function InsurtechPage() {
  return (
    <main className="flex-grow bg-brand-dark text-white">
      <PageMeta
        title={"Insurtech Marketing and Go-to-Market · Orange Banana"}
        description={
          "Stop sounding like SaaS. Start sounding like insurance. Brand strategy and go-to-market for insurtech selling to carriers, wholesalers, MGAs and agents."
        }
        path="/insurtech"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://orangebanana.co/insurtech#service",
          name: "Insurtech brand strategy and go-to-market",
          serviceType: "Insurtech marketing",
          description:
            "Weeks 1 to 8: brand strategy and GTM translation (positioning for the insurance buyer, messaging for every audience in the value chain, identity refresh, go-to-market roadmap). Then six months on the Growth retainer.",
          provider: { "@id": "https://orangebanana.co#practice" },
          areaServed: { "@type": "Country", name: "United States" },
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Insurtech companies selling to carriers, wholesalers, MGAs and agents",
          },
          offers: {
            "@type": "Offer",
            "@id": "https://orangebanana.co/insurtech#offer",
            url: "https://orangebanana.co/insurtech",
            price: "45000",
            priceCurrency: "USD",
            description: "$5,625 per month for eight months. List price $77,000. Two founding seats.",
            eligibleQuantity: { "@type": "QuantitativeValue", maxValue: 2, unitText: "founding seats" },
            seller: { "@id": "https://orangebanana.co#practice" },
          },
        }}
      />
      {/* 01 · HERO */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-44 md:pb-28 min-h-[78vh] flex items-center bg-brand-dark text-white overflow-hidden hero-glow border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-slate border border-brand-orange/40 text-brand-orange font-mono text-xs font-semibold tracking-wider uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" /> For insurtech · 2 founding
            partners
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white max-w-4xl">
            Stop sounding like SaaS.
            <br /> Start sounding like{" "}
            <span className="inline-block bg-brand-orange text-white px-3.5 sm:px-5 py-1 rounded-full shadow-xl transform -rotate-1">
              insurance.
            </span>
          </h1>
          <div className="space-y-4 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl pt-2">
            <p>
              You built a product for insurance, and the market has been slower to take it up than it
              deserves.
            </p>
            <p>
              Underwriters, brokers, and agents buy on trust and the language of risk. A standard SaaS
              playbook doesn't speak it.
            </p>
            <p className="text-white font-semibold">We do.</p>
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
      {/* 02 · THE MISMATCH */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-20 border-b border-slate-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark">
            Your buyers are not{" "}
            <span className="inline-block bg-brand-orange text-white px-3.5 sm:px-5 py-1 rounded-full shadow-md transform rotate-1">
              early adopters.
            </span>
          </h2>
          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl pt-2">
            <p>
              Software marketing assumes a buyer who wants what's new. Insurance businesses tend to be more
              traditional, and they opt out fast. The people you're selling to are paid to be careful, and the
              ones deciding are usually the ones who'd be blamed if it went wrong.
            </p>
            <p>
              So the pitch that works everywhere else works against you here. Speed reads as untested.
              Disruption reads as risk. A feature list reads like a language they don't speak.
            </p>
            <p className="font-bold text-brand-dark">
              What moves them is the sense that you already understand the industry, and the problems they're
              actually dealing with.
            </p>
          </div>
        </div>
      </section>
      {/* 03 · WHERE YOU WILL SEE THE DIFFERENCE */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Three things that will change.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-teal/40 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono text-brand-cyan font-bold block">01</span>{" "}
                <h3 className="text-xl sm:text-2xl font-bold text-white">You speak the buyer's language</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Positioning and messaging built for your insurance audience, in the language of risk and
                  workflow, not features and promises.
                </p>
              </div>
            </div>
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-orange/40 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono text-brand-orange font-bold block">02</span>{" "}
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  You build your credibility with a cautious buyer
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Articles and case studies that make a risk-averse industry comfortable saying yes to
                  something new.
                </p>
              </div>
            </div>
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-terracotta/40 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono text-brand-terracotta font-bold block">03</span>{" "}
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Your go-to-market matches how insurance buys
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Insurance buys through a chain: carriers, wholesalers, MGAs, agents. Each link decides for
                  different reasons. We build your campaigns around that chain instead of a playbook written
                  for someone else's market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 04 · FLUENT ON BOTH SIDES */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-20 border-b border-slate-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark">
            Plenty of insurtech has the tech. The{" "}
            <span className="inline-block bg-brand-orange text-white px-3.5 sm:px-5 py-1 rounded-full shadow-md transform -rotate-1">
              insur
            </span>{" "}
            part is the gap.
          </h2>
          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl pt-2">
            <p>
              You've built the product. What's usually missing is somebody who can put it in front of this
              industry in terms it already trusts.
            </p>
            <p>
              That's the half we bring. We're insurance native, and we've built and run go-to-market for
              insurtech products sold into this market, so we already know the workflows your product touches
              and how a carrier decides to adopt something new.
            </p>
            <p className="font-bold text-brand-dark">
              We won't write your code, and you won't have to explain the industry to us.
            </p>
          </div>
        </div>
      </section>
      {/* 05 · WHAT YOU GET */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-brand-teal uppercase font-bold tracking-wider block">
              Eight months, in two halves
            </span>{" "}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">What you get.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-teal/40 space-y-3">
              <span className="text-xs font-mono text-brand-cyan font-semibold block">Weeks 1 to 8</span>{" "}
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                01 · Brand strategy and GTM translation
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We start with what you already have and how your team describes the product today. Then
                discovery, competitive analysis in your category, positioning for the insurance buyer,
                messaging for every audience in the value chain, identity refresh, and a go-to-market roadmap.
              </p>
            </div>
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-orange/40 space-y-3">
              <span className="text-xs font-mono text-brand-orange font-semibold block">Six months</span>{" "}
              <h3 className="text-xl sm:text-2xl font-bold text-white">02 · Growth Retainer</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Two social channels for the company and LinkedIn for two people in leadership, articles and a
                monthly newsletter, email marketing, quarterly case studies, two campaigns built around a
                launch, a feature, or a target segment, and paid media managed, with media spend paid direct
                to the platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 06 · THE INVESTMENT */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24 border-b border-slate-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="axios-card axios-card-orange bg-white border-2 border-brand-dark p-8 sm:p-12 rounded-3xl space-y-6 shadow-xl max-w-4xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange block">
              Founding partner investment
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
                Brand strategy, GTM, and six months of full implementation. No hourly billing, ever.
              </p>
              <p>
                <strong className="text-brand-dark">When the six retainer months are up:</strong> continue on
                the Growth Retainer at the founding rate of $6,000/mo, list $8,500, guaranteed for 24 months.
                Month to month from there, 30 days' notice.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 07 · WHAT WE ASK IN RETURN */}
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
            A new practice can't buy proof. It has to be earned once, with the companies willing to go first.
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
          <p className="text-slate-300 font-mono text-sm pt-2">
            Two seats. That is the whole trade, and the price reflects it.
          </p>
        </div>
      </section>
      {/* 08 · HOW WE START */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24 border-b border-slate-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark">
            Send an email. We book{" "}
            <span className="inline-block bg-brand-orange text-white px-3.5 sm:px-5 py-1 rounded-full shadow-md transform rotate-1">
              thirty minutes.
            </span>
          </h2>
          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl pt-2">
            <p>
              You describe where the market isn't responding the way the product deserves. We tell you what
              we'd look at first.
            </p>
            <p>
              Nobody has to decide anything on that call. If it looks like a fit, you get fixed scope, a fixed
              fee, and fixed dates, and you take whatever time you need with it.
            </p>
            <p className="font-bold text-brand-dark">Kickoff in two weeks, once we both say yes.</p>
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
      </section>
      {/* 09 · CLOSING */}
      <section className="bg-brand-dark text-white py-20 sm:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Two founding partner seats.
          </h2>
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed">Start whenever you're ready.</p>
          <div className="pt-2 flex justify-center">
            <Link
              to="/start-a-conversation"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-base hover:bg-white hover:text-brand-dark transition-all shadow-xl flex items-center justify-center gap-3 text-center"
            >
              Start a conversation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
