import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import LinkedIn from './images/linkedin.png';
import Github from './images/github.jpg';
import './styles/Navbar.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();  
  const toggleMenu = () => setShowMenu(!showMenu);

  const onAboutPage = location.pathname === '/';

  return (
    <header>
      <div className="leftHeader">
        <h1>Jordan Weinstein</h1>
        <a href="https://www.linkedin.com/in/jordan-weinstein-aa50661ab/"><img src={LinkedIn} alt="LinkedIn Logo" className='navImg'/></a>
        <a href="https://github.com/Jordweinstein"><img src={Github} alt="Github Logo" className='navImg'/></a>
      </div>
      
      <nav className={`navbar ${showMenu ? 'show-menu' : ''}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className={`nav-links ${showMenu ? 'mobile' : ''}`}>
          <NavLink to="/" className="navbar-item" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/experience" className="navbar-item" activeClassName="active">
            Experience
          </NavLink>
          {onAboutPage ? (
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-item"
            >
              Contact
            </ScrollLink>
          ) : (
            <NavLink
              to="/#contact" 
              className="navbar-item"
              activeClassName="active"
            >
              Contact
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

