import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "BONITA - Official Music Video",
      date: "June 12, 2023",
      views: "1.2M views",
      thumbnail: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Live at Madison Square Garden",
      date: "May 2, 2023",
      views: "893K views",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Behind the Scenes - Making of BONITA",
      date: "April 15, 2023",
      views: "452K views",
      thumbnail: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];
  
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [selectedVideo, setSelectedVideo] = useState(1);
  
  useEffect(() => {
    const preloadImages = async () => {
      const loadingStatus = {};
      
      videos.forEach(video => {
        const img = new Image();
        img.src = video.thumbnail;
        
        img.onload = () => {
          setImagesLoaded(prev => ({
            ...prev,
            [video.id]: true
          }));
        };
        
        img.onerror = () => {
          console.error(`Failed to load image for ${video.title}`);
          setImagesLoaded(prev => ({
            ...prev,
            [video.id]: true
          }));
        };
        
        loadingStatus[video.id] = false;
      });
      
      setImagesLoaded(loadingStatus);
    };
    
    preloadImages();
  }, []);

  const handleVideoClick = (url) => {
    window.open(url, "_blank");
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
            <SectionTitle>Latest Videos</SectionTitle>
            <SectionSubTitle>Watch official music videos, live performances and more</SectionSubTitle>
          </motion.div>
      </SectionHeader>
      
      <VideoContent>
          <FeaturedVideoSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FeaturedVideoWrapper>
                <FeaturedVideoThumbnail $loaded={imagesLoaded[selectedVideo]}>
                  <img 
                    src={videos.find(v => v.id === selectedVideo)?.thumbnail} 
                    alt={videos.find(v => v.id === selectedVideo)?.title}
                  />
                  {!imagesLoaded[selectedVideo] && <FallbackImage />}
                  <FeaturedPlayButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleVideoClick(videos.find(v => v.id === selectedVideo)?.videoUrl)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </FeaturedPlayButton>
                  <VideoOverlay />
                </FeaturedVideoThumbnail>
                
                <FeaturedVideoInfo>
                  <FeaturedVideoTitle>{videos.find(v => v.id === selectedVideo)?.title}</FeaturedVideoTitle>
                  <FeaturedVideoMeta>
                    <span>{videos.find(v => v.id === selectedVideo)?.date}</span>
                    <span>•</span>
                    <span>{videos.find(v => v.id === selectedVideo)?.views}</span>
                  </FeaturedVideoMeta>
                </FeaturedVideoInfo>
              </FeaturedVideoWrapper>
            </motion.div>
          </FeaturedVideoSection>
          
          <VideoListSection>
            <VideoListHeader>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                More Videos
              </motion.h3>
            </VideoListHeader>
        
        <VideoList>
          {videos.map((video, index) => (
                <motion.div
              key={video.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <VideoListItem 
                    onClick={() => setSelectedVideo(video.id)}
                    $active={selectedVideo === video.id}
                  >
                    <VideoListThumbnail>
                      <img src={video.thumbnail} alt={video.title} />
                      <VideoListPlayIcon>
                        <i className="fa-solid fa-play"></i>
                      </VideoListPlayIcon>
                    </VideoListThumbnail>
                    <VideoListInfo>
                      <VideoListTitle>{video.title}</VideoListTitle>
                      <VideoListMeta>
                        <span>{video.date}</span>
                        <span>•</span>
                        <span>{video.views}</span>
                      </VideoListMeta>
                    </VideoListInfo>
                  </VideoListItem>
                </motion.div>
          ))}
        </VideoList>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <YoutubeChannelButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://www.youtube.com", "_blank")}
              >
                <i className="fa-brands fa-youtube"></i> Visit YouTube Channel
              </YoutubeChannelButton>
            </motion.div>
          </VideoListSection>
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
    background: url("https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") no-repeat center center;
    background-size: cover;
    opacity: 0.1;
    z-index: 0;
  }
`;

const VideoContainer = styled.div`
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
  margin-bottom: 4rem;
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

const SectionSubTitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const VideoContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedVideoSection = styled.div`
  width: 100%;
`;

const FeaturedVideoWrapper = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
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
    transition: transform 0.5s ease;
    opacity: ${props => props.$loaded ? 1 : 0};
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
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

const FeaturedPlayButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(29, 185, 84, 0.8);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  
  i {
    font-size: 2rem;
    color: white;
    margin-left: 5px;
  }
  
  &:hover {
    background: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    
    i {
      font-size: 1.5rem;
    }
  }
`;

const FeaturedVideoInfo = styled.div`
  padding: 1.5rem;
`;

const FeaturedVideoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const FeaturedVideoMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: var(--text-secondary);
`;

const VideoListSection = styled.div`
  width: 100%;
`;

const VideoListHeader = styled.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const VideoListItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  background: ${props => props.$active ? 'rgba(29, 185, 84, 0.1)' : 'rgba(255, 255, 255, 0.03)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(29, 185, 84, 0.1);
    transform: translateX(5px);
  }
`;

const VideoListThumbnail = styled.div`
  position: relative;
  width: 120px;
  min-width: 120px;
  height: 67.5px;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 500px) {
    width: 80px;
    min-width: 80px;
    height: 45px;
  }
`;

const VideoListPlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  i {
    font-size: 0.8rem;
    color: white;
    margin-left: 2px;
  }
  
  ${VideoListItem}:hover & {
    opacity: 1;
    background: var(--secondary-color);
  }
  
  @media (max-width: 500px) {
    width: 24px;
    height: 24px;
    
    i {
      font-size: 0.6rem;
    }
  }
`;

const VideoListInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VideoListTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
  
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

const VideoListMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
  
  @media (max-width: 500px) {
    font-size: 0.7rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
    
    span:nth-child(2) {
      display: none;
    }
  }
`;

const YoutubeChannelButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  background-color: #FF0000;
  color: white;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  i {
    font-size: 1.5rem;
  }
  
  &:hover {
    background-color: #CC0000;
  }
`;

export default VideoSection; 