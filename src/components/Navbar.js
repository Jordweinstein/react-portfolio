import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
