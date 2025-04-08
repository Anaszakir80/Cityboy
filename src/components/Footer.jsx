import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log(`Subscribing email: ${email}`);
      setSubscribed(true);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };
  
  const socialLinks = [
    { icon: "fa-brands fa-instagram", url: "https://instagram.com", label: "Instagram" },
    { icon: "fa-brands fa-x-twitter", url: "https://twitter.com", label: "Twitter" },
    { icon: "fa-brands fa-youtube", url: "https://youtube.com", label: "YouTube" },
    { icon: "fa-brands fa-spotify", url: "https://spotify.com", label: "Spotify" },
    { icon: "fa-brands fa-apple", url: "https://apple.com/music", label: "Apple Music" },
    { icon: "fa-brands fa-tiktok", url: "https://tiktok.com", label: "TikTok" }
  ];
  
  return (
    <FooterWrapper>
      <FooterGradientBg>
        <GradientOverlay />
      </FooterGradientBg>
      
    <FooterContainer>
        <FooterTop>
          <FooterBranding>
            <LogoContainer>
          <Logo>CITY BOY</Logo>
              <Tagline>Music for the soul</Tagline>
            </LogoContainer>
            
            <SocialContainer>
              {socialLinks.map((social, index) => (
                <SocialIconLink 
                  key={index}
                  href={social.url} 
                  target="_blank"
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={social.icon}></i>
                </SocialIconLink>
              ))}
            </SocialContainer>
          </FooterBranding>
          
          <FooterLinksContainer>
            <FooterLinkColumn>
            <LinkHeader>Navigation</LinkHeader>
              <LinkList>
                <LinkItem>
            <FooterLink to="/">Home</FooterLink>
                </LinkItem>
                <LinkItem>
            <FooterLink to="/music">Music</FooterLink>
                </LinkItem>
                <LinkItem>
            <FooterLink to="/videos">Videos</FooterLink>
                </LinkItem>
                <LinkItem>
            <FooterLink to="/about">About</FooterLink>
                </LinkItem>
                <LinkItem>
            <FooterLink to="/contact">Contact</FooterLink>
                </LinkItem>
              </LinkList>
            </FooterLinkColumn>
            
            <FooterLinkColumn>
            <LinkHeader>Legal</LinkHeader>
              <LinkList>
                <LinkItem>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
                </LinkItem>
                <LinkItem>
            <FooterLink to="/terms">Terms of Use</FooterLink>
                </LinkItem>
                <LinkItem>
            <FooterLink to="/cookies">Cookie Policy</FooterLink>
                </LinkItem>
              </LinkList>
            </FooterLinkColumn>
            
            <FooterLinkColumn className="newsletter">
              <LinkHeader>Stay Updated</LinkHeader>
              <NewsletterText>
                Subscribe to receive updates on new releases, upcoming shows, and exclusive content.
              </NewsletterText>
              
              <NewsletterForm onSubmit={handleSubscribe}>
                {subscribed ? (
                  <SuccessMessage>
                    <i className="fa-solid fa-check-circle"></i> Thanks for subscribing!
                  </SuccessMessage>
                ) : (
                  <>
                    <NewsletterInput
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <SubscribeButton 
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fa-solid fa-paper-plane"></i>
                    </SubscribeButton>
                  </>
                )}
              </NewsletterForm>
            </FooterLinkColumn>
          </FooterLinksContainer>
        </FooterTop>
        
        <FooterBottom>
          <Copyright>
            © {currentYear} City Boy. All Rights Reserved.
          </Copyright>
          
          <CreditsAndTop>
            <Credits>
              Website by <CreditLink href="#" target="_blank">New Wave Studios</CreditLink>
            </Credits>
            <Divider />
            <BackToTopButton 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Top <i className="fa-solid fa-chevron-up"></i>
            </BackToTopButton>
          </CreditsAndTop>
        </FooterBottom>
    </FooterContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: relative;
  background-color: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  padding: 5rem 0 1.5rem;
  overflow: hidden;
`;

const FooterGradientBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(circle at 10% 0%, rgba(29, 185, 84, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 90% 20%, rgba(255, 0, 80, 0.08) 0%, transparent 50%);
  opacity: 0.5;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, transparent 100%);
`;

const FooterContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const FooterBranding = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 0, 80, 0.3);
`;

const Tagline = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-style: italic;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialIconLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  color: var(--text-primary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    color: var(--secondary-color);
  }
`;

const FooterLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    
    .newsletter {
      grid-column: span 2;
    }
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    
    .newsletter {
      grid-column: 1;
    }
  }
`;

const FooterLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const LinkHeader = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  position: relative;
  padding-bottom: 0.8rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--secondary-color);
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const LinkItem = styled.li`
  position: relative;
`;

const FooterLink = styled(Link)`
  font-size: 0.95rem;
  color: var(--text-secondary);
  transition: all 0.2s ease;
  position: relative;
  padding-left: 0;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 1px;
    background-color: var(--secondary-color);
    transition: all 0.3s ease;
    opacity: 0;
  }
  
  &:hover {
    color: var(--text-primary);
    padding-left: 1rem;
    
    &:before {
      width: 0.5rem;
      opacity: 1;
    }
  }
`;

const NewsletterText = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const NewsletterForm = styled.form`
  display: flex;
  position: relative;
  margin-top: 0.5rem;
`;

const NewsletterInput = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 0.95rem;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const SubscribeButton = styled(motion.button)`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  i {
    font-size: 0.9rem;
  }
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
    color: var(--secondary-color);
  font-size: 0.95rem;
  padding: 0.5rem 0;
  
  i {
    font-size: 1.1rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }
`;

const Copyright = styled.div`
  font-size: 0.85rem;
  color: var(--text-secondary);
`;

const CreditsAndTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const Credits = styled.div`
  font-size: 0.85rem;
  color: var(--text-secondary);
`;

const CreditLink = styled.a`
  color: var(--secondary-color);
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--accent-color);
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  
  @media (max-width: 576px) {
    display: none;
  }
`;

const BackToTopButton = styled(motion.button)`
  font-size: 0.85rem;
  color: var(--text-secondary);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--secondary-color);
  }
  
  i {
    font-size: 0.8rem;
  }
`;

export default Footer; 