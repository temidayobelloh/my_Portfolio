import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Skills from './Components/MySkills/skills';
import Services from './Components/Services/services';
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';

const App = () =>{
    return(
   <BrowserRouter>
   <div className='navbar-wrapper'>
    <p className='navbar-logo'>logo</p>
   <ul className='navbar-list'>
   <li className='navbar-list-item'><Link to='/' activeClassName='active-link' className='navlink'>Home</Link></li>
   <li className='navbar-list-item'><Link to='/about' activeClassName='active-link' className='navlink'>About </Link></li>
   <li className='navbar-list-item'><Link to='/services' activeClassName='active-link' className='navlink'> Services </Link></li>
   <li className='navbar-list-item'><Link to='/skills'activeClassName='active-link' className='navlink'>Skills</Link></li>
   <li className='navbar-list-item'><Link to='/projects' activeClassName='active-link' className='navlink'> Projects </Link></li>
   <li className='navbar-list-item'><Link to='/contact_form'activeClassName='active-link' className='navlink'> Contact </Link></li>
   </ul>
   </div>
   <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/about" element ={<About/>}/>
    <Route path="/skills" element ={<Skills/>}/>
    <Route path="/services" element ={<Services/>}/>
    <Route path="/projects" element ={<Projects/>}/>
    <Route path="/contact" element ={<Contact/>}/>
   </Routes>
   </BrowserRouter>
    )
  
}
export default App;