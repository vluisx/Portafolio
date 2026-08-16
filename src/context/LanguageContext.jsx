import { createContext, useState, useContext } from 'react';
import es from '../i18n/locales/es.json';
import en from '../i18n/locales/en.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('es'); // Default to Spanish

  const t = (path) => {
    const keys = path.split('.');
    let current = lang === 'es' ? es : en;
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
