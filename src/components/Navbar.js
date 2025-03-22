import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: #000000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #ff9000;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #ff9000;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">LippHub</Logo>
      <NavLinks>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;