import { Link } from "react-router";
import { useConsent } from "../consent/ConsentContext";

export default function ConsentBanner() {
  const { bannerOpen, closeConsent, setConsent } = useConsent();
  if (!bannerOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-3 sm:p-5">
      <div className="max-w-5xl mx-auto bg-brand-dark border-2 border-brand-orange/50 rounded-2xl shadow-2xl p-5 sm:p-7">
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
          <div className="space-y-2 flex-1">
            <h2 className="text-white font-bold text-base sm:text-lg">A quick word about cookies.</h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We use cookies that are necessary to make this site work, and, only if you say yes, analytics that
              tell us which pages get read. We do not use advertising cookies and we do not sell anything about
              you. Read the{" "}
              <Link to="/cookies" onClick={closeConsent} className="text-brand-cyan hover:underline font-semibold">
                Cookie Policy
              </Link>{" "}
              or the{" "}
              <Link to="/privacy" onClick={closeConsent} className="text-brand-cyan hover:underline font-semibold">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setConsent("rejected")}
              className="px-6 py-3 rounded-full border-2 border-white/25 text-white font-semibold text-xs sm:text-sm hover:border-white hover:bg-white/5 transition-all whitespace-nowrap"
            >
              Necessary only
            </button>
            <button
              type="button"
              onClick={() => setConsent("accepted")}
              className="px-6 py-3 rounded-full bg-brand-orange text-white font-bold text-xs sm:text-sm hover:bg-white hover:text-brand-dark transition-all whitespace-nowrap shadow-lg"
            >
              Accept analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
