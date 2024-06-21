import './projects.css';

const Projects = () => {
  return (
    <div>
    <h1 className='project-header'>My Projects</h1>
    <div className='project-wrapper'>
    <div className='project-card'>
    <img alt='project-one-thumbnail'/>
    <p>Project One </p>
    <p>In this project, I built a simple weather application using HTML, CSS, and JavaScript. The app allowed users to input a city name, click a "Get Weather" button to retrieve the current temperature and weather conditions via a free weather API, and handled errors gracefully by displaying informative messages for invalid city names or failed requests. Additionally, I applied basic styling to ensure the app was visually appealing and user-friendly</p>
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
    <div className='project-card'>
    <img alt='project-four-thumbnail'/>
    <p>Project Four </p>
    <p>Description of the project</p>
    </div>
    </div>
    </div>
  )
}

export default Projects;
