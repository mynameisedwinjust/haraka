import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

const STORAGE_KEY = "haraka-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "fr") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
    
    // Trigger Google Translate
    if (l === "fr") {
      document.cookie = "googtrans=/en/fr; path=/; domain=" + window.location.hostname;
      document.cookie = "googtrans=/en/fr; path=/";
    } else {
      document.cookie = "googtrans=/en/en; path=/; domain=" + window.location.hostname;
      document.cookie = "googtrans=/en/en; path=/";
    }
    
    window.location.reload();
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

import { translations, type TranslationKey } from "./translations";

export function useTranslations() {
  const { lang } = useLang();
  return function t(key: TranslationKey) {
    return translations[lang]?.[key] || translations.en[key] || key;
  };
}
