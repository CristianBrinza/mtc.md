import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../../analytics.ts';

interface ScrollToTopProps {
  behavior?: ScrollBehavior; // 'auto' | 'smooth'
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ behavior = 'auto' }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior,
    });
    trackPageView(pathname);
  }, [pathname, behavior]);

  return null;
};

export default ScrollToTop;
