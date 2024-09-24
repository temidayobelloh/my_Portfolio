import React, { useEffect, useRef } from 'react';
import './projects.css';
import quiz from '../assets/quiz app screenshot.png';
import github from '../assets/icons8-github (1).svg';

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
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function redirectToLink(){
    window.open("https://github.com/temidayobelloh/QuizApplication.git", "_blank");
  }

  return (
    <div id="project-section">
      <h2 className='project-header'>Projects I have built..</h2>
      <div className='project-box-container'>
        <div className='bigger-box'><img className='screenshot' src={quiz} alt="quiz_screenshot"/></div>
        <div className='smaller-box'>
        <div className='project-details'>
        <h3 className='project-heading'>Quiz App</h3>
        <button className='project-btn'>Javascript</button>
        <button className='project-btn'>CSS</button>
        <button className='project-btn'>HTML</button>
        <button onClick={redirectToLink} className='project-btn' id= "github_btn" ><img  className='github_logo' src={github} alt ='github'/></button>
        <p className='project-intro'> A web app that demonstrates my proficiency in Javascript programming through interractive quizzes, scoring systems and a responsive user interface.</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
