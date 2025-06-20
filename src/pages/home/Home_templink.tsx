import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function HomeTemplink() {
  const { t } = useTranslation();

  useEffect(() => {
    window.location.href = `https://www.moldtelecom.md/${t('lang')}`;
  });

  return null; // sau un fallback gen: <p>Redirecting...</p>
}
