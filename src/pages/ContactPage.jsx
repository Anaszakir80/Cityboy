import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    // Simulate form submission
    // In a real implementation, you would send the data to a server
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    { icon: "fa-solid fa-envelope", text: "bookings@cityboy.com", link: "mailto:bookings@cityboy.com", label: "Booking Inquiries" },
    { icon: "fa-solid fa-envelope", text: "press@cityboy.com", link: "mailto:press@cityboy.com", label: "Press & Media" },
  ];

  const socialLinks = [
    { icon: "fa-brands fa-instagram", url: "https://instagram.com", label: "Instagram", color: "#E1306C" },
    { icon: "fa-brands fa-x-twitter", url: "https://twitter.com", label: "Twitter", color: "#1DA1F2" },
    { icon: "fa-brands fa-youtube", url: "https://youtube.com", label: "YouTube", color: "#FF0000" },
    { icon: "fa-brands fa-spotify", url: "https://open.spotify.com/artist/4RqKhdPXnN6cvyrwnP0USN?si=pM2i2NaNTD2MTDB1RTIxYQ", label: "Spotify", color: "#1DB954" },
    { icon: "fa-brands fa-apple", url: "https://apple.com/music", label: "Apple Music", color: "#A2AAAD" },
    { icon: "fa-brands fa-tiktok", url: "https://tiktok.com", label: "TikTok", color: "#000000" },
    { icon: "fa-brands fa-soundcloud", url: "https://soundcloud.com", label: "SoundCloud", color: "#FF7700" }
  ];

  return (
    <ContactPageWrapper>
      <PageHero>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <HeroTitle>Contact</HeroTitle>
          <HeroSubtitle>Connect with CITYBOY for bookings, interviews, and more</HeroSubtitle>
        </motion.div>
      </PageHero>
      
      <ContactContainer>
        <ContactColumns>
          <InfoColumn>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <InfoCard>
                <InfoHeader>
                  <IconGlow />
                  <h3>Get In Touch</h3>
                </InfoHeader>
                
                <InfoList>
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      {item.link ? (
                        <InfoItemLink 
                          href={item.link}
                          target={item.link.startsWith('http') ? "_blank" : "_self"}
                          rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
                          whileHover={{ x: 5 }}
                        >
                          <InfoIcon>
                            <i className={item.icon}></i>
                          </InfoIcon>
                          <div>
                            <InfoLabel>{item.label}</InfoLabel>
                            <InfoText>{item.text}</InfoText>
                          </div>
                        </InfoItemLink>
                      ) : (
                        <InfoItem whileHover={{ x: 5 }}>
                          <InfoIcon>
                            <i className={item.icon}></i>
                          </InfoIcon>
                          <div>
                            <InfoLabel>{item.label}</InfoLabel>
                            <InfoText>{item.text}</InfoText>
                          </div>
                        </InfoItem>
                      )}
                    </motion.div>
                  ))}
                </InfoList>
                
                <InstagramSection>
                  <InstagramHeader>Fans & General Inquiries</InstagramHeader>
                  <InstagramInfo>
                    For fan messages and other inquiries, please DM CITYBOY directly on Instagram.
                  </InstagramInfo>
                  <InstagramButton 
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <i className="fa-brands fa-instagram"></i> DM on Instagram
                  </InstagramButton>
                </InstagramSection>
                
                <SocialSection>
                  <SocialHeader>Connect & Follow</SocialHeader>
                  <SocialGrid>
                    {socialLinks.map((social, index) => (
                      <SocialLink 
                        key={index}
                        href={social.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        $color={social.color}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className={social.icon}></i>
                      </SocialLink>
                    ))}
                  </SocialGrid>
                </SocialSection>
                
                <BookingSection>
                  <BookingHeader>Management & Representation</BookingHeader>
                  <BookingInfo>
                    For tour bookings, festival appearances, collaborations, or business opportunities, please contact our management team directly.
                  </BookingInfo>
                  <BookingButton 
                    href="mailto:management@cityboy.com"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <i className="fa-solid fa-envelope"></i> Contact Management
                  </BookingButton>
                </BookingSection>
                
                <MusicDistribution>
                  <DistributionHeader>Listen Everywhere</DistributionHeader>
                  <DistributionText>
                    CITYBOY's music is available on all major streaming platforms.
                    Click the icons above to listen and follow.
                  </DistributionText>
                </MusicDistribution>
              </InfoCard>
            </motion.div>
          </InfoColumn>
          
          <FormColumn>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FormCard>
                {formStatus.submitted ? (
                  <SuccessMessage>
                    <SuccessIcon>
                      <i className="fa-solid fa-check-circle"></i>
                    </SuccessIcon>
                    <SuccessTitle>Message Sent!</SuccessTitle>
                    <SuccessText>{formStatus.message}</SuccessText>
                    <SuccessButton
                      onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Another
                    </SuccessButton>
                  </SuccessMessage>
                ) : (
                  <>
                    <FormHeader>
                      <IconGlow />
                      <h3>Send a Message</h3>
                    </FormHeader>
                    
                    <Form onSubmit={handleSubmit}>
                      <InputRow>
                        <InputGroup
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -4 }}
                        >
                          <InputLabel htmlFor="name">
                            Your Name <Required>*</Required>
                          </InputLabel>
                          <InputWrapper>
                            <Input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your name"
                              required
                            />
                          </InputWrapper>
                        </InputGroup>
                        
                        <InputGroup
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -4 }}
                        >
                          <InputLabel htmlFor="email">
                            Email Address <Required>*</Required>
                          </InputLabel>
                          <InputWrapper>
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                              required
                            />
                          </InputWrapper>
                        </InputGroup>
                      </InputRow>
                      
                      <InputGroup
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                      >
                        <InputLabel htmlFor="subject">Inquiry Type</InputLabel>
                        <InputWrapper>
                          <Select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                          >
                            <option value="">Select an inquiry type</option>
                            <option value="Booking">Booking Inquiry</option>
                            <option value="Press">Press & Media</option>
                            <option value="Other">Other</option>
                          </Select>
                        </InputWrapper>
                      </InputGroup>
                      
                      <InputGroup
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                      >
                        <InputLabel htmlFor="message">
                          Your Message <Required>*</Required>
                        </InputLabel>
                        <InputWrapper>
                          <TextArea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            rows="5"
                            required
                          />
                        </InputWrapper>
                      </InputGroup>
                      
                      {formStatus.error && (
                        <ErrorMessage>
                          <i className="fa-solid fa-exclamation-circle"></i>
                          {formStatus.message}
                        </ErrorMessage>
                      )}
                      
                      <SubmitButton
                        type="submit"
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Send Message</span>
                        <i className="fa-solid fa-paper-plane"></i>
                      </SubmitButton>
                    </Form>
                  </>
                )}
              </FormCard>
            </motion.div>
          </FormColumn>
        </ContactColumns>
      </ContactContainer>
    </ContactPageWrapper>
  );
};

