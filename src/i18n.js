import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './i18n/locales/en.json';
import translationES from './i18n/locales/es.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Force Spanish on load always
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
