// src/initAnalytics.ts
import ReactGA from 'react-ga4';

const GA4_ID = import.meta.env.VITE_GOOGLE_MEASUREMENT_ID!;
const GTM_ID = import.meta.env.VITE_GOOGLE_TRACKING_TAG;
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;
let initialized = false;
let clarityLoaded = false;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function initAnalytics() {
  if (initialized || !GA4_ID) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args);
  };

  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(gaScript);

  window.gtag('js', new Date());
  window.gtag('config', GA4_ID, {
    anonymize_ip: true,
    send_page_view: false,
  });

  if (GTM_ID) {
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `;
    document.head.appendChild(gtmScript);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);
  }

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
  });

  ReactGA.initialize(GA4_ID);
  if (localStorage.getItem('userConsent') === 'granted') {
    loadClarity();
  }
  initialized = true;
}

function loadClarity() {
  if (clarityLoaded || !CLARITY_ID) return;
  clarityLoaded = true;
  const clarityScript = document.createElement('script');
  clarityScript.innerHTML = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${CLARITY_ID}");
  `;
  document.head.appendChild(clarityScript);
}

export function grantConsent() {
  if (!initialized) return;
  // update consent flags …
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
  });
  localStorage.setItem('userConsent', 'granted');
  loadClarity();
  // then fire the first page‑view
  ReactGA.send('pageview');
}

/** call on mount to unlock route‑based pageviews **without** firing one */
export function updateConsent() {
  if (!initialized) return;
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
  });
  localStorage.setItem('userConsent', 'granted');
  loadClarity();
}

export function trackPageview(path: string, title?: string) {
  if (!initialized) return;
  ReactGA.send({ hitType: 'pageview', page: path, title });
}

export function trackEvent(action: string, label?: string) {
  if (!initialized) return;
  ReactGA.event({ category: 'interaction', action, label });
}
