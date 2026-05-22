export const LOCALES = {
  en: {
    iso: "en-US",
    name: "English",
  },
  ar: {
    iso: "ar-SA",
    name: "العربية",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "en";
