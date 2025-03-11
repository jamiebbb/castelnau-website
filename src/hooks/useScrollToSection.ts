
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
  const { offset = 120, behavior = 'smooth', delay = 100 } = options;
  
  // This useEffect will run whenever location.hash changes
  useEffect(() => {
    const scrollToSection = () => {
      if (location.hash) {
        const targetId = location.hash.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          // Force scroll to the element with offset
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior
          });
        }
      } else {
        // If no hash, scroll to top
        window.scrollTo(0, 0);
      }
    };

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Set a new timeout to scroll after a short delay
    scrollTimeoutRef.current = setTimeout(scrollToSection, delay);

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [location.hash, offset, behavior, delay]);

  // Function to scroll to an element by ID without changing URL
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Force scroll regardless of current location
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior
      });
      
      // Update URL hash without triggering a new scroll event
      window.history.pushState(null, '', `#${elementId}`);
    }
  };

  return { scrollToElement };
};

export default useScrollToSection;
