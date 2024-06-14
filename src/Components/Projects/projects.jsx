import './projects.css';

const Projects = () => {
  return (
    <div>
    <h1 className='project-header'>My Projects</h1>
    <div className='project-wrapper'>
    <div className='project-card'>
    <img alt='project-one-thumbnail'/>
    <p>Project One </p>
    <p>Description of the project</p>
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
