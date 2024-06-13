import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Skills from './Components/MySkills/skills';
import Services from './Components/Services/services';

const App = () =>{
    return(
   <BrowserRouter>
   <div className='navbar-wrapper'>
    <p className='navbar-logo'>logo</p>
   <ul className='navbar-list'>
   <li className='navbar-list-item'><NavLink to='/' activeClassName='active-link' className='navlink' >Home</NavLink></li>
   <li className='navbar-list-item'><NavLink to='/about' activeClassName='active-link' className='navlink'>About </NavLink></li>
   <li className='navbar-list-item'><NavLink to='/services'activeClassName='active-link' className='navlink'> Services </NavLink></li>
   <li className='navbar-list-item'><NavLink to='/skills' activeClassName='active-link' className='navlink'>Skills</NavLink></li>
   <li className='navbar-list-item'><NavLink to='/projects'activeClassName='active-link' className='navlink'> Projects </NavLink></li>
   <li className='navbar-list-item'><NavLink to='/contact_form'activeClassName='active-link' className='navlink'> Contact </NavLink></li>
   </ul>
   </div>
   <Routes>
   <Route path="/" element ={<Home/>}/>
   <Route path="/about_me" element ={<About/>}/>
   <Route path="/skills" element ={<Skills/>}/>
   <Route path="/services" element ={<Services/>}/>
   </Routes>
   </BrowserRouter>
    )
  
}
export default App;