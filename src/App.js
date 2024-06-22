import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Skills from './Components/MySkills/skills';
import Services from './Components/Services/services';
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';
import Navbar from './Components/Navbar/navbar';

const App = () =>{
    

    return(
   <BrowserRouter>
   <Navbar/>
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