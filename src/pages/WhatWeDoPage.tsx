import { Link } from "react-router";
import { ArrowRight } from "../components/icons";
import PageMeta from "../components/PageMeta";
import JsonLd from "../components/JsonLd";

export default function WhatWeDoPage() {
  return (
    <main className="flex-grow">
      <PageMeta
        title={"What We Do: Insurance Brand Strategy and Marketing Retainers · Orange Banana"}
        description={
          "Positioning, messaging, identity and a brand experience map for insurance brokers, MGAs and wholesalers, then a monthly retainer that puts it to work. Fixed scope, fixed fee."
        }
        path="/what-we-do"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://orangebanana.co/what-we-do#webpage",
              url: "https://orangebanana.co/what-we-do",
              name: "What We Do: Insurance Brand Strategy and Marketing Retainers",
              isPartOf: { "@id": "https://orangebanana.co#website" },
              about: { "@id": "https://orangebanana.co#practice" },
              mainEntity: [
                { "@id": "https://orangebanana.co/what-we-do#brand-foundation" },
                { "@id": "https://orangebanana.co/what-we-do#growth-retainer" },
                { "@id": "https://orangebanana.co/what-we-do#full-service-retainer" },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://orangebanana.co/what-we-do#brand-foundation",
              name: "Brand strategy and identity for insurance businesses",
              serviceType: "Brand strategy",
              description:
                "Eight weeks, fixed fee. Positioning, messaging for partners and for clients, visual identity, and a brand experience map of every touchpoint from the first search result to the invoice, ranked by what to fix first.",
              provider: { "@id": "https://orangebanana.co#practice" },
              areaServed: { "@type": "Country", name: "United States" },
              audience: {
                "@type": "BusinessAudience",
                audienceType: "Retail brokers, wholesale brokers, MGAs, MGUs and program business",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Brand foundation deliverables",
                itemListElement: ["Positioning", "Messaging", "Visual identity", "Brand experience map"].map(
                  (name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } }),
                ),
              },
            },
            {
              "@type": "Service",
              "@id": "https://orangebanana.co/what-we-do#growth-retainer",
              name: "Growth retainer",
              serviceType: "Insurance marketing retainer",
              description:
                "Two channels for the firm, LinkedIn for two leadership principals, articles and a monthly newsletter, monthly email campaigns, quarterly case studies, and two line or program campaigns per year.",
              provider: { "@id": "https://orangebanana.co#practice" },
              areaServed: { "@type": "Country", name: "United States" },
            },
            {
              "@type": "Service",
              "@id": "https://orangebanana.co/what-we-do#full-service-retainer",
              name: "Full Service retainer",
              serviceType: "Insurance marketing retainer",
              description:
                "Everything in Growth, plus a third channel, LinkedIn for three leadership principals, twice the email output, four program campaigns per year, trade press placement work and event production support.",
              provider: { "@id": "https://orangebanana.co#practice" },
              areaServed: { "@type": "Country", name: "United States" },
            },
          ],
        }}
      />
      {/* 01 · OPENING HERO */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-44 md:pb-28 min-h-[78vh] flex items-center bg-brand-dark text-white overflow-hidden hero-glow border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.15] text-white">
              Maybe you've paid for{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 rounded-full shadow-xl transform -rotate-1 mt-2">
                brand strategy
              </span>{" "}
              already.
            </h1>
            <div className="space-y-4 sm:space-y-6 text-lg sm:text-2xl text-slate-300 font-normal leading-relaxed pt-2 sm:pt-4">
              <p>
                If you have, it's in a drawer, or in a folder on the server nobody opens. It went out with
                onboarding, nobody was quite sure what to do with it, and nothing lined up behind it.
              </p>
            </div>
            <div className="pt-2 sm:pt-4 flex items-center gap-4">
              <Link
                to="/start-a-conversation"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center gap-3 shadow-xl text-center"
              >
                Jumpstart your brand <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 02 · WHY THIS ONE GETS USED */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-brand-dark">
              So why won't this one end up in the{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform rotate-1">
                same drawer?
              </span>
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              Fair question, and it's the one that decides whether any of this was worth paying for. A brand
              only changes anything if the people writing proposals and answering submissions actually use it.
              Most of them never get that far, and it's rarely their fault.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="axios-card bg-white p-5 sm:p-7 rounded-2xl border border-slate-300 shadow-sm space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-orange font-bold uppercase block">
                01
              </span>{" "}
              <h3 className="text-lg sm:text-xl font-bold text-brand-dark">We put it to work ourselves</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                The retainer isn't a separate product we upsell you. It's the part where the strategy actually
                reaches the market. You don't get handed a document and wished luck with it.
              </p>
            </div>
            <div className="axios-card bg-white p-5 sm:p-7 rounded-2xl border border-slate-300 shadow-sm space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-teal font-bold uppercase block">
                02
              </span>{" "}
              <h3 className="text-lg sm:text-xl font-bold text-brand-dark">Everybody gets the same words</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Producers, service, leadership. Internal alignment isn't a nice extra, it's the reason five
                people stop describing one program five different ways on the same day.
              </p>
            </div>
            <div className="axios-card bg-white p-5 sm:p-7 rounded-2xl border border-slate-300 shadow-sm space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-terracotta font-bold uppercase block">
                03
              </span>{" "}
              <h3 className="text-lg sm:text-xl font-bold text-brand-dark">It's built to be found</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Structured so a producer opens the right page in ten seconds, right before writing a proposal.
                A document nobody can navigate is a document nobody opens twice.
              </p>
            </div>
            <div className="axios-card bg-white p-5 sm:p-7 rounded-2xl border border-slate-300 shadow-sm space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-dark font-bold uppercase block">
                04
              </span>{" "}
              <h3 className="text-lg sm:text-xl font-bold text-brand-dark">Every touchpoint is on a list</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                You end up with a ranked list of specific things to fix, from the first search result to the
                invoice. Not a feeling that something should probably change.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 03 · BRAND STRATEGY AND IDENTITY */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-t border-brand-taupe/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                You need a brand book that your team{" "}
                <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 rounded-full shadow-md transform -rotate-1">
                  follows...
                </span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-mono pt-1">
                And in that book you'll get:
              </p>
            </div>
          </div>
          {/* 3 COMPONENTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-teal/40 space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-xs font-mono text-brand-orange font-bold uppercase block">
                FOUNDATION 01
              </span>{" "}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">Positioning</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                What you stand for, who you're for, and the one thing you want to be known for. Check it
                before you say yes to an opportunity, a hire, or a new program.
              </p>
            </div>
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-teal/40 space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-xs font-mono text-brand-cyan font-bold uppercase block">
                FOUNDATION 02
              </span>{" "}
              <h3 className="text-xl sm:text-2xl font-bold text-white">Messaging</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                The words for partners and the words for clients. Same argument, both directions. A producer
                opens it before writing a proposal, so five people stop describing one program five ways.
              </p>
            </div>
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-terracotta/40 space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-xs font-mono text-brand-terracotta font-bold uppercase block">
                FOUNDATION 03
              </span>{" "}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">Identity</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Every visual rule in one place. The work looks like you no matter who builds it.
              </p>
            </div>
          </div>
          {/* EXPERIENCE MAP */}
          <div className="axios-card axios-card-orange bg-white text-brand-dark p-6 sm:p-12 rounded-2xl sm:rounded-3xl border-2 border-brand-orange/50 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-3xl font-extrabold text-brand-dark">
              ...and your brand experience map
            </h3>
            <div className="space-y-4 text-slate-700 text-sm sm:text-lg leading-relaxed">
              <p>
                Alongside your brand book, you get a complete map of everywhere your brand meets the market,
                from the first search result to the proposal and the invoice, ranked by what to fix first.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 04 · THE EIGHT WEEKS */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          {/* COMPACT 8 WEEKS */}
          <div className="space-y-6 sm:space-y-8">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-brand-dark">
                Eight weeks, and you know what happens in{" "}
                <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform -rotate-1">
                  each of them.
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-300 space-y-1.5">
                <span className="text-[10px] font-mono text-brand-orange font-bold uppercase block">
                  Weeks 1 to 2
                </span>{" "}
                <h3 className="text-base font-bold text-brand-dark">Listening</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  You, your team, a partner, a client. Plus everything you already put in front of the market.
                </p>
              </div>
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-300 space-y-1.5">
                <span className="text-[10px] font-mono text-brand-teal font-bold uppercase block">
                  Weeks 3 to 4
                </span>{" "}
                <h3 className="text-base font-bold text-brand-dark">Deciding</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  A competitive read of your niche, then the four decisions. You see them before anything gets
                  built.
                </p>
              </div>
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-300 space-y-1.5">
                <span className="text-[10px] font-mono text-brand-terracotta font-bold uppercase block">
                  Weeks 5 to 6
                </span>{" "}
                <h3 className="text-base font-bold text-brand-dark">Building</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Messaging written so your team can use it without you in the room, and the visual system
                  that carries it.
                </p>
              </div>
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-300 space-y-1.5">
                <span className="text-[10px] font-mono text-brand-dark font-bold uppercase block">
                  Weeks 7 to 8
                </span>{" "}
                <h3 className="text-base font-bold text-brand-dark">Landing it</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Every touchpoint mapped and ranked, then who does what, in what order, from the week we
                  finish.
                </p>
              </div>
            </div>
            <div>
              <Link
                to="/approach"
                className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm sm:text-base hover:text-brand-dark transition-colors text-center"
              >
                More on how we work →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 03 · IMPLEMENTATION RETAINER */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-t border-brand-taupe/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-16">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              What you'll get once the{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform -rotate-1">
                foundation is done:
              </span>
            </h2>
          </div>
          {/* 4 EXECUTION PILLARS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="axios-card bg-brand-slate p-5 sm:p-6 rounded-2xl border border-brand-teal/40 space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white">Social</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                For the firm, and for the people who lead it. A principal's own presence often carries more
                weight than the company page.
              </p>
            </div>
            <div className="axios-card bg-brand-slate p-5 sm:p-6 rounded-2xl border border-brand-teal/40 space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white">Articles &amp; newsletter</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                The kind a producer forwards to a client.
              </p>
            </div>
            <div className="axios-card bg-brand-slate p-5 sm:p-6 rounded-2xl border border-brand-teal/40 space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white">Email</h3>
              <p className="text-slate-300 text-xs leading-relaxed">Opened, not filtered.</p>
            </div>
            <div className="axios-card bg-brand-slate p-5 sm:p-6 rounded-2xl border border-brand-teal/40 space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white">Campaigns</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Built around one line or one program, timed to when it needs the attention.
              </p>
            </div>
          </div>
          {/* TWO TIER CARDS HEADER */}
          <div className="pt-4">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-6">
              Two levels of implementation
            </h3>
          </div>
          {/* TWO TIER CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Growth Tier */}
            <div className="axios-card bg-brand-slate p-6 sm:p-10 rounded-2xl sm:rounded-3xl border-2 border-brand-teal/50 space-y-5 sm:space-y-6">
              <div className="space-y-1 sm:space-y-2">
                <span className="text-[10px] sm:text-xs font-mono text-brand-teal uppercase font-bold tracking-wider">
                  Tier 01
                </span>{" "}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Growth</h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Growth keeps this running every month.
              </p>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-300 font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal font-bold">✓</span> Two channels for the firm
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal font-bold">✓</span> LinkedIn for two leadership principals
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal font-bold">✓</span> Articles &amp; monthly newsletter
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal font-bold">✓</span> Monthly email campaigns
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal font-bold">✓</span> Quarterly case studies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal font-bold">✓</span> Two line or program campaigns per year
                </li>
              </ul>
            </div>
            {/* Full Service Tier */}
            <div className="axios-card axios-card-orange bg-brand-slate p-6 sm:p-10 rounded-2xl sm:rounded-3xl border-2 border-brand-orange/60 space-y-5 sm:space-y-6 relative">
              <div className="space-y-1 sm:space-y-2">
                <span className="text-[10px] sm:text-xs font-mono text-brand-orange uppercase font-bold tracking-wider">
                  Tier 02
                </span>{" "}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Full Service</h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Full Service scales it, then adds trade press and event production.
              </p>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-300 font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">✓</span> Three channels for the firm
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">✓</span> LinkedIn for three leadership
                  principals
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">✓</span> Everything in Growth, plus:
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">✓</span> Twice the email output
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">✓</span> Four program campaigns per year
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">✓</span> Trade press placement work
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold">✓</span> Event production support
                </li>
              </ul>
            </div>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-brand-dark border border-brand-taupe/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-base font-mono text-white font-bold text-center sm:text-left">
              No hourly billing, ever. You know the number before anything starts.
            </span>{" "}
            <Link
              to="/start-a-conversation"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-brand-orange text-white font-bold text-xs hover:bg-white hover:text-brand-dark transition-all whitespace-nowrap text-center"
            >
              Discuss Retainer Tiers
            </Link>
          </div>
        </div>
      </section>
      {/* 04 · THE ORDER */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              The retainer doesn't run{" "}
              <span className="whitespace-nowrap">
                on its{" "}
                <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform rotate-1">
                  own.
                </span>
              </span>
            </h2>
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                If you have a team that can execute, take the foundation on its own. We build it, brief the
                people who have to use it every day, and stay close enough to keep the execution true to it.
              </p>
              <p>
                If the strategy is already done and what you need is delivery, we read what exists first. Two
                weeks, and you get an honest answer on whether it holds and what we would change, before
                anyone produces a thing against it.
              </p>
              <p className="font-semibold text-brand-dark border-l-4 border-brand-orange pl-4">
                What we won't do is start producing with nothing underneath it. Not out of principle, but
                because you would be paying full price for guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 05 · CTA */}
      <section className="bg-brand-dark text-white py-20 sm:py-28 border-t border-brand-taupe/30 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            You don't have to know which part you need.
          </h2>
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
            That's what the first call is for.
          </p>
          <div className="pt-2 sm:pt-4 flex justify-center">
            <Link
              to="/start-a-conversation"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-brand-orange text-white text-base sm:text-lg font-bold hover:bg-white hover:text-brand-dark transition-all shadow-2xl flex items-center justify-center gap-3 text-center"
            >
              Start a conversation <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
