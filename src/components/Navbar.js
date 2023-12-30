import "./styles/Navbar.css";
import {Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {

    return (
        <>
        <header>
            <h1>Jordan Weinstein</h1>
            <nav className = "navbar">
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
            
            </nav>
        </header>  
        </>
    )
}

