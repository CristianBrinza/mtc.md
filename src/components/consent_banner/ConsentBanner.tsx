// src/components/consent_banner/ConsentBanner.tsx
import { useEffect, useState } from 'react';
import './ConsentBanner.css';
import Button from '../Button';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

interface Props {
  visible: boolean;
  onAccept?: () => void;
  onDecline?: () => void;
}

export default function ConsentBanner({ visible, onAccept, onDecline }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('userConsent');
    if (!saved) setShow(true);
    else {
      window.gtag('consent', 'update', {
        ad_storage: saved,
        analytics_storage: saved,
      });
    }
  }, []);

  const accept = () => {
    setShow(false);
    onAccept?.();
  };

  const decline = () => {
    localStorage.setItem('userConsent', 'denied');
    window.gtag('consent', 'update', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
    });
    window.dataLayer.push({ event: 'consent_denied' });
    setShow(false);
    onDecline?.();
  };

  if (!visible || !show) return null;

  return (
    <div id="bannerStyles">
      <p>
        This website uses{' '}
        <a
          href="https://www.moldtelecom.md/files/Politica%20cookies%20Moldtelecom.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          cookies
        </a>{' '}
        to improve your experience.
      </p>
      <div id="bannerStyles_buttons">
        <Button onClick={decline}>Decline</Button>
        <Button
          onClick={accept}
          color="#ffffff"
          bgcolor="var(--theme_primary_color_blue_2)"
          hover_bgcolor="var(--theme_primary_color_blue_4)"
          hover_color="#ffffff"
        >
          Accept
        </Button>
      </div>
    </div>
  );
}
