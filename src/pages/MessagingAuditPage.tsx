import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowDown, ArrowRight } from "../components/icons";
import PageMeta from "../components/PageMeta";
import JsonLd from "../components/JsonLd";
import { AUDIT_BANDS } from "../data/auditBands";
import { AUDIT_QUESTIONS } from "../data/auditQuestions";

type Score = 0 | 1 | 2;
const SCORES: Score[] = [0, 1, 2];
const MAX_PER_QUESTION = 2;
const QUESTION_COUNT = AUDIT_QUESTIONS.length;

/** Which question to point at first, in words. Questions are numbered from 1. */
function weakestLabel(answers: Score[]): string {
  const lowest = Math.min(...answers);
  const lowQs = answers.flatMap((v, i) => (v === lowest ? [i + 1] : []));

  if (lowQs.length === QUESTION_COUNT) {
    return lowest === MAX_PER_QUESTION
      ? "Nothing stands out. You scored top marks on all six."
      : "You scored the same on all six. Start with question 1, because everything else here follows from it.";
  }
  if (lowQs.length === 1) {
    return `Question ${lowQs[0]}, where you scored ${lowest}. That is the one to start with.`;
  }
  if (lowQs.length <= 3) {
    const last = lowQs[lowQs.length - 1];
    return `Questions ${lowQs.slice(0, -1).join(", ")} and ${last}, all at ${lowest}. Pick whichever you can move first.`;
  }
  return `${lowQs.length} of the six came out at ${lowest}. Start with question ${lowQs[0]}, the earliest of them.`;
}

const scrollIntoView = (el: Element | null | undefined, delay = 0) =>
  setTimeout(() => el?.scrollIntoView({ behavior: "smooth", block: "start" }), delay);

