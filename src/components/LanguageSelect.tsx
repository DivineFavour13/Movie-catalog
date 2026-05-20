import { Globe2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/hooks/useTranslation";
import { LANGUAGES, type LanguageCode } from "@/lib/languages";

interface LanguageSelectProps {
  compact?: boolean;
}

export function LanguageSelect({ compact = false }: LanguageSelectProps) {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  return (
    <Select
      value={language}
      onValueChange={(value) => setLanguage(value as LanguageCode)}
    >
      <SelectTrigger
        size="sm"
        className={compact ? "w-[104px]" : "w-[172px]"}
        aria-label={t.language}
      >
        <Globe2 className="h-4 w-4" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {LANGUAGES.map((languageOption) => (
          <SelectItem key={languageOption.code} value={languageOption.code}>
            {compact
              ? languageOption.code.split("-")[0].toUpperCase()
              : languageOption.nativeLabel}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
