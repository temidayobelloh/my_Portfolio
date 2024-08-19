import React, { useEffect, useRef } from 'react';
import './home.css';
import DownloadcvButton from '../DownloadCVButton/downloadcvButton';
import homeLogo from '../assets/desktop-video-chat-coffee-by-oblik-studio.svg';

const Home = () => {
  // Create refs for the elements you want to observe
  const homeTextRef = useRef(null);
  const homeLogoRef = useRef(null);
  const buttonWrapperRef = useRef(null);

  // Scroll to the projects section when the "View Projects" button is clicked
  const viewProject = () => {
    const viewProjectSection = document.getElementById('project-section');
    if (viewProjectSection) {
      viewProjectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Store the current values of refs in local variables
    const homeTextElement = homeTextRef.current;
    const homeLogoElement = homeLogoRef.current;
    const buttonWrapperElement = buttonWrapperRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe the elements
    if (homeTextElement) observer.observe(homeTextElement);
    if (homeLogoElement) observer.observe(homeLogoElement);
    if (buttonWrapperElement) observer.observe(buttonWrapperElement);

    // Cleanup function to unobserve the elements
    return () => {
      if (homeTextElement) observer.unobserve(homeTextElement);
      if (homeLogoElement) observer.unobserve(homeLogoElement);
      if (buttonWrapperElement) observer.unobserve(buttonWrapperElement);
    };
  }, []);

  return (
    <div>
      <div className='homePage-wrapper'>
        <div ref={homeTextRef} className='homePage-text'>
          <p className='homePage-text-one'>
            Hello there! I'm <span className='text-name'>Bello TEMIDAYO</span>
          </p>
          <p className='homePage-text-two'>
            A Frontend Developer, who loves turning ideas into reality through
            code. <br />
            I am actively seeking entry-level positions to utilize my skills and
            advance professionally.
          </p>
          <div ref={buttonWrapperRef} className='button-wrapper'>
            <DownloadcvButton />
            <button onClick={viewProject} className='viewProject-button'>
              View Projects
            </button>
          </div>
        </div>
        <div>
          <img ref={homeLogoRef} className='home-logo' src={homeLogo} alt='homePage-logo' />
        </div>
      </div>
    </div>
  );
};

export default Home;