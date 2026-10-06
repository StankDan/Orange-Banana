import { Link } from "react-router";
import { ArrowRight } from "../components/icons";
import PageMeta from "../components/PageMeta";
import JsonLd from "../components/JsonLd";

export default function AonUsiArticle() {
  return (
    <main className="flex-grow bg-brand-light text-brand-dark">
      <PageMeta
        title={
          "Aon just paid $17 billion for your middle market. Here's the part it can't buy. · Orange Banana"
        }
        description={
          "Aon confirmed a $17bn acquisition of USI and named MGAs, MGUs and wholesalers as the access it was buying. What that changes for an independent middle-market firm, and what it does not."
        }
        path="/insights/aon-usi-middle-market"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": "https://orangebanana.co/insights/aon-usi-middle-market#article",
              headline: "Aon just paid $17 billion for your middle market. Here's the part it can't buy.",
              description:
                "Aon confirmed a $17bn acquisition of USI and named MGAs, MGUs and wholesalers as the access it was buying. What that changes for an independent middle-market firm, and what it does not.",
              datePublished: "2026-09-08",
              dateModified: "2026-09-08",
              mainEntityOfPage: "https://orangebanana.co/insights/aon-usi-middle-market",
              author: { "@id": "https://orangebanana.co#founder" },
              publisher: { "@id": "https://orangebanana.co#practice" },
              isPartOf: { "@id": "https://orangebanana.co#website" },
              image: "https://orangebanana.co/og-image.png",
              inLanguage: "en-US",
              about: ["Insurance marketing", "Insurance distribution"],
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://orangebanana.co/insights/aon-usi-middle-market#breadcrumb",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://orangebanana.co/" },
                { "@type": "ListItem", position: 2, name: "Insights", item: "https://orangebanana.co/insights" },
                { "@type": "ListItem", position: 3, name: "Aon just paid $17 billion for your middle market. Here's the part it can't buy." },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://orangebanana.co/insights/aon-usi-middle-market#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much is Aon paying for USI Insurance Services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "$17 billion, funded with new debt across a range of maturities. Aon has stated a $395m annual run-rate net adjusted EBITDA synergy target and expects the deal to be accretive to adjusted earnings per share in 2028. The targeted close is the fourth quarter of 2026, subject to regulatory approvals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why does Aon want access to MGAs, MGUs and wholesalers?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aon named the delegated authority channel as part of what the deal buys, describing E&S as a particularly fast-growing area of commercial insurance. Conning puts U.S. MGA premium at roughly $128bn for 2025, up 12%, against a P&C market growing around 5%.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is insurance distribution M&A speeding up or slowing down?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Counts are falling while sizes are rising. OPTIS recorded 292 agency deals in the first half of 2026, down 15%, and a trailing twelve-month count of 646, the weakest since the first quarter of 2019. In the same period Aon agreed to acquire USI at $17bn and EQT agreed a $2bn majority stake in McGill and Partners.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does consolidation mean independent brokers lose?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Not automatically. A national platform competes on scale, breadth and being the safe choice. It cannot compete on being narrow. The firms most exposed are the ones whose market cannot say what makes them different from a larger option.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What should a middle-market firm do first?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Test what your market says about you when you aren't in the room, and whether a national platform could say the same thing. If it could, the differentiation isn't there yet, and no amount of additional marketing spend will create it.",
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
          <span className="mx-2">/</span> <span className="text-brand-dark font-semibold">Aon and USI</span>
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
          {/* ARTICLE HEADER */}
          <header className="space-y-4 border-b border-slate-300 pb-8 sm:pb-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-brand-dark">
              Aon just paid $17 billion for your middle market. Here's the part it{" "}
              <span className="inline-block bg-brand-orange text-white px-3 sm:px-4 py-1 rounded-full shadow transform -rotate-1">
                can't buy.
              </span>
            </h1>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500 pt-2">
              <span>8 September 2026</span> <span>·</span> <span>7 min read</span>
            </div>
          </header>
          {/* KEY TAKEAWAYS */}
          <div className="bg-white border-2 border-brand-orange/40 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange">
              Key takeaways
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>
                <span>
                  Aon confirmed on 31 August 2026 that it will acquire USI Insurance Services for $17 billion,
                  targeting a close in Q4 2026 subject to regulatory approvals.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>
                <span>
                  Aon's stated rationale names expanded access to E&amp;S business through MGAs, MGUs and
                  wholesalers as part of what the deal buys.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>
                <span>
                  U.S. MGA premium reached roughly $128bn in 2025, up 12%, against a P&amp;C market growing
                  around 5%.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>
                <span>
                  Agency deal counts are falling while deal sizes hit records. Consolidation is concentrating,
                  not broadening.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>
                <span>
                  A national platform competes on scale and on being the safe choice. It cannot compete on
                  being narrow.
                </span>
              </li>
            </ul>
          </div>
          {/* BODY */}
          <div className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed">
            <p>The number is $17 billion. That isn't the part worth reading twice.</p>
            <p>
              On 31 August, Aon confirmed it will acquire USI Insurance Services. In the same announcement it
              said what it was buying, in plain language, and it read your segment list back to you.
            </p>
            <blockquote className="border-l-4 border-brand-orange bg-white rounded-r-xl pl-5 pr-5 py-4 text-brand-dark font-semibold text-base sm:text-lg">
              "while expanding its access to E&amp;S business through MGA's, MGU's and wholesalers"
            </blockquote>
            <p>
              Read that again as a retail broker, a wholesaler, or an MGA. The largest broker in the world
              just told the market that the route into delegated authority is worth paying a record sum to
              own.
            </p>
            <p>
              That isn't a threat. It's a valuation. Somebody has put a public price on the channel you work
              in every day.
            </p>
            {/* H2 01 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                What exactly did Aon{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform rotate-1">
                  buy?
                </span>
              </h2>
              <div className="space-y-4">
                <p>
                  A $17 billion purchase, funded with new debt across a range of maturities, with a stated
                  synergy target of $395m in annual run-rate net adjusted EBITDA impact. Aon expects the deal
                  to be accretive to adjusted earnings per share in 2028. The targeted close is the fourth
                  quarter of 2026, subject to regulatory approvals.
                </p>
                <p>
                  The seller is KKR, which bought USI from Onex in 2017 at $4.3bn including debt and is taking
                  roughly six times its original equity back out. Mike Sicard, USI's chairman and chief
                  executive, becomes President of Aon plc and global chief executive of Middle Market.
                </p>
                <p>
                  Aon frames the deal as building on its 2024 NFP acquisition, aimed at a leading position in
                  U.S. middle-market risk, insurance, retirement and benefits.
                </p>
                <p>
                  There is now a job title at the largest broker in the world with the words "Middle Market"
                  in it. That is the part that matters more than the price.
                </p>
              </div>
            </div>
            {/* H2 02 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                Why is the delegated authority channel the stated{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform -rotate-1">
                  prize?
                </span>
              </h2>
              <div className="space-y-4">
                <p>
                  Because it's growing faster than the market it sits inside. Conning puts U.S. MGA premium at
                  roughly $128bn for 2025, up 12%, against a P&amp;C market growing around 5%.
                </p>
                <p>
                  Underneath that, surplus lines premium across the fifteen stamping office states reached
                  $47.6bn in the first half of 2026, up 2.8%, on item filings up 16.9% to 4.3 million.
                </p>
                <p>
                  Read those two surplus lines numbers together. Transactions up nearly 17%. Premium up under
                  3%. More business moving through the channel at a lower value per piece, which means the
                  channel now runs on volume, and volume runs on being called.
                </p>
                <p>That is what access is worth buying. Not the premium. The flow.</p>
              </div>
            </div>
            {/* H2 03 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                Is this one deal, or a{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform rotate-1">
                  pattern?
                </span>
              </h2>
              <div className="space-y-4">
                <p>
                  A pattern, but not the one most people describe. Agency deal counts are falling. OPTIS
                  recorded 292 deals in the first half of 2026, down 15%, with a trailing twelve-month count
                  of 646, the weakest since the first quarter of 2019.
                </p>
                <p>
                  In the same window, Aon agreed to buy USI at $17bn and EQT agreed a $2bn majority stake in
                  McGill and Partners.
                </p>
                <p>
                  Fewer transactions, much larger ones. Consolidation isn't broadening, it's concentrating,
                  and it's aimed at platforms rather than at books of business.
                </p>
                <p>
                  What that means for an independent firm is unglamorous and worth saying plainly. You're less
                  likely to be acquired than you were three years ago, and more likely to find yourself
                  competing against something very large.
                </p>
              </div>
            </div>
            {/* H2 04 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                Does a national platform actually take business from independent{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform -rotate-1">
                  firms?
                </span>
              </h2>
              <div className="space-y-4">
                <p>
                  Not the way the alarmed version of this story says. The mechanism is narrower than that, and
                  knowing which part is real is the whole point of reading this.
                </p>
                <p>
                  A national platform wins on scale, on breadth, and on being the safe choice. Nobody inside a
                  company gets in trouble for placing the account with Aon. That is a genuine advantage and
                  pretending otherwise helps nobody.
                </p>
                <p>
                  What a platform cannot win is anything that depends on being narrow. A business assembled
                  from thousands of firms can be many things at once. It cannot be one specific thing, and it
                  certainly cannot be your one specific thing.
                </p>
                <p>
                  So consolidation doesn't make independent firms lose. It makes undifferentiated independent
                  firms lose. When the comparison happens, and it will happen whether or not anyone tells you,
                  the firm that couldn't say what made it different is being measured on the axis the platform
                  already owns.
                </p>
                <p>The firm that could say it isn't in that comparison at all.</p>
              </div>
            </div>
            {/* H2 05 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                Why does this land harder in 2027 than it would have in{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform rotate-1">
                  2022?
                </span>
              </h2>
              <div className="space-y-4">
                <p>Because rate isn't covering the difference any more.</p>
                <p>
                  Global commercial rates fell 6% in the second quarter of 2026, the eighth consecutive
                  quarterly decline, with U.S. property down 13%. U.S. commercial property and casualty
                  premiums fell 1.2% in the first quarter of 2026, the first decline across all account sizes
                  since the third quarter of 2017.
                </p>
                <p>
                  The incumbents are already feeling it. The 2026 Best Practices Study from the Big "I" and
                  Reagan Consulting found organic growth decelerated in six of seven revenue bands, to a range
                  of 6.2% to 10.2% from 8.7% to 11.3%. That study is a self-selected top tier, which means
                  even the best-performing agencies are growing more slowly.
                </p>
                <p>
                  Rate falling, organic growth decelerating, and the largest distributor in the world buying a
                  position in your market. Any one of those is manageable. They arrived in the same year.
                </p>
                <p>
                  Together they mean growth in 2027 has to be taken from somebody. Somebody is going to take
                  yours if your market can't say what you're for.
                </p>
              </div>
            </div>
            {/* H2 06 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                So what can a middle-market firm actually{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform -rotate-1">
                  do?
                </span>
              </h2>
              <div className="space-y-4">
                <p>Not outspend it. That was never available and it was never the answer.</p>
                <p>
                  The move is to change what you get compared on. A platform is bought for reach. An
                  independent firm is chosen for judgment about something specific: a class, a region, a kind
                  of risk, a kind of client nobody else wants to underwrite properly.
                </p>
                <p>
                  Which makes the question worth answering before your next planning meeting a different
                  question than the one usually asked. Not how you'll grow next year. This one:
                </p>
                <p className="font-bold text-brand-dark border-l-4 border-brand-orange pl-4 text-lg sm:text-xl">
                  When a wholesaler describes your firm to somebody who has never heard of you, what do they
                  say, and could a national platform say the same thing?
                </p>
                <p>
                  If it could, you're already competing on the platform's axis, and that is a fight decided by
                  balance sheet.
                </p>
                <p>
                  Most firms have never tested that question. It's answerable in about a week, and asking it
                  costs nothing.
                </p>
              </div>
            </div>
            {/* H2 07 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                What if the deal doesn't{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform rotate-1">
                  close?
                </span>
              </h2>
              <div className="space-y-4">
                <p>
                  It might not. It's subject to regulatory approvals and the targeted close is the fourth
                  quarter of 2026. Nobody should build a plan on a transaction that hasn't completed.
                </p>
                <p>
                  The plan doesn't depend on it. Aon's stated strategy is public whether or not this specific
                  deal clears, and the channel economics behind it were true before 31 August. The
                  announcement made them visible. It didn't create them.
                </p>
                <p>
                  Which is the useful way to hold all of this. The deal is not the thing that changes your
                  year. It's the thing that tells you, in public and in somebody else's words, which axis
                  you're going to be measured on.
                </p>
              </div>
            </div>
          </div>
          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-slate-300 p-6 sm:p-10 space-y-8 shadow-sm my-12">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-teal">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6 text-xs sm:text-sm">
              <div className="space-y-2">
                <h3 className="font-bold text-base text-brand-dark">
                  How much is Aon paying for USI Insurance Services?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  $17 billion, funded with new debt across a range of maturities. Aon has stated a $395m
                  annual run-rate net adjusted EBITDA synergy target and expects the deal to be accretive to
                  adjusted earnings per share in 2028. The targeted close is the fourth quarter of 2026,
                  subject to regulatory approvals.
                </p>
              </div>
              <div className="space-y-2 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-base text-brand-dark">
                  Why does Aon want access to MGAs, MGUs and wholesalers?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Aon named the delegated authority channel as part of what the deal buys, describing E&amp;S
                  as a particularly fast-growing area of commercial insurance. Conning puts U.S. MGA premium
                  at roughly $128bn for 2025, up 12%, against a P&amp;C market growing around 5%.
                </p>
              </div>
              <div className="space-y-2 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-base text-brand-dark">
                  Is insurance distribution M&amp;A speeding up or slowing down?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Counts are falling while sizes are rising. OPTIS recorded 292 agency deals in the first half
                  of 2026, down 15%, and a trailing twelve-month count of 646, the weakest since the first
                  quarter of 2019. In the same period Aon agreed to acquire USI at $17bn and EQT agreed a $2bn
                  majority stake in McGill and Partners.
                </p>
              </div>
              <div className="space-y-2 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-base text-brand-dark">
                  Does consolidation mean independent brokers lose?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Not automatically. A national platform competes on scale, breadth and being the safe choice.
                  It cannot compete on being narrow. The firms most exposed are the ones whose market cannot
                  say what makes them different from a larger option.
                </p>
              </div>
              <div className="space-y-2 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-base text-brand-dark">
                  What should a middle-market firm do first?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Test what your market says about you when you aren't in the room, and whether a national
                  platform could say the same thing. If it could, the differentiation isn't there yet, and no
                  amount of additional marketing spend will create it.
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
          {/* AUTHOR */}
          <div className="pt-4 border-t border-slate-300 text-xs sm:text-sm text-slate-500 font-mono leading-relaxed">
            Written from inside insurance marketing, with hands-on experience across every stage of the policy
            lifecycle, alongside retail and wholesale brokers, carriers, MGAs and MGUs, program
            administrators, and captives.
          </div>
          {/* SOURCES */}
          <div className="bg-white rounded-2xl border border-slate-300 p-6 sm:p-8 space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Sources</h2>
            <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
              <li>
                Aon announcement, 31 August 2026, as reported by{" "}
                <a
                  href="https://www.reinsurancene.ws/aon-confirms-it-will-acquire-usi-for-17bn-to-advance-its-u-s-middle-market-platform/"
                  target="_blank"
                  rel="noopener"
                  className="text-brand-orange hover:underline font-semibold"
                >
                  Reinsurance News
                </a>
                .
              </li>
              <li>
                EQT and McGill and Partners, 4 September 2026, as reported by{" "}
                <a
                  href="https://www.reinsurancene.ws/eqt-agrees-to-acquire-majority-stake-in-mcgill-and-partners-for-2bn-from-warburg-pincus/"
                  target="_blank"
                  rel="noopener"
                  className="text-brand-orange hover:underline font-semibold"
                >
                  Reinsurance News
                </a>
                .
              </li>
              <li>U.S. MGA premium: Conning, 2025.</li>
              <li>Surplus lines premium and item filings, first half 2026: WSIA stamping office data.</li>
              <li>Global commercial rate movement, second quarter 2026: Marsh.</li>
              <li>U.S. commercial P&amp;C premium, first quarter 2026: CIAB.</li>
              <li>
                Organic growth by revenue band: Big "I" and Reagan Consulting, 2026 Best Practices Study.
              </li>
              <li>Agency M&amp;A deal counts, first half 2026: OPTIS Partners.</li>
            </ul>
          </div>
          {/* CLOSING CTA */}
          <div className="axios-card axios-card-orange bg-brand-dark text-white p-8 sm:p-12 rounded-2xl border border-brand-taupe/40 text-center space-y-6">
            <div className="space-y-3 max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-extrabold">
                Could a national platform say the same thing about itself?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Thirty minutes, no deck. That's the question we'd start with.
              </p>
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
