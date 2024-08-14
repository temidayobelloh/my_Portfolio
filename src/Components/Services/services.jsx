import React, { useEffect, useRef } from 'react';
import './services.css';
import code from '../assets/code-block.svg';
import dev from '../assets/developer-mode-icon.svg';
import responsive from '../assets/responsive-logo.svg';

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (servicesRef.current) {
        const servicesBoxes = servicesRef.current.querySelectorAll('.services-box');
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        servicesBoxes.forEach(box => {
          const boxTop = box.getBoundingClientRect().top + scrollTop;
          if (scrollTop + windowHeight > boxTop) {
            box.classList.add('show');
          } else {
            box.classList.remove('show');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='services-container'>
      <h1 className='services-text'>My Services</h1>
      <div className='services-wrapper' ref={servicesRef}>
        <div className='services-box'>
          <h2 className='services-header'>Web Development <img src={dev} alt="dev-icon" /></h2>
          <p className='services-details'>
            I specialize in front-end development with HTML, CSS, JavaScript, and React. <br /> My focus is on creating visually appealing, and <br />functional websites with performance optimization and cross-browser compatibility.
          </p>
        </div>
        <div className='services-box'>
          <h2 className='services-header'>Clean Code <img src={code} alt="code-icon" /></h2>
          <p className='services-details'>
            I provide web development services centered on writing clean and maintainable code. <br /> By following best practices and coding standards, I ensure that the codebase is easy to understand, scalable, and efficient.
          </p>
        </div>
        <div className='services-box'>
          <h2 className='services-header'>Responsive Design <img src={responsive} alt="responsive-icon" /></h2>
          <p className='services-details'>
            I ensure your website adapts to various screen sizes and orientations, providing a consistent experience. <br /> Using modern design principles, I create layouts that are flexible and visually appealing on all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
