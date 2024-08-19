import React, { useEffect, useRef } from 'react';
import './projects.css';
import quiz from '../assets/quiz app screenshot.png';

const Projects = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRefs.current) {
        cardRefs.current.forEach(card => {
          const rect = card.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight && rect.bottom > 0) {
            card.classList.add('show');
          } else {
            card.classList.remove('show');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger scroll event on mount to show elements already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h3 className='project-header'>Somethings I have built..</h3>
      <div className='project-box-container'>
        
        <div className='bigger-box'><img className='screenshot' src={quiz} alt="quiz_screenshot"/></div>
        <div className='smaller-box'>
        <div className='project-details'>
        <h3 className='project-heading'>Quiz App</h3>
        <button className='project-btn'>React</button>
        <button className='project-btn'>Javascript</button>
        <button className='project-btn'>CSS</button>
        <button className='project-btn'>HTML</button>
        <button className='project-btn'>Github logo</button>
        <p className='project-intro'> A web app that demonstrates my proficiency in Javascript programming through interractive quizzes, scoring systems and a responsive user interface.</p>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
