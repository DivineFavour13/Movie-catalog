import { DEFAULT_LANGUAGE } from "@/lib/languages";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/hooks/useLanguage";

export function useTranslation() {
  const { language } = useLanguage();

  return translations[language] ?? translations[DEFAULT_LANGUAGE];
}
