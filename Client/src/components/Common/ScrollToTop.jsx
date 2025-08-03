import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }, 0);
  }, [pathname]);

  return null;
}
