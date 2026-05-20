import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext } from "@/hooks/language-context";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  getLanguageOption,
  isLanguageCode,
  type LanguageCode,
} from "@/lib/languages";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_LANGUAGE;
    }

    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage && isLanguageCode(storedLanguage)
      ? storedLanguage
      : DEFAULT_LANGUAGE;
  });

  const setLanguage = (newLanguage: LanguageCode) => {
    setLanguageState(newLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        languageOption: getLanguageOption(language),
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
