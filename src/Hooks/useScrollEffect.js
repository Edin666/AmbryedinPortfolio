import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position and return true if scrolled past a threshold.
 * This replaces your original `headerShadow()` function.
 * @param {number} threshold - The scroll threshold in pixels (default is 50).
 */
export const useHeaderScrollShadow = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use window.scrollY for modern browsers
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};