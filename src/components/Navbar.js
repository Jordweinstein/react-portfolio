import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './styles/Navbar.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header>
        <h1>Jordan Weinstein</h1>
        <nav className={`navbar ${showMenu ? 'show-menu' : ''}`}>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
          <div className={`nav-links ${showMenu ? 'mobile' : ''}`}>
            <RouterLink to="/about">
              About
            </RouterLink>
            <RouterLink to="/experience">Experience</RouterLink>
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </ScrollLink>
          </div>
        </nav>
      </header>
    </>
  );
}

