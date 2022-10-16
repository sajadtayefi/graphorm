import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fa from './language/fa/common.json';
import en from './language/eng/common.json'
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      fa: {
        translation: fa
      },
      en: {
        translation: en
      }
    },
  });