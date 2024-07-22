import {Link} from 'react-router-dom';
import logo from '../assets/developer_mode_tv_24dp_FILL0_wght400_GRAD0_opsz24 (2).svg';
import './navbar.css';

const Navbar = ({ scrollToSection, homeRef, aboutRef, servicesRef, skillsRef, projectsRef, contactRef }) => {
  return (
    <div className='navbar-wrapper' id='sticky'>
    <img className='portfolio-logo' src={logo} alt="logo"/>
   <ul className='navbar-list'>
   <li onClick={() => scrollToSection(homeRef)}className='navbar-list-item'><Link to='/' activeClassName='active-link' className='navlink'>Home</Link></li>
   <li onClick={() => scrollToSection(aboutRef)}className='navbar-list-item'><Link to='/about' activeClassName='active-link' className='navlink'>About </Link></li>
   <li onClick={() => scrollToSection(servicesRef)}className='navbar-list-item'><Link to='/services' activeClassName='active-link' className='navlink'> Services </Link></li>
   <li onClick={() => scrollToSection(skillsRef)}className='navbar-list-item'><Link to='/skills'activeClassName='active-link' className='navlink'>Skills</Link></li>
   <li onClick={() => scrollToSection(projectsRef)}className='navbar-list-item'><Link to='/projects' activeClassName='active-link' className='navlink'> Projects </Link></li>
   <li onClick={() => scrollToSection(contactRef)}className='navbar-list-item'><Link to='/connect'activeClassName='active-link' className='navlink'> Connect</Link></li>
   </ul>
   </div>
  )
}

export default Navbar;

