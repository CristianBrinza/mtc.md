import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  behavior?: ScrollBehavior; // 'auto' | 'smooth'
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ behavior = 'instant' }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior,
    });
  }, [pathname, behavior]);

  return null;
};

export default ScrollToTop;
