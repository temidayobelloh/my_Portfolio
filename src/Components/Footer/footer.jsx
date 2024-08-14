import React, { useEffect, useRef } from 'react';
import './footer.css';
import email from '../assets/email-logo.svg';
import location from '../assets/location-logo.svg';
import linkedin from '../assets/icons8-linkedin.svg';
import github from '../assets/icons8-github.svg';

const handleButton = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          footerRef.current.classList.add('show');
        } else {
          footerRef.current.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger scroll event on mount to show elements already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='footer-wrapper' ref={footerRef}>
      <div className='footer-content'>
        <h3 className='contact-me-header'>Contact Me</h3>
        <p className='contact-item'>
          <img className="logo" src={email} alt="email-icon" /> 
          <a href="mailto:temidayobelloh@gmail.com">temidayobelloh@gmail.com</a>
        </p>
        <p className='contact-item'>
          <img className="logo" src={location} alt="location" /> 
          Lagos, Nigeria
        </p>
        <p className='contact-item'>
          <img className="logo" src={linkedin} alt="linkedin" /> 
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Bello Temidayo Hajarah</a>
        </p>
        <p className='contact-item'>
          <img className="logo" src={github} alt="github" /> 
          <a href="https://github.com/temidayobelloh" target="_blank" rel="noopener noreferrer">github.com/temidayobelloh</a>
        </p>
      </div>
      <hr />
      <h4 className='copyright-text'>Copyright © 2024</h4>
      <button className='exit-Btn' onClick={handleButton}>Back to top</button>
    </div>
  );
}

export default Footer;
