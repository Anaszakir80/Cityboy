import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Single featured video data
  const featuredVideo = {
    title: "BONITA - Official Music Video",
    date: "June 12, 2023",
    views: "1.2M views",
    thumbnail: "/src/assets/IMG_9047 Medium.jpeg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  };
  
  useEffect(() => {
    // Preload the featured video thumbnail
    const img = new Image();
    img.src = featuredVideo.thumbnail;
    
    img.onload = () => {
      setVideoLoaded(true);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image for ${featuredVideo.title}`);
      setVideoLoaded(true); // Still set to true to avoid blocking UI
    };
  }, [featuredVideo.thumbnail]);

  const handleWatchVideo = () => {
    window.open(featuredVideo.videoUrl, "_blank");
  };

  return (
    <VideoSectionWrapper>
      <VideoContainer id="videos">
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Latest Video</SectionTitle>
            <SectionSubTitle>Watch the official music video</SectionSubTitle>
          </motion.div>
        </SectionHeader>
        
        <VideoContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <FeaturedVideoWrapper>
              <FeaturedVideoThumbnail $loaded={videoLoaded}>
                <img 
                  src={featuredVideo.thumbnail} 
                  alt={featuredVideo.title}
                />
                {!videoLoaded && <Loader />}
                <FeaturedPlayButtonWrapper>
                  <FeaturedPlayButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleWatchVideo}
                  >
                    <i className="fa-solid fa-play"></i>
                  </FeaturedPlayButton>
                </FeaturedPlayButtonWrapper>
                <VideoInfo>
                  <VideoTitle>{featuredVideo.title}</VideoTitle>
                  <VideoMeta>
                    <span>{featuredVideo.date}</span>
                    <Dot />
                    <span>{featuredVideo.views}</span>
                  </VideoMeta>
                </VideoInfo>
              </FeaturedVideoThumbnail>
            </FeaturedVideoWrapper>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <CTAButtonsContainer>
              <PrimaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWatchVideo}
              >
                <i className="fa-solid fa-play"></i> Watch Video
              </PrimaryButton>
              
              <SecondaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://youtube.com", "_blank")}
              >
                <i className="fa-brands fa-youtube"></i> Subscribe
              </SecondaryButton>
            </CTAButtonsContainer>
          </motion.div>
        </VideoContent>
      </VideoContainer>
    </VideoSectionWrapper>
  );
};

const VideoSectionWrapper = styled.section`
  width: 100%;
  background-color: transparent;
  position: relative;
  padding: 5rem 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/src/assets/IMG_9061 Medium.jpeg") no-repeat center center;
    background-size: cover;
    opacity: 0.12;
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
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
    letter-spacing: 1px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
  }
`;

const SectionSubTitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const FeaturedVideoWrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  position: relative;
  background: #0a0a0a;
  transform-style: preserve-3d;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    pointer-events: none;
  }
  
  @media (max-width: 480px) {
    border-radius: 12px;
    
    &:after {
      border-radius: 12px;
    }
  }
`;

const FeaturedVideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
    opacity: ${props => props.$loaded ? 1 : 0};
    filter: brightness(1.1) contrast(1.05);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 1;
    pointer-events: none;
  }
`;

const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #121212, #1e1e1e);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  
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

const FeaturedPlayButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeaturedPlayButton = styled(motion.button)`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(166, 124, 82, 0.9);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  transition: background 0.3s ease;
  
  i {
    font-size: 2.2rem;
    color: white;
    margin-left: 8px;
  }
  
  &:hover {
    background: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    
    i {
      font-size: 1.7rem;
      margin-left: 6px;
    }
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    
    i {
      font-size: 1.4rem;
      margin-left: 5px;
    }
  }
`;

const VideoInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const VideoTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const VideoMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const CTAButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 550px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const ButtonBase = `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  i {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    
    i {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
    
    i {
      font-size: 1rem;
    }
  }
`;

const PrimaryButton = styled(motion.button)`
  ${ButtonBase}
  background: var(--secondary-color);
  color: white;
  box-shadow: 0 8px 20px rgba(166, 124, 82, 0.3);
  
  &:hover {
    background: var(--accent-color);
  }
`;

const SecondaryButton = styled(motion.button)`
  ${ButtonBase}
  background: rgba(30, 30, 30, 0.6);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(30, 30, 30, 0.9);
    border-color: var(--secondary-color);
  }
`;

export default VideoSection;