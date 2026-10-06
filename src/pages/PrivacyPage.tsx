import { Link } from "react-router";
import PageMeta from "../components/PageMeta";

export default function PrivacyPage() {
  return (
    <main className="flex-grow bg-brand-light text-brand-dark">
      <PageMeta
        title={"Privacy Policy · Orange Banana"}
        description={"What Orange Banana collects, why, who else sees it, and how to use your rights."}
        path="/privacy"
      />
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 bg-brand-dark text-white overflow-hidden hero-glow border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 w-full space-y-4">
          <span className="text-xs font-mono text-brand-orange uppercase font-bold tracking-wider block">
            Legal
          </span>{" "}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-mono pt-2">Last updated 28 September 2026</p>
        </div>
      </section>
      <section className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
          <div className="bg-white rounded-2xl border border-slate-300 p-5 sm:p-7 shadow-sm">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              The short version: we only hold what you type into the contact form, we use it to reply to you
              and nothing else, we do not sell it, we do not add you to a list because you got in touch, and
              you can ask us to delete it at any time. The longer version follows, because the short version
              is not a legal document.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              1. Who we are
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                This site is operated by{" "}
                <strong className="text-brand-dark">Damjan Marković PR Orange Banana</strong>, a sole
                proprietorship registered in Belgrade, Serbia, tax ID (PIB) 114838659, registered with the
                Serbian Business Registers Agency under decision BP 7474/2025 of 22 January 2025. In this
                policy, "we" and "us" mean that business, and "Orange Banana" is the name we trade under.
              </p>
              <p>
                We are the <strong className="text-brand-dark">data controller</strong> for everything
                described here. That means you gave it to us directly and we decide what happens to it. We do
                not act as a processor for anyone else's data, and we do not handle personal data on behalf of
                our clients as part of what we sell.
              </p>
              <p>
                We are established in Serbia, so we are subject to the Serbian Law on Personal Data
                Protection. Where you are in the European Economic Area or the United Kingdom, the GDPR
                applies to us as well. Where you are in California, the CCPA and CPRA apply. You can reach us
                at{" "}
                <a
                  href="mailto:damjan@orangebanana.co"
                  className="text-brand-orange hover:underline font-semibold"
                >
                  damjan@orangebanana.co
                </a>{" "}
                and we will give you our full registered address on request.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              2. What we collect
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-brand-dark">What you give us.</strong> The contact form on this site
                asks for three things: your name, your work email address, and the type of firm you work for.
                If you write to us directly instead, we hold whatever you chose to put in that message.
              </p>
              <p>
                <strong className="text-brand-dark">What is collected automatically.</strong> Our hosting
                provider keeps standard server logs, which include IP addresses, browser type, and which pages
                were requested. Those exist to keep the site running and to spot abuse.
              </p>
              <p>
                <strong className="text-brand-dark">Spam protection.</strong> The contact form is protected by
                Google reCAPTCHA, which loads only on the contact page. To tell a person from a bot it collects
                information about your device and how you interact with the page, such as your IP address,
                browser details, and mouse and keyboard activity, and sends it to Google.
              </p>
              <p>
                <strong className="text-brand-dark">Analytics.</strong> Google Analytics, and only if you
                accept it. Section 8 covers this and how to change your mind later.
              </p>
              <p>
                <strong className="text-brand-dark">What we do not collect.</strong> The messaging audit runs
                entirely inside your browser. Your answers and your score are never sent to us, never stored,
                and never visible to us. We do not run a live chat, we do not accept job applications through
                this site, and we do not run surveys.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              3. Why we use it, and on what basis
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                We use what you give us to reply to you, to arrange and hold a conversation, and to send you
                whatever we said we would send. The legal basis is our legitimate interest in answering a
                business enquiry that you started, and, if work follows, performance of a contract.
              </p>
              <p>
                reCAPTCHA runs on the basis of our legitimate interest in keeping the contact form free of spam
                and automated abuse.
              </p>
              <p>
                Analytics run on the basis of your consent, which you give through the cookie banner and can
                withdraw at any time.
              </p>
              <p>
                <strong className="text-brand-dark">We do not sell personal information</strong> and we do not
                share it for cross-context behavioural advertising. Getting in touch does not put you on a
                mailing list. If we ever want to send you something you did not ask for, we will ask first.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              4. Who else sees it
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                A small number of service providers process data on our behalf and only on our instructions.
                At the time of writing, that means our website host and form handling provider, Google
                reCAPTCHA on the contact form, our email provider, and, where you have consented, Google
                Analytics. Some of them are based outside your country, which means data reaches servers
                elsewhere, including in the United States.
              </p>
              <p>
                reCAPTCHA is subject to Google's{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener"
                  className="text-brand-orange hover:underline font-semibold"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener"
                  className="text-brand-orange hover:underline font-semibold"
                >
                  Terms of Service
                </a>
                .
              </p>
              <p>
                We put contractual arrangements in place with each of them, and we do not pass your details to
                anyone else. We may disclose information where we are legally required to, and we will do so
                no more widely than the law requires.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              5. Where it goes
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                We operate from Serbia and several of our providers are based in the United States, so your
                information may be transferred and stored outside your own country. Where that involves a
                transfer out of the EEA or the UK, we rely on the safeguards available under data protection
                law, including standard contractual clauses where they apply.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              6. How long we keep it
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Enquiries that do not lead to work are kept for up to twenty four months, so that we recognise
                you if you come back, and then deleted. Records relating to work we actually do are kept for
                as long as the engagement needs and for the period our accounting and tax obligations require.
              </p>
              <p>
                You can ask us to delete your details sooner, and we will, unless we are required to keep
                them.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              7. How we keep it safe
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                This site is served over an encrypted connection. Access to enquiries is limited to the people
                who need it, which at present is a very short list. We use established providers for hosting,
                forms, and email rather than building our own.
              </p>
              <p>
                We are not going to claim more than that. We hold no security certification, and no set of
                measures makes any system perfectly secure. What we can say is that we keep the amount of data
                we hold deliberately small, which is the most effective protection available to a practice
                this size.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              8. Cookies
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                This site uses a small number of cookies. Some are strictly necessary to make it work, to
                remember your cookie choice, and, on the contact page only, to let reCAPTCHA protect the form.
                The rest are Google Analytics cookies, and they are only set if you accept them.
              </p>
              <p>
                You accept or decline non-essential cookies when you first arrive, and you can change that
                decision at any time from the Cookie Policy page, which is linked in the footer of every page.
                Declining limits nothing on this site.
              </p>
              <p>
                The site also loads its typeface from Google Fonts so that it displays correctly. If you would
                rather avoid that, most browsers let you block third party requests.
              </p>
              <p>
                Every cookie we set is listed by name, with what it does and how long it lasts, in the{" "}
                <Link to="/cookies" className="text-brand-orange hover:underline font-semibold">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              9. Links to other sites
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Our articles link out to the sources behind the figures we quote, and the footer links to our
                LinkedIn page. We do not control those sites, we are not responsible for their content or
                their privacy practices, and a link is not an endorsement. Read their policies if you go
                there.
              </p>
              <p>
                If you arrived here from somebody else's site, the same applies in reverse. We have no say in
                how they handle your data.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              10. Your rights
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                You can ask us to tell you what we hold about you and why, give you a copy of it, correct
                anything inaccurate, delete it, restrict what we do with it while a question is being
                resolved, or object to us using it at all. Where we rely on your consent, you can withdraw it
                at any time and we will stop.
              </p>
              <p>
                If you are in California, you also have the right to know what has been collected and for what
                purpose, to request deletion or correction, and to opt out of any sale or sharing of your
                information. We do not sell or share personal information as those terms are defined by the
                CCPA and CPRA, and we will not treat you differently for exercising any right.
              </p>
              <p>
                To use any of these, write to{" "}
                <a
                  href="mailto:damjan@orangebanana.co"
                  className="text-brand-orange hover:underline font-semibold"
                >
                  damjan@orangebanana.co
                </a>{" "}
                and we will check that the request is really coming from you, and then{" "}
                <strong className="text-brand-dark">respond within thirty days</strong>. If we need longer
                because the request is complex, we will tell you why before that period is up.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              11. If you want to complain
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                If you think we have handled your data badly, tell us first, because most things are quicker
                to fix directly. If that does not resolve it, you have the right to complain to a supervisory
                authority.
              </p>
              <p>
                In Serbia that is the{" "}
                <strong className="text-brand-dark">
                  Commissioner for Information of Public Importance and Personal Data Protection
                </strong>
                , at{" "}
                <a
                  href="https://www.poverenik.rs"
                  target="_blank"
                  rel="noopener"
                  className="text-brand-orange hover:underline font-semibold"
                >
                  poverenik.rs
                </a>
                . If you are in the EEA or the UK, you may also complain to the supervisory authority where
                you live or work.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              12. Children
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                This site is aimed at people acting in a professional capacity and is not directed at anyone
                under sixteen. We do not knowingly collect information from children. If you believe a child
                has sent us something, tell us and we will delete it.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              13. Changes to this policy
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                We will update this page when what we do changes, and the date at the top tells you when it
                was last revised. If a change is significant we will say so on the page rather than quietly
                amend it.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight leading-tight">
              14. How to contact us
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
                with any question about this policy or about anything we hold. If you need to reach us by
                post, ask and we will give you the registered address.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-300 pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link
              to="/terms"
              className="text-brand-orange font-bold text-sm hover:text-brand-dark transition-colors text-center"
            >
              Read the Terms of Use →
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
