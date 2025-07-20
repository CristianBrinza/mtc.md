import ReactGA from 'react-ga4';

const GA_ID = import.meta.env.VITE_GOOGLE_MEASUREMENT_ID;
const GTM_ID = import.meta.env.VITE_GTM_ID;
let initialized = false;

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export function initAnalytics() {
  if (!GA_ID || initialized) return;

  // 1. Prepare dataLayer & gtag()
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = window.gtag || gtag;

  // Optionally load Google Tag Manager
  if (GTM_ID) {
    const script = document.createElement('script');
    script.innerHTML = `(
      function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');`;
    document.head.appendChild(script);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);
  }

  // 2. Set default consent (v2) — deny everything until user choice
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_personalization: 'denied',
    ad_user_data: 'denied',
  });

  // 3. Initialize Google Analytics via react-ga4
  ReactGA.initialize(GA_ID, { testMode: import.meta.env.DEV });
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    anonymize_ip: true,
    send_page_view: false,
  });
  const saved = localStorage.getItem('userConsent');
  if (saved === 'granted') {
    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_personalization: 'granted',
      ad_user_data: 'granted',
    });
    ReactGA.send('pageview');
  }
  initialized = true;
}

export function trackPageview(path: string, title?: string) {
  if (!initialized) return;
  ReactGA.send({ hitType: 'pageview', page: path, title });
}

export function trackEvent(action: string, label?: string) {
  if (!initialized) return;
  ReactGA.event({ category: 'interaction', action, label });
}
