import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { loadAnalytics } from "./analytics";

const CONSENT_KEY = "ob_consent_v1";

export type ConsentValue = "accepted" | "rejected";

type ConsentContextValue = {
  bannerOpen: boolean;
  openConsent: () => void;
  closeConsent: () => void;
  setConsent: (value: ConsentValue) => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

function readConsent(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function writeConsent(value: ConsentValue): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // storage blocked: the banner simply comes back next visit
  }
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored === "accepted") loadAnalytics();
    else if (stored !== "rejected") setBannerOpen(true);
  }, []);

  const openConsent = useCallback(() => setBannerOpen(true), []);
  const closeConsent = useCallback(() => setBannerOpen(false), []);
  const setConsent = useCallback((value: ConsentValue) => {
    writeConsent(value);
    setBannerOpen(false);
    if (value === "accepted") loadAnalytics();
  }, []);

  const value = useMemo(
    () => ({ bannerOpen, openConsent, closeConsent, setConsent }),
    [bannerOpen, openConsent, closeConsent, setConsent],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used inside <ConsentProvider>");
  return ctx;
}
