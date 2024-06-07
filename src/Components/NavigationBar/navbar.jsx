import './navbar.css';
const NavBar = () => {
  return (
    <div className='navbar-wrapper'>
    <div>
    <p className='navbar-logo'>Temi Bello</p>
    </div>
    <ul className='navbar-list'>
    <li className='navbar-list-item'>About Me</li>
    <li className='navbar-list-item'>Portfolio</li>
    <li className='navbar-list-item'>Contact Form</li>
    </ul>
    </div>
  )
}
// remember to style the css of this page using css module
// research on naming conventions for your classname and ids (BEM)
export default NavBar;
