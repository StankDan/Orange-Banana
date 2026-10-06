import { Link } from "react-router";
import { useConsent } from "../consent/ConsentContext";
import PageMeta from "../components/PageMeta";

export default function CookiesPage() {
  const { openConsent } = useConsent();
  return (
    <main className="flex-grow bg-brand-light text-brand-dark">
      <PageMeta
        title={"Cookie Policy · Orange Banana"}
        description={"What this site stores in your browser, why, and how to change your choice."}
        path="/cookies"
      />
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 bg-brand-dark text-white overflow-hidden hero-glow border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 w-full space-y-4">
          <span className="text-xs font-mono text-brand-orange uppercase font-bold tracking-wider block">
            Legal
          </span>{" "}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
            Cookie Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-mono pt-2">Last updated 28 September 2026</p>
        </div>
      </section>
      <section className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
          <div className="bg-white rounded-2xl border border-slate-300 p-5 sm:p-7 shadow-sm">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              The short version: one item remembers whether you said yes or no to analytics, and the contact
              page uses Google reCAPTCHA to keep spam out of the form. Nothing else is stored unless you
              accept, declining costs you nothing on this site, and you can change your mind from the footer of
              any page.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              1. What this covers
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                This policy explains what we store in your browser, why, and how to change it. It sits
                alongside our Privacy Policy, which covers everything else we do with data.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              2. What a cookie is
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                A cookie is a small file a website saves in your browser. On your next visit it gets sent
                back, which is how a site recognises your device and remembers what you did last time. Cookies
                cannot read anything else off your computer and cannot damage it. Each one expires after a set
                period.
              </p>
              <p>
                Some of what we store is not technically a cookie but works the same way, so we treat it the
                same here and list it below.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              3. Nothing runs until you say so
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <strong className="text-brand-dark">This is the part worth reading.</strong> When you first
              arrive you get a banner with two choices, and no analytics of any kind load until you pick one.
              If you choose necessary only, nothing beyond the necessary items in the first two rows of the
              table below is ever set.{" "}
              <p>
                Some sites treat carrying on browsing as agreement. We do not. Declining is one click, it is
                as easy as accepting, and it stays declined.
              </p>{" "}
              <strong className="text-brand-dark">Declining limits nothing on this site.</strong> Every page,
              every article, and the messaging audit all work exactly the same either way. There is no version
              of this site you get by accepting.
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              4. What we actually use
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="overflow-x-auto -mx-1">
                <table className="w-full text-left border-collapse min-w-[560px]">
                  <thead>
                    <tr className="border-b-2 border-brand-dark">
                      <th className="py-3 pr-4 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-orange">
                        What
                      </th>
                      <th className="py-3 pr-4 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-orange">
                        Why
                      </th>
                      <th className="py-3 pr-4 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-orange">
                        How long
                      </th>
                      <th className="py-3 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-orange">
                        Optional?
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm">
                    <tr className="border-b border-slate-300">
                      <td className="py-3.5 pr-4 align-top">
                        <span className="font-mono text-brand-dark font-semibold">ob_consent_v1</span>
                      </td>
                      <td className="py-3.5 pr-4 align-top text-slate-600">
                        Remembers whether you accepted or declined analytics, so we stop asking.
                      </td>
                      <td className="py-3.5 pr-4 align-top text-slate-600">
                        Until you clear your browser data
                      </td>
                      <td className="py-3.5 align-top">
                        <span className="text-brand-dark font-semibold">No. Necessary.</span>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="py-3.5 pr-4 align-top">
                        <span className="font-mono text-brand-dark font-semibold">_GRECAPTCHA</span>
                        <br />
                        <span className="text-slate-500 text-[11px]">set by Google reCAPTCHA</span>
                      </td>
                      <td className="py-3.5 pr-4 align-top text-slate-600">
                        Tells a person from a bot, so the contact form is not flooded with spam. Set only on the
                        contact page.
                      </td>
                      <td className="py-3.5 pr-4 align-top text-slate-600">6 months</td>
                      <td className="py-3.5 align-top">
                        <span className="text-brand-dark font-semibold">No. Necessary to send the form.</span>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="py-3.5 pr-4 align-top">
                        <span className="font-mono text-brand-dark font-semibold">_ga</span>
                        <br />
                        <span className="text-slate-500 text-[11px]">set by Google Analytics 4</span>
                      </td>
                      <td className="py-3.5 pr-4 align-top text-slate-600">
                        Gives your browser a random ID so a repeat visit is not counted as a new person.
                      </td>
                      <td className="py-3.5 pr-4 align-top text-slate-600">2 years</td>
                      <td className="py-3.5 align-top">
                        <span className="text-brand-orange font-semibold">Yes. Only if you accept.</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 pr-4 align-top">
                        <span className="font-mono text-brand-dark font-semibold">_ga_&lt;ID&gt;</span>
                        <br />
                        <span className="text-slate-500 text-[11px]">set by Google Analytics 4</span>
                      </td>
                      <td className="py-3.5 pr-4 align-top text-slate-600">
                        Keeps the state of your visit, so a session is not counted twice.
                      </td>
                      <td className="py-3.5 pr-4 align-top text-slate-600">2 years</td>
                      <td className="py-3.5 align-top">
                        <span className="text-brand-orange font-semibold">Yes. Only if you accept.</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                That is the whole list. Google reCAPTCHA sets the second row, and only when you open the
                contact page. We use Google Analytics for the third and fourth rows, with advertising features
                and ad personalisation switched off. We do not use advertising cookies, we do not use tracking
                pixels, and we do not run anything that follows you to other sites.
              </p>
              <p>
                reCAPTCHA is part of sending the form, not an optional extra, so it is not covered by the
                cookie banner. If you would rather it never loaded, write to us directly at{" "}
                <a href="mailto:damjan@orangebanana.co" className="text-brand-orange hover:underline font-semibold">
                  damjan@orangebanana.co
                </a>{" "}
                instead of using the form.
              </p>
              <p>
                Google processes that data on our behalf and it goes to Google servers, which can be outside
                your country. What it collects is not linked by us to your name, your email, or anything you
                sent through the contact form. Google publishes its own terms for this at{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener"
                  className="text-brand-orange hover:underline font-semibold"
                >
                  policies.google.com/privacy
                </a>
                .
              </p>
              <p>
                If you would rather block it wherever you go, Google offers a browser add-on at{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener"
                  className="text-brand-orange hover:underline font-semibold"
                >
                  tools.google.com/dlpage/gaoptout
                </a>
                .
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              5. The messaging audit
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                The audit stores nothing. Your answers and your score live in the page while you are on it and
                are gone the moment you leave. They are never sent to us and never written to your browser.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              6. Changing your mind
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Use the{" "}
                <button
                  className="text-brand-orange hover:underline font-semibold"
                  onClick={openConsent}
                  type="button"
                >
                  change your cookie choice
                </button>{" "}
                link at the foot of this page. It reopens the banner and whatever you pick replaces your
                earlier choice straight away. This page is linked in the footer of every page, so you can
                always get back to it.
              </p>
              <p>
                You can also clear your browser data for this site, which removes our record of your choice.
                Next time you visit, the banner comes back and you start fresh.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              7. Controlling cookies in your browser
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Every major browser lets you block or delete cookies for all sites or for specific ones,
                usually under Settings, then Privacy. Chrome, Safari, Firefox and Edge all have a help page
                for this, and they change their menus often enough that pointing you at their own instructions
                is more reliable than us reprinting them here.
              </p>
              <p>Blocking everything at browser level will not break this site. It may break others.</p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              8. Third parties we load from
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                One thing on this site comes from somewhere else on every visit: the typeface, which loads
                from Google Fonts. It sets no cookie, but it means your browser makes a request to a third
                party, and a request carries your IP address. Every image on this site is served by the site
                itself, so no photograph is fetched from anywhere else.
              </p>
              <p>
                Google reCAPTCHA loads only on the contact page, to protect the form. Google Analytics loads
                only if you accept it. Decline and that request is never made at all.
              </p>
              <p>
                We are telling you because it is true and because most sites do not. If you would rather avoid
                it, most browsers and extensions can block third party requests, and the site will still be
                readable without them.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              9. Changes and questions
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                If we add anything that stores data, this page and the table above get updated before it goes
                live, not after. The date at the top tells you when it was last revised.
              </p>
              <p>
                Write to{" "}
                <a
                  href="mailto:damjan@orangebanana.co"
                  className="text-brand-orange hover:underline font-semibold"
                >
                  damjan@orangebanana.co
                </a>{" "}
                with any question about this policy.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-300 pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <button
              className="text-brand-orange font-bold text-sm hover:text-brand-dark transition-colors"
              onClick={openConsent}
              type="button"
            >
              Change your cookie choice →
            </button>{" "}
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
