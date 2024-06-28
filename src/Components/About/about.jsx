import './about.css';
import aboutLogo from '../assets/girl-sitting-on-books-with-laptop-by-oblik-studio.svg';

const About = () => {
  return (
    <div>
    <div className='about-me-wrapper'>
    <div>
    <h1 className='about-me-text'>About Me</h1>
    <p className='about-me-intro'>I am an enthusiastic front-end developer who enjoys turning ideas into interactive websites with codes. I bring a unique combination of creativity and technical expertise, allowing me to design user experiences that are both visually stunning and functional. </p> <p className='indented'>My attention to detail ensures high-quality, polished results, while my problem-solving skills enable me to tackle challenges efficiently. I'm eagerly seeking an internship where I can contribute innovative ideas, collaborate with talented teams, and continue to grow as a developer. </p> <p className='indented'><span className='indented-color'>Let's connect and create something wonderful!</span></p>
    </div>
    <img  className='about-me-logo' src ={aboutLogo} alt='about-logo'/>
    </div>
    </div>
  )
}

export default About;
