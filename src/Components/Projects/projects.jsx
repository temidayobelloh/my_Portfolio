import './projects.css';

const Projects = () => {
  return (
    <div id="project-section">
    <h1 className='project-header'>My Projects</h1>
    <div className='project-wrapper'>
    <div className='project-card'>
    <img alt='project-one-thumbnail'/>
    <p>Weather Application</p>
    <p> I built a simple weather application using HTML, CSS, and JavaScript. <br></br> The app allows users to input a city name, click a "Get Weather" button to retrieve the current temperature and weather conditions. It also handles errors by displaying informative messages for invalid city names or failed requests. <br></br>Additionally, I applied basic styling to make the project appealing.</p>
    </div>
    <div className='project-card'>
    <img alt='project-two-thumbnail'/>
    <p>Project Two </p>
    <p>Description of the project</p>
    </div>
    <div className='project-card'>
    <img alt='project-three-thumbnail'/>
    <p>Project Three </p>
    <p>Description of the project</p>
    </div>
    </div>
    </div>
  )
}

export default Projects;
