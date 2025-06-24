// LanguageContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

// Define the context type properly
interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'ro',
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState(
    localStorage.getItem('i18nextLng') || 'ro'
  );
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const setLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang); // asigură-te că schimbarea este aplicată
    setLanguageState(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  useEffect(() => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    let detectedLang = pathParts[0];

    const excludedPaths = ['/files/', '/images/', '/json/', '/app'];
    const isExcludedPath = excludedPaths.some(path =>
      location.pathname.startsWith(path)
    );
    if (isExcludedPath) return;

    if (!['ro', 'ru', 'en'].includes(detectedLang)) {
      detectedLang = localStorage.getItem('i18nextLng') || 'ro';
      const newPath =
        '/' +
        detectedLang +
        (location.pathname !== '/' ? location.pathname : '/');
      navigate(newPath, { replace: true });
    } else if (detectedLang !== i18n.language) {
      setLanguage(detectedLang);
    }
  }, [location.pathname, i18n.language, navigate]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
