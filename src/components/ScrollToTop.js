import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ behavior = 'smooth', delay = 50 }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // small delay to let route render content before scrolling
    const id = setTimeout(() => {
      if (typeof window !== 'undefined') {
        // prefer smooth behavior when supported
        try {
          window.scrollTo({ top: 0, behavior });
        } catch (e) {
          // fallback for older browsers
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }
    }, delay);

    return () => clearTimeout(id);
  }, [pathname, behavior, delay]);

  return null;
};

export default ScrollToTop;
