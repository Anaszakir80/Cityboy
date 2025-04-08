import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterLogo className="brand-font">
            CITYBOY
          </FooterLogo>
          
          <SocialLinks>
            <SocialLink 
              href="https://instagram.com/whatupcityboy" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-brands fa-instagram"></i>
            </SocialLink>
          </SocialLinks>
        </FooterContent>
        
        <Divider />
        
        <FooterBottom>
          <CopyrightText>
            © {currentYear} <span className="brand-font">CITYBOY</span>. All rights reserved.
          </CopyrightText>
          <FooterLinks>
            <FooterLink as={Link} to="/privacy">Privacy</FooterLink>
            <FooterLink as={Link} to="/terms">Terms</FooterLink>
          </FooterLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #0a0a0a;
  padding: 2.5rem 0 1.5rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
    opacity: 0.7;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const FooterLogo = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 3px;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(30, 30, 30, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  font-size: 1.2rem;
  transition: background 0.3s ease;
  
  &:hover {
    background: var(--secondary-color);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 1rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const CopyrightText = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
  
  span {
    color: var(--text-color);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterLink = styled.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: var(--secondary-color);
  }
`;

export default Footer;