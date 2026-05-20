export type LanguageCode =
  | "en-US"
  | "es-ES"
  | "fr-FR"
  | "de-DE"
  | "it-IT"
  | "pt-BR"
  | "ja-JP"
  | "ko-KR"
  | "zh-CN"
  | "hi-IN";

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
}

export const DEFAULT_LANGUAGE: LanguageCode = "en-US";

export const LANGUAGE_STORAGE_KEY = "movie-catalog-language";

export const LANGUAGES: LanguageOption[] = [
  { code: "en-US", label: "English", nativeLabel: "English" },
  { code: "es-ES", label: "Spanish", nativeLabel: "Español" },
  { code: "fr-FR", label: "French", nativeLabel: "Français" },
  { code: "de-DE", label: "German", nativeLabel: "Deutsch" },
  { code: "it-IT", label: "Italian", nativeLabel: "Italiano" },
  { code: "pt-BR", label: "Portuguese", nativeLabel: "Português" },
  { code: "ja-JP", label: "Japanese", nativeLabel: "日本語" },
  { code: "ko-KR", label: "Korean", nativeLabel: "한국어" },
  { code: "zh-CN", label: "Chinese", nativeLabel: "中文" },
  { code: "hi-IN", label: "Hindi", nativeLabel: "हिन्दी" },
];

export const isLanguageCode = (value: string): value is LanguageCode =>
  LANGUAGES.some((language) => language.code === value);

export const getLanguageOption = (code: LanguageCode): LanguageOption =>
  LANGUAGES.find((language) => language.code === code) ?? LANGUAGES[0];
