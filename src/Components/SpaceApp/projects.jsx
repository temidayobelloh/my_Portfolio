import React, { useEffect, useRef } from 'react';
import './projects.css';
import spaceApp from '../assets/spaceApp.png';
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
    window.open("https://github.com/temidayobelloh/Space-Tourism-App.git", "_blank");
  }

  return (
    <div id="project-section">
      <h2 className='project-header'>Projects I have built..</h2>
      <div className='project-box-container'>
        <div className='bigger-box'><img className='screenshot' src={spaceApp} alt="space_app"/></div>
        <div className='smaller-box'>
        <div className='project-details'>
        <h3 className='project-heading'>Space Tourism App</h3>
        <div className='btn-wrapper'>
        <button className='project-btn'>Javascript</button>
        <button className='project-btn'>CSS</button>
        <button className='project-btn'>HTML</button>
        <button onClick={redirectToLink} className='project-btn' id= "github_btn" ><img  className='github_logo' src={github} alt ='github'/></button>
        </div>
        <p className='project-intro'> A web app that demonstrates my proficiency in HTML, CSS and Javascript programming featuring interactive space exploration and stunning visuals to enhance the user experience. </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
