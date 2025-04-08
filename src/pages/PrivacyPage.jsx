import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | CITYBOY";
  }, []);

  return (
    <PageContainer>
      <PageHeader
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Privacy Policy</Title>
        <LastUpdated>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</LastUpdated>
      </PageHeader>

      <ContentSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <SectionTitle>1. Introduction</SectionTitle>
        <Paragraph>
          Welcome to the CITYBOY privacy policy. CITYBOY respects your privacy and is committed to protecting your
          personal data. This privacy policy will inform you about how we look after your personal data when you
          visit our website and tell you about your privacy rights and how the law protects you.
        </Paragraph>

        <SectionTitle>2. Information We Collect</SectionTitle>
        <Paragraph>
          We may collect, use, store, and transfer different kinds of personal data about you, including:
        </Paragraph>
        <List>
          <ListItem>Identity Data: including first name, last name, username, or similar identifier.</ListItem>
          <ListItem>Contact Data: including email address and telephone numbers.</ListItem>
          <ListItem>Technical Data: including internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</ListItem>
          <ListItem>Usage Data: including information about how you use our website, products, and services.</ListItem>
          <ListItem>Marketing and Communications Data: including your preferences in receiving marketing from us and our third parties and your communication preferences.</ListItem>
        </List>

        <SectionTitle>3. How We Use Your Information</SectionTitle>
        <Paragraph>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </Paragraph>
        <List>
          <ListItem>To register you as a new customer or user.</ListItem>
          <ListItem>To process and deliver your order, including managing payments, fees, and charges.</ListItem>
          <ListItem>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</ListItem>
          <ListItem>To administer and protect our business and this website.</ListItem>
          <ListItem>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you.</ListItem>
          <ListItem>To use data analytics to improve our website, products/services, marketing, customer relationships, and experiences.</ListItem>
        </List>

        <SectionTitle>4. Data Security</SectionTitle>
        <Paragraph>
          We have put in place appropriate security measures to prevent your personal data from being accidentally
          lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to
          your personal data to those employees, agents, contractors, and other third parties who have a business
          need to know.
        </Paragraph>

        <SectionTitle>5. Data Retention</SectionTitle>
        <Paragraph>
          We will only retain your personal data for as long as necessary to fulfill the purposes we collected it
          for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
        </Paragraph>

        <SectionTitle>6. Your Legal Rights</SectionTitle>
        <Paragraph>
          Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
        </Paragraph>
        <List>
          <ListItem>Request access to your personal data.</ListItem>
          <ListItem>Request correction of your personal data.</ListItem>
          <ListItem>Request erasure of your personal data.</ListItem>
          <ListItem>Object to processing of your personal data.</ListItem>
          <ListItem>Request restriction of processing your personal data.</ListItem>
          <ListItem>Request transfer of your personal data.</ListItem>
          <ListItem>Right to withdraw consent.</ListItem>
        </List>
        <Paragraph>
          If you wish to exercise any of these rights, please contact us.
        </Paragraph>

        <SectionTitle>7. Cookies and Tracking Technologies</SectionTitle>
        <Paragraph>
          We use cookies and similar tracking technologies to track the activity on our website and store certain
          information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
          Cookies are sent to your browser from a website and stored on your device.
        </Paragraph>
        <Paragraph>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
          if you do not accept cookies, you may not be able to use some portions of our website.
        </Paragraph>

        <SectionTitle>8. Third-Party Links</SectionTitle>
        <Paragraph>
          This website may include links to third-party websites, plug-ins, and applications. Clicking on those
          links or enabling those connections may allow third parties to collect or share data about you. We do not
          control these third-party websites and are not responsible for their privacy statements.
        </Paragraph>

        <SectionTitle>9. Children's Privacy</SectionTitle>
        <Paragraph>
          Our website is not intended for children under 13 years of age. No one under age 13 may provide any personal
          information to the website. We do not knowingly collect personal information from children under 13.
        </Paragraph>

        <SectionTitle>10. Changes to the Privacy Policy</SectionTitle>
        <Paragraph>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
        </Paragraph>

        <SectionTitle>11. Contact Us</SectionTitle>
        <Paragraph>
          If you have any questions about this Privacy Policy, please contact us via the contact form on our website
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

const List = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 2rem;
`;

const ListItem = styled.li`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 0.5rem;
`;

export default PrivacyPage; 