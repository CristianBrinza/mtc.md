import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function HomeTemplink() {
  const { t } = useTranslation();
  const lang = t('lang'); // e.g. "ro", "ru", "en"
  const target = `https://www.moldtelecom.md/${lang}`;

  useEffect(() => {
    let navigated = false;

    const markNavigated = () => {
      navigated = true;
    };
    window.addEventListener('pagehide', markNavigated);
    window.addEventListener('beforeunload', markNavigated);

    // Redirect după ~0.01 secunde
    const timer = setTimeout(() => {
      try {
        window.location.assign(target);
      } catch {
        // dacă eșuează, fallback mai jos
      }
    }, 10);

    // Fallback: dacă nu a început navigarea, forțează replace după 1.5s
    const fallback = setTimeout(() => {
      if (!navigated) {
        window.location.replace(target);
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallback);
      window.removeEventListener('pagehide', markNavigated);
      window.removeEventListener('beforeunload', markNavigated);
    };
  }, [target]);

  return null; // sau <p>Redirecting...</p>
}
