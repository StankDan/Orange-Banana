import { Link } from "react-router";
import { ArrowRight } from "../components/icons";
import PageMeta from "../components/PageMeta";
import JsonLd from "../components/JsonLd";

export default function StrategicAdviceGapArticle() {
  return (
    <main className="flex-grow bg-brand-light text-brand-dark">
      <PageMeta
        title={"Your Clients Say You Don't Do Strategic Work. You Probably Do. · Orange Banana"}
        description={
          "94% of clients want a multiyear strategic plan and 51% say they get one. The gap is usually recognition, not capability, and it is fixed differently."
        }
        path="/insights/strategic-advice-gap"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": "https://orangebanana.co/insights/strategic-advice-gap#article",
              headline: "Your Clients Say You Don't Do Strategic Work. You Probably Do.",
              description:
                "94% of clients want a multiyear strategic plan and 51% say they get one. The gap is usually recognition, not capability, and it is fixed differently.",
              datePublished: "2026-09-10",
              dateModified: "2026-09-10",
              mainEntityOfPage: "https://orangebanana.co/insights/strategic-advice-gap",
              author: { "@id": "https://orangebanana.co#founder" },
              publisher: { "@id": "https://orangebanana.co#practice" },
              isPartOf: { "@id": "https://orangebanana.co#website" },
              image: "https://orangebanana.co/og-image.png",
              inLanguage: "en-US",
              about: ["Insurance marketing", "Insurance distribution"],
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://orangebanana.co/insights/strategic-advice-gap#breadcrumb",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://orangebanana.co/" },
                { "@type": "ListItem", position: 2, name: "Insights", item: "https://orangebanana.co/insights" },
                { "@type": "ListItem", position: 3, name: "Your Clients Say You Don't Do Strategic Work. You Probably Do." },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://orangebanana.co/insights/strategic-advice-gap#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What percentage of clients say their broker provides a strategic plan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In Zywave's 2026 Broker Services Survey, 94% of clients said a multiyear strategic plan matters and 51% said their broker fully provides one. On risk management strategy, 96% called it important and 58% said their broker fully helps them build it.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why do clients say their broker gives no strategic advice when the broker does?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Because advice delivered verbally in a meeting leaves nothing the client can point to later. When the work is not written down in a form the client keeps, it is remembered as an impression rather than as advice, and at renewal it competes with whoever is in the room.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the main reasons clients switch insurance brokers?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The three most cited reasons in the 2026 survey are slow response times, inconsistent communication, and lack of strategic advice. Price and coverage rank below all three.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do commercial clients want more frequent contact from their broker?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The share of clients wanting weekly contact fell from 41.9% to 33.4%, while the expectation that a broker acts as a trusted strategic advisor rose from 56% in 2023 to 71% in 2026. Fewer conversations, higher expectations of each one.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How many independent agencies use AI in daily workflows?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: 'A February 2026 survey by the Big "I" Agents Council for Technology found 8% of independent agencies use AI in daily workflows and 55% have no written AI policy, while roughly two thirds plan to increase their use of it.',
                  },
                },
              ],
            },
          ],
        }}
      />
      <article className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        {/* BREADCRUMBS */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 mb-8 text-xs font-mono text-slate-500">
          <Link to="/" className="hover:text-brand-orange transition-colors text-center">
            Home
          </Link>{" "}
          <span className="mx-2">/</span>{" "}
          <Link to="/insights" className="hover:text-brand-orange transition-colors text-center">
            Insights
          </Link>{" "}
          <span className="mx-2">/</span>{" "}
          <span className="text-brand-dark font-semibold">The Advice Gap</span>
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
          {/* ARTICLE HEADER */}
          <header className="space-y-4 border-b border-slate-300 pb-8 sm:pb-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-brand-dark">
              Your clients say you don't do strategic work.{" "}
              <span className="inline-block bg-brand-orange text-white px-3 sm:px-4 py-1 rounded-full shadow transform -rotate-1">
                You probably do.
              </span>
            </h1>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500 pt-2">
              <span>10 September 2026</span> <span>·</span> <span>7 min read</span>
            </div>
          </header>
          {/* KEY TAKEAWAYS BLOCK */}
          <div className="bg-white border-2 border-brand-orange/40 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange">
              Key takeaways
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>{" "}
                <span>
                  94% of clients say a multiyear strategic plan matters. 51% say their broker fully provides
                  one.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>{" "}
                <span>
                  On risk management strategy the split is 96% and 58%. Both gaps are wider than any coverage
                  or price complaint in the same survey.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>{" "}
                <span>
                  The three most common reasons clients give for switching brokers are slow response,
                  inconsistent communication, and lack of strategic advice. None of them is about coverage.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>{" "}
                <span>
                  Clients also want fewer touches. The share wanting weekly contact fell from 41.9% to 33.4%,
                  while the expectation of a trusted strategic advisor rose from 56% to 71% in three years.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>{" "}
                <span>
                  Fewer conversations means the things you send between them carry the relationship. Most
                  firms have never audited what those things say.
                </span>
              </li>
            </ul>
          </div>
          {/* ARTICLE BODY CONTENT */}
          <div className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed">
            <p>
              Ask a commercial client whether their broker gives them strategic advice and a large number will
              say no. Ask the broker, and you will usually find the advice was given. It was given in a
              renewal meeting, in a coverage recommendation that was never written down, in a call in March
              that solved something before it became a problem.
            </p>
            <p>The work happened. It just never took a form the client could point at six months later.</p>
            <p>That gap has a size now, and it is bigger than most firms would guess.</p>
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                What do commercial clients actually say they want?
              </h2>
              <div className="space-y-4">
                <p>
                  Zywave's 2026 Broker Services Survey asks employers what they want from their brokers. Two
                  findings sit next to each other and are worth reading together.
                </p>
                <p>
                  <strong className="text-brand-dark">
                    94% say a multiyear strategic plan matters. 51% say their broker fully provides one.
                  </strong>{" "}
                  On risk management strategy, 96% call it important and 58% say their broker fully helps them
                  build it.
                </p>
                <p>
                  The same survey asks what would make a client switch. The top three answers are slow
                  response times, inconsistent communication, and lack of strategic advice. Not price. Not
                  coverage. Not market access. Three communication failures, in order.
                </p>
                <p>
                  And the bar has moved. The share expecting their broker to act as a trusted strategic
                  advisor rose from 56% in 2023 to 71% in 2026. In three years, being good at placing business
                  stopped being the job description.
                </p>
              </div>
            </div>
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                Why does this look like a service problem when it isn't?
              </h2>
              <div className="space-y-4">
                <p>There are only two explanations for a 43-point gap.</p>
                <p>
                  Either 43% of brokers are genuinely not doing strategic work, or a large share are doing it
                  and it is not registering. Across a whole industry, the second is far more likely than the
                  first. Most firms of any size are doing more thinking on behalf of their clients than their
                  clients could describe.
                </p>
                <p>
                  That distinction matters commercially, because the two problems have opposite solutions. A
                  capability gap is fixed by hiring. A recognition gap is fixed by making the work visible,
                  and no amount of hiring touches it.
                </p>
                <p>
                  The uncomfortable part is that a recognition gap looks exactly like a capability gap from
                  the outside. Including from the client's side of the table, at renewal, when they are
                  deciding whether to market-test you.
                </p>
              </div>
            </div>
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                Clients want less contact and more counsel
              </h2>
              <div className="space-y-4">
                <p>
                  The same survey found the share of clients wanting weekly contact fell from 41.9% to 33.4%.
                  Self-service is absorbing the routine work, which most brokers would call progress.
                </p>
                <p>
                  Put the two movements together and the shape of the problem appears. Clients want fewer
                  conversations and higher-grade thinking in the ones that remain. Every conversation you lose
                  is a conversation that used to carry your judgment.
                </p>
                <p>
                  So the material between conversations stops being administration and starts being the
                  relationship. The renewal summary, the proposal, the market update, the thing that arrives
                  in April when nothing is due. Those are now doing the work the March phone call used to do.
                </p>
                <p>
                  Almost nobody treats them that way. They are produced by whoever is free, in whatever
                  template exists, and they are the main evidence a client has about how you think.
                </p>
              </div>
            </div>
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                Does this mean firms should communicate more?
              </h2>
              <div className="space-y-4">
                <p>No, and this is where the industry usually goes wrong.</p>
                <p>
                  Volume is not the constraint. Every firm in this market already sends things. Open five
                  competitor websites and you will find trusted partner, tailored solutions, and decades of
                  combined experience on all five. The same three phrases turn up in proposals, in renewal
                  decks, and in the line under a logo.
                </p>
                <p>
                  Sending more of that does not close a recognition gap. It widens it, because it trains the
                  client to skim.
                </p>
                <p>
                  The fix is not frequency. It is having one answer to what you do and who you are for, and
                  putting that answer where the client already looks.
                </p>
              </div>
            </div>
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                Where does the strategic work actually disappear?
              </h2>
              <div className="space-y-4">
                <p>In practice, in three places.</p>
                <p>
                  <strong className="text-brand-dark">The renewal meeting with no artifact.</strong> An hour
                  of judgment is delivered out loud and nothing survives it. The client leaves with an
                  impression. Impressions are not what they quote back to their board.
                </p>
                <p>
                  <strong className="text-brand-dark">
                    The proposal that lists coverage instead of reasoning.
                  </strong>{" "}
                  Terms, limits, carriers, price. It records what was placed and not why, so it reads as
                  procurement rather than advice. A competitor's proposal looks the same, which is precisely
                  the problem.
                </p>
                <p>
                  <strong className="text-brand-dark">The eleven months in between.</strong> Nothing arrives
                  with the firm's thinking on it, so at renewal the client is remembering one meeting from a
                  year ago and comparing it with whoever is in front of them now.
                </p>
                <p>
                  None of these is a talent problem. All three are a question of whether the firm has decided
                  what it wants remembered, and then built the things that carry it.
                </p>
              </div>
            </div>
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                What about the technology question?
              </h2>
              <div className="space-y-4">
                <p>
                  One more finding from the same survey is worth handling carefully. Failure to adopt modern
                  technology and AI entered the top eight reasons clients would switch brokers, for the first
                  time.
                </p>
                <p>
                  Treat that one with more caution than the rest. Zywave sells software to brokers, so it has
                  a commercial interest in that particular answer. It is worth saying plainly rather than
                  quoting it as if it were neutral.
                </p>
                <p>
                  Independent data points the same way, though. A February 2026 survey by the Big "I" Agents
                  Council for Technology found two thirds of independent agencies plan to increase their use
                  of AI, while only 8% use it in daily workflows and 55% have no written AI policy.
                </p>
                <p>
                  The gap there is not really about tools. A firm that has not decided what it believes about
                  technology cannot say anything specific about it, so it says something vague, and vague is
                  what the client reads.
                </p>
              </div>
            </div>
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                So what should a firm do first?
              </h2>
              <div className="space-y-4">
                <p>Not a campaign. A sentence.</p>
                <p>
                  Decide what you want a client to be able to say about you when you are not in the room, in
                  one sentence they would actually use. Then look at the three artifacts above and ask whether
                  any of them carries it.
                </p>
                <p>
                  It is unglamorous work and it is mostly editing. It also costs nothing to start, and it is
                  the only version of this that a client ever notices.
                </p>
                <p>
                  The firms that come out of a soft market with their book intact are rarely the ones that
                  communicated most. They are the ones whose clients could explain, without help, what they
                  were paying for.
                </p>
              </div>
            </div>
          </div>
          {/* FAQ BLOCK */}
          <section className="bg-white rounded-2xl border border-slate-300 p-6 sm:p-10 space-y-8 shadow-sm my-12">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-teal">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6 text-xs sm:text-sm">
              <div className="space-y-2">
                <h3 className="font-bold text-base text-brand-dark">
                  What percentage of clients say their broker provides a strategic plan?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  In Zywave's 2026 Broker Services Survey, 94% of clients said a multiyear strategic plan
                  matters and 51% said their broker fully provides one. On risk management strategy, 96%
                  called it important and 58% said their broker fully helps them build it.
                </p>
              </div>
              <div className="space-y-2 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-base text-brand-dark">
                  Why do clients say their broker gives no strategic advice when the broker does?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Because advice delivered verbally in a meeting leaves nothing the client can point to later.
                  When the work is not written down in a form the client keeps, it is remembered as an
                  impression rather than as advice, and at renewal it competes with whoever is in the room.
                </p>
              </div>
              <div className="space-y-2 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-base text-brand-dark">
                  What are the main reasons clients switch insurance brokers?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  The three most cited reasons in the 2026 survey are slow response times, inconsistent
                  communication, and lack of strategic advice. Price and coverage rank below all three.
                </p>
              </div>
              <div className="space-y-2 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-base text-brand-dark">
                  Do commercial clients want more frequent contact from their broker?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  No. The share of clients wanting weekly contact fell from 41.9% to 33.4%, while the
                  expectation that a broker acts as a trusted strategic advisor rose from 56% in 2023 to 71%
                  in 2026. Fewer conversations, higher expectations of each one.
                </p>
              </div>
              <div className="space-y-2 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-base text-brand-dark">
                  How many independent agencies use AI in daily workflows?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  A February 2026 survey by the Big "I" Agents Council for Technology found 8% of independent
                  agencies use AI in daily workflows and 55% have no written AI policy, while roughly two
                  thirds plan to increase their use of it.
                </p>
              </div>
            </div>
          </section>
          {/* DISCLAIMER */}
          <div className="bg-white rounded-2xl border-l-4 border-brand-terracotta p-5 sm:p-7 space-y-2.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-terracotta block">
              Important
            </span>{" "}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              This article is published for general information and marketing purposes. It is not financial,
              legal, actuarial, underwriting, regulatory, or investment advice, and it is not a substitute for
              advice from a professional who knows your situation. Orange Banana is a brand and marketing
              practice, not an insurance broker, agent, carrier, or licensed adviser.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Figures are attributed to the sources listed and were reported as stated at the date of
              publication. We do not independently verify them, markets move, and a number that was correct
              then may not be correct now. Go to the original source before relying on any of it. See our{" "}
              <Link to="/terms" className="text-brand-orange hover:underline font-semibold text-center">
                Terms of Use
              </Link>
              .
            </p>
          </div>
          {/* AUTHOR LINE */}
          <div className="pt-4 border-t border-slate-300 text-xs sm:text-sm text-slate-500 font-mono leading-relaxed">
            Written from inside insurance marketing, with hands-on experience across the entire policy
            lifecycle serving U.S. carriers, MGAs, brokers, and specialty underwriters.
          </div>
          {/* SOURCES */}
          <div className="bg-white rounded-2xl border border-slate-300 p-6 sm:p-8 space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Sources</h2>
            <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
              <li>
                Client expectations of brokers, strategic plan and risk management gaps, switching reasons,
                and contact frequency: Zywave 2026 Broker Services Survey. Zywave sells software to insurance
                brokers, which is disclosed above where it is relevant.
              </li>
              <li>
                Agency use of AI in daily workflows and written AI policy: Big "I" Agents Council for
                Technology, February 2026.
              </li>
              <li>
                Competitor language observations are our own, drawn from publicly available insurance firm
                websites.
              </li>
            </ul>
          </div>
          {/* ARTICLE CLOSING CTA */}
          <div className="axios-card axios-card-orange bg-brand-dark text-white p-8 sm:p-12 rounded-2xl border border-brand-taupe/40 text-center space-y-6">
            <div className="space-y-3 max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-extrabold">
                What would your three biggest clients say you do?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">Thirty minutes, no deck, no obligation.</p>
            </div>
            <div className="flex justify-center pt-2">
              <Link
                to="/start-a-conversation"
                className="px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base hover:bg-white hover:text-brand-dark transition-all shadow-xl flex items-center gap-3 text-center"
              >
                Start a conversation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