// Styled Components
const ContactPageWrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: #0a0a0a;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/src/assets/IMG_9044 Medium.jpeg") no-repeat center center;
    background-size: cover;
    opacity: 0.1;
    z-index: 0;
  }
`;

const PageHero = styled.div`
  text-align: center;
  padding: 8rem 2rem 3rem;
  position: relative;
  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, transparent, #0a0a0a);
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    padding: 7rem 1rem 2rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 3px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2rem 6rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 1rem 1rem 4rem;
  }
`;

const ContactColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const InfoColumn = styled.div`
  @media (max-width: 992px) {
    order: 1;
  }
`;

const FormColumn = styled.div`
  @media (max-width: 992px) {
    order: 0;
  }
`;

const InfoCard = styled.div`
  background: rgba(20, 20, 20, 0.7);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  height: 100%;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const InfoHeader = styled.div`
  position: relative;
  margin-bottom: 2rem;
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    position: relative;
    z-index: 1;
  }
`;

const IconGlow = styled.div`
  position: absolute;
  top: -10px;
  left: -30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--secondary-color);
  filter: blur(30px);
  opacity: 0.5;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  margin-bottom: 2.5rem;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: default;
`;

const InfoItemLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary-color);
  }
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(166, 124, 82, 0.1);
  border-radius: 50%;
  color: var(--secondary-color);
  font-size: 1.2rem;
`;

const InfoLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.2rem;
`;

const InfoText = styled.div`
  font-weight: 500;
`;

const InstagramSection = styled.div`
  background: linear-gradient(90deg, rgba(64, 93, 230, 0.2), rgba(225, 48, 108, 0.2));
  border-left: 3px solid #E1306C;
  padding: 1.5rem;
  border-radius: 0 8px 8px 0;
  margin-bottom: 2.5rem;
`;

const InstagramHeader = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const InstagramInfo = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
`;

const InstagramButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
  color: white;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(225, 48, 108, 0.3);
  
  i {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 0.8rem 1rem;
  }
`;

const SocialSection = styled.div`
  margin-bottom: 2.5rem;
`;

const SocialHeader = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const SocialGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(30, 30, 30, 0.8);
  color: ${props => props.$color || 'white'};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background-color: ${props => props.$color || 'var(--secondary-color)'};
    color: white;
  }
`;

const BookingSection = styled.div`
  background: rgba(166, 124, 82, 0.1);
  border-left: 3px solid var(--secondary-color);
  padding: 1.5rem;
  border-radius: 0 8px 8px 0;
  margin-bottom: 2.5rem;
`;

const BookingHeader = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const BookingInfo = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
`;

const BookingButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.5rem;
  background: var(--secondary-color);
  color: white;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(166, 124, 82, 0.3);
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 0.8rem 1rem;
  }
`;

const MusicDistribution = styled.div`
  background: rgba(30, 30, 30, 0.5);
  padding: 1.5rem;
  border-radius: 8px;
`;

const DistributionHeader = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const DistributionText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const FormCard = styled.div`
  background: rgba(20, 20, 20, 0.7);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  height: 100%;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormHeader = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    position: relative;
    z-index: 1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const InputGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Required = styled.span`
  color: var(--secondary-color);
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
    background: rgba(255, 255, 255, 0.07);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  appearance: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
    background: rgba(255, 255, 255, 0.07);
  }
  
  option {
    background: #1a1a1a;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
    background: rgba(255, 255, 255, 0.07);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  background: rgba(220, 53, 69, 0.1);
  border-left: 3px solid #dc3545;
  border-radius: 0 4px 4px 0;
  color: #ff6b7d;
  font-size: 0.9rem;
  
  i {
    color: #dc3545;
  }
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: 0 4px 10px rgba(166, 124, 82, 0.3);
  transition: all 0.3s ease;
  width: auto;
  
  &:hover {
    box-shadow: 0 6px 15px rgba(166, 124, 82, 0.4);
  }
  
  i {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 0.8rem 1rem;
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const SuccessIcon = styled.div`
  font-size: 3rem;
  color: #28a745;
  margin-bottom: 1.5rem;
`;

const SuccessTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SuccessText = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 400px;
`;

const SuccessButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  background: var(--secondary-color);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(166, 124, 82, 0.3);
`;

export default ContactPage; 