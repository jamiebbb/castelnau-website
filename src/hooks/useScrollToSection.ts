
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
  delay?: number;
}

const useScrollToSection = (options: ScrollOptions = {}) => {
  const location = useLocation();
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastHashRef = useRef<string | null>(null);
  const { offset = 120, behavior = 'smooth', delay = 100 } = options;

  useEffect(() => {
    const scrollToSection = () => {
      // Skip if hash hasn't changed and is the same as lastHash
      if (location.hash && location.hash === lastHashRef.current) {
        return;
      }
      
      if (location.hash) {
        const targetId = location.hash.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          // Use setTimeout to ensure the DOM is fully rendered
          setTimeout(() => {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior
            });
          }, 300); // Short delay to ensure elements are rendered
        }
      } else {
        window.scrollTo(0, 0);
      }
      
      // Update lastHash after scrolling
      lastHashRef.current = location.hash;
    };

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Set a new timeout
    scrollTimeoutRef.current = setTimeout(scrollToSection, delay);

    // Cleanup function
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [location.hash, offset, behavior, delay]);

  // Return a function to manually scroll to a section
  const scrollToElement = (elementId: string, forceScroll = false) => {
    const element = document.getElementById(elementId);
    if (element) {
      // If forceScroll is true or hash is different, perform scroll
      if (forceScroll || `#${elementId}` !== lastHashRef.current) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior
        });
      }
      
      // Update URL hash without reloading
      window.history.pushState(null, '', `#${elementId}`);
      
      // Update lastHash after scrolling
      lastHashRef.current = `#${elementId}`;
    }
  };

  return { scrollToElement };
};

export default useScrollToSection;
