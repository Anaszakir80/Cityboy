import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [activeTab, setActiveTab] = useState('singles');
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [hoveredRelease, setHoveredRelease] = useState(null);
  
  const musicReleases = {
    singles: [
      {
        id: 1,
        title: "Bonita",
        releaseDate: "2025",
        cover: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        spotifyUrl: "https://open.spotify.com/album/6ylI0fsk7lONrxj8hw5YwM?si=wTlqlrPETaqFE7tJNKKQ0A",
        appleUrl: "https://music.apple.com/us/album/bonita/1798939049?i=179893905z",
      },
      {
        id: 2,
        title: "Summer Nights",
        releaseDate: "2024",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        spotifyUrl: "#",
        appleUrl: "#",
      },
      {
        id: 3,
        title: "City Lights",
        releaseDate: "2024",
        cover: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        spotifyUrl: "#",
        appleUrl: "#",
      }
    ],
    albums: [
      {
        id: 1,
        title: "Upcoming Album",
        releaseDate: "Coming Soon",
        cover: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        spotifyUrl: "#",
        appleUrl: "#",
      }
    ]
  };

  // Handle image loading
  useEffect(() => {
    const preloadImages = async () => {
      const allReleases = [...musicReleases.singles, ...musicReleases.albums];
      const loadingStatus = {};
      
      allReleases.forEach(release => {
        const img = new Image();
        img.src = release.cover;
        
        img.onload = () => {
          setImagesLoaded(prev => ({
            ...prev,
            [release.id]: true
          }));
        };
        
        img.onerror = () => {
          console.error(`Failed to load image for ${release.title}`);
          setImagesLoaded(prev => ({
            ...prev,
            [release.id]: true // Still mark as loaded to prevent endless loading
          }));
        };
        
        loadingStatus[release.id] = false;
      });
      
      setImagesLoaded(loadingStatus);
    };
    
    preloadImages();
  }, []);

  return (
    <MusicContainer id="music">
      <BackgroundGradient />
      
      <ContentWrapper>
      <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Music
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stream & Listen
          </motion.h3>
      </SectionHeader>
      
      <TabContainer>
        <Tab 
          active={activeTab === 'singles'} 
          onClick={() => setActiveTab('singles')}
        >
          Singles
          {activeTab === 'singles' && <ActiveIndicator layoutId="tabIndicator" />}
        </Tab>
        <Tab 
          active={activeTab === 'albums'} 
          onClick={() => setActiveTab('albums')}
        >
          Albums
          {activeTab === 'albums' && <ActiveIndicator layoutId="tabIndicator" />}
        </Tab>
      </TabContainer>
      
      <ReleaseGrid>
          {musicReleases[activeTab].map((release, index) => (
            <ReleaseCard 
              key={release.id}
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredRelease(release.id)}
              onMouseLeave={() => setHoveredRelease(null)}
            >
              <ReleaseImageContainer $hovered={hoveredRelease === release.id}>
                <ReleaseImage 
                  src={release.cover} 
                  alt={release.title} 
                  $loaded={imagesLoaded[release.id]} 
                />
                {!imagesLoaded[release.id] && <ImagePlaceholder />}
                <OverlayButtons $visible={hoveredRelease === release.id}>
                <StreamButton href={release.spotifyUrl} target="_blank">
                    <i className="fa-brands fa-spotify"></i>
                </StreamButton>
                <StreamButton href={release.appleUrl} target="_blank">
                    <i className="fa-brands fa-apple"></i>
                </StreamButton>
              </OverlayButtons>
            </ReleaseImageContainer>
              <ReleaseInfo>
            <ReleaseTitle>{release.title}</ReleaseTitle>
            <ReleaseDate>{release.releaseDate}</ReleaseDate>
              </ReleaseInfo>
            </ReleaseCard>
        ))}
      </ReleaseGrid>
      
        <StreamingServices>
          <StreamingSection>
            <PlatformHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PlatformIcon className="spotify">
                  <i className="fa-brands fa-spotify"></i>
                </PlatformIcon>
                <PlatformTitle>Listen on Spotify</PlatformTitle>
              </motion.div>
            </PlatformHeader>
            
            <PlatformContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <EmbedWrapper className="spotify">
        <iframe 
          src="https://open.spotify.com/embed/album/6ylI0fsk7lONrxj8hw5YwM" 
          width="100%" 
                    height="352" 
          frameBorder="0" 
          allowtransparency="true" 
          allow="encrypted-media"
        />
                </EmbedWrapper>
                
                <PlatformButton
                  href="https://open.spotify.com/album/6ylI0fsk7lONrxj8hw5YwM?si=wTlqlrPETaqFE7tJNKKQ0A"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open in Spotify <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </PlatformButton>
              </motion.div>
            </PlatformContent>
          </StreamingSection>
          
          <StreamingSection>
            <PlatformHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PlatformIcon className="apple">
                  <i className="fa-brands fa-apple"></i>
                </PlatformIcon>
                <PlatformTitle>Listen on Apple Music</PlatformTitle>
              </motion.div>
            </PlatformHeader>
            
            <PlatformContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <EmbedWrapper className="apple">
        <iframe 
          allow="autoplay *; encrypted-media *; fullscreen *" 
          frameBorder="0" 
          height="450" 
          width="100%" 
                    style={{ background: 'transparent', maxWidth: '660px', overflow: 'hidden' }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                    src="https://embed.music.apple.com/us/album/bonita-single/1798939049"
                  />
                </EmbedWrapper>
                
                <PlatformButton
                  href="https://music.apple.com/us/album/bonita/1798939049?i=179893905z"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open in Apple Music <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </PlatformButton>
              </motion.div>
            </PlatformContent>
          </StreamingSection>
        </StreamingServices>
      </ContentWrapper>
    </MusicContainer>
  );
};

