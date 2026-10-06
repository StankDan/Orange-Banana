import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { CloseIcon, LogoMark, MenuIcon } from "./icons";

const NAV_ITEMS = [
  { to: "/", label: "Home", isActive: (p: string) => p === "/" },
  { to: "/who-we-work-with", label: "Who We Work With", isActive: (p: string) => p === "/who-we-work-with" },
  { to: "/approach", label: "Approach", isActive: (p: string) => p === "/approach" },
  { to: "/what-we-do", label: "What We Do", isActive: (p: string) => p === "/what-we-do" },
  { to: "/insights", label: "Insights", isActive: (p: string) => p === "/insights" || p.startsWith("/insights/") },
];

const NAV_INACTIVE = "hover:text-brand-orange transition-colors";
const NAV_ACTIVE = "hover:text-brand-orange transition-colors text-brand-orange font-bold";
const START_ACTIVE =
  "px-4 sm:px-6 py-2.5 rounded-full bg-white text-brand-dark text-xs sm:text-sm font-bold transition-all flex items-center gap-2 text-center";
const START_INACTIVE =
  "px-4 sm:px-6 py-2.5 rounded-full bg-brand-orange text-white text-xs sm:text-sm font-bold hover:bg-white hover:text-brand-dark transition-all flex items-center gap-2 text-center";
const MOBILE_LINK = "block w-full text-left py-2 hover:text-brand-orange transition-colors";

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on any navigation, so a link tapped from anywhere never leaves it hanging open.
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <LogoMark className="h-8 w-auto shrink-0 text-brand-orange transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl text-white tracking-tight leading-none lowercase">
              orange banana
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold text-brand-orange tracking-wider uppercase mt-1">
              Insurance Marketing
            </span>
          </div>
        </Link>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className={item.isActive(pathname) ? NAV_ACTIVE : NAV_INACTIVE}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Header CTA & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/start-a-conversation"
            className={pathname === "/start-a-conversation" ? START_ACTIVE : START_INACTIVE}
          >
            Start a conversation
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-brand-dark/98 border-b border-white/10 px-6 py-6 space-y-4 text-slate-300 text-base font-medium"
        >
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className={MOBILE_LINK} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link
            to="/start-a-conversation"
            className="block w-full text-left py-2 text-brand-orange font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Start a conversation &rarr;
          </Link>
        </div>
      )}
    </header>
  );
}
