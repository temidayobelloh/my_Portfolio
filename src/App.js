import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Skills from './Components/NewsApp/skills';
import Projects from './Components/SpaceApp/projects';
import Contact from './Components/Contact/contact';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import {useRef} from 'react';
import BackToTopButton from './Components/BackToTopButton/BackToTopButton';
import DiscoverNg from './Components/DiscoverNG/discoverNg';

const App = () =>{
    const home = useRef(null);
    const about = useRef(null);
    const services = useRef(null);
    const skills = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);

    const scrollToSection =(elementRef)=>{
        window.scrollTo({ top: elementRef.current.offsetTop, 
            behavior: 'smooth',})
    };
    return(
   <BrowserRouter>
   <BackToTopButton/>
   <Navbar scrollToSection={scrollToSection}
                homeRef={home}
                aboutRef={about}
                servicesRef={services}
                skillsRef={skills}
                projectsRef={projects}
                contactRef={contact}/>
            <div ref={home}><Home /></div>
            <div ref={about}><About /></div>
            <div ref={projects}><Projects/> </div>
            <div ref={skills}><Skills /></div>
            <div><DiscoverNg/></div>
            <div ref={contact}><Contact /></div>
   <Footer/>
   </BrowserRouter>
    )
  
}
export default App;