import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
    img.onload = () => setImageLoaded(true);
  }, []);

  const stats = [
    { number: '500K+', label: 'Monthly Listeners', icon: 'fa-brands fa-spotify' },
    { number: '50M+', label: 'Total Streams', icon: 'fa-solid fa-headphones' },
    { number: '120+', label: 'Live Shows', icon: 'fa-solid fa-microphone' },
    { number: '25+', label: 'Countries', icon: 'fa-solid fa-earth-americas' }
  ];

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
                      src="https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                      alt="City Boy"
                    />
                  </ArtistImageWrapper>
                  {!imageLoaded && <FallbackImage />}
                  <ImageOverlay />
                </ArtistImageContainer>
              </motion.div>
              
              <SocialLinksBar>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <SocialLinkText>Follow on Social Media</SocialLinkText>
                  <SocialIconsWrapper>
                    <SocialIcon href="https://instagram.com" target="_blank" $color="#E1306C">
                      <i className="fa-brands fa-instagram"></i>
                    </SocialIcon>
                    <SocialIcon href="https://twitter.com" target="_blank" $color="#1DA1F2">
                      <i className="fa-brands fa-x-twitter"></i>
                    </SocialIcon>
                    <SocialIcon href="https://spotify.com" target="_blank" $color="#1DB954">
                      <i className="fa-brands fa-spotify"></i>
                    </SocialIcon>
                    <SocialIcon href="https://youtube.com" target="_blank" $color="#FF0000">
                      <i className="fa-brands fa-youtube"></i>
                    </SocialIcon>
                    <SocialIcon href="https://tiktok.com" target="_blank" $color="#000000">
                      <i className="fa-brands fa-tiktok"></i>
                    </SocialIcon>
                  </SocialIconsWrapper>
                </motion.div>
              </SocialLinksBar>
            </ImageAndSocial>
            
            <TextContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <ArtistNameLarge>CITY BOY</ArtistNameLarge>
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
                  City Boy is an emerging artist bringing fresh energy to the music scene. With a unique blend of urban sounds and contemporary beats, City Boy is making waves in the industry. His latest single "BONITA" has been making waves across streaming platforms.
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
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <ReadMoreButton 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Full Biography <i className="fa-solid fa-arrow-right"></i>
                </ReadMoreButton>
              </motion.div>
            </TextContent>
          </BioPart>
          
          <StatsContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <StatsWrapper>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <StatCard>
                      <StatIconCircle>
                        <i className={stat.icon}></i>
                      </StatIconCircle>
                      <StatContent>
                        <StatNumber>{stat.number}</StatNumber>
                        <StatLabel>{stat.label}</StatLabel>
                      </StatContent>
                    </StatCard>
                  </motion.div>
                ))}
              </StatsWrapper>
            </motion.div>
          </StatsContainer>
          
          <HighlightsSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <HighlightsTitle>Career Highlights</HighlightsTitle>
              <HighlightsGrid>
                <HighlightCard>
                  <HighlightIcon>🏆</HighlightIcon>
                  <HighlightContent>
                    <HighlightTitle>Best New Artist</HighlightTitle>
                    <HighlightText>Awarded "Best New Artist" at the 2023 Music Awards</HighlightText>
                  </HighlightContent>
                </HighlightCard>
                <HighlightCard>
                  <HighlightIcon>🎵</HighlightIcon>
                  <HighlightContent>
                    <HighlightTitle>Chart Topper</HighlightTitle>
                    <HighlightText>#1 on Billboard Top 100 for 3 consecutive weeks</HighlightText>
                  </HighlightContent>
                </HighlightCard>
                <HighlightCard>
                  <HighlightIcon>🎤</HighlightIcon>
                  <HighlightContent>
                    <HighlightTitle>Sold Out Tour</HighlightTitle>
                    <HighlightText>Completely sold out nationwide tour in 2022</HighlightText>
                  </HighlightContent>
                </HighlightCard>
              </HighlightsGrid>
            </motion.div>
          </HighlightsSection>
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
    background: url("https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") no-repeat center center;
    background-size: cover;
    opacity: 0.05;
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
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  
  &:hover img {
    transform: scale(1.05);
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
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
`;

const SocialLinksBar = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
`;

const SocialLinkText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const SocialIcon = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$color || 'white'};
  font-size: 1.4rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
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
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 0, 80, 0.2);
  
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

const StatsContainer = styled.div`
  width: 100%;
`;

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const StatIconCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(29, 185, 84, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary-color);
  font-size: 1.8rem;
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--secondary-color);
  margin-bottom: 0.3rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const HighlightsSection = styled.div`
  width: 100%;
`;

const HighlightsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const HighlightIcon = styled.div`
  font-size: 2.5rem;
`;

const HighlightContent = styled.div`
  flex: 1;
`;

const HighlightTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const HighlightText = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

export default AboutSection; 