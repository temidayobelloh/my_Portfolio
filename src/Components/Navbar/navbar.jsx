import {Link} from 'react-router-dom';
import logo from '../assets/dev_mode_tv.svg';
import './navbar.css';

const Navbar = ({ scrollToSection, homeRef, aboutRef, servicesRef, skillsRef, projectsRef, contactRef }) => {
  return (
    <div className='navbar-wrapper' id='sticky'>
    <img className='portfolio-logo' src={logo} alt="logo"/>
   <ul className='navbar-list'>
   <li onClick={() => scrollToSection(homeRef)}className='navbar-list-item'><Link to='/' activeClassName='active-link' className='navlink'>Home</Link></li>
   <li onClick={() => scrollToSection(aboutRef)}className='navbar-list-item'><Link to='/about' activeClassName='active-link' className='navlink'>About </Link></li>
   <li onClick={() => scrollToSection(projectsRef)}className='navbar-list-item'><Link to='/projects' activeClassName='active-link' className='navlink'> Projects </Link></li>
   <li onClick={() => scrollToSection(contactRef)}className='navbar-list-item'><Link to='/connect'activeClassName='active-link' className='navlink'> Connect</Link></li>
   </ul>
   </div>
  )
}

export default Navbar;

