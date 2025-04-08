import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavContainer scrolled={scrolled}>
      <NavContent>
        <LogoContainer to="/">
          <Logo>CITY BOY</Logo>
        </LogoContainer>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>

        <DesktopMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/music">Music</NavLink>
          <NavLink to="/videos">Videos</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </DesktopMenu>

        <SocialLinks>
          <SocialIcon href="https://instagram.com" target="_blank">
            <i className="fab fa-instagram"></i>
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank">
            <i className="fab fa-twitter"></i>
          </SocialIcon>
          <SocialIcon href="https://youtube.com" target="_blank">
            <i className="fab fa-youtube"></i>
          </SocialIcon>
          <SocialIcon href="https://spotify.com" target="_blank">
            <i className="fab fa-spotify"></i>
          </SocialIcon>
        </SocialLinks>
      </NavContent>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/music" onClick={() => setIsOpen(false)}>Music</MobileNavLink>
            <MobileNavLink to="/videos" onClick={() => setIsOpen(false)}>Videos</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            <MobileSocial>
              <SocialIcon href="https://instagram.com" target="_blank">
                <i className="fab fa-instagram"></i>
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank">
                <i className="fab fa-twitter"></i>
              </SocialIcon>
              <SocialIcon href="https://youtube.com" target="_blank">
                <i className="fab fa-youtube"></i>
              </SocialIcon>
              <SocialIcon href="https://spotify.com" target="_blank">
                <i className="fab fa-spotify"></i>
              </SocialIcon>
            </MobileSocial>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const LogoContainer = styled(Link)`
  z-index: 1001;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 2px;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary-color);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--secondary-color);
    
    &:after {
      width: 100%;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary-color);
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1001;
  
  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: white;
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 1000;
`;

const MobileNavLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 1rem 0;
  text-transform: uppercase;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--secondary-color);
    transform: translateX(5px);
  }
`;

const MobileSocial = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  font-size: 1.5rem;
`;

export default Navbar; 