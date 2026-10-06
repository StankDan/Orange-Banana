import { useRef, useState, type FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router";

const FORMSPREE_FORM_ID = "xvzwzbrk";
const RECAPTCHA_SITE_KEY = "6Le9d7gsAAAAAIzdPJzD49qH5i_72A4w3xcwKwTa";

const FIRM_TYPES = ["Retail broker", "Wholesale broker", "MGA / MGU / Program", "Insurtech", "Other"];

const LABEL = "block text-[11px] sm:text-xs font-mono text-slate-300 mb-1 sm:mb-1.5 uppercase font-semibold";
const FIELD =
  "w-full bg-brand-dark border border-slate-600 rounded-xl px-4 py-3 sm:py-3.5 text-white focus:outline-none focus:border-brand-orange text-sm transition-colors";
const FIELD_ERROR = "mt-1.5 text-xs text-red-300 font-mono";

/** The "Book thirty minutes" form. Sends to Formspree, guarded by reCAPTCHA v2. */
export default function ContactForm() {
  const [state, submitToFormspree] = useForm(FORMSPREE_FORM_ID);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  if (state.succeeded) {
    return (
      <div
        role="status"
        className="p-4 sm:p-5 bg-brand-teal/20 border border-brand-cyan rounded-xl text-brand-cyan text-xs sm:text-sm font-mono text-center space-y-2"
      >
        <div className="text-base sm:text-lg font-bold">✓ Request Received</div>
        <div>Thank you! We reply within 24 hours.</div>
      </div>
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!recaptchaToken) return;
    const data = new FormData(e.currentTarget);
    data.set("g-recaptcha-response", recaptchaToken);
    submitToFormspree(data);

    // a token is single use, so the next attempt needs a fresh one
    recaptchaRef.current?.reset();
    setRecaptchaToken("");
  }

  const formFailed = state.errors && state.errors.getFormErrors().length > 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <input type="hidden" name="_subject" value="New enquiry from orangebanana.co" />
      {/* Formspree honeypot: bots fill it in, people never see it */}
      <p className="hidden">
        <label>
          Leave this empty <input name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label className={LABEL} htmlFor="pc-name">
          Your name
        </label>
        <input type="text" id="pc-name" name="name" required placeholder="Jane Doe" className={FIELD} />
        <ValidationError prefix="Name" field="name" errors={state.errors} className={FIELD_ERROR} />
      </div>

      <div>
        <label className={LABEL} htmlFor="pc-email">
          Work email
        </label>
        <input
          type="email"
          id="pc-email"
          name="email"
          required
          placeholder="jane@insurancefirm.com"
          className={FIELD}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className={FIELD_ERROR} />
      </div>

      <div>
        <label className={LABEL} htmlFor="pc-firm-type">
          Firm / program type
        </label>
        <select id="pc-firm-type" name="firm_type" required defaultValue="" className={`${FIELD} cursor-pointer`}>
          <option value="" disabled>
            Select firm or program type...
          </option>
          {FIRM_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="recaptcha-slot flex justify-center min-h-[78px]">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          theme="dark"
          onChange={(token) => {
            setRecaptchaToken(token ?? "");
          }}
          onExpired={() => setRecaptchaToken("")}
        />
      </div>

      {formFailed && (
        <p role="alert" className="text-xs sm:text-sm text-red-300 font-mono text-center">
          Something went wrong sending that. Please try again, or email damjan@orangebanana.co directly.
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={state.submitting || !recaptchaToken}
          className={`w-full py-3.5 sm:py-4 rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base hover:bg-white hover:text-brand-dark transition-all shadow-xl flex items-center justify-center gap-2 disabled:opacity-60 disabled:hover:bg-brand-orange disabled:hover:text-white ${
            state.submitting ? "disabled:cursor-wait" : "disabled:cursor-not-allowed"
          }`}
        >
          {state.submitting ? "Sending…" : "Book thirty minutes"}
        </button>
        <p className="text-center text-[11px] sm:text-xs text-slate-400 font-mono mt-2.5 sm:mt-3">
          We reply within 24 hours.
        </p>
        <p className="text-center text-[11px] text-slate-400 leading-relaxed mt-3">
          By sending this you agree to our{" "}
          <Link to="/privacy" className="text-brand-cyan hover:underline font-semibold">
            Privacy Policy
          </Link>
          . We use your details to reply to you and nothing else.
        </p>
      </div>
    </form>
  );
}
