import { Link } from "react-router";
import { ArrowRight } from "../components/icons";
import PageMeta from "../components/PageMeta";
import JsonLd from "../components/JsonLd";

export default function RenewalBookArticle() {
  return (
    <main className="flex-grow bg-brand-light text-brand-dark">
      <PageMeta
        title={"How Far Will Your Renewal Book Take You in 2027? · Orange Banana"}
        description={
          "Commercial rates have fallen eight quarters running. Run the arithmetic on your own book, and see how much new business next year actually requires."
        }
        path="/insights/renewal-book-2027"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": "https://orangebanana.co/insights/renewal-book-2027#article",
              headline: "How Far Will Your Renewal Book Take You in 2027?",
              description:
                "Commercial rates have fallen eight quarters running. Run the arithmetic on your own book, and see how much new business next year actually requires.",
              datePublished: "2026-08-18",
              dateModified: "2026-08-18",
              mainEntityOfPage: "https://orangebanana.co/insights/renewal-book-2027",
              author: { "@id": "https://orangebanana.co#founder" },
              publisher: { "@id": "https://orangebanana.co#practice" },
              isPartOf: { "@id": "https://orangebanana.co#website" },
              image: "https://orangebanana.co/og-image.png",
              inLanguage: "en-US",
              about: ["Insurance marketing", "Insurance distribution"],
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://orangebanana.co/insights/renewal-book-2027#breadcrumb",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://orangebanana.co/" },
                { "@type": "ListItem", position: 2, name: "Insights", item: "https://orangebanana.co/insights" },
                { "@type": "ListItem", position: 3, name: "How Far Will Your Renewal Book Take You in 2027?" },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://orangebanana.co/insights/renewal-book-2027#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much new business does a broker need in a soft market to stay flat?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "At 90% retention with 5% downward repricing, a book opens the year at about 85% of prior revenue, so new business worth roughly 15% of the existing book is required to finish flat.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long has the commercial insurance market been softening?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Global commercial rates have declined for eight consecutive quarters as of the second quarter of 2026, falling 6% in that quarter with property down 12%. US commercial property and casualty premiums fell 1.2% in the first quarter of 2026.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why is retention rate a misleading measure of health?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Retention is lagging. It measures relationships formed under earlier market conditions, and it cannot account for accounts that were never seen: submissions routed elsewhere, renewals quietly market-tested, or quotes a firm was not invited to give.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What replaces capacity as a differentiator in a soft market?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Preference. When capacity is abundant and every market can quote the risk, the submission goes to the firm a broker thinks of first and can describe accurately to someone else.",
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
          <span className="text-brand-dark font-semibold">Renewal Book 2027</span>
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
          {/* ARTICLE HEADER */}
          <header className="space-y-4 border-b border-slate-300 pb-8 sm:pb-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-brand-dark">
              How far will your renewal book take you in{" "}
              <span className="inline-block bg-brand-orange text-white px-3 sm:px-4 py-1 rounded-full shadow transform -rotate-1">
                2027?
              </span>
            </h1>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500 pt-2">
              <span>18 August 2026</span> <span>·</span> <span>8 min read</span>
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
                  Global commercial insurance rates fell 6% in the second quarter of 2026, the eighth
                  consecutive quarterly decline.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>{" "}
                <span>
                  At 90% retention and 5% downward repricing, a book opens the year at roughly 85% of prior
                  revenue before a single new account is written.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>{" "}
                <span>
                  Returning to flat then requires new business worth about 15% of the existing book.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>{" "}
                <span>
                  Retention is a lagging measure. It reports on relationships formed under market conditions
                  that no longer apply.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-orange font-bold shrink-0">•</span>{" "}
                <span>
                  In a hard market distribution competes on access. In a soft market access is universal, so
                  competition moves to preference.
                </span>
              </li>
            </ul>
          </div>
          {/* ARTICLE BODY CONTENT */}
          <div className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed">
            <p>
              There is a piece of arithmetic worth doing before anyone writes next year's plan. It takes about
              ninety seconds.
            </p>
            <p>
              Take your book. Assume you keep 90% of it, which most firms would call a solid year. Now assume
              what you keep reprices down 5%. You open January at roughly 85% of this year's revenue, before
              you have won a single new account.
            </p>
            <p>
              To finish the year flat, you need new business worth about 15% of your existing book. Not 15%
              more logos. Fifteen percent of everything you have built.
            </p>
            <p>
              Run the same arithmetic on 2022. Same 90% retention, but the book reprices up 10%. You open at
              99%. Flat is where you land by doing nothing at all.
            </p>
            <p>
              That is the whole story of the last eight quarters in two lines of maths. Rate did the work. New
              business was upside, not survival.
            </p>
            {/* H2 01 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                What is happening to commercial insurance{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform rotate-1">
                  rates
                </span>{" "}
                in 2026?
              </h2>
              <div className="space-y-4">
                <p>
                  Commercial insurance rates are falling, and have been for two years. Global commercial rates
                  fell 6% in the second quarter of 2026, the eighth consecutive quarterly decline, with
                  property down 12%. US casualty is the single exception, up 2%, driven by social inflation.
                </p>
                <p>
                  In the United States specifically, commercial property and casualty premiums fell 1.2% in
                  the first quarter of 2026. That was the first decline across all account sizes since the
                  third quarter of 2017. Large accounts came down 2.7%, medium accounts 1.9%.
                </p>
                <p>
                  Moody's expects broker organic revenue growth to slow to low-to-mid single digits this year.
                  Public retail brokers averaged 3.2% organic growth in the first quarter.
                </p>
              </div>
            </div>
            {/* H2 02 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                Why are insurance rates falling if the industry is{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform -rotate-1">
                  healthy?
                </span>
              </h2>
              <div className="space-y-4">
                <p>
                  Rates are falling because the industry is healthy, not in spite of it. 2025 was the best
                  underwriting year in a decade, with a combined ratio of 93 and roughly $61 billion of
                  underwriting income. A quieter than expected hurricane season and record reinsurance capital
                  did the rest.
                </p>
                <p>Capital arrived. Capacity followed. Capacity competes on price.</p>
                <p>
                  So a healthy market is a competitive one, and competition shows up in your renewal book as a
                  smaller number next to the same account.
                </p>
              </div>
            </div>
            {/* H2 03 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                What is happening in the E&amp;S and surplus lines{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform rotate-1">
                  market?
                </span>
              </h2>
              <div className="space-y-4">
                <p>
                  Surplus lines is doing more work for less money. Across the fifteen stamping office states,
                  surplus lines premium reached $47.6 billion in the first half of 2026, up 2.8%. Item filings
                  rose 16.9%, to 4.3 million.
                </p>
                <p>Read those two numbers together. Transactions up nearly 17%. Premium up under 3%.</p>
                <p>
                  Property tells the story in miniature: premium down 13.7%, transaction volume up 15.2%.
                  Demand did not fall. Price did.
                </p>
                <p>
                  The consequence is structural. The value of any single submission has dropped, and the
                  number of submissions required has gone up. Volume is now the growth engine, and volume runs
                  on being called.
                </p>
              </div>
            </div>
            {/* H2 04 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                Is a high retention rate still a{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform -rotate-1">
                  good
                </span>{" "}
                sign?
              </h2>
              <div className="space-y-4">
                <p>
                  Not on its own. Retention is a lagging measure. It reports on relationships formed years
                  ago, under conditions that no longer apply.
                </p>
                <p>
                  A 92% retention rate in a hard market and a 92% retention rate in a soft one are not the
                  same achievement, because in the first one the client had nowhere better to go.
                </p>
                <p>
                  Retention also tells you nothing about the accounts you never saw. It cannot, by definition.
                  The submissions that went to someone else. The renewal an insured quietly market-tested. The
                  program a carrier took to a different MGA. The account your competitor was invited to quote
                  and you were not.
                </p>
                <p>
                  None of that appears anywhere in your numbers. It appears as a year that felt fine and
                  finished short.
                </p>
              </div>
            </div>
            {/* H2 05 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                Where does new business actually come from in a{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform rotate-1">
                  soft
                </span>{" "}
                market?
              </h2>
              <div className="space-y-4">
                <p>
                  From preference, not access. Ask a broker where they win and the honest answer is never "our
                  marketing." It is the submission that got read first. The appointment that came through
                  because someone remembered a name. The renewal conversation that went differently because
                  the insured already understood what this firm was for. The five minutes at a conference that
                  turned into a program.
                </p>
                <p>
                  Every one of those is a moment where somebody had to think of you, and then be able to say
                  what you do to a third person who was not in the room.
                </p>
                <p>
                  That is the mechanism. Not awareness in the advertising sense. Recall, and the ability to be
                  repeated accurately by someone else.
                </p>
                <p>
                  In a hard market, distribution competes on access. We have the paper, we have the capacity,
                  we can place it. Eight straight quarters of falling rates flips that. Capacity is abundant
                  and everyone can quote the risk, so access stops separating anyone.
                </p>
                <p>
                  Which raises a question most firms have never tested: when a producer, a wholesaler, or an
                  underwriter describes your firm to a colleague, what do they actually say?
                </p>
                <p>
                  For a lot of firms the honest answer is that they say the category. They say you are a good
                  shop, you have solid markets, the people are responsive. All true. All identical to the
                  description of eleven other firms in the same city.
                </p>
              </div>
            </div>
            {/* H2 06 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                Why do insurance firms all sound the{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform -rotate-1">
                  same?
                </span>
              </h2>
              <div className="space-y-4">
                <p>
                  Because sameness is the low-risk choice. When you sell risk transfer, the words that feel
                  safest are the ones everyone else already uses. They have been tested by the whole market
                  and nobody ever got in trouble for them.
                </p>
                <p>
                  Read twenty broker websites in a row and it becomes uncomfortable. The same three promises,
                  in the same order, in a slightly different font.
                </p>
                <p>
                  In a hard market that costs very little. Rate covers a lot of forgettable. In a market where
                  your book reprices down and growth has to be taken from someone else, the firm that is easy
                  to describe has a structural advantage over the firm that is merely good.
                </p>
                <p>
                  The chief executive of the Excess Lines Association of New York put it plainly in the
                  midyear commentary: in a moderating growth environment, the broker's edge becomes the value
                  proposition. Not the price. Not the panel. What the firm is actually for.
                </p>
              </div>
            </div>
            {/* H2 07 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                Is this fixed by spending more on{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform rotate-1">
                  marketing?
                </span>
              </h2>
              <div className="space-y-4">
                <p>
                  Rarely. The instinct, once growth pressure is real, is to do more. More posts, more emails,
                  more presence at more events, a website refresh, someone junior hired to run it.
                </p>
                <p>That usually fails, and not because of effort.</p>
                <p>
                  It fails because there is nothing underneath it. If nobody has ever decided what the firm
                  stands for, the website says one thing, the deck says something slightly different, and
                  three producers describe the business three different ways on the same day. Each piece is
                  fine. None of it accumulates. You spend a year being busy and nobody's understanding of your
                  firm moves an inch.
                </p>
                <p>
                  Consistency is what makes a small firm look national. And you cannot be consistent about
                  something you have never defined.
                </p>
              </div>
            </div>
            {/* H2 08 */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                So how far will your renewal book take you in{" "}
                <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform -rotate-1">
                  2027?
                </span>
              </h2>
              <div className="space-y-4">
                <p>
                  Further than most firms fear, and not as far as they are planning for. Which leaves a gap
                  that has to be filled with business taken from somebody else.
                </p>
                <p>
                  The firms that fill it will not be the biggest ones. They will be the ones a wholesaler
                  thinks of first, describes accurately, and recommends without hedging.
                </p>
                <p>That has always been true. It was just easier to ignore when rate was doing the work.</p>
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
                  How much new business does a broker need in a soft market to stay flat?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  At 90% retention with 5% downward repricing, a book opens the year at about 85% of prior
                  revenue, so new business worth roughly 15% of the existing book is required to finish flat.
                  In a hardening market with 10% upward repricing, the same 90% retention opens the year at
                  99%, and flat requires almost nothing.
                </p>
              </div>
              <div className="space-y-2 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-base text-brand-dark">
                  How long has the commercial insurance market been softening?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Global commercial rates have declined for eight consecutive quarters as of the second
                  quarter of 2026, falling 6% in that quarter with property down 12%. US commercial property
                  and casualty premiums fell 1.2% in the first quarter of 2026, the first decline across all
                  account sizes since the third quarter of 2017.
                </p>
              </div>
              <div className="space-y-2 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-base text-brand-dark">Is E&amp;S premium still growing?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Yes, but slowly. Surplus lines premium across the fifteen stamping office states reached
                  $47.6 billion in the first half of 2026, up 2.8%, while item filings rose 16.9% to 4.3
                  million. E&amp;S property premium fell 13.7% while property transaction volume rose 15.2%.
                </p>
              </div>
              <div className="space-y-2 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-base text-brand-dark">
                  Why is retention rate a misleading measure of health?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Retention is lagging. It measures relationships formed under earlier market conditions, and
                  it cannot account for accounts that were never seen: submissions routed elsewhere, renewals
                  quietly market-tested, or quotes a firm was not invited to give.
                </p>
              </div>
              <div className="space-y-2 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-base text-brand-dark">
                  What replaces capacity as a differentiator in a soft market?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Preference. When capacity is abundant and every market can quote the risk, the submission
                  goes to the firm a broker thinks of first and can describe accurately to someone else.
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
              <li>Global commercial rate movement, second quarter 2026: Marsh Global Insurance Market Index.</li>
              <li>U.S. commercial property and casualty premium, first quarter 2026: CIAB P&amp;C Market Index.</li>
              <li>Surplus lines premium and item filings, first half 2026: WSIA stamping office data.</li>
              <li>U.S. E&amp;S segment outlook: AM Best.</li>
            </ul>
          </div>
          {/* ARTICLE CLOSING CTA */}
          <div className="axios-card axios-card-orange bg-brand-dark text-white p-8 sm:p-12 rounded-2xl border border-brand-taupe/40 text-center space-y-6">
            <div className="space-y-3 max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-extrabold">
                There's an account you should be winning <span className="whitespace-nowrap">right now.</span>
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
