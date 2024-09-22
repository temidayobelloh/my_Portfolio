import { useState } from 'react';
import logo from '../assets/dev_mode_tv.svg';
import './navbar.css';

const Navbar = ({ scrollToSection, homeRef, aboutRef, projectsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (ref) => {
    scrollToSection(ref);
    setIsOpen(false);  // Close the menu after clicking an item
  };

  return (
    <div className='navbar-wrapper' id='sticky'>
      <img className='portfolio-logo' src={logo} alt="logo" />
      <div className='hamburger' onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>
        <li onClick={() => handleMenuItemClick(homeRef)} className='navbar-list-item'>
          Home
        </li>
        <li onClick={() => handleMenuItemClick(aboutRef)} className='navbar-list-item'>
          About
        </li>
        <li onClick={() => handleMenuItemClick(projectsRef)} className='navbar-list-item'>
          Project
        </li>
        <li onClick={() => handleMenuItemClick(contactRef)} className='navbar-list-item'>
          Connect
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
