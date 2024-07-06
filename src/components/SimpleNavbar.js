import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 3px; /* Adjusted padding */
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: yellow;
  text-decoration: none;
  font-size: 16px;
  margin-left: 10px;
  transition: color 0.3s ease, background-color 0.3s ease;
  position: relative;
  font-family: Poppins;

  &:hover {
    background-color: yellow;
    color: black;
    border-radius: 10px;
    width: auto;
  }

  &.active,
  &.dropdown-active {
    color: black;
    background-color: yellow;
    border-radius: 10px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 10px 10px;
  z-index: 100;
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease;

  width: 200px;
`;

const DropdownLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 10px;

  &:hover {
    background-color: yellow;
    color: black;
  }
`;

const DropdownToggle = styled.div`
  position: relative;

  &:hover ${DropdownMenu} {
    display: block;
    opacity: 1;
  }
`;

const SimpleNavbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <Navbar>
      <Logo to="/">Logo</Logo>
      <NavMenu>
        <NavLink
          to="/"
          className={activeLink === '/' ? 'active' : ''}
          onClick={() => handleLinkClick('/')}
        >
          Home
        </NavLink>
        <NavLink
          to="/sec"
          className={activeLink === '/sec' ? 'active' : ''}
          onClick={() => handleLinkClick('/sec')}
        >
          Know More
        </NavLink>
        <DropdownToggle>
          <NavLink
            to="/gallery"
            className={`${activeLink === '/gallery' ? 'active dropdown-active' : ''}`}
            onClick={() => handleLinkClick('/gallery')}
          >
            Gallery
          </NavLink>
          <DropdownMenu>
            <DropdownLink to="/gallery">Gallery 1</DropdownLink>
            <DropdownLink to="/gallery2">Gallery 2</DropdownLink>
            <DropdownLink to="/gallery3">Gallery 3</DropdownLink>
          </DropdownMenu>
        </DropdownToggle>
        <NavLink
          to="/documents"
          className={activeLink === '/documents' ? 'active' : ''}
          onClick={() => handleLinkClick('/documents')}
        >
          Documents
        </NavLink>
        <NavLink
          to="/videos"
          className={activeLink === '/videos' ? 'active' : ''}
          onClick={() => handleLinkClick('/videos')}
        >
          Videos
        </NavLink>
      </NavMenu>
    </Navbar>
  );
};

export default SimpleNavbar;
