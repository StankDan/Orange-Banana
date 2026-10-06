import { Link } from "react-router";
import { ArrowRight } from "../components/icons";
import PageMeta from "../components/PageMeta";
import JsonLd from "../components/JsonLd";

export default function ApproachPage() {
  return (
    <main className="flex-grow">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "@id": "https://orangebanana.co/approach#howto",
          name: "How Orange Banana builds an insurance brand in eight weeks",
          description:
            "Eight weeks, four decisions, and no reinvention. The brand foundation for an independent insurance business, stage by stage.",
          totalTime: "P8W",
          step: [
            {
              name: "Listening (weeks 1 to 2)",
              text: "A few hours with the principals, short conversations with the people who sell, service and renew, a call with a partner and a client, and a read of everything already in front of the market.",
            },
            {
              name: "Deciding (weeks 3 to 4)",
              text: "A competitive read of the niche, then the decisions: what separates the firm, who it is for, and what it is willing to stop being known for.",
            },
            {
              name: "Building (weeks 5 to 6)",
              text: "The words for partners and the words for clients, written so the team can use them without the principals in the room, then the visual system that carries them.",
            },
            {
              name: "Landing it (weeks 7 to 8)",
              text: "Every place the brand meets the market, mapped and ranked by what to fix first, then who does what, in what order, starting the week the work finishes.",
            },
          ].map((s, i) => ({ "@type": "HowToStep", position: i + 1, ...s })),
        }}
      />
      <PageMeta
        title={"Approach: Eight Weeks to a Clear Insurance Brand · Orange Banana"}
        description={
          "Eight weeks, four decisions, and no reinvention. How we build a brand your market can repeat without you in the room."
        }
        path="/approach"
      />
      {/* 01 · HERO */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-44 md:pb-28 min-h-[78vh] flex items-center bg-brand-dark text-white overflow-hidden hero-glow border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.15] text-white">
              This needs to be done{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-xl transform -rotate-1 mt-2">
                by tomorrow.
              </span>
            </h1>
            <div className="space-y-4 sm:space-y-6 text-lg sm:text-2xl text-slate-300 font-normal leading-relaxed pt-2">
              <p>You rushed too many things in the past. Logo, website, and that renewal campaign as well.</p>
              <p className="text-slate-300">
                And now you're still explaining what makes you different in words that come to you on the
                spot.
              </p>
            </div>
            <div className="pt-4 sm:pt-6">
              <Link
                to="/start-a-conversation"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base hover:bg-white hover:text-brand-dark transition-all shadow-xl inline-flex items-center justify-center gap-3 text-center"
              >
                Start a conversation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 03 · WHAT WE ARE LOOKING FOR */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-brand-dark">
              We're not here to{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform -rotate-1">
                (re)invent you.
              </span>
            </h2>
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                What separates you already exists. It just never makes it into anything that travels without
                you.
              </p>
              <p className="text-brand-dark font-semibold text-lg sm:text-2xl border-l-4 border-brand-orange pl-4">
                The things you're good at are the ones you should be saying.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 04 · THE EIGHT WEEKS */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-t border-brand-taupe/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-14">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              What the eight weeks{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform -rotate-1">
                actually look like.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="axios-card bg-brand-slate p-5 sm:p-7 rounded-2xl border border-brand-teal/40 space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-cyan font-bold uppercase block">
                Weeks 1 to 2
              </span>{" "}
              <h3 className="text-lg sm:text-xl font-bold text-white">Listening</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                A few hours with you, short conversations with the people who sell, service, and renew, and a
                call with a partner and a client. Alongside that we read everything you already put in front
                of the market.
              </p>
            </div>
            <div className="axios-card bg-brand-slate p-5 sm:p-7 rounded-2xl border border-brand-teal/40 space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-cyan font-bold uppercase block">
                Weeks 3 to 4
              </span>{" "}
              <h3 className="text-lg sm:text-xl font-bold text-white">Deciding</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                A competitive read of your niche, then the decisions themselves. What separates you, who it is
                for, and what you're willing to stop being known for. You see all of it before anything gets
                written or designed.
              </p>
            </div>
            <div className="axios-card bg-brand-slate p-5 sm:p-7 rounded-2xl border border-brand-orange/40 space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-orange font-bold uppercase block">
                Weeks 5 to 6
              </span>{" "}
              <h3 className="text-lg sm:text-xl font-bold text-white">Building</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                The words for partners and the words for clients, written so your team can use them without
                you in the room. Then the visual system that carries them.
              </p>
            </div>
            <div className="axios-card bg-brand-slate p-5 sm:p-7 rounded-2xl border border-brand-terracotta/40 space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-terracotta font-bold uppercase block">
                Weeks 7 to 8
              </span>{" "}
              <h3 className="text-lg sm:text-xl font-bold text-white">Landing it</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Every place your brand meets the market, mapped and ranked by what to fix first. Then who does
                what, in what order, starting the week we finish.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-mono leading-relaxed max-w-3xl">
            Nothing gets presented at the end that you're seeing for the first time. You are in the decisions
            as they happen, which is also why they hold afterwards.
          </p>
        </div>
      </section>
      {/* 05 · THE ORDER */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              At the end of it you'll have reached four decisions.
              <br />
              Each one settles the next.
            </h2>
          </div>
          {/* 4 DECISIONS STACK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="axios-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-orange font-extrabold uppercase block">
                DECISION 01
              </span>{" "}
              <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark">What you stand for.</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Who you're for. What you're not. The one thing you want to be known for.
              </p>
            </div>
            <div className="axios-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-teal font-extrabold uppercase block">
                DECISION 02
              </span>{" "}
              <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark">
                How your brand communicates.
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The words for partners and the words for clients. Same argument, both directions. Your team
                stops improvising it.
              </p>
            </div>
            <div className="axios-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-terracotta font-extrabold uppercase block">
                DECISION 03
              </span>{" "}
              <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark">How your brand looks.</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Design can't make a decision. Given one, it does most of the work without anyone reading a
                word.
              </p>
            </div>
            <div className="axios-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-dark font-extrabold uppercase block">
                DECISION 04
              </span>{" "}
              <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark">How your brand behaves.</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The proposal. The reply time. The booth. The invoice. Each one is proof of what you claim, or
                a quiet contradiction of it.
              </p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
              Skip a step and you don't save time. You put the same problem on a newer looking foundation
              twelve months later.
            </p>
            <div>
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm sm:text-base hover:text-brand-dark transition-colors text-center"
              >
                What you end up with →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 06 · WHAT WE NEED FROM YOU */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-t border-brand-taupe/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              This doesn't run without{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform -rotate-1">
                you
              </span>{" "}
              <span className="whitespace-nowrap">in it.</span>
            </h2>
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Not much of your time, but the right kind. A few hours with you. Short conversations with the
                people who sell, service, and renew. Introductions to a partner and a client or two, because
                they explain why they stay in a way nobody inside the firm ever manages to.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 07 · HOW WE WORK */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              You won't{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform rotate-1">
                get dropped.
              </span>
            </h2>
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                The person on the first call is the person who guides you through it. You're not handed over
                to someone junior who has to learn the industry on your account.
              </p>
              <p>
                Fixed scope and a fixed price, billed monthly. You know what is coming, when it lands, and
                what it costs, from the first month to the last.
              </p>
              <p className="font-bold text-brand-dark border-l-4 border-brand-orange pl-4">
                No hourly billing, ever. You know the number before anything starts.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 08 · CLOSING */}
      <section className="bg-brand-dark text-white py-20 sm:py-28 border-t border-brand-taupe/30 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Nothing here has to be done by{" "}
            <span className="inline-block bg-brand-orange text-white px-3 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform -rotate-1">
              tomorrow.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            It has to be done once, properly, so the next few years of work have something to follow. Thirty
            minutes, no deck, is where that starts.
          </p>
          <div className="pt-2 flex justify-center">
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
