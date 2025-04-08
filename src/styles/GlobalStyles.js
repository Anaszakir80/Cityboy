import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #000;
    --secondary-color: #a67c52;
    --accent-color: #63493c;
    --background-color: #0a0a0a;
    --text-color: #f8f8f8;
    --text-secondary: #a0a0a0;
    --overlay-color: rgba(0, 0, 0, 0.7);
    --shadow-color: rgba(0, 0, 0, 0.6);
    
    /* Responsive Breakpoints */
    --breakpoint-mobile: 480px;
    --breakpoint-tablet: 768px;
    --breakpoint-laptop: 1024px;
    --breakpoint-desktop: 1200px;
    
    /* Standard spacing units */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-xxl: 3rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 100%; /* Base font size: 16px */
    scroll-behavior: smooth;
    
    @media (max-width: 768px) {
      font-size: 93.75%; /* 15px */
    }
    
    @media (max-width: 480px) {
      font-size: 87.5%; /* 14px */
    }
  }

  body {
    font-family: 'Montserrat', 'Helvetica Neue', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    overflow-x: hidden;
    letter-spacing: 0.02em;
    line-height: 1.6;
    min-height: 100vh;
  }
  
  /* Fix for mobile browsers address bar issues */
  body, html {
    width: 100%;
    overflow-x: hidden;
    position: relative;
    height: auto;
  }

  /* Custom font for CITY BOY mentions */
  .brand-font {
    font-family: 'Teko', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Glitch effect for brand elements */
  .brand-glitch {
    position: relative;
    display: inline-block;
  }

  .brand-glitch::before,
  .brand-glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .brand-glitch::before {
    left: 2px;
    text-shadow: -1px 0 #ae8760;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }

  .brand-glitch::after {
    left: -2px;
    text-shadow: 1px 0 #735744;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }

  @keyframes glitch-anim {
    0% {
      clip: rect(45px, 9999px, 38px, 0);
    }
    5% {
      clip: rect(22px, 9999px, 73px, 0);
    }
    10% {
      clip: rect(67px, 9999px, 33px, 0);
    }
    15% {
      clip: rect(5px, 9999px, 60px, 0);
    }
    20% {
      clip: rect(26px, 9999px, 13px, 0);
    }
    100% {
      clip: rect(0, 0, 0, 0);
    }
  }

  @keyframes glitch-anim2 {
    0% {
      clip: rect(65px, 9999px, 119px, 0);
    }
    5% {
      clip: rect(52px, 9999px, 74px, 0);
    }
    10% {
      clip: rect(33px, 9999px, 144px, 0);
    }
    15% {
      clip: rect(54px, 9999px, 34px, 0);
    }
    20% {
      clip: rect(86px, 9999px, 15px, 0);
    }
    100% {
      clip: rect(0, 0, 0, 0);
    }
  }

  /* Responsive Typography */
  h1 {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: var(--space-lg);
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
    
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
  
  h2 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: var(--space-lg);
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }
  
  h3 {
    font-size: 2rem;
    line-height: 1.3;
    margin-bottom: var(--space-md);
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
  
  h4 {
    font-size: 1.5rem;
    line-height: 1.4;
    
    @media (max-width: 480px) {
      font-size: 1.25rem;
    }
  }
  
  p {
    margin-bottom: var(--space-md);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
    touch-action: manipulation;
  }

  ul, li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    padding: 0;
    font-family: inherit;
    touch-action: manipulation;
    min-height: 44px; /* Minimum touch target size */
  }
  
  /* Improve touch targets for mobile */
  input, select, textarea {
    font-family: inherit;
    font-size: 1rem;
    min-height: 44px; /* Minimum touch target size */
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-md);
    
    @media (max-width: 480px) {
      padding: 0 var(--space-sm);
    }
  }
  
  /* Grid System */
  .grid {
    display: grid;
    gap: var(--space-md);
  }
  
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
    
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  
  .grid-4 {
    grid-template-columns: repeat(4, 1fr);
    
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  /* Animations and Transitions */
  .fade-in {
    opacity: 0;
    animation: fadeIn 0.8s ease forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .slide-up {
    transform: translateY(50px);
    opacity: 0;
    animation: slideUp 0.8s ease forwards;
  }

  @keyframes slideUp {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  /* Hide elements only on mobile */
  .mobile-hidden {
    @media (max-width: 768px) {
      display: none !important;
    }
  }
  
  /* Hide elements only on desktop */
  .desktop-hidden {
    @media (min-width: 769px) {
      display: none !important;
    }
  }
  
  /* Ensure images are responsive by default */
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Fix iOS input styling */
  input, 
  textarea {
    -webkit-appearance: none;
    border-radius: 0;
  }
`;

export default GlobalStyles; 