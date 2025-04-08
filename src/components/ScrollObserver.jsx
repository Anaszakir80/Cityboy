import { useEffect } from 'react';

const ScrollObserver = () => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    const elementInView = (el, offset = 0) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (1 - offset)
      );
    };
    
    const displayScrollElement = (element) => {
      element.dataset.scroll = 'in';
    };
    
    const hideScrollElement = (element) => {
      element.dataset.scroll = 'out';
    };
    
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        const offset = el.dataset.scrollOffset ? parseFloat(el.dataset.scrollOffset) : 0.2;
        if (elementInView(el, offset)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };
    
    // Initial check
    setTimeout(handleScrollAnimation, 300);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // If using Lenis, listen to Lenis events instead
    if (window.lenis) {
      window.lenis.on('scroll', handleScrollAnimation);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
      if (window.lenis) {
        window.lenis.off('scroll', handleScrollAnimation);
      }
    };
  }, []);
  
  return null;
};

export default ScrollObserver; 