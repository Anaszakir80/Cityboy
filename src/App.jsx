import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import { useEffect, useState } from 'react';
import SmoothScroll from './components/LocomotiveScroll';
import ScrollObserver from './components/ScrollObserver';
import styled from 'styled-components';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load Font Awesome for icons
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
    
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Ensure body and html have proper scroll styles
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'visible';
    document.documentElement.style.height = 'auto';
    document.body.style.height = 'auto';
    
    setLoaded(true);
    
    return () => {
      if (script.parentNode) document.body.removeChild(script);
      if (link.parentNode) document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <SmoothScroll>
        <ScrollObserver />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              {/* Future routes will go here */}
              {/* <Route path="/music" element={<MusicPage />} /> */}
              {/* <Route path="/videos" element={<VideosPage />} /> */}
              {/* <Route path="/about" element={<AboutPage />} /> */}
              <Route path="*" element={<HomePage />} />
            </Route>
          </Routes>
        </Router>
      </SmoothScroll>
    </>
  );
}

export default App;
