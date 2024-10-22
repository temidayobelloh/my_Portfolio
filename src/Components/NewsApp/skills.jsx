import './skills.css';
import github from '../assets/icons8-github (1).svg';
import newsApp from '../assets/Screenshot 2024-10-22 121122.png';

function redirectToLink(){
  window.open("https://sunny-muffin-c70f9a.netlify.app/", "_blank")
}

const Skills = () => {
  return (
    <div>
      <div className='skills-container'>
      <div className='small-box'><h3 className='project-heading-two'>NewsApp</h3>
      <div className='skills-btn-wrapper'>

      <button className='skills-btn'>HTML</button>
      <button className='skills-btn'>Javascript</button>
      <button className='skills-btn'>CSS</button>
      <button onClick={redirectToLink} className= 'skills-btn'><img className='github_logo' src={github} alt="github_logo" /></button>
      </div>
      <p className='project-details'>A web app that enables users to view, create, and manage news articles. Built with HTML, CSS, and JavaScript. The app interacts with a mock API for efficient data management.</p>
      </div>
      <div className='big-box'><img src={newsApp} alt='weather-app'/></div>      
      </div>
        
    </div>
  )
}

export default Skills;
