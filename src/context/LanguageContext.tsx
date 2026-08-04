import React, { createContext, useContext, useState, useEffect } from "react";
import type { Translatable } from "../types/domain";

type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T>(obj: Translatable<T>) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = window.localStorage.getItem("iso42001-mlops-lang");
      return (saved === "en" || saved === "tr") ? saved : "tr";
    } catch {
      return "tr";
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem("iso42001-mlops-lang", lang);
    } catch (e) {
      console.error(e);
    }
  };

  // Dynamically update document properties for SEO and screen readers
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "tr"
      ? "ISO/IEC 42001 Teknik Uygulama & MLOps Entegrasyon Rehberi"
      : "ISO/IEC 42001 Technical Application & MLOps Integration Guide";
  }, [language]);

  // Helper function to resolve translated content
  const t = <T,>(obj: Translatable<T>): T => {
    return obj[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