export default function MessagingAuditPage() {
  // one slot per question, undefined until answered
  const [answers, setAnswers] = useState<(Score | undefined)[]>(() => Array(QUESTION_COUNT).fill(undefined));
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultRef = useRef<HTMLElement>(null);

  const answeredCount = answers.filter((a) => a !== undefined).length;
  const complete = answeredCount === QUESTION_COUNT;
  const scores = answers as Score[];
  const total = complete ? scores.reduce<number>((sum, v) => sum + v, 0) : 0;
  const band = AUDIT_BANDS.find((b) => total >= b.min)!;

  function pick(index: number, value: Score) {
    const next = [...answers];
    next[index] = value;
    setAnswers(next);

    // move them along, but only while questions are still unanswered
    const firstOpen = next.findIndex((a) => a === undefined);
    if (firstOpen !== -1) scrollIntoView(questionRefs.current[firstOpen], 260);
  }

  // the result appears once the last question is answered
  useEffect(() => {
    if (complete) scrollIntoView(resultRef.current, 120);
  }, [complete]);

  function start() {
    scrollIntoView(questionRefs.current[0]);
  }

  function reset() {
    setAnswers(Array(QUESTION_COUNT).fill(undefined));
    start();
  }

  return (
    <main className="flex-grow">
      <PageMeta
        title="The Quick Insurance Messaging Audit · Orange Banana"
        description="Six questions that show where your message is quietly costing you work. It scores itself, and nobody asks for your email."
        path="/messaging-audit"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "@id": "https://orangebanana.co/messaging-audit#app",
          name: "The Quick Insurance Messaging Audit",
          url: "https://orangebanana.co/messaging-audit",
          description:
            "Six self-scored questions that show where an insurance firm's message is quietly costing it work, relationships, and room to grow. No email required.",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Any (web browser)",
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Independent insurance brokers, wholesalers, MGAs and MGUs",
          },
          provider: { "@id": "https://orangebanana.co#practice" },
          workExample: {
            "@type": "DigitalDocument",
            name: "The Quick Insurance Messaging Audit (PDF)",
            encodingFormat: "application/pdf",
            url: "https://orangebanana.co/the-quick-insurance-messaging-audit.pdf",
          },
        }}
      />

      {/* 01 · HERO */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-44 md:pb-28 min-h-[78vh] flex items-center bg-brand-dark text-white overflow-hidden hero-glow border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-slate border border-brand-teal/40 text-brand-cyan font-mono text-xs font-semibold tracking-wider uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" /> Six questions · Scores itself
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white max-w-4xl">
            The Quick Insurance{" "}
            <span className="inline-block bg-brand-orange text-white px-3.5 sm:px-5 py-1 rounded-full shadow-xl transform -rotate-1">
              Messaging Audit.
            </span>
          </h1>
          <div className="space-y-4 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl pt-2">
            <p>
              Six questions that show you where your message is quietly costing you work, relationships, and room
              to grow.
            </p>
            <p className="text-white font-semibold">
              No email, no sequence, no call. You get the score and what it means, on this page.
            </p>
          </div>
          <div className="pt-4">
            <button
              type="button"
              onClick={start}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base hover:bg-white hover:text-brand-dark transition-all shadow-xl inline-flex items-center justify-center gap-3"
            >
              Start the audit <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 02 · THE QUESTIONS */}
      <section className="bg-brand-light text-brand-dark py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-brand-dark">
              Answer from memory. Don't open your{" "}
              <span className="inline-block bg-brand-orange text-white px-3 sm:px-4 py-1 rounded-full shadow-md transform -rotate-1">
                website.
              </span>
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              That's the whole method. If you have to go and check what you say about yourself, you've already
              answered the first question. Be honest rather than generous, because a flattering score costs you
              the only thing this is good for.
            </p>
          </div>

          {/* PROGRESS */}
          <div className="sticky top-20 z-30 mb-8 sm:mb-10">
            <div className="bg-brand-dark text-white rounded-2xl px-5 py-3.5 sm:px-6 sm:py-4 flex items-center gap-4 shadow-xl border border-brand-taupe/40">
              <span className="text-[10px] sm:text-xs font-mono uppercase font-bold tracking-wider text-brand-orange shrink-0">
                Answered
              </span>
              <span className="font-mono font-bold text-sm sm:text-base shrink-0" aria-live="polite">
                {answeredCount} of {QUESTION_COUNT}
              </span>
              <div className="flex-1 h-1.5 rounded-full bg-white/15 overflow-hidden">
                <div
                  className="h-full bg-brand-orange rounded-full transition-all duration-300"
                  style={{ width: `${Math.round((answeredCount / QUESTION_COUNT) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {AUDIT_QUESTIONS.map((q, i) => {
              const answer = answers[i];
              return (
                <div
                  key={i}
                  ref={(el) => {
                    questionRefs.current[i] = el;
                  }}
                  className={`bg-white rounded-2xl border border-slate-300 shadow-sm p-6 sm:p-9 space-y-5 scroll-mt-28${answer !== undefined ? " audit-answered" : ""}`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`aq-badge shrink-0 w-9 h-9 rounded-xl ${q.badgeClass} text-white font-mono font-extrabold text-sm flex items-center justify-center transition-colors`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-2xl font-extrabold text-brand-dark leading-tight tracking-tight">
                        {q.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{q.hint}</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 sm:pl-13" role="radiogroup" aria-label={`Question ${i + 1}`}>
                    {SCORES.map((value) => (
                      <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={answer === value}
                        onClick={() => pick(i, value)}
                        className={`audit-opt w-full text-left flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl border-2 border-slate-300 bg-white${answer === value ? " sel" : ""}`}
                      >
                        <span className="opt-val shrink-0 w-7 h-7 rounded-lg border-2 border-slate-300 bg-brand-light text-brand-dark font-mono font-bold text-xs flex items-center justify-center">
                          {value}
                        </span>
                        <span className="opt-text text-slate-700 text-sm sm:text-base leading-relaxed">
                          {q.options[value]}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="bg-brand-light border-l-4 border-brand-teal rounded-r-xl p-4 sm:p-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-teal block mb-1.5">
                      {q.whyLabel}
                    </span>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{q.why}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 · RESULT */}
      {complete && (
        <section
          ref={resultRef}
          className="bg-brand-dark text-white py-16 sm:py-24 border-t border-brand-taupe/30 scroll-mt-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
            {/* SCORE */}
            <div className="axios-card axios-card-orange bg-brand-slate rounded-2xl sm:rounded-3xl border-2 border-brand-orange/50 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <div className="shrink-0">
                <span className="text-xs font-mono text-brand-orange uppercase font-bold tracking-wider block mb-2">
                  Your score
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl sm:text-7xl font-extrabold tracking-tight text-white">{total}</span>
                  <span className="text-2xl sm:text-3xl font-bold text-slate-400">/ 12</span>
                </div>
              </div>
              <div className="sm:border-l sm:border-white/15 sm:pl-10 space-y-2">
                <span className="text-xs font-mono text-brand-cyan uppercase font-bold tracking-wider block">
                  Weakest answer
                </span>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{weakestLabel(scores)}</p>
              </div>
            </div>

            {/* BAND */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono text-brand-orange uppercase font-bold tracking-wider block">
                  {band.range}
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
                  {band.title}
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">{band.summary}</p>
              </div>

              <div className="bg-brand-slate rounded-2xl border border-brand-teal/40 p-5 sm:p-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-cyan block mb-2">
                  Fix first
                </span>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{band.fixFirst}</p>
              </div>

              <div className="axios-card axios-card-orange bg-brand-slate rounded-2xl border border-brand-orange/50 p-6 sm:p-9 space-y-5">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">{band.pitch}</p>
                <Link
                  to="/start-a-conversation"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base hover:bg-white hover:text-brand-dark transition-all shadow-xl inline-flex items-center justify-center gap-3 text-center"
                >
                  {band.cta} <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* KEEP IT */}
            <div className="border-t border-white/10 pt-8 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              {/* the file lives in public/ */}
              <a
                href="/the-quick-insurance-messaging-audit.pdf"
                download
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border-2 border-white/20 text-white font-semibold text-sm hover:border-brand-teal hover:text-brand-cyan transition-all text-center inline-flex items-center justify-center gap-2"
              >
                Download the printable version
              </a>
              <button
                type="button"
                onClick={reset}
                className="w-full sm:w-auto text-sm text-slate-400 hover:text-white transition-colors font-mono text-center"
              >
                Start again
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
