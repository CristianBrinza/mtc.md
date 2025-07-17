const GA_ID = import.meta.env.VITE_GOOGLE_MEASUREMENT_ID;

export function initAnalytics() {
  if (!GA_ID) return;

  // Load gtag script dynamically
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = window.gtag || gtag;

  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true });
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
