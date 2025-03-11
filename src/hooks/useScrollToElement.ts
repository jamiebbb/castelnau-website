
export const useScrollToElement = () => {
  const scrollToElement = (elementId: string) => {
    // Add a small timeout to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const navHeight = 120; // Height of fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return scrollToElement;
};
