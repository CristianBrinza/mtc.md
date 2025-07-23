import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  behavior?: ScrollBehavior;
}

export default function ScrollToTop({ behavior = 'auto' }: Props) {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior });
  }, [pathname, search, behavior]);

  return null;
}
