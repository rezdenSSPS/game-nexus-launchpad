import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// We'll store our translations in JSON files
import enTranslations from "./locales/en.json";
import deTranslations from "./locales/de.json";

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next
  .init({
    debug: true, // Set to false in production
    fallbackLng: "EN",
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    resources: {
      EN: {
        translation: enTranslations,
      },
      DE: {
        translation: deTranslations,
      },
    },
  });

export default i18n;