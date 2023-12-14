import React, { useState } from 'react';
import styled from 'styled-components';
import image from "./health-logo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavContainer>
      <a href="https://tinkeringlab.iitr.ac.in/" target="_blank" rel="noreferrer">
        <Logo src={image} />
      </a>
      <NavToggle onClick={handleToggle}>
        <span />
        <span />
        <span />
      </NavToggle>
      <NavLinks open={isNavOpen}>
      <NavLink href="#Home">Home</NavLink>
        <NavLink href="#Measurements">Measurements</NavLink>
        <NavLink href="#Prescriptions">Prescriptions</NavLink>
        <NavLink href="#Appointments">Appointments</NavLink>
        <NavLink href="#Health Analysis">Health Analysis</NavLink>
        <NavLink href="#Data Monetization">Data Monetization</NavLink>
        <NavLink href="#Contact Us">Contact Us</NavLink>
       

      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0f2c4c;
  color: white;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
 width: 66.46px;
height: 48.36px;
top: 18.76px;
left: 68.36px;

`;

const NavToggle = styled.div`
  display: none;
  cursor: pointer;

  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px 0;
    background-color: white;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #0f2c4c;
    text-align: center;
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 0 15px;

  @media (max-width: 600px) {
    margin: 10px 0;
  }
`;
