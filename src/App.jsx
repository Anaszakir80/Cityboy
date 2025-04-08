import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage.jsx';
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
      <ParticlesBackground>
        {Array.from({ length: 150 }).map((_, i) => (
          <Particle key={i} />
        ))}
      </ParticlesBackground>
      
      <SmoothScroll>
        <ScrollObserver />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              {/* Future routes will go here */}
              {/* <Route path="/music" element={<MusicPage />} /> */}
              {/* <Route path="/videos" element={<VideosPage />} /> */}
              {/* <Route path="/about" element={<AboutPage />} /> */}
              {/* <Route path="/contact" element={<ContactPage />} /> */}
              <Route path="*" element={<HomePage />} />
            </Route>
          </Routes>
        </Router>
      </SmoothScroll>
    </>
  );
}

const ParticlesBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const Particle = styled.div`
  position: absolute;
  width: ${() => Math.random() * 3 + 1}px;
  height: ${() => Math.random() * 3 + 1}px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  top: ${() => Math.random() * 100}vh;
  left: ${() => Math.random() * 100}vw;
  animation: particleFloat ${() => 20 + Math.random() * 40}s linear infinite;
  opacity: ${() => 0.2 + Math.random() * 0.6};
  box-shadow: 0 0 ${() => 3 + Math.random() * 5}px rgba(255, 255, 255, 0.7);
  
  @keyframes particleFloat {
    0% {
      transform: translateY(0) translateX(0);
    }
    25% {
      transform: translateY(-${() => Math.random() * 100 + 50}px) translateX(${() => Math.random() * 100 - 50}px);
    }
    50% {
      transform: translateY(-${() => Math.random() * 150 + 100}px) translateX(0);
    }
    75% {
      transform: translateY(-${() => Math.random() * 100 + 50}px) translateX(-${() => Math.random() * 100 - 50}px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
  }
`;

export default App;
