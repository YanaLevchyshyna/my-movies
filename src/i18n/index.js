import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

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
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      // order and from where user language should be detected
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
    },
    resources,
    fallbackLng: LOCALS.EN,
    debug: true,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: '../i18n/locales',
    },
  });

export default i18n;
