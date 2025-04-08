import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const scrollToSection = (e, target) => {
    e.preventDefault();
    
    const targetElement = document.querySelector(target);
    if (targetElement) {
      if (window.lenis) {
        window.lenis.scrollTo(targetElement, {
          offset: 0,
          duration: 1.2
        });
      } else {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <>
      <NavBar $scrolled={scrolled}>
        <Logo href="#" onClick={(e) => scrollToSection(e, '#')}>CITY BOY</Logo>
        
        <NavLinks>
          <NavLink href="#" onClick={(e) => scrollToSection(e, '#')} $active={true}>Home</NavLink>
          <NavLink href="#music" onClick={(e) => scrollToSection(e, '#music')}>Music</NavLink>
          <NavLink href="#videos" onClick={(e) => scrollToSection(e, '#videos')}>Videos</NavLink>
          <NavLink href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</NavLink>
          <NavLink href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</NavLink>
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          <i className={mobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </MobileMenuButton>
      </NavBar>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <MobileNavLinks>
              <MobileNavLink 
                href="#" 
                onClick={(e) => scrollToSection(e, '#')}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </MobileNavLink>
              <MobileNavLink 
                href="#music" 
                onClick={(e) => scrollToSection(e, '#music')}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Music
              </MobileNavLink>
              <MobileNavLink 
                href="#videos" 
                onClick={(e) => scrollToSection(e, '#videos')}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Videos
              </MobileNavLink>
              <MobileNavLink 
                href="#about" 
                onClick={(e) => scrollToSection(e, '#about')}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </MobileNavLink>
              <MobileNavLink 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </MobileNavLink>
            </MobileNavLinks>
            
            <SocialIcons>
              <SocialIcon href="https://instagram.com" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank">
                <i className="fa-brands fa-x-twitter"></i>
              </SocialIcon>
              <SocialIcon href="https://spotify.com" target="_blank">
                <i className="fa-brands fa-spotify"></i>
              </SocialIcon>
              <SocialIcon href="https://youtube.com" target="_blank">
                <i className="fa-brands fa-youtube"></i>
              </SocialIcon>
            </SocialIcons>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${props => props.$scrolled ? '1rem 2rem' : '1.5rem 2rem'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${props => props.$scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.$scrolled ? '0 4px 15px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 3px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--secondary-color);
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.$active ? 'var(--secondary-color)' : 'white'};
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    bottom: -5px;
    left: 0;
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

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 350px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 999;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MobileNavLink = styled(motion.a)`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
  
  &:hover {
    color: var(--secondary-color);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--secondary-color);
    transform: translateY(-5px);
  }
`;

export default Navigation; 