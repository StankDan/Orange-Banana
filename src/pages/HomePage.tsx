import { Link } from "react-router";
import { ArrowRight } from "../components/icons";
import { Ticker } from "../components/Ticker";
import PageMeta from "../components/PageMeta";

export default function HomePage() {
  return (
    <main className="flex-grow">
      <PageMeta
        title={"Orange Banana · Brand Strategy for Insurance Brokers, MGAs and Wholesalers"}
        description={
          "Brand strategy and marketing for independent U.S. insurance firms: retail and wholesale brokers, MGAs, MGUs and program business. Fixed scope, fixed fee."
        }
        path="/"
      />
      {/* Spacious Hero Area */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-44 md:pb-28 min-h-[78vh] flex items-center bg-brand-dark text-white overflow-hidden hero-glow border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] text-white">
              Your insurance brand. <br className="hidden sm:inline" />{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full mt-2 sm:mt-3 shadow-xl transform -rotate-1 text-2xl sm:text-5xl md:text-6xl">
                Clarified.
              </span>
            </h1>
            <p className="text-lg sm:text-2xl text-slate-300 font-normal leading-relaxed max-w-2xl pt-1 sm:pt-2">
              Say the right thing everywhere your market meets you.
            </p>
            <p className="text-[11px] sm:text-xs font-mono text-slate-400 tracking-wide uppercase">
              Brand strategy and marketing, for independent insurance businesses in the U.S.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
              <Link
                to="/start-a-conversation"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base hover:bg-white hover:text-brand-dark transition-all text-center flex items-center justify-center gap-3 shadow-lg"
              >
                Start a conversation <ArrowRight className="w-5 h-5" />
              </Link>{" "}
              <Link
                to="/approach"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-white/20 text-white font-semibold text-sm sm:text-base hover:border-brand-teal hover:text-brand-cyan transition-all text-center"
              >
                Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* AXIOS TICKER MARQUEE BANNER */}
      <Ticker />
      {/* 02 · THE PROBLEM */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="space-y-4 sm:space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange block">
                Lost business
              </span>{" "}
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-brand-dark">
                You lost the one{" "}
                <span className="inline-block bg-brand-orange text-white px-3 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform -rotate-1 mt-1">
                  you should have won.
                </span>
              </h2>
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  The submission went in, the terms were competitive, the relationship was good. At the end,
                  someone else took the business and you don't know why.
                </p>
                <p>
                  The difference was usually this: their offer was easier to understand, and easier to present
                  to someone else.
                </p>
                <p>
                  That is almost never a marketing problem. It is what happens when nobody ever decided what
                  the firm stands for, so five people describe it five ways and not one of them is wrong.
                </p>
              </div>
            </div>
          </div>
          {/* 02b · TRANSITIONAL CTA */}
          <div className="mt-12 sm:mt-20">
            <div className="axios-card axios-card-orange bg-brand-dark text-white p-6 sm:p-10 rounded-2xl border border-brand-taupe/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              <div className="space-y-3 max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Not ready for a{" "}
                  <span className="inline-block bg-brand-orange text-white px-3 py-0.5 rounded-full shadow transform rotate-1">
                    conversation
                  </span>{" "}
                  yet.
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Six questions that show you where your message is quietly costing you work, relationships,
                  and room to grow. It scores itself, and nobody asks for your email.
                </p>
              </div>{" "}
              <Link
                to="/messaging-audit"
                className="w-full md:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-orange text-white font-bold text-xs sm:text-sm hover:bg-brand-cyan hover:text-brand-dark transition-all text-center whitespace-nowrap shadow-lg"
              >
                Take the Quick Messaging Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 03 · THE GUIDE */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-t border-brand-taupe/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Everyone sounds the same.{" "}
                <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform -rotate-1">
                  We make sure you don't.
                </span>
              </h2>
              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Every firm in the category says the same three things. Now AI writes them too, so there is
                  more of it than ever and none of it lands.
                </p>
                <p>
                  Hands-on experience with every stage of the policy lifecycle, alongside retail and wholesale
                  brokers, carriers, MGAs and MGUs, program administrators, and captives.
                </p>
                <p className="text-white font-semibold text-lg sm:text-xl border-l-4 border-brand-orange pl-4">
                  You're not paying for six months of onboarding billed back to you as strategy.
                </p>
                <p>
                  Nobody here needs the policy lifecycle explained, or a glossary for E&amp;S, or a call to
                  work out why a program dies once the wholesalers stop remembering its name.
                </p>
              </div>
              <div className="pt-2 sm:pt-4">
                <Link
                  to="/who-we-work-with"
                  className="inline-flex items-center gap-2 text-brand-orange font-bold hover:text-brand-cyan transition-colors text-sm sm:text-base text-center"
                >
                  More on who we work with →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 04 · WHO THIS IS FOR */}
      <section
        id="who-this-is-for"
        className="bg-brand-light text-brand-dark py-16 sm:py-24 border-t border-brand-dark/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4 mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              One of these{" "}
              <span className="inline-block bg-brand-orange text-white px-3 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform rotate-1">
                is you.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="axios-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm flex flex-col justify-between space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center font-mono font-extrabold text-base sm:text-lg">
                  01
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">Retail Brokers</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  You're explaining yourself to two audiences that want opposite things. Most broker websites
                  are written for one and leave the other to guess.
                </p>
              </div>
            </div>
            <div className="axios-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm flex flex-col justify-between space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-teal text-white flex items-center justify-center font-mono font-extrabold text-base sm:text-lg">
                  02
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">Wholesale Brokers</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  A hard risk hits a retail agent's desk and they pick one of four places in about a minute.
                  That happens on reputation, before anyone picks up the phone.
                </p>
              </div>
            </div>
            <div className="axios-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm flex flex-col justify-between space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-dark text-white flex items-center justify-center font-mono font-extrabold text-base sm:text-lg">
                  03
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">MGA / MGU / Programs</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  You're selling upward and downward at once. Carriers decide whether your judgment is worth
                  capacity. Brokers decide which program to remember.
                </p>
              </div>
            </div>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 font-mono mb-6 sm:mb-8">
            Program administrators, specialty wholesalers, reinsurance intermediaries. If you sell through
            relationships, this applies.
          </p>
          <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-4 sm:px-5 sm:py-3 rounded-xl bg-brand-dark text-white text-xs font-mono w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />{" "}
              <span>Building software and want to sound like insurance?</span>
            </div>{" "}
            <Link to="/insurtech" className="text-brand-orange font-bold hover:underline text-left">
              Different conversation. →
            </Link>
          </div>
        </div>
      </section>
      {/* 05 · WHAT WE DO PREVIEW */}
      <section
        id="what-we-do"
        className="bg-brand-dark text-white py-16 sm:py-24 border-t border-brand-taupe/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Can you describe what you do in{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform -rotate-1 mt-1">
                less than 30 seconds?
              </span>
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6 max-w-4xl text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              If it takes longer than that, the problem is rarely the pitch. It is that the answer was never
              settled.
            </p>
            <p>
              First we clarify what you stand for: positioning, messaging, visual identity, and the brand
              experience, which is how your business communicates its value at every touchpoint with your
              partners and your clients. Eight weeks, fixed fee.
            </p>
            <p>
              Then it gets delivered to the world: LinkedIn, content, email, campaigns. Monthly, shaped around
              what you actually need.
            </p>
            <div className="pt-2 sm:pt-4 flex items-center gap-6">
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm sm:text-base hover:text-brand-cyan transition-colors text-center"
              >
                See full Practice Overview →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 06 · THE PLAN */}
      <section
        id="the-plan"
        className="bg-brand-light text-brand-dark py-16 sm:py-24 border-t border-brand-dark/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4 mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              You'll know what you're getting into{" "}
              <span className="inline-block bg-brand-orange text-white px-3 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform rotate-1 mt-1">
                before you commit.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="axios-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-xs font-mono text-brand-orange font-bold block">
                01 · A CONVERSATION
              </span>{" "}
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Thirty minutes, no deck.</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                You describe where things aren't landing. We tell you what we'd look at first.
              </p>
            </div>
            <div className="axios-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-xs font-mono text-brand-teal font-bold block">
                02 · A PROPOSAL YOU CAN HOLD US TO
              </span>{" "}
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark">
                Fixed scope, fixed fee, fixed dates.
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Written to be forwarded to whoever else signs off.
              </p>
            </div>
            <div className="axios-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-xs font-mono text-brand-terracotta font-bold block">
                03 · WORK STARTS
              </span>{" "}
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark">
                Strategy first, then delivery.
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                You'll see structure and clarity in the first weeks, not at the end of the quarter.
              </p>
            </div>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 font-mono">
            The person on the first call is the person who guides you through it. No handoffs to junior team
            members once the contract is signed.
          </p>
        </div>
      </section>
      {/* BLOCK A · FOUNDING COHORT */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-t border-brand-taupe/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Three founding seats.
            </h2>
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                We've spent years inside this industry, and we're opening the U.S. practice with three
                founding partners.
              </p>
              <p>
                Three, because this work pays off with a small number of firms at a time, and we'd rather do
                it properly than quickly. Two months on the brand, six months putting it to work, starting
                whenever your budget says it can.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/founding-partners"
                className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm sm:text-base hover:text-brand-cyan transition-colors text-center"
              >
                What the founding partner program includes →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* BLOCK B · INSIGHTS */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-xs font-mono text-brand-teal uppercase font-bold tracking-wider block">
              Industry perspective
            </span>{" "}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              How we think about this.
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-1">
              Writing on clarity, on how insurance actually buys, and on what marketing in this industry keeps
              getting wrong.
            </p>
          </div>
          {/* ARTICLES LIST */}
          <div className="grid grid-cols-1 gap-6 max-w-4xl">
            <Link
              to="/insights/aon-usi-middle-market"
              className="block axios-card axios-card-orange bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 cursor-pointer shadow-sm hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark group-hover:text-brand-orange transition-colors leading-tight">
                  Aon just paid $17 billion for your middle market. Here's the part it can't buy.
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  The largest broker in the world named MGAs, MGUs and wholesalers as the access it was
                  buying. What that changes, and what it doesn't.
                </p>
              </div>
            </Link>
            <Link
              to="/insights/renewal-book-2027"
              className="block axios-card axios-card-orange bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 cursor-pointer shadow-sm hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark group-hover:text-brand-orange transition-colors leading-tight">
                  How far will your renewal book take you in 2027?
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Commercial rates have fallen eight quarters running. The arithmetic most firms have not run
                  on their own book.
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm sm:text-base hover:text-brand-dark transition-colors text-center"
            >
              Read everything →
            </Link>
          </div>
        </div>
      </section>
      {/* 07 · CLOSING CTA */}
      <section
        id="contact"
        className="bg-brand-dark text-white py-20 sm:py-28 border-t border-brand-taupe/30 text-center"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            There's an account you should be winning <span className="whitespace-nowrap">right now.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Thirty minutes, no deck, no obligation. If we're not the right people for it, you'll hear that on
            the same call.
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
