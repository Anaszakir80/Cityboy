import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import BackToTop from './BackToTop';
import GlobalStyles from '../styles/GlobalStyles';
import styled from 'styled-components';

const Layout = () => {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <Navigation />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
      <BackToTop />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

export default Layout; 