import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import ConsentBanner from "./ConsentBanner";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const { pathname } = useLocation();

  // Every page starts at the top, the way a full page load would.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* dark placeholder while a page's code loads, so the footer doesn't jump up */}
      <Suspense fallback={<main className="flex-grow min-h-screen bg-brand-dark" />}>
        <Outlet />
      </Suspense>
      <Footer />
      <ConsentBanner />
    </div>
  );
}
