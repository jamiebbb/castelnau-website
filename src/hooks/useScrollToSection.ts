
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
  const isInitialRender = useRef(true);
  const hasScrolledRef = useRef(false);
  
  // Handle hash changes including initial load
  useEffect(() => {
    // This flag helps us track if we've already attempted to scroll
    if (location.hash && !hasScrolledRef.current) {
      hasScrolledRef.current = true;
      
      const scrollToSection = () => {
        const targetId = location.hash.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          // Cancel any previous scroll animation
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          
          // Use a longer delay to ensure DOM is fully rendered
          scrollTimeoutRef.current = setTimeout(() => {
            // Calculate position with offset
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
            
            // Perform the scroll
            window.scrollTo({
              top: offsetPosition,
              behavior
            });
            
            // Double-check scroll position after a short delay
            // This helps ensure we really get to the right position
            setTimeout(() => {
              const newElementPosition = element.getBoundingClientRect().top + window.scrollY;
              if (Math.abs(window.scrollY - (newElementPosition - offset)) > 10) {
                window.scrollTo({
                  top: newElementPosition - offset,
                  behavior: 'auto' // Instant jump as a fallback
                });
              }
            }, 500);
            
            // Clear the timeout reference
            scrollTimeoutRef.current = null;
          }, delay);
        }
      };

      // Execute scroll logic
      scrollToSection();
    } else if (!location.hash) {
      // Reset flag when navigating to a page without hash
      hasScrolledRef.current = false;
      
      // If no hash, scroll to top with a brief delay
      scrollTimeoutRef.current = setTimeout(() => {
        window.scrollTo({ top: 0, behavior });
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
      // Update URL hash first (to maintain browsing history)
      window.history.pushState(null, '', `#${elementId}`);
      
      // Calculate position with offset
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      // Perform the explicit scroll
      window.scrollTo({
        top: offsetPosition,
        behavior
      });
      
      // Set our flag to indicate we've scrolled
      hasScrolledRef.current = true;
    }
  };

  return { scrollToElement };
};

export default useScrollToSection;