const MusicContainer = styled.section`
  position: relative;
  padding: 5rem 0;
  background-color: transparent;
  overflow: hidden;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 10% 30%, rgba(29, 185, 84, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 90% 70%, rgba(255, 0, 80, 0.1) 0%, transparent 50%);
  z-index: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
  }
  
  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 3px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
  position: relative;
`;

const Tab = styled.button`
  padding: 0.6rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  background: transparent;
  color: ${props => props.active ? 'var(--secondary-color)' : 'var(--text-secondary)'};
  border: none;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary-color);
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
  border-radius: 3px;
`;

const ReleaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-bottom: 5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
`;

const ReleaseCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }
`;

const ReleaseImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: linear-gradient(45deg, #121212, #1e1e1e);
  transform: scale(${props => props.$hovered ? '1.03' : '1'});
  transition: transform 0.4s ease;
`;

const ReleaseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  opacity: ${props => props.$loaded ? 1 : 0};
`;

const ImagePlaceholder = styled.div`
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
    width: 30px;
    height: 30px;
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

const OverlayButtons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const StreamButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.95);
  font-size: 1.5rem;
  transform: translateY(${props => props.$visible ? '0' : '10px'});
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:first-child {
    color: #1DB954;
    box-shadow: 0 5px 15px rgba(29, 185, 84, 0.3);
  }
  
  &:nth-child(2) {
    color: #FC3C44;
    box-shadow: 0 5px 15px rgba(252, 60, 68, 0.3);
  }
`;

const ReleaseInfo = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const ReleaseTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  text-align: center;
`;

const ReleaseDate = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-align: center;
`;

const StreamingServices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const StreamingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, 
      var(--secondary-color) 0%, 
      var(--accent-color) 100%
    );
  }
`;

const PlatformHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  width: 100%;
  
  > div {
    display: flex;
    align-items: center;
  }
`;

const PlatformIcon = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.2rem;
  font-size: 2rem;
  
  &.spotify {
    color: #1DB954;
    background: rgba(29, 185, 84, 0.1);
    box-shadow: 0 5px 15px rgba(29, 185, 84, 0.2);
  }
  
  &.apple {
    color: #FC3C44;
    background: rgba(252, 60, 68, 0.1);
    box-shadow: 0 5px 15px rgba(252, 60, 68, 0.2);
  }
`;

const PlatformTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
`;

const PlatformContent = styled.div`
  width: 100%;
`;

const EmbedWrapper = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  background: #121212;
  
  &.spotify {
    border: 1px solid rgba(29, 185, 84, 0.2);
  }
  
  &.apple {
    border: 1px solid rgba(252, 60, 68, 0.2);
  }
  
  iframe {
    display: block;
    border-radius: 12px;
  }
`;

const PlatformButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1.8rem;
  background: transparent;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
    font-weight: 600;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  i {
    font-size: 0.9rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: var(--secondary-color);
    color: black;
    box-shadow: 0 8px 20px rgba(255, 0, 80, 0.25);
    
    i {
      transform: translate(3px, -3px);
    }
  }
`;

export default MusicPlayer; 