import { Link } from "react-router";
import { LogoMark } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 py-10 sm:py-14 text-xs text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <LogoMark className="h-6 w-auto shrink-0 text-brand-orange" />
            <div className="flex items-center text-xs sm:text-sm font-bold text-white lowercase">
              orange banana
              <span className="text-slate-400 font-normal normal-case ml-2">· Insurance Marketing</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] sm:text-xs">
            <a
              href="https://www.linkedin.com/company/orange-banana/"
              target="_blank"
              rel="noopener"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-1.5 text-[11px] sm:text-xs leading-relaxed max-w-3xl">
            <p className="text-slate-300 font-semibold">Your insurance brand. Clarified.</p>
            <p>
              Orange Banana is the trading name of{" "}
              <span className="text-slate-300">Damjan Marković PR Orange Banana</span>, a sole proprietorship
              registered in Belgrade, Serbia. Tax ID (PIB) 114838659. Contact:{" "}
              <a href="mailto:damjan@orangebanana.co" className="text-brand-orange hover:underline font-semibold">
                damjan@orangebanana.co
              </a>
            </p>
            <p className="text-slate-500">
              Orange Banana is a brand and marketing practice. It is not an insurance broker, agent, carrier, or
              licensed adviser, and nothing on this site is an offer of insurance.
            </p>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 shrink-0">
            © 2026 Damjan Marković PR Orange Banana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
