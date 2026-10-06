import { Link } from "react-router";
import { ArrowRight } from "../components/icons";
import { Ticker } from "../components/Ticker";
import founderPhoto from "../assets/damjan-markovic.webp";
import PageMeta from "../components/PageMeta";
import JsonLd from "../components/JsonLd";

export default function WhoWeWorkWithPage() {
  return (
    <main className="flex-grow">
      <PageMeta
        title={"Who We Work With: Brokers, Wholesalers, MGAs and Program Business · Orange Banana"}
        description={
          "Retail brokers, wholesale brokers, MGAs, MGUs and program business. What brand clarity buys you, depending on where you sit."
        }
        path="/who-we-work-with"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": "https://orangebanana.co/who-we-work-with#webpage",
          url: "https://orangebanana.co/who-we-work-with",
          name: "Who We Work With",
          isPartOf: { "@id": "https://orangebanana.co#website" },
          about: { "@id": "https://orangebanana.co#practice" },
          mentions: { "@id": "https://orangebanana.co#founder" },
          audience: {
            "@type": "BusinessAudience",
            audienceType:
              "Retail brokers, wholesale brokers, MGAs, MGUs, program administrators, specialty wholesalers and reinsurance intermediaries",
          },
        }}
      />
      {/* 01 · HERO */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-44 md:pb-28 min-h-[78vh] flex items-center bg-brand-dark text-white overflow-hidden hero-glow border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-white">
              You know the business you should be{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg transform -rotate-1 mt-2">
                winning.
              </span>
            </h1>
            <div className="space-y-4 text-lg sm:text-2xl text-slate-300 font-normal leading-relaxed pt-2">
              <p>
                You're not writing what you used to, and business you were built for keeps going somewhere
                else.
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
      {/* TICKER BANNER */}
      <Ticker />
      {/* 02 · WHY EVERYONE SOUNDS THE SAME */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-brand-dark">
                Everyone says the same <br />{" "}
                <span className="inline-block bg-brand-orange text-white px-3 sm:px-4 py-1 rounded-full shadow-md transform rotate-1">
                  three
                </span>{" "}
                things.
              </h2>
              <div className="p-4 sm:p-6 bg-brand-dark text-white rounded-2xl border-l-8 border-brand-orange my-3 sm:my-4 font-mono text-xs sm:text-base">
                Trusted partner · Tailored solutions · Decades of combined experience
              </div>
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>Open the websites of five firms that compete with you and you'll find all three.</p>
                <p>
                  There is a reason this happens. Two firms can offer similar coverage on similar paper at a
                  similar price. But what actually separates them is judgment, responsiveness, and whether
                  they'll still be there in five years. None of that is easy to prove on a website, so firms
                  fall back on saying they're "trustworthy." Everyone says it, so it stops meaning anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 03 · SEGMENTS */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-t border-brand-taupe/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              What this actually{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform -rotate-1">
                buys you
              </span>
              , depending on where you sit.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-teal/40 space-y-4 sm:space-y-6 flex flex-col justify-between">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-[10px] sm:text-xs font-mono text-brand-orange font-bold uppercase block">
                  01 · RETAIL BROKERS
                </span>{" "}
                <h3 className="text-xl sm:text-2xl font-bold text-white">Retail brokers</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  You're explaining yourself to two audiences that want opposite things. A client wants to
                  know you understand their operation well enough to place it properly. The market wants to
                  know your submissions are clean and your book is disciplined. Most broker websites are
                  written entirely for the first and leave the second to guess.
                </p>
              </div>
            </div>
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-teal/40 space-y-4 sm:space-y-6 flex flex-col justify-between">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-[10px] sm:text-xs font-mono text-brand-teal font-bold uppercase block">
                  02 · WHOLESALE BROKERS
                </span>{" "}
                <h3 className="text-xl sm:text-2xl font-bold text-white">Wholesale brokers</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  When a hard risk hits a retail agent's desk, they have three or four places they could send
                  it and pick one in about a minute. They pick on who'll actually get it placed, and on
                  trusting you not to go near their client afterward. That decision happens on reputation,
                  before anyone talks to anyone.
                </p>
              </div>
            </div>
            <div className="axios-card bg-brand-slate p-6 sm:p-8 rounded-2xl border border-brand-terracotta/40 space-y-4 sm:space-y-6 flex flex-col justify-between">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-[10px] sm:text-xs font-mono text-brand-terracotta font-bold uppercase block">
                  03 · PROGRAM BUSINESS
                </span>{" "}
                <h3 className="text-xl sm:text-2xl font-bold text-white">MGA, MGU, and program business</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  You're selling upward and downward at the same time. Carriers are deciding whether your
                  underwriting judgment is worth capacity. The brokers who bring you business are deciding
                  which program to remember out of several that cover the same class. Without an identity of
                  its own, a program gets described as "that E&amp;S thing" and the flow goes to whoever named
                  it better.
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:p-6 bg-brand-slate border border-brand-teal/30 rounded-2xl text-slate-300 text-xs sm:text-sm leading-relaxed font-mono">
            Program administrators, specialty wholesalers, and reinsurance intermediaries have their own
            version of this. If you sell through relationships, it applies.
          </div>
        </div>
      </section>
      {/* 04 · TRIGGERS */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              When the brand work usually{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform rotate-1">
                gets on the agenda?
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2 font-medium">
              Almost nobody sits down and decides it's time, until one of these happens.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="axios-card bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-orange font-bold uppercase">
                01 · PROGRAM LAUNCH
              </span>{" "}
              <h3 className="text-base sm:text-lg font-bold text-brand-dark">
                A new program or line is coming
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Whether it gets used or forgotten is decided before the first submission.
              </p>
            </div>
            <div className="axios-card bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-orange font-bold uppercase">
                02 · LOST ACCOUNT
              </span>{" "}
              <h3 className="text-base sm:text-lg font-bold text-brand-dark">
                You lost something you should have won
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Not on price, not on coverage. More than once.
              </p>
            </div>
            <div className="axios-card bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-orange font-bold uppercase">
                03 · MARKETING LEAD
              </span>{" "}
              <h3 className="text-base sm:text-lg font-bold text-brand-dark">
                Someone was hired to own marketing and inherited nothing
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                They're being asked for campaigns before anyone decided what the campaigns should say.
              </p>
            </div>
            <div className="axios-card bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-orange font-bold uppercase">
                04 · SCALING LIMIT
              </span>{" "}
              <h3 className="text-base sm:text-lg font-bold text-brand-dark">
                The firm outgrew the founder's relationships
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                What carried the business for twenty years doesn't scale.
              </p>
            </div>
            <div className="axios-card bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-orange font-bold uppercase">
                05 · M&amp;A / CONSOLIDATION
              </span>{" "}
              <h3 className="text-base sm:text-lg font-bold text-brand-dark">Two firms became one</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Two names, two reputations, and no clear answer to what you are now.
              </p>
            </div>
            <div className="axios-card bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-mono text-brand-orange font-bold uppercase">
                06 · SUCCESSION
              </span>{" "}
              <h3 className="text-base sm:text-lg font-bold text-brand-dark">
                The next generation is taking over
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                One name carried the firm for thirty years. The next one has to carry it differently.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 05 · WHY DOES ORANGE BANANA EXIST */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-t border-brand-taupe/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Why{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform -rotate-1">
                Orange Banana
              </span>{" "}
              exists.
            </h2>
          </div>
          <div className="axios-card bg-brand-slate p-6 sm:p-12 rounded-2xl sm:rounded-3xl border border-brand-teal/40 space-y-4 sm:space-y-6 text-slate-300 text-sm sm:text-lg leading-relaxed max-w-4xl">
            <p>
              The market is flooded with the same jargon and the same interchangeable promises, and now AI
              writes most of it. There is more content than ever and less of it means anything.
            </p>
            <p>
              When every firm reads the same, buyers stop reading. What your partners and your clients need is
              not more of it. It's one honest, clear answer to what you do and who you're for, and the same
              answer everywhere they meet you.
            </p>
            <p>
              Hands-on experience with every stage of the policy lifecycle, alongside retail and wholesale
              brokers, carriers, MGAs and MGUs, program administrators, and captives. Nobody has to explain
              any of it to us first.
            </p>
            <p className="text-white font-semibold border-l-4 border-brand-orange pl-4 text-base sm:text-xl">
              That's the gap Orange Banana exists to close. We find what you're already good at, put it in
              words your market uses, and make sure the right part of it shows up wherever someone meets you.
            </p>
            <div className="pt-4">
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm sm:text-base hover:text-brand-cyan transition-colors text-center"
              >
                More on how engagements work →
              </Link>
            </div>
          </div>
          {/* FOUNDER */}
          <div className="max-w-4xl flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 border-t border-white/15 pt-8 sm:pt-10">
            <div className="shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-brand-teal/15 border border-brand-teal/40">
                <img
                  alt="Damjan Markovic, founder of Orange Banana"
                  width="480"
                  height="480"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  src={founderPhoto}
                />
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-white font-extrabold text-xl sm:text-2xl tracking-tight leading-none">
                  Damjan Markovic
                </p>
                <p className="font-mono text-[11px] sm:text-xs text-brand-orange font-bold uppercase tracking-wider mt-2">
                  Founder &nbsp;|&nbsp; Brand Strategist
                </p>
              </div>
              <p className="font-mono text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                IMCA member since 2022
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 07 · WHO THIS IS NOT FOR */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-brand-dark">
              Who this is{" "}
              <span className="inline-block bg-brand-orange text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform rotate-1">
                not for.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="axios-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-terracotta/15 text-brand-terracotta flex items-center justify-center font-mono font-bold text-xs sm:text-sm">
                01
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-dark">Tactical Ordering</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Anyone shopping for a website, a logo, or "just social," with no interest in the thinking
                underneath it.
              </p>
            </div>
            <div className="axios-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-terracotta/15 text-brand-terracotta flex items-center justify-center font-mono font-bold text-xs sm:text-sm">
                02
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-dark">Status Quo Protection</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Anyone who doesn't want their current positioning questioned during the diagnostic phase.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 08 · CLOSING */}
      <section className="bg-brand-dark text-white py-20 sm:py-28 border-t border-brand-taupe/30 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            If any of that sounded like your firm, that's the{" "}
            <span className="inline-block bg-brand-orange text-white px-3 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md transform -rotate-1">
              conversation.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Thirty minutes, no deck. You describe where things aren't landing, and we tell you what we'd look
            at first. Nobody has to decide anything on that call.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/start-a-conversation"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base hover:bg-white hover:text-brand-dark transition-all shadow-xl flex items-center justify-center gap-3 text-center"
            >
              Start a conversation <ArrowRight className="w-5 h-5" />
            </Link>{" "}
            <Link
              to="/what-we-do"
              className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold text-sm sm:text-base hover:border-brand-teal hover:text-brand-cyan transition-all text-center"
            >
              See what we do
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
