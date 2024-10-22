import { useState } from 'react';
import logo from '../assets/dev_mode_tv.svg';
import './navbar.css';

const Navbar = ({ scrollToSection, homeRef, aboutRef, projectsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle hamburger menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle click on menu items and close the menu after navigating
  const handleMenuItemClick = (ref) => {
    scrollToSection(ref);
    setIsOpen(false);
  };

  return (
    <div className="navbar-wrapper" id="sticky">
      <img className="portfolio-logo" src={logo} alt="logo" />

      {/* Hamburger icon for small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>

      {/* Navigation menu list */}
      <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>
        <li
          onClick={() => handleMenuItemClick(homeRef)}
          className="navbar-list-item"
        >
          Home
        </li>
        <li
          onClick={() => handleMenuItemClick(aboutRef)}
          className="navbar-list-item"
        >
          About
        </li>
        <li
          onClick={() => handleMenuItemClick(projectsRef)}
          className="navbar-list-item"
        >
          Projects
        </li>
        <li
          onClick={() => handleMenuItemClick(contactRef)}
          className="navbar-list-item"
        >
          Connect
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
