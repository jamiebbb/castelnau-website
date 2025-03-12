
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
  const { offset = 120, behavior = 'smooth', delay = 300 } = options;
  
  // Handle hash changes including initial load
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      
      // Cancel any previous scroll animation
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Use a delay to ensure DOM is fully rendered
      scrollTimeoutRef.current = setTimeout(() => {
        const element = document.getElementById(targetId);
        
        if (element) {
          // Calculate position with offset
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;
          
          // Perform the scroll
          window.scrollTo({
            top: offsetPosition,
            behavior
          });
        }
        
        scrollTimeoutRef.current = null;
      }, delay);
    }

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [location.hash, offset, behavior, delay]);

  // Function to manually scroll to an element by ID
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    
    if (element) {
      // Update URL hash
      window.history.pushState(null, '', `#${elementId}`);
      
      // Calculate position with offset
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      // Perform the scroll
      window.scrollTo({
        top: offsetPosition,
        behavior
      });
    }
  };

  return { scrollToElement };
};

export default useScrollToSection;

