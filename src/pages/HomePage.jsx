import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import MusicPlayer from '../components/MusicPlayer';
import VideoSection from '../components/VideoSection';
import AboutSection from '../components/AboutSection';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

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
      <SectionWrapper id="merch">
        <MerchSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <MerchTitle>Official Merch</MerchTitle>
            <MerchSubtitle>Exclusive apparel and accessories coming soon. Stay tuned for our upcoming collection.</MerchSubtitle>
            <ComingSoonBadge>
              <i className="fa-solid fa-clock"></i>
              Coming Soon
            </ComingSoonBadge>
          </motion.div>
        </MerchSection>
      </SectionWrapper>
      
      <SectionWrapper id="contact">
        <ContactSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ContactTitle>Get In Touch</ContactTitle>
            
            <ContactBannerContainer>
              <ContactBannerInner>
                <ContactBannerContent>
                  <ContactBannerIcon>
                    <i className="fa-brands fa-instagram"></i>
                  </ContactBannerIcon>
                  <ContactBannerText>
                    <ContactBannerTitle>DM on Instagram</ContactBannerTitle>
                    <ContactBannerDescription>
                      For all inquiries, please message CITY BOY directly on Instagram
                    </ContactBannerDescription>
                  </ContactBannerText>
                </ContactBannerContent>
                <ContactBannerActions>
                  <InstagramButton 
                    href="https://instagram.com/whatupcityboy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fa-brands fa-instagram"></i> @whatupcityboy
                  </InstagramButton>
                </ContactBannerActions>
              </ContactBannerInner>
            </ContactBannerContainer>
          </motion.div>
        </ContactSection>
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
    background-color: #0a0a0a;
  }
  
  &:nth-child(even) {
    background-color: #0D0D0D;
  }
`;

const MerchSection = styled.div`
  padding: 5rem 2rem;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const MerchTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const MerchSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
`;

const ComingSoonBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
  background: var(--secondary-color);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 50px;
  box-shadow: 0 8px 25px rgba(166, 124, 82, 0.3);
  
  i {
    font-size: 1.2rem;
  }
`;

const ContactSection = styled.div`
  padding: 5rem 2rem;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const ContactTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ContactBannerContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto 0;
`;

const ContactBannerInner = styled.div`
  background: rgba(20, 20, 20, 0.95);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.2rem;
  }
`;

const ContactBannerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const ContactBannerIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #E1306C, #833AB4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  flex-shrink: 0;
`;

const ContactBannerText = styled.div`
  text-align: left;
`;

const ContactBannerTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: white;
`;

const ContactBannerDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 300px;
  line-height: 1.4;
`;

const ContactBannerActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const InstagramButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #E1306C, #833AB4);
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  
  i {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 0.8rem 1rem;
  }
`;

export default HomePage; 