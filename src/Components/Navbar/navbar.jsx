import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/dev_mode_tv.svg';
import './navbar.css';

const Navbar = ({ scrollToSection, homeRef, aboutRef, projectsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <li onClick={() => scrollToSection(homeRef)} className='navbar-list-item'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'active-link navlink' : 'navlink'}>
            Home
          </NavLink>
        </li>
        <li onClick={() => scrollToSection(aboutRef)} className='navbar-list-item'>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'active-link navlink' : 'navlink'}>
            About
          </NavLink>
        </li>
        <li onClick={() => scrollToSection(projectsRef)} className='navbar-list-item'>
          <NavLink to='/projects' className={({ isActive }) => isActive ? 'active-link navlink' : 'navlink'}>
            Projects
          </NavLink>
        </li>
        <li onClick={() => scrollToSection(contactRef)} className='navbar-list-item'>
          <NavLink to='/connect' className={({ isActive }) => isActive ? 'active-link navlink' : 'navlink'}>
            Connect
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
