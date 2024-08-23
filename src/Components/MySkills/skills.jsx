import './skills.css';
import github from '../assets/icons8-github (1).svg';
import weatherTrack from '../assets/WeatherTrack.png';

function redirectToLink(){
  window.open("https://github.com/temidayobelloh/WeatherTrackerApp.git", "_blank")
}

const Skills = () => {
  return (
    <div>
      <div className='skills-container'>
      <div className='small-box'><h3 className='project-heading-two'>WeatherTrack</h3>
      <div className='skills-btn-wrapper'>
      <button className='skills-btn'>React</button>
      <button className='skills-btn'>Javascript</button>
      <button className='skills-btn'>CSS</button>
      <button onClick={redirectToLink} className= 'skills-btn'><img className='github_logo' src={github} alt="github_logo" /></button>
      </div>
      <p className='project-details'>A weather app that lets users check the current temperature and weather conditions by entering a city name, with error handling and simple styling for a user-friendly experience.</p>
      </div>
      <div className='big-box'><img src={weatherTrack} alt='weather-app'/></div>
      
      </div>
    
    </div>
  )
}

export default Skills;
