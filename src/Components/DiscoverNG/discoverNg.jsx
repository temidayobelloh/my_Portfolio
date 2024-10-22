import './discoverNg.css';
import discoverNigeria from '../assets/map.png'
import github from '../assets/icons8-github (1).svg';

function redirectToLink(){
  window.open("https://github.com/temidayobelloh/discover_ng.git", "_blank");
}

const DiscoverNg = () => {
  return (
    <div>
    <div className='project-box-container'>
        <div className='bigger-box'><img className='screenshot' src={discoverNigeria} alt="quiz_screenshot"/></div>
        <div className='smaller-box'>
        <div className='project-details'>
        <h3 className='project-heading'>Discover Ng</h3>
        <div className='discover-wrapper'>
        <button className='project-btn'>React</button>
        <button className='project-btn'>CSS</button>
        <button onClick={redirectToLink} className='project-btn' id= "github_btn" ><img  className='github_logo' src={github} alt ='github'/></button>
        </div>
        <p className='project-intro'>Discover NG is a React virtual tour app featuring an interactive map and a carousel with unique facts about Nigeria's tourist spots. It demonstrates my JavaScript skills and provides a responsive user experience.</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default DiscoverNg;
