"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Locale } from "@/data/content";

const LocaleContext = createContext<{
  locale: Locale;
  toggle: () => void;
  t: typeof content.pl;
} | null>(null);

const STORAGE_KEY = "goz-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pl");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration-safe read of a persisted preference
    if (stored === "pl" || stored === "en") setLocale(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const toggle = () => setLocale((l) => (l === "pl" ? "en" : "pl"));

  return (
    <LocaleContext.Provider value={{ locale, toggle, t: content[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
