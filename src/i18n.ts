import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importujeme překlady přímo z JSON souborů
import enTranslations from "./locales/en.json";
import deTranslations from "./locales/de.json";

i18n
  // Tento plugin detekuje jazyk nastavený v prohlížeči uživatele
  .use(LanguageDetector)
  // Tímto propojíme i18next s Reactem
  .use(initReactI18next)
  // Zde inicializujeme a konfigurujeme i18