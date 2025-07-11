export const initGA = () => {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  if (!id || typeof window === 'undefined') return;

  // Load the gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  // Initialize the dataLayer and gtag function
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;

  gtag('js', new Date());
  gtag('config', id);

  trackPageView();
  startPageTracking();
  startClickTracking();
  startVisibilityTracking();
};

export const trackEvent = (
  action: string,
  category?: string,
  label?: string,
  value?: number
) => {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  const gtag = (window as any).gtag;
  if (!id || typeof gtag !== 'function') return;

  gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    page_path: window.location.pathname,
  });
};

export const trackPageView = (path: string = window.location.pathname) => {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  const gtag = (window as any).gtag;
  if (!id || typeof gtag !== 'function') return;

  gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};

export const startPageTracking = () => {
  const push = history.pushState;
  history.pushState = function (...args) {
    push.apply(this, args);
    trackPageView();
  } as typeof history.pushState;
  window.addEventListener('popstate', () => trackPageView());
};

export const startClickTracking = () => {
  document.addEventListener('click', event => {
    const target = event.target as HTMLElement | null;
    const element = target?.closest('[data-analytics-label], [role="button"], button, a');
    if (element) {
      const label =
        element.getAttribute('data-analytics-label') ||
        element.id ||
        (element.textContent || '').trim();
      const category =
        element.getAttribute('data-analytics-category') || element.tagName.toLowerCase();
      const action = element.getAttribute('data-analytics-action') || 'click';
      trackEvent(action, category, label);
    }
  });
};

export const startVisibilityTracking = () => {
  const observer = new MutationObserver(mutations => {
    for (const m of mutations) {
      if (m.type === 'attributes') {
        const el = m.target as HTMLElement;
        if (el.hasAttribute('data-analytics-toggle')) {
          const isOpen =
            el.getAttribute('aria-expanded') === 'true' ||
            el.hasAttribute('open') ||
            !el.hasAttribute('hidden');
          const label = el.getAttribute('data-analytics-label') || el.id || el.tagName.toLowerCase();
          trackEvent(isOpen ? 'open' : 'close', 'toggle', label);
        }
      }
    }
  });
  document.querySelectorAll('[data-analytics-toggle]').forEach(el => {
    observer.observe(el, { attributes: true, attributeFilter: ['open', 'aria-expanded', 'hidden'] });
  });
};

