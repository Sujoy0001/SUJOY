import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Resets window scroll position to (0, 0) whenever the route path changes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Immediate jump is cleaner than slow scroll on page load
    });
  }, [pathname]);

  return null;
}
