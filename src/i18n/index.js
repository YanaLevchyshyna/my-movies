import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { LOCALS } from 'i18n/lng-constant.js';
import { en } from './locales/en.js';
import { uk } from './locales/uk.js';

// the translations
const resources = {
  [LOCALS.EN]: {
    translation: en,
  },
  [LOCALS.UK]: {
    translation: uk,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: LOCALS.UK,
  });

export default i18n;
