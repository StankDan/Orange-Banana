import { Link } from "react-router";
import PageMeta from "../components/PageMeta";

export default function TermsPage() {
  return (
    <main className="flex-grow bg-brand-light text-brand-dark">
      <PageMeta
        title={"Terms of Use · Orange Banana"}
        description={"The terms for using the Orange Banana website."}
        path="/terms"
      />
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 bg-brand-dark text-white overflow-hidden hero-glow border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 w-full space-y-4">
          <span className="text-xs font-mono text-brand-orange uppercase font-bold tracking-wider block">
            Legal
          </span>{" "}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
            Terms of Use
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-mono pt-2">Last updated 10 September 2026</p>
        </div>
      </section>
      <section className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
          <div className="bg-white rounded-2xl border border-slate-300 p-5 sm:p-7 shadow-sm">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              The short version: this is a marketing website, not professional advice. We are a marketing
              practice, not a broker or an adviser. The market figures we publish come from third parties and
              go out of date. The audit is a prompt for thinking, not a diagnostic. Read anything here as a
              point of view, not as a basis for a decision. The rest of this page is the long version, because
              the short one is not a legal document.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              1. Who runs this site
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                This site is published by{" "}
                <strong className="text-brand-dark">Damjan Marković PR Orange Banana</strong>, a sole
                proprietorship registered in Belgrade, Serbia, tax ID (PIB) 114838659. In these terms, "we"
                and "us" mean that business, "Orange Banana" is the name we trade under, and "the site" means
                this website and every page on it.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              2. Accepting these terms
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                By using this site you accept these terms. If you do not accept them, please do not use it.
              </p>
              <p>
                We may change these terms. The date at the top shows when they last changed, and using the
                site after that means you accept the version that is up. We are not going to email you about
                it, so if this matters to you, check the date when you come back.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              3. What this site is, and what it is not
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                This is the website of a brand and marketing practice. We are not an insurance broker, an
                agent, a carrier, a managing general agent, an actuary, an accountant, or a law firm. We are
                not authorised or regulated by any insurance or financial services regulator, and nothing here
                is an offer, solicitation, or placement of insurance.
              </p>
              <p>
                <strong className="text-brand-dark">Nothing on this site is professional advice.</strong> The
                articles, the market commentary, and the messaging audit are published for general information
                and marketing purposes. They are not financial, legal, actuarial, underwriting, regulatory,
                tax, or investment advice, and they are no substitute for advice from a qualified professional
                who knows your situation. Do not make, or refrain from making, any business decision on the
                basis of anything published here.
              </p>
              <p>
                Nothing on this site creates a client relationship between us. That starts with a signed
                engagement, not with reading a page.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              4. Market data and third party figures
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Our articles cite figures published by third parties, including rating agencies, industry
                associations, brokers, and trade press. We attribute those figures to their sources and we
                believe them to be accurately reported as at the date of publication, but we do not
                independently verify them and we give no warranty as to their accuracy, completeness, or
                continued relevance.
              </p>
              <p>
                Insurance markets move. A figure that was correct when an article was published may not be
                correct when you read it. Go to the original source before relying on any number.
              </p>
              <p>
                Where an article discusses a transaction that has been announced but not completed, it is
                discussing an announcement, not an outcome.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              5. The messaging audit
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                The audit on this site is a set of six questions you score yourself. It runs entirely in your
                browser, and your answers and your score are never sent to us, stored, or seen by us.
              </p>
              <p>
                It is a prompt for thinking, not a diagnostic instrument. The score has no external meaning,
                it has not been validated against anything, and it does not measure the health of your
                business. Treat the result as a conversation starter with yourself, which is all it was built
                to be.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              6. What you may do with the site
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                We give you a personal, non-exclusive, non-transferable permission to access the site and to
                read it, for your own business purposes.
              </p>
              <p>
                You may print, save, and forward our pages and articles internally, and you may quote from
                them if you say where the quote came from and link back. We would rather you shared something
                than not.
              </p>
              <p>
                You may not republish our content as your own, sell it, put it behind your own paywall, or
                present it as anybody else's work.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              7. Automated collection and machine learning
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-brand-dark">
                  You may not use this site, or anything published on it, to train, fine-tune, or ground a
                  machine learning model without our written permission.
                </strong>{" "}
                That includes scraping the site for a dataset, and it includes running it through a system
                that retains what it reads.
              </p>
              <p>
                Automated access that is not ordinary indexing by a search engine, or that puts load on the
                site, is not permitted.
              </p>
              <p>
                This matters here more than on most sites. Our own content is the practice's main evidence
                that it can do the work, and a category already drowning in machine-written sameness is
                exactly the problem we write about.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              8. What you must not do
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                You agree not to use the site in any way that breaks the law, that interferes with how it
                runs, or that tries to reach any part of it, or any system connected to it, that you were not
                given access to.
              </p>
              <p>
                You must not use the contact form or any other route on this site to send anything unlawful,
                misleading, defamatory, threatening, abusive, or infringing, and you must not use it to
                advertise anything or to send bulk or automated messages.
              </p>
              <p>You are responsible for what you send us and for anything that happens as a result of it.</p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              9. Anything you send us
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                If you send us feedback, a suggestion, or an idea about our website, our writing, or how we
                work, and you send it without being asked, you agree that we may use it freely and without
                owing you anything for it. This is not us claiming your work. It is us making sure that a
                passing suggestion cannot later become a claim.
              </p>
              <p>
                <strong className="text-brand-dark">
                  This does not apply to your personal data, and it does not apply to anything you tell us in
                  confidence about your own business.
                </strong>{" "}
                Personal data is governed by our Privacy Policy. Anything you share with us while we are
                discussing possible work stays between us, and we treat it that way whether or not the work
                happens.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              10. Intellectual property
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                The text, layout, structure, graphics, and visual identity on this site, and the name Orange
                Banana, belong to us or are used with permission. Copyright in the articles is ours.
              </p>
              <p>
                Nothing on this site transfers any right in any of that to you, and using the site does not
                give you a licence to our name or our marks.
              </p>
              <p>
                Third party names, brands, and marks mentioned in our articles belong to their owners and are
                used for identification and commentary only. Mentioning a firm is not an endorsement by them
                of us, or by us of them.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              11. Links and other people's content
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Where we link out, we do so because the source is worth reading. We do not control those
                sites, we are not responsible for their content, their security, or their privacy practices,
                and a link is not an endorsement.
              </p>
              <p>If you arrived here from somebody else's site, the same applies in reverse.</p>
              <p>
                Where content on this site belongs to a third party, you need their permission to reuse it,
                not ours.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              12. Your equipment and your connection
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Getting online is your side of it. You are responsible for the device, the software, and the
                connection you use to reach this site, and for whatever your provider charges you for it. We
                are not responsible for anything that happens to your equipment as a result of using the site.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              13. Availability and changes to the site
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                We may change, move, or take down any part of this site at any time, without telling you
                first. We may also stop publishing it altogether.
              </p>
              <p>
                We do not promise the site will always be available, or available without interruption. Nobody
                is owed anything if it is not.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              14. No warranty
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                The site is provided as it is. We do not warrant that it will be uninterrupted, error free, or
                free of anything harmful, and we do not warrant that the information on it is complete,
                accurate, or current.
              </p>
              <p>
                You are responsible for judging whether anything here is useful to you, and for anything you
                do about it.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              15. Limitation of liability
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                To the fullest extent the law allows, we are not liable for any loss of profit, loss of
                business, loss of contracts, loss of anticipated saving, loss of data, or any indirect or
                consequential loss, arising from your use of this site or from relying on anything published
                on it.
              </p>
              <p>
                That applies however the loss arises, and it applies even if we knew that kind of loss was
                possible.
              </p>
              <p>
                <strong className="text-brand-dark">
                  Nothing in these terms limits or excludes liability where the law does not allow it to be
                  limited or excluded,
                </strong>{" "}
                including liability for death or personal injury caused by negligence, and liability for
                fraud.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              16. If somebody makes a claim because of what you did
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                If you use this site in a way these terms do not permit, and somebody brings a claim against
                us because of it, you agree to cover what that costs us, including reasonable legal costs.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              17. Privacy
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                How we handle personal data is set out in our Privacy Policy, which forms part of these terms.
                Where the two documents appear to disagree about personal data, the Privacy Policy is the one
                that governs.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              18. If part of these terms does not hold
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                If any part of these terms turns out to be unenforceable, that part is treated as removed and
                the rest still applies.
              </p>
              <p>If we do not enforce something straight away, that does not mean we have given it up.</p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              19. Governing law and courts
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                These terms and any dispute arising from them are governed by the law of the Republic of
                Serbia, and the courts of Belgrade have exclusive jurisdiction.
              </p>
              <p>
                This governs use of this website only. Any engagement we enter into is governed by whatever
                the contract for that engagement says, and that contract prevails over this page for anything
                to do with the work itself.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              20. Contact
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Write to{" "}
                <a
                  href="mailto:damjan@orangebanana.co"
                  className="text-brand-orange hover:underline font-semibold"
                >
                  damjan@orangebanana.co
                </a>{" "}
                with any question about these terms.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-300 pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link
              to="/privacy"
              className="text-brand-orange font-bold text-sm hover:text-brand-dark transition-colors text-center"
            >
              Read the Privacy Policy →
            </Link>{" "}
            <Link to="/" className="text-slate-500 font-mono text-xs hover:text-brand-dark transition-colors text-center">
              Back to the site
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
