
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
  const isInitialRender = useRef(true);
  
  // Handle hash changes including initial load
  useEffect(() => {
    // Skip on initial render if no hash is present
    if (isInitialRender.current && !location.hash) {
      isInitialRender.current = false;
      return;
    }
    
    // This will handle both direct URL access with hash and navigation changes
    const scrollToSection = () => {
      if (location.hash) {
        const targetId = location.hash.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          // Cancel any previous scroll animation
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          
          // Delay scrolling to ensure DOM is ready
          scrollTimeoutRef.current = setTimeout(() => {
            // Calculate position with offset
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
            
            // Perform the scroll
            window.scrollTo({
              top: offsetPosition,
              behavior
            });
            
            // Clear the timeout reference
            scrollTimeoutRef.current = null;
          }, delay);
        }
      } else {
        // If no hash, scroll to top with a brief delay
        scrollTimeoutRef.current = setTimeout(() => {
          window.scrollTo({ top: 0, behavior });
          scrollTimeoutRef.current = null;
        }, delay);
      }
    };

    // Execute scroll logic
    scrollToSection();
    isInitialRender.current = false;

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
      // Calculate position with offset
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      // Update URL hash first (to maintain browsing history)
      window.history.pushState(null, '', `#${elementId}`);
      
      // Then perform the explicit scroll
      window.scrollTo({
        top: offsetPosition,
        behavior
      });
    }
  };

  return { scrollToElement };
};

export default useScrollToSection;
