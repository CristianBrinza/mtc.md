// src/initAnalytics.ts
let ReactGA: typeof import('react-ga4').default | null = null;

const GA4_ID = import.meta.env.VITE_GOOGLE_MEASUREMENT_ID!;
const GTM_ID = import.meta.env.VITE_GOOGLE_TRACKING_TAG;
let initialized = false;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export async function initAnalytics() {
  if (initialized || !GA4_ID) return;
  const module = await import('react-ga4');
  ReactGA = module.default;
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

  ReactGA!.initialize(GA4_ID);
  initialized = true;
}

export function grantConsent() {
  if (!initialized || !ReactGA) return;
  // update consent flags …
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
  });
  localStorage.setItem('userConsent', 'granted');
  // then fire the first page‑view
  ReactGA.send('pageview');
}

/** call on mount to unlock route‑based pageviews **without** firing one */
export function updateConsent() {
  if (!initialized || !ReactGA) return;
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
  });
  localStorage.setItem('userConsent', 'granted');
}

export function trackPageview(path: string, title?: string) {
  if (!initialized || !ReactGA) return;
  ReactGA.send({ hitType: 'pageview', page: path, title });
}

export function trackEvent(action: string, label?: string) {
  if (!initialized || !ReactGA) return;
  ReactGA.event({ category: 'interaction', action, label });
}
