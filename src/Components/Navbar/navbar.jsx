import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
    <p className='navbar-logo'>logo</p>
   <ul className='navbar-list'>
   <li className='navbar-list-item'><Link to='/' activeClassName='active-link' className='navlink'>Home</Link></li>
   <li className='navbar-list-item'><Link to='/about' activeClassName='active-link' className='navlink'>About </Link></li>
   <li className='navbar-list-item'><Link to='/services' activeClassName='active-link' className='navlink'> Services </Link></li>
   <li className='navbar-list-item'><Link to='/skills'activeClassName='active-link' className='navlink'>Skills</Link></li>
   <li className='navbar-list-item'><Link to='/projects' activeClassName='active-link' className='navlink'> Projects </Link></li>
   <li className='navbar-list-item'><Link to='/contact'activeClassName='active-link' className='navlink'> Contact </Link></li>
   </ul>
   </div>
  )
}

export default Navbar;
