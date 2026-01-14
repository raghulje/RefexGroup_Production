import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/ga4';

/**
 * Custom hook to automatically track page views on route changes
 * This hook should be used in the router component
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track pageview on route change
    trackPageView(location.pathname + location.search, document.title);
  }, [location.pathname, location.search]);
};

