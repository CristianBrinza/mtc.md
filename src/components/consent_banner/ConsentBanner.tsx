import React, { useState, useEffect } from 'react';
import './ConsentBanner.css';
import Button from '../Button.tsx';
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag?: (...args: any[]) => void;
  }
}

interface ConsentBannerProps {
  visible: boolean;
}

const ConsentBanner: React.FC<ConsentBannerProps> = ({ visible }) => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('userConsent');
    if (!consentGiven) {
      setShowBanner(true); // Show banner if no consent has been given
    } else if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: consentGiven,
        analytics_storage: consentGiven,
      });
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('userConsent', 'granted');

    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
      window.gtag('event', 'page_view');
    }

    if (window.dataLayer) {
      window.dataLayer.push({ event: 'consent_granted' });
    }

    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('userConsent', 'denied');

    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
      });
    }

    if (window.dataLayer) {
      window.dataLayer.push({ event: 'consent_denied' });
    }

    setShowBanner(false);
  };

  if (!visible) {
    return null;
  }

  return showBanner ? (
    <div id="bannerStyles">
      <p>
        This website uses <Link to="/privacy">cookies</Link> to improve your
        experience.
      </p>
      <div id="bannerStyles_buttons">
        <Button onClick={handleDecline}>Decline</Button>
        <Button
          onClick={handleAccept}
          color="#ffffff"
          hover_bgcolor="var(--theme_primary_color_blue_4)"
          bgcolor="var(--theme_primary_color_blue_2)"
          hover_color="#ffffff"
        >
          Accept
        </Button>
      </div>
    </div>
  ) : null;
};

export default ConsentBanner;
