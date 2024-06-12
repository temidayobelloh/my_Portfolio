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
   <li className='navbar-list-item'><NavLink to='/about_me' activeClassName='active-link' className='navlink'>About Me </NavLink></li>
   <li className='navbar-list-item'><NavLink to='/my_skills'activeClassName='active-link' className='navlink'> My Skills </NavLink></li>
   <li className='navbar-list-item'><NavLink to='/contact_form' activeClassName='active-link' className='navlink'>Contact Form</NavLink></li>
   </ul>
   </div>
   <Routes>
   <Route path="/" element ={<Home/>}/>
   <Route path="/about_me" element ={<About/>}/>
   <Route path="/my_skills" element ={<Skills/>}/>
   <Route path="/services" element ={<Services/>}/>
   </Routes>
   </BrowserRouter>
    )
  
}
export default App;