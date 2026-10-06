import { Link } from "react-router";
import { ArrowRight } from "../components/icons";
import PageMeta from "../components/PageMeta";
import JsonLd from "../components/JsonLd";

export default function InsightsPage() {
  return (
    <main className="flex-grow bg-brand-light text-brand-dark">
      <PageMeta
        title={"Insights on Insurance Marketing and Distribution · Orange Banana"}
        description={
          "On clarity, on how insurance actually buys, and on what marketing in this industry keeps getting wrong."
        }
        path="/insights"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": "https://orangebanana.co/insights#webpage",
          url: "https://orangebanana.co/insights",
          name: "Insights",
          isPartOf: { "@id": "https://orangebanana.co#website" },
          publisher: { "@id": "https://orangebanana.co#practice" },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              "strategic-advice-gap",
              "aon-usi-middle-market",
              "renewal-book-2027",
            ].map((slug, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://orangebanana.co/insights/${slug}`,
            })),
          },
        }}
      />
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-44 md:pb-28 min-h-[78vh] flex items-center border-b border-slate-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-brand-dark">
            How we think about{" "}
            <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform -rotate-1">
              this.
            </span>
          </h1>
          <p className="text-lg sm:text-2xl text-slate-700 font-normal leading-relaxed max-w-3xl">
            On clarity, on how insurance actually buys, and on what marketing in this industry keeps getting
            wrong.
          </p>
          <div className="pt-4 sm:pt-6">
            <Link
              to="/start-a-conversation"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base hover:bg-brand-dark transition-all shadow-xl inline-flex items-center justify-center gap-3 text-center"
            >
              Start a conversation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* ARTICLES LIST SECTION */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          {/* FEATURED / MOST RECENT ARTICLE CARD */}
          {/* FEATURED / MOST RECENT ARTICLE CARD */}
          <Link
            to="/insights/strategic-advice-gap"
            className="block axios-card axios-card-orange bg-white border border-slate-300 rounded-2xl p-6 sm:p-10 cursor-pointer shadow-sm hover:shadow-md transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                <span className="px-2.5 py-1 bg-brand-dark text-white rounded font-bold uppercase tracking-wider text-[10px]">
                  Latest Article
                </span>{" "}
                <span>10 September 2026</span> <span>·</span> <span>7 min read</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark group-hover:text-brand-orange transition-colors leading-tight">
                Your clients say you don't do strategic work. You probably do.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                Clients rank their brokers low on strategic advice. Most of that advice is being given. It
                just never takes a form anyone keeps.
              </p>
              <div className="pt-2 flex items-center text-brand-orange font-bold text-sm">Read article →</div>
            </div>
          </Link>
          <Link
            to="/insights/aon-usi-middle-market"
            className="block axios-card bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 cursor-pointer shadow-sm hover:shadow-md transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                <span>8 September 2026</span> <span>·</span> <span>7 min read</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark group-hover:text-brand-orange transition-colors leading-tight">
                Aon just paid $17 billion for your middle market. Here's the part it can't buy.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                The largest broker in the world named MGAs, MGUs and wholesalers as the access it was buying.
                What that changes, and what it doesn't.
              </p>
              <div className="pt-2 flex items-center text-brand-orange font-bold text-sm">Read article →</div>
            </div>
          </Link>
          <Link
            to="/insights/renewal-book-2027"
            className="block axios-card bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 cursor-pointer shadow-sm hover:shadow-md transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                <span>18 August 2026</span> <span>·</span> <span>8 min read</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark group-hover:text-brand-orange transition-colors leading-tight">
                How far will your renewal book take you in 2027?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                Commercial rates have fallen eight quarters running. The arithmetic most firms have not run on
                their own book.
              </p>
              <div className="pt-1 flex items-center text-brand-orange font-bold text-sm">Read article →</div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
