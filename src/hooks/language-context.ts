import { createContext } from "react";
import type { LanguageCode, LanguageOption } from "@/lib/languages";

export interface LanguageContextType {
  language: LanguageCode;
  languageOption: LanguageOption;
  setLanguage: (language: LanguageCode) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
