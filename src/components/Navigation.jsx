import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
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
  
  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [mobileMenuOpen]);
  
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
        <Logo to="/" className="brand-font">CITY BOY</Logo>
        
        <NavLinks>
          <NavLinkAnchor 
            href="#music" 
            onClick={(e) => scrollToSection(e, '#music')}
            $active={false}
          >
            Music
          </NavLinkAnchor>
          <NavLinkAnchor 
            href="#videos" 
            onClick={(e) => scrollToSection(e, '#videos')}
            $active={false}
          >
            Videos
          </NavLinkAnchor>
          <NavLinkAnchor 
            href="#about" 
            onClick={(e) => scrollToSection(e, '#about')}
            $active={false}
          >
            About
          </NavLinkAnchor>
          <NavLinkAnchor 
            href="#merch" 
            onClick={(e) => scrollToSection(e, '#merch')}
            $active={false}
          >
            Merch
            <Badge>Coming Soon</Badge>
          </NavLinkAnchor>
          <NavLinkAnchor 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            $active={false}
          >
            Contact
          </NavLinkAnchor>
        </NavLinks>
        
        <MobileMenuButton 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <MenuBarContainer>
            <MenuBar 
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 }
              }}
              transition={{ duration: 0.3 }}
            />
            <MenuBar 
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              transition={{ duration: 0.3 }}
            />
            <MenuBar 
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 }
              }}
              transition={{ duration: 0.3 }}
            />
          </MenuBarContainer>
        </MobileMenuButton>
      </NavBar>
      
      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MenuBackdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <MobileHeader>
              <MobileLogo className="brand-font">CITY BOY</MobileLogo>
            </MobileHeader>
            
            <MobileNavLinks>
              <MobileNavLinkAnchor 
                href="#music" 
                onClick={(e) => scrollToSection(e, '#music')}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Music
              </MobileNavLinkAnchor>
              <MobileNavLinkAnchor 
                href="#videos" 
                onClick={(e) => scrollToSection(e, '#videos')}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Videos
              </MobileNavLinkAnchor>
              <MobileNavLinkAnchor 
                href="#about" 
                onClick={(e) => scrollToSection(e, '#about')}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </MobileNavLinkAnchor>
              <MobileNavLinkAnchor 
                href="#merch" 
                onClick={(e) => scrollToSection(e, '#merch')}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Merch
                <MobileBadge>Coming Soon</MobileBadge>
              </MobileNavLinkAnchor>
              <MobileNavLinkAnchor 
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </MobileNavLinkAnchor>
            </MobileNavLinks>
            
            <MobileInstagramBanner>
              <MobileInstagramContainer>
                <MobileInstagramContent>
                  <MobileInstagramIcon>
                    <i className="fa-brands fa-instagram"></i>
                  </MobileInstagramIcon>
                  <MobileInstagramText>
                    <MobileInstagramTitle>Follow on Instagram</MobileInstagramTitle>
                    <MobileInstagramDescription>
                      Get the latest updates and content
                    </MobileInstagramDescription>
                  </MobileInstagramText>
                </MobileInstagramContent>
                <MobileInstagramButton 
                  href="https://instagram.com/whatupcityboy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-brands fa-instagram"></i> @whatupcityboy
                </MobileInstagramButton>
              </MobileInstagramContainer>
            </MobileInstagramBanner>
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
  padding: ${props => props.$scrolled ? '0.75rem 2rem' : '1.25rem 2rem'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${props => props.$scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.$scrolled ? '0 4px 15px rgba(0, 0, 0, 0.1)' : 'none'};
  
  @media (max-width: 768px) {
    padding: ${props => props.$scrolled ? '0.75rem 1rem' : '1rem'};
  }
`;

const Logo = styled(Link)`
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
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinkStyles = `
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

const NavLink = styled(Link)`
  ${props => NavLinkStyles}
`;

const NavLinkAnchor = styled.a`
  ${props => NavLinkStyles}
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Badge = styled.span`
  background-color: var(--accent-color);
  color: white;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MobileBadge = styled(Badge)`
  font-size: 0.7rem;
  margin-left: 0.5rem;
`;

const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const MenuBarContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 4px 0;
`;

const MenuBar = styled(motion.div)`
  width: 100%;
  height: 2px;
  background-color: white;
  border-radius: 2px;
`;

const MenuBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  backdrop-filter: blur(3px);
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 375px;
  height: 100vh;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  z-index: 999;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const MobileHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const MobileLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 3px;
  color: var(--secondary-color);
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  flex: 1;
`;

const MobileLinkStyles = `
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    color: var(--secondary-color);
  }
`;

const MobileNavLink = styled(motion(Link))`
  ${MobileLinkStyles}
`;

const MobileNavLinkAnchor = styled(motion.a)`
  ${MobileLinkStyles}
`;

const MobileInstagramBanner = styled.div`
  margin-top: auto;
  width: 100%;
  padding: 0 1.5rem 1.5rem;
`;

const MobileInstagramContainer = styled.div`
  background: rgba(25, 25, 25, 0.8);
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const MobileInstagramContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MobileInstagramIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #E1306C, #833AB4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const MobileInstagramText = styled.div`
  flex: 1;
`;

const MobileInstagramTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.3rem 0;
  color: white;
`;

const MobileInstagramDescription = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.4;
`;

const MobileInstagramButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(135deg, #E1306C, #833AB4);
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 8px;
  text-decoration: none;
  
  i {
    font-size: 1.1rem;
  }
`;

export default Navigation; 