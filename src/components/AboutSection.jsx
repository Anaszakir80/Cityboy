import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = "/src/assets/IMG_9036 Medium.jpeg";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <AboutSectionWrapper>
    <AboutContainer id="about">
      <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionTitle>About The Artist</SectionTitle>
            <SectionSubtitle>The story behind the music</SectionSubtitle>
          </motion.div>
      </SectionHeader>
      
        <ContentLayout>
          <BioPart>
            <ImageAndSocial>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <ArtistImageContainer>
                  <ArtistImageWrapper $loaded={imageLoaded}>
                    <img
                      src="/src/assets/IMG_9036 Medium.jpeg"
                      alt="City Boy"
                    />
                  </ArtistImageWrapper>
                  {!imageLoaded && <FallbackImage />}
                  <ImageOverlay />
                </ArtistImageContainer>
              </motion.div>
            </ImageAndSocial>
            
            <TextContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <ArtistNameLarge className="brand-font">CITY BOY</ArtistNameLarge>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <QuoteBlock>
                  <QuoteIcon><i className="fa-solid fa-quote-left"></i></QuoteIcon>
                  <Quote>Music is the soundtrack of your life</Quote>
                </QuoteBlock>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <BioParagraph>
                  City Boy is an emerging artist captivating audiences with his authentic voice and dynamic presence. Born from genuine experiences and a passion for self-expression, his creative journey reflects the pulse of urban life and the diverse influences that shape modern culture. His latest single "BONITA" has been making waves across streaming platforms.
                </BioParagraph>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <BioParagraph>
                  Drawing inspiration from urban culture and modern life, City Boy's music resonates with a global audience. His distinctive style and authentic approach to music have earned him a growing fanbase worldwide.
                </BioParagraph>
              </motion.div>
            </TextContent>
          </BioPart>
          
          <InstagramBannerSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <InstagramBannerContainer>
                <InstagramBannerInner>
                  <InstagramBannerContent>
                    <InstagramBannerIcon>
                      <i className="fa-brands fa-instagram"></i>
                    </InstagramBannerIcon>
                    <InstagramBannerText>
                      <InstagramBannerTitle>Follow on Instagram</InstagramBannerTitle>
                      <InstagramBannerDescription>
                        Stay updated with the latest releases, behind-the-scenes content and more
                      </InstagramBannerDescription>
                    </InstagramBannerText>
                  </InstagramBannerContent>
                  <InstagramBannerActions>
                    <InstagramButton 
                      href="https://instagram.com/whatupcityboy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fa-brands fa-instagram"></i> @whatupcityboy
                    </InstagramButton>
                  </InstagramBannerActions>
                </InstagramBannerInner>
              </InstagramBannerContainer>
            </motion.div>
          </InstagramBannerSection>
        </ContentLayout>
    </AboutContainer>
    </AboutSectionWrapper>
  );
};

const AboutSectionWrapper = styled.section`
  width: 100%;
  background-color: transparent;
  position: relative;
  padding: 7rem 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/src/assets/IMG_9060 Medium.jpeg") no-repeat center center;
    background-size: cover;
    opacity: 0.08;
    z-index: 0;
  }
`;

const AboutContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;
  
const SectionTitle = styled.h2`
  font-size: 3.5rem;
    font-weight: 900;
  margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const BioPart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ImageAndSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ArtistImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  
  &:hover img {
    transform: scale(1.03);
  }
`;

const ArtistImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.$loaded ? 1 : 0};
  transition: opacity 0.5s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: all 0.5s ease;
    filter: brightness(1.1) contrast(1.05);
  }
`;

const FallbackImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #121212, #1e1e1e);
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:after {
    content: '';
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.2);
    border-top-color: var(--secondary-color);
    animation: spin 1s infinite linear;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
`;

const ArtistNameLarge = styled.h3`
  font-size: 3.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  margin: 0 0 10px 0;
  display: inline-block;
  color: transparent;
  
  /* Base text */
  &::before {
    content: "CITY BOY";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px rgba(166, 124, 82, 0.1);
  }
  
  /* Shimmer layer */
  &::after {
    content: "CITY BOY";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s infinite linear;
  }
  
  @keyframes shimmer {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const QuoteBlock = styled.div`
  position: relative;
  padding-left: 2rem;
  margin: 1rem 0 2rem;
`;

const QuoteIcon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1.5rem;
  color: var(--secondary-color);
  opacity: 0.7;
`;

const Quote = styled.blockquote`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 500;
  color: var(--text-secondary);
  line-height: 1.4;
`;

const BioParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`;

const ReadMoreButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: transparent;
  color: var(--secondary-color);
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.8rem 0;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  
  i {
    transition: transform 0.3s ease;
  }
  
  &:hover i {
    transform: translateX(5px);
  }
`;

const InstagramBannerSection = styled.div`
  margin-top: 4rem;
  width: 100%;
`;

const InstagramBannerContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const InstagramBannerInner = styled.div`
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

const InstagramBannerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const InstagramBannerIcon = styled.div`
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

const InstagramBannerText = styled.div`
  text-align: left;
`;

const InstagramBannerTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: white;
`;

const InstagramBannerDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 300px;
  line-height: 1.4;
`;

const InstagramBannerActions = styled.div`
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

export default AboutSection; 