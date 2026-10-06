import { Link } from "react-router";
import ContactForm from "../components/ContactForm";
import PageMeta from "../components/PageMeta";
import JsonLd from "../components/JsonLd";

export default function StartConversationPage() {
  return (
    <main className="flex-grow">
      <PageMeta
        title={"Start a Conversation · Orange Banana"}
        description={
          "Thirty minutes, no deck. You describe where things aren't landing. We tell you what we'd look at first."
        }
        path="/start-a-conversation"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": "https://orangebanana.co/start-a-conversation#webpage",
          url: "https://orangebanana.co/start-a-conversation",
          name: "Start a Conversation",
          description:
            "Book a 30-minute intro call. A reply within 24 hours, then either a fixed-scope proposal or an honest referral to someone who fits better.",
          isPartOf: { "@id": "https://orangebanana.co#website" },
          about: { "@id": "https://orangebanana.co#practice" },
        }}
      />
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-44 md:pb-28 min-h-[78vh] flex items-center bg-brand-dark text-white hero-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Context & Promise */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                  Start a <br />{" "}
                  <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-xl transform -rotate-1 mt-2">
                    conversation
                  </span>
                </h1>
                <p className="text-lg sm:text-2xl text-slate-200 font-medium leading-relaxed pt-2">
                  Thirty minutes, no deck. You describe where things aren't landing. We tell you what we'd
                  look at first.
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-brand-slate border-l-4 border-brand-orange rounded-2xl space-y-2 sm:space-y-3">
                <p className="text-base sm:text-lg font-semibold text-white">
                  If we're not right for it, you'll hear that on the same call.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  No sales pitch, no multi-slide decks, no pressure. Just a direct diagnostic with an industry
                  insider.
                </p>
              </div>
              {/* What to expect list */}
              <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
                <h3 className="text-xs sm:text-sm font-mono text-brand-cyan uppercase font-bold tracking-wider">
                  What happens next
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4 axios-card bg-brand-slate/50 p-3.5 sm:p-4 rounded-xl border border-white/5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-brand-orange text-white font-mono font-bold flex items-center justify-center text-xs sm:text-sm shrink-0">
                      1
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white block">Fast Response:</strong> We reply within 24 hours
                      with a direct calendar invite.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4 axios-card bg-brand-slate/50 p-3.5 sm:p-4 rounded-xl border border-white/5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-brand-teal text-white font-mono font-bold flex items-center justify-center text-xs sm:text-sm shrink-0">
                      2
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white block">30-Minute Focused Call:</strong> We discuss how
                      your market sees you today, and where that's costing you.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4 axios-card bg-brand-slate/50 p-3.5 sm:p-4 rounded-xl border border-white/5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-brand-terracotta text-white font-mono font-bold flex items-center justify-center text-xs sm:text-sm shrink-0">
                      3
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white block">Clear Next Steps:</strong> Either a fixed-scope
                      proposal, or an honest referral to someone who fits better.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Interactive Booking Form */}
            <div className="lg:col-span-6">
              <div className="bg-brand-slate border-2 border-brand-orange/60 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl text-white space-y-5 sm:space-y-6 relative axios-card axios-card-orange">
                <div className="space-y-2 border-b border-white/10 pb-3 sm:pb-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold">Book thirty minutes</h2>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-mono">
                    Fill out the fields below to schedule your intro conversation.
                  </p>
                </div>
                <ContactForm />
                {/* Exit Line to Audit */}
                <div className="border-t border-white/10 pt-4 sm:pt-6 text-center">
                  <Link
                    to="/messaging-audit"
                    className="text-xs sm:text-sm text-brand-cyan hover:underline font-semibold inline-flex items-center gap-1 text-center"
                  >
                    Not ready for a call? Take the quick audit instead. →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
