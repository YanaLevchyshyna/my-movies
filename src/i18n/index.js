import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { LOCALS } from 'i18n/lng-constant.js';
import translationEN from 'locales/EN/translation.json';
import translationUK from 'locales/UA/translation.json';

// the translations
const resources = {
  [LOCALS.EN]: {
    translation: translationEN,
  },
  [LOCALS.UK]: {
    translation: translationUK,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
  });

export default i18n;
