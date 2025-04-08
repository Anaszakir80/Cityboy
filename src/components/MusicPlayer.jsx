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
        cover: "/src/assets/IMG_9046 Medium.jpeg",
        spotifyUrl: "https://open.spotify.com/album/6ylI0fsk7lONrxj8hw5YwM?si=wTlqlrPETaqFE7tJNKKQ0A",
        appleUrl: "https://music.apple.com/us/album/bonita/1798939049?i=179893905z",
      },
      {
        id: 2,
        title: "TRA",
        releaseDate: "2025",
        cover: "/src/assets/IMG_9050 Medium.jpeg",
        spotifyUrl: "https://open.spotify.com/track/5CxTGH4n3InBnhGUjNGpty",
        appleUrl: "https://music.apple.com/us/album/tra/1772751017?i=1772751019",
      }
    ],
    albums: [
      {
        id: 1,
        title: "Upcoming Album",
        releaseDate: "Coming Soon",
        cover: "/src/assets/IMG_9045 Medium.jpeg",
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
    <MusicPlayerWrapper>
      <MusicContainer id="music">
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Latest Music</SectionTitle>
            <SectionSubtitle>Stream the latest singles and albums</SectionSubtitle>
          </motion.div>
        </SectionHeader>
      
        <TabsContainer>
          <TabsWrapper>
            {['singles', 'albums'].map(tab => (
              <Tab 
                key={tab}
                $active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {tab === 'singles' ? 'Singles' : 'Albums'}
              </Tab>
            ))}
          </TabsWrapper>
        </TabsContainer>
      
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
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
        </motion.div>
      
        <SpotifyEmbedsSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <EmbedsTitle>Featured Tracks</EmbedsTitle>
            <EmbedsGrid>
              <EmbedWrapper>
                <EmbedTitle>BONITA</EmbedTitle>
                <SpotifyEmbed
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/4pGjEifPqxRp55cDIMf5Il?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </EmbedWrapper>
              <EmbedWrapper>
                <EmbedTitle>TRA</EmbedTitle>
                <SpotifyEmbed
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/5CxTGH4n3InBnhGUjNGpty?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </EmbedWrapper>
            </EmbedsGrid>
          </motion.div>
        </SpotifyEmbedsSection>
      
        <CTASection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CTATitle>Stream on All Platforms</CTATitle>
            <CTAButtons>
              <CTAButton 
                href="https://open.spotify.com/artist/4RqKhdPXnN6cvyrwnP0USN" 
                target="_blank"
                $bgColor="#1DB954"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fa-brands fa-spotify"></i>
                <span>Spotify</span>
              </CTAButton>
              <CTAButton 
                href="https://music.apple.com/us/artist/city-boy/1771747739" 
                target="_blank"
                $bgColor="#FC3C44"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fa-brands fa-apple"></i>
                <span>Apple Music</span>
              </CTAButton>
              <CTAButton 
                href="https://www.youtube.com/@cityboywaves" 
                target="_blank"
                $bgColor="#FF0000"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fa-brands fa-youtube"></i>
                <span>YouTube</span>
              </CTAButton>
            </CTAButtons>
          </motion.div>
        </CTASection>
      </MusicContainer>
    </MusicPlayerWrapper>
  );
};

const MusicPlayerWrapper = styled.section`
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
    background: url("/src/assets/IMG_9044 Medium.jpeg") no-repeat center center;
    background-size: cover;
    opacity: 0.08;
    z-index: 0;
  }
`;

const MusicContainer = styled.div`
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
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const TabsWrapper = styled.div`
  display: flex;
  background: rgba(30, 30, 30, 0.3);
  border-radius: 50px;
  padding: 0.5rem;
  gap: 0.5rem;
`;

const Tab = styled(motion.button)`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 50px;
  background: ${props => props.$active ? 'var(--secondary-color)' : 'transparent'};
  color: ${props => props.$active ? '#fff' : 'var(--text-secondary)'};
  font-weight: ${props => props.$active ? '600' : '500'};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 480px) {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 320px) {
    padding: 0.5rem 1.2rem;
    font-size: 0.8rem;
  }
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
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
  }
`;

const ReleaseCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: rgba(30, 30, 30, 0.3);
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
  filter: contrast(1.05);
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(166, 124, 82, 0.8);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    background: var(--secondary-color);
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const ReleaseInfo = styled.div`
  padding: 1.2rem;
  text-align: center;
  
  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const ReleaseTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`;

const ReleaseDate = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const CTASection = styled.div`
  text-align: center;
  padding: 2rem 0;
  background: rgba(30, 30, 30, 0.3);
  border-radius: 8px;
  margin-top: 3rem;
  
  @media (max-width: 480px) {
    padding: 1.5rem 0;
    margin-top: 2rem;
  }
`;

const CTATitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background-color: ${props => props.$bgColor || 'var(--secondary-color)'};
  color: white;
  font-weight: 600;
  border-radius: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  
  i {
    font-size: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    margin-bottom: 0.5rem;
    
    i {
      font-size: 1.3rem;
    }
  }
  
  @media (max-width: 480px) {
    width: 80%;
    justify-content: center;
    padding: 0.8rem 1rem;
    
    i {
      font-size: 1.2rem;
    }
  }
`;

const SpotifyEmbedsSection = styled.div`
  margin: 5rem 0 3rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    margin: 3rem 0 2rem 0;
  }
`;

const EmbedsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const EmbedsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const EmbedWrapper = styled.div`
  padding: 1.5rem;
  background: rgba(20, 20, 20, 0.4);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 12px;
  }
`;

const EmbedTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
`;

const SpotifyEmbed = styled.iframe`
  width: 100%;
  border: none;
  max-width: 500px;
  margin: 0 auto;
  display: block;
`;

export default MusicPlayer; 