import React, { useEffect, useRef } from 'react';
import './about.css';
import aboutLogo from '../assets/girl-sitting-on-books-with-laptop-by-oblik-studio.svg';

const About = () => {
  const aboutTextRef = useRef(null);
  const aboutLogoRef = useRef(null);

  useEffect(() => {
    const aboutTextElement = aboutTextRef.current;
    const aboutLogoElement = aboutLogoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutTextElement) observer.observe(aboutTextElement);
    if (aboutLogoElement) observer.observe(aboutLogoElement);

    return () => {
      if (aboutTextElement) observer.unobserve(aboutTextElement);
      if (aboutLogoElement) observer.unobserve(aboutLogoElement);
    };
  }, []);

  return (
    <div className="about-me-wrapper">
      <div ref={aboutTextRef} className="about-text-wrapper">
        <h1 className='about-me-text'>About Me</h1>
        <p className='about-me-intro'>
          I am passionate about front-end development. I combine creativity and technical skills to create impactful visual experiences. 
          <span> I build intuitive, responsive, & functional user interfaces.</span>
        </p>
        <p className='indented'>
          My attention to detail ensures high-quality results, and my problem-solving skills enable me to handle challenges efficiently. Continuously seeking the latest trends, 
          <span> I enjoy taking on new challenges</span> and collaborating to bring ideas to life through high-quality web experiences.
        </p>
      </div>
      <img ref={aboutLogoRef} className='about-me-logo' src={aboutLogo} alt='about-logo' />
    </div>
  );
}

export default About;
