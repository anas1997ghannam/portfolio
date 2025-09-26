"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { IntlProvider } from "next-intl";
// Importing JSON files for language messages
import en from "../messages/en.json";
import ar from "../messages/ar.json";

type Lang = "en" | "ar";
const messages = { en, ar };

interface LangContextType {
  lang: Lang;
  switchLang: () => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const switchLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  return (
    <LangContext.Provider value={{ lang, switchLang }}>
      <IntlProvider messages={messages[lang]} locale={lang}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
}

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
};
