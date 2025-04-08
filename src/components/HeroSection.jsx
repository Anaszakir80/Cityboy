import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
    img.onload = () => setImageLoaded(true);
  }, []);

  const letters = "CITYBOY".split("");
  
  return (
    <HeroContainer className="scroll-container">
      <ImageBackground $loaded={imageLoaded}>
        <img 
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="City Boy Background"
        />
      </ImageBackground>
      
      {!imageLoaded && <FallbackImage />}
      
      <Overlay />
      
      <ContentContainer>
        <LettersContainer>
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              {letter}
            </motion.span>
          ))}
        </LettersContainer>
        
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.2,
            type: "spring"
          }}
        >
          <Tagline>
            <TaglineHighlight>New</TaglineHighlight> Single Out Now
          </Tagline>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.4,
            type: "spring",
            stiffness: 100
          }}
        >
          <SingleTitleContainer>
            <SingleTitle>"BONITA"</SingleTitle>
            <TitleUnderline 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1.8 }}
            />
          </SingleTitleContainer>
        </motion.div>
        
        <ButtonGroup>
          {[
            { icon: "fa-brands fa-spotify", text: "Spotify", bg: "#1DB954", link: "https://open.spotify.com/album/6ylI0fsk7lONrxj8hw5YwM?si=wTlqlrPETaqFE7tJNKKQ0A" },
            { icon: "fa-brands fa-apple", text: "Apple Music", bg: "#FFFFFF", color: "#000", link: "https://music.apple.com/us/album/bonita/1798939049?i=179893905z" },
            { icon: "fa-brands fa-youtube", text: "YouTube", bg: "#FF0000", link: "https://www.youtube.com" }
          ].map((btn, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.8 + index * 0.2,
                type: "spring" 
              }}
            >
              <StreamButton 
                href={btn.link} 
                target="_blank"
                $bg={btn.bg}
                $color={btn.color}
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: "0 5px 20px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={btn.icon}></i> {btn.text}
              </StreamButton>
            </motion.div>
          ))}
        </ButtonGroup>
      </ContentContainer>
      
      
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  background-color: transparent;
`;

const ImageBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: ${props => props.$loaded ? 0.5 : 0};
  transition: opacity 0.5s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.4) contrast(1.2) blur(1px);
  }
`;

const FallbackImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #000000, #1a1a1a);
  z-index: -2;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: -1;
  pointer-events: none;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(255, 0, 80, 0.08) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const ContentContainer = styled.div`
  text-align: center;
  z-index: 2;
  padding: 0 1rem;
  margin-top: -5vh;
`;

const LettersContainer = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  letter-spacing: 6px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  perspective: 1000px;
  
  span {
    display: inline-block;
    background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(255, 0, 80, 0.5);
    transform-style: preserve-3d;
  }
  
  @media (max-width: 768px) {
    font-size: 4rem;
    letter-spacing: 4px;
  }
  
  @media (max-width: 480px) {
    font-size: 3rem;
    letter-spacing: 2px;
  }
`;

const Tagline = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 3px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    letter-spacing: 2px;
  }
`;

const TaglineHighlight = styled.span`
  color: var(--secondary-color);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--secondary-color);
  }
`;

const SingleTitleContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 3rem;
`;

const SingleTitle = styled.h3`
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const TitleUnderline = styled(motion.div)`
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--secondary-color), var(--accent-color), transparent);
  position: absolute;
  bottom: -10px;
  left: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const StreamButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 1.8rem;
  background-color: ${props => props.$bg || 'var(--secondary-color)'};
  color: ${props => props.$color || 'white'};
  font-weight: 600;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.6s ease;
  }
  
  &:hover:before {
    left: 100%;
  }
  
  i {
    font-size: 1.3rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    
    i {
      font-size: 1.1rem;
    }
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  
  .arrows {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .arrow {
    width: 15px;
    height: 15px;
    border-right: 3px solid white;
    border-bottom: 3px solid white;
    transform: rotate(45deg);
    margin: -6px;
    animation: scroll 2s infinite;
  }
  
  .arrow:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .arrow:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  @keyframes scroll {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-5px, -5px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(5px, 5px);
    }
  }
`;

const ScrollText = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 15px;
`;

export default HeroSection; 