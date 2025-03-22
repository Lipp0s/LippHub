import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const Nav = styled.nav`
  background-color: #0a0a0a;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #333;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    color: #ff9000;
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 1;
  animation: fadeOut 0.8s ease-in-out forwards 2s;
  
  @keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

const Logo = styled.div`
  font-size: 5rem;
  font-weight: bold;
  color: white;
  display: flex;
  gap: 0.5rem;
  
  span {
    color: #ff9000;
    display: inline-block;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.8s ease forwards;
  }

  .hub {
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.8s ease forwards 0.7s;
  }
  
  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function AppContent() {
  const [showLoading, setShowLoading] = useState(true);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/') {
      setShowLoading(true);
      const audio = new Audio('/sounds/hub.mp3');
      audio.volume = 0.3;
      
      const playSound = async () => {
        try {
          await audio.play();
        } catch (error) {
          console.error('Audio playback failed:', error);
        }
      };
      
      playSound();
      
      setTimeout(() => {
        setShowLoading(false);
      }, 2300); // Increased total duration
    }
  }, [location]);

  return (
    <>
      {showLoading && location.pathname === '/' && (
        <LoadingOverlay>
          <Logo>
            <span>Lipp</span>
            <div className="hub">Hub</div>
          </Logo>
        </LoadingOverlay>
      )}
      <Nav>
        <NavContainer>
          <StyledLink to="/">LippHub</StyledLink>
          <NavLinks>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
          </NavLinks>
        </NavContainer>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;