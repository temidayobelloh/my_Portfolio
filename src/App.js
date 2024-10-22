import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Skills from './Components/NewsApp/skills';
import Projects from './Components/SpaceApp/projects';
import Contact from './Components/Contact/contact';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import { useRef } from 'react';
import BackToTopButton from './Components/BackToTopButton/BackToTopButton';
import DiscoverNg from './Components/DiscoverNG/discoverNg';

const App = () => {
  // Create refs for each section to enable smooth scrolling
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to the desired section smoothly when called
  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <BrowserRouter>
      {/* Back to Top Button */}
      <BackToTopButton />

      {/* Navbar with section refs passed as props */}
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      {/* Sections with their respective refs */}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div>
        <DiscoverNg />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
