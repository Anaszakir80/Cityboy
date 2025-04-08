import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import MusicPlayer from '../components/MusicPlayer';
import VideoSection from '../components/VideoSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import styled from 'styled-components';

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <HeroSection />
      <SectionWrapper id="music">
        <MusicPlayer />
      </SectionWrapper>
      <SectionWrapper id="videos">
        <VideoSection />
      </SectionWrapper>
      <SectionWrapper>
        <AboutSection />
      </SectionWrapper>
      <SectionWrapper>
        <ContactSection />
      </SectionWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SectionWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0;

  &:nth-child(odd) {
    background-color: #0D0D0D;
  }
  
  &:nth-child(even) {
    background-color: #000000;
  }
`;

export default HomePage; 