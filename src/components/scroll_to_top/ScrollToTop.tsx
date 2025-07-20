import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageview } from '../../initAnalytics';

interface Props {
  behavior?: ScrollBehavior;
}

export default function ScrollToTop({ behavior = 'auto' }: Props) {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior });
    trackPageview(pathname + search, document.title);
  }, [pathname, search, behavior]);

  return null;
}
