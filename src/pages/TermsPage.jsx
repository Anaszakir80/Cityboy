import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service | CITYBOY";
  }, []);

  return (
    <PageContainer>
      <PageHeader
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Terms of Service</Title>
        <LastUpdated>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</LastUpdated>
      </PageHeader>

      <ContentSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <SectionTitle>1. Acceptance of Terms</SectionTitle>
        <Paragraph>
          By accessing and using this website (the "Site"), you accept and agree to be bound by the terms and 
          provisions of this agreement. If you do not agree to these terms, please do not use this Site.
        </Paragraph>

        <SectionTitle>2. Description of Service</SectionTitle>
        <Paragraph>
          CITYBOY provides users with access to music, videos, merchandise, and other content related to the artist known
          as CITYBOY. The Site may include features such as streaming music, downloading content, purchasing merchandise,
          and social media integration.
        </Paragraph>

        <SectionTitle>3. User Conduct</SectionTitle>
        <Paragraph>
          You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict,
          or inhibit anyone else's use and enjoyment of the Site. Prohibited behavior includes harassing or causing
          distress to other users, transmitting obscene or offensive content, and attempting to circumvent security
          measures.
        </Paragraph>

        <SectionTitle>4. Intellectual Property</SectionTitle>
        <Paragraph>
          All content on this Site, including but not limited to text, graphics, logos, icons, images, audio clips, 
          digital downloads, and software, is the property of CITYBOY or its content suppliers and is protected by 
          international copyright laws. The compilation of all content on this Site is the exclusive property of 
          CITYBOY and is protected by international copyright laws.
        </Paragraph>

        <SectionTitle>5. User Content</SectionTitle>
        <Paragraph>
          By posting, uploading, inputting, providing, or submitting content to the Site, you grant CITYBOY and its
          affiliated companies a perpetual, non-exclusive, royalty-free, transferable right to use, reproduce, modify,
          adapt, publish, translate, create derivative works from, distribute, and display such content throughout the
          world in any media.
        </Paragraph>

        <SectionTitle>6. Disclaimer of Warranties</SectionTitle>
        <Paragraph>
          This Site is provided on an "as is" and "as available" basis. CITYBOY makes no representations or warranties
          of any kind, express or implied, as to the operation of the Site or the information, content, materials, or
          products included on this Site.
        </Paragraph>

        <SectionTitle>7. Limitation of Liability</SectionTitle>
        <Paragraph>
          CITYBOY will not be liable for any damages of any kind arising from the use of this Site, including but not
          limited to direct, indirect, incidental, punitive, and consequential damages.
        </Paragraph>

        <SectionTitle>8. Third-Party Links</SectionTitle>
        <Paragraph>
          The Site may contain links to third-party websites that are not owned or controlled by CITYBOY. CITYBOY has
          no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party
          websites.
        </Paragraph>

        <SectionTitle>9. Changes to Terms</SectionTitle>
        <Paragraph>
          CITYBOY reserves the right to revise these terms at any time. By using this Site, you agree to be bound by
          the current version of these Terms of Service.
        </Paragraph>

        <SectionTitle>10. Governing Law</SectionTitle>
        <Paragraph>
          These terms and conditions are governed by and construed in accordance with the laws of the United States,
          and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the
          courts of the United States.
        </Paragraph>

        <SectionTitle>11. Contact Information</SectionTitle>
        <Paragraph>
          If you have any questions about these Terms of Service, please contact us via the contact form on our website
          or through our social media channels.
        </Paragraph>
      </ContentSection>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 900px;
  margin: 120px auto 60px;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    margin: 100px auto 40px;
    padding: 0 1.5rem;
  }
`;

const PageHeader = styled(motion.div)`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const LastUpdated = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const ContentSection = styled(motion.div)`
  background: rgba(15, 15, 15, 0.5);
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin: 2rem 0 1rem;
  
  &:first-of-type {
    margin-top: 0;
  }
`;

const Paragraph = styled.p`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

export default TermsPage; 