import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({ children }) {
  const lenisRef = useRef();
  
  useEffect(() => {
    // Initialize Lenis smooth scrolling with optimal settings
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,  // Disable smooth touch for better mobile performance
      touchMultiplier: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      syncTouch: false,
      infinite: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    });
    
    lenisRef.current = lenis;
    
    // Set up the animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    // Start the loop
    requestAnimationFrame(raf);

    // For debugging
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  // Add scroll to hash function
  useEffect(() => {
    function handleHashLinkClick(e) {
      const target = e.target.closest('a');
      if (!target) return;
      
      // Check if it's a hash link
      if (target.hash) {
        e.preventDefault();
        
        const targetElement = document.querySelector(target.hash);
        if (targetElement && lenisRef.current) {
          lenisRef.current.scrollTo(targetElement, {
            offset: 0,
            immediate: false,
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    }
    
    document.addEventListener('click', handleHashLinkClick);
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  return <>{children}</>;
} 