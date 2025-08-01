import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 1. Importujeme naše překladové soubory
import enTranslations from "./locales/en.json";
import deTranslations from "./locales/de.json";

i18n
  // 2. Použijeme plugin pro detekci jazyka v prohlížeči
  .use(LanguageDetector)
  // 3. Propojíme i18next s Reactem
  .use(initReactI18next)
  // 4. Inicializujeme a nastavíme i18next
  .init({
    // Zapne výpisy v konzoli, užitečné pro vývoj. V produkci nastavte na 'false'.
    debug: true,
    
    // Jazyk, který se použije, pokud detekovaný jazyk nebude k dispozici.
    fallbackLng: "EN",
    
    interpolation: {
      // React už sám o sobě chrání před XSS útoky, takže toto můžeme vypnout.
      escapeValue: false, 
    },
    
    // Zde definujeme naše zdroje překladů.
    resources: {
      EN: {
        translation: enTranslations,
      },
      DE: {
        translation: deTranslations,
      },
      // Pokud přidáte další jazyk (např. 'cs.json'), přidejte ho i sem:
      // CS: {
      //   translation: csTranslations,
      // },
    },
  });

export default i18n;