import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = () => {
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

  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
    img.onload = () => setMapLoaded(true);
  }, []);
  
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
    { icon: "fa-solid fa-envelope", text: "bookings@cityboy.com", label: "Email" },
    { icon: "fa-solid fa-phone", text: "+1 (555) 123-4567", label: "Phone" },
    { icon: "fa-solid fa-map-marker-alt", text: "Los Angeles, CA", label: "Location" },
    { icon: "fa-solid fa-clock", text: "Mon-Fri: 10AM-6PM", label: "Office Hours" }
  ];

  const socialLinks = [
    { icon: "fa-brands fa-instagram", url: "https://instagram.com", color: "#E1306C" },
    { icon: "fa-brands fa-x-twitter", url: "https://twitter.com", color: "#1DA1F2" },
    { icon: "fa-brands fa-youtube", url: "https://youtube.com", color: "#FF0000" },
    { icon: "fa-brands fa-spotify", url: "https://spotify.com", color: "#1DB954" },
    { icon: "fa-brands fa-apple", url: "https://apple.com/music", color: "#A2AAAD" },
    { icon: "fa-brands fa-tiktok", url: "https://tiktok.com", color: "#000000" }
  ];

  return (
    <ContactSectionWrapper id="contact">
      <BackgroundGlow />
      
      <ContainerWrapper>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Contact</SectionTitle>
            <SectionSubtitle>Get In Touch</SectionSubtitle>
          </motion.div>
        </SectionHeader>
        
        <ContentContainer>
          <ContactInfoColumn>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <InfoCard>
                <InfoHeader>
                  <IconGlow />
                  <h3>Connect With Us</h3>
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
                      <InfoItem whileHover={{ x: 5 }}>
                        <InfoIcon>
                          <i className={item.icon}></i>
                        </InfoIcon>
                        <div>
                          <InfoLabel>{item.label}</InfoLabel>
                          <InfoText>{item.text}</InfoText>
                        </div>
                      </InfoItem>
                    </motion.div>
                  ))}
                </InfoList>
                
                <SocialSection>
                  <SocialHeader>Follow Us</SocialHeader>
                  <SocialGrid>
                    {socialLinks.map((social, index) => (
                      <SocialLink 
                        key={index}
                        href={social.url} 
                        target="_blank"
                        $color={social.color}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className={social.icon}></i>
                      </SocialLink>
                    ))}
                  </SocialGrid>
                </SocialSection>
              </InfoCard>
            </motion.div>
          </ContactInfoColumn>
          
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
                        <InputLabel htmlFor="subject">Subject</InputLabel>
                        <InputWrapper>
                          <Input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What is this regarding?"
                          />
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
                            placeholder="Enter your message here..."
                            rows="5"
                            required
                          />
                        </InputWrapper>
                      </InputGroup>
                      
                      {formStatus.error && (
                        <ErrorMessage
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, type: "spring" }}
                        >
                          <i className="fa-solid fa-triangle-exclamation"></i>
                          {formStatus.message}
                        </ErrorMessage>
                      )}
                      
                      <ButtonContainer>
                        <SubmitButton
                          type="submit"
                          whileHover={{ scale: 1.05, y: -3 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Send Message
                          <i className="fa-solid fa-paper-plane"></i>
                        </SubmitButton>
                      </ButtonContainer>
                    </Form>
                  </>
                )}
              </FormCard>
            </motion.div>
          </FormColumn>
        </ContentContainer>
      </ContainerWrapper>
    </ContactSectionWrapper>
  );
};

// Styled Components
const ContactSectionWrapper = styled.section`
  position: relative;
  padding: 100px 0;
  overflow: hidden;
  background-color: transparent;
  z-index: 1;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(
    circle at 20% 30%,
    rgba(29, 185, 84, 0.05) 0%,
    transparent 50%
  ),
  radial-gradient(
    circle at 80% 60%,
    rgba(255, 0, 80, 0.05) 0%,
    transparent 50%
  );
`;

const ContainerWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 3px;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.3rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
    border-radius: 3px;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const ContactInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled(motion.div)`
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100%;
  position: relative;
  transition: all 0.4s ease;
  
  &:hover {
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

const InfoCard = styled(Card)`
  padding: 3rem;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4),
    rgba(20, 20, 20, 0.6)
  );
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormCard = styled(Card)`
  padding: 3rem;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4),
    rgba(20, 20, 20, 0.6)
  );
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const InfoHeader = styled.div`
  position: relative;
  margin-bottom: 3rem;
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    background: linear-gradient(135deg, #fff, rgba(255,255,255,0.7));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    z-index: 2;
  }
`;

const FormHeader = styled(InfoHeader)``;

const IconGlow = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  opacity: 0.2;
  filter: blur(20px);
  top: -15px;
  left: -15px;
  z-index: 1;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-bottom: 3rem;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  transition: all 0.3s ease;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--secondary-color);
  flex-shrink: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
`;

const InfoLabel = styled.div`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const InfoText = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
`;

const SocialSection = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const SocialHeader = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
`;

const SocialGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: ${props => props.$color || 'white'};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const InputLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: 1px;
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
  padding: 1.2rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 3px rgba(255, 0, 80, 0.1);
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.2rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: white;
  font-size: 1rem;
  resize: vertical;
  min-height: 160px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 3px rgba(255, 0, 80, 0.1);
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.5rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(255, 0, 80, 0.3);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s ease;
  }
  
  &:hover:before {
    left: 100%;
  }
  
  i {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover i {
    transform: translateX(5px);
  }
`;

const ErrorMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ff3b3b;
  font-size: 0.95rem;
  padding: 1rem 1.2rem;
  background: rgba(255, 59, 59, 0.1);
  border-radius: 12px;
  border-left: 3px solid #ff3b3b;
  
  i {
    font-size: 1.2rem;
  }
`;

const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  height: 100%;
  min-height: 300px;
`;

const SuccessIcon = styled.div`
  font-size: 5rem;
  color: var(--accent-color);
  margin-bottom: 2rem;
  filter: drop-shadow(0 0 20px rgba(255, 0, 80, 0.5));
`;

const SuccessTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
`;

const SuccessText = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 400px;
  line-height: 1.6;
`;

const SuccessButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: transparent;
  color: var(--secondary-color);
  font-weight: 600;
  font-size: 1rem;
  border-radius: 14px;
  border: 2px solid var(--secondary-color);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 0, 80, 0.1);
    box-shadow: 0 8px 20px rgba(255, 0, 80, 0.15);
  }
`;

export default ContactSection; 