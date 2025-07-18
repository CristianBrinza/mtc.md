import React, { useEffect, useState } from 'react';
import './ConsentBanner.css';
import Button from '../Button.tsx';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

interface ConsentBannerProps {
  visible: boolean;
}

const ConsentBanner: React.FC<ConsentBannerProps> = ({ visible }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('userConsent');
    if (!saved) {
      setShowBanner(true);
    } else if (window.gtag) {
      // Re-apply consent state on reload
      window.gtag('consent', 'update', {
        ad_storage: saved,
        analytics_storage: saved,
        ad_personalization: saved,
        ad_user_data: saved,
      });
    }
  }, []);

  const accept = () => {
    localStorage.setItem('userConsent', 'granted');
    window.gtag?.('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_personalization: 'granted',
      ad_user_data: 'granted',
    });
    // Retrigger page_view now that analytics is enabled
    window.gtag?.('event', 'page_view');
    window.dataLayer?.push({ event: 'consent_granted' });
    setShowBanner(false);
  };

  const decline = () => {
    localStorage.setItem('userConsent', 'denied');
    window.gtag?.('consent', 'update', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_personalization: 'denied',
      ad_user_data: 'denied',
    });
    window.dataLayer?.push({ event: 'consent_denied' });
    setShowBanner(false);
  };

  if (!visible || !showBanner) return null;

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
        <Button onClick={accept}
                color="#ffffff"
                hover_bgcolor="var(--theme_primary_color_blue_4)"
                bgcolor="var(--theme_primary_color_blue_2)"
                hover_color="#ffffff"
        >Accept</Button>
      </div>
    </div>
  );
};

export default ConsentBanner;
