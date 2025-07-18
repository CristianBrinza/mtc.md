const GA_ID = import.meta.env.VITE_GOOGLE_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export function initAnalytics() {
  if (!GA_ID) return;

  // 1. Prepare dataLayer & gtag()
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = window.gtag || gtag;

  // 2. Set default consent (v2) — deny everything until user choice
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_personalization: 'denied',
    ad_user_data: 'denied',
  });

  // 3. Load GA4 library
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // 4. Initialize Google Analytics
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    anonymize_ip: true,
  });
}

export function trackPageview(path: string) {
  if (window.gtag) {
    window.gtag('event', 'page_view', { page_path: path });
  }
}

export function trackEvent(action: string, label?: string) {
  if (window.gtag) {
    window.gtag('event', action, { event_label: label });
  }
}
