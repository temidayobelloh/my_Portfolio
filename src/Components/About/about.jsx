import './about.css';
import aboutLogo from '../assets/girl-sitting-on-books-with-laptop-by-oblik-studio.svg';

const About = () => {
  return (
    <div>
    <div className='about-me-wrapper'>
    <div>
    <h1 className='about-me-text'>About Me</h1>
    <p className='about-me-intro'>Passionate about front-end development, I combine creativity and technical skills to create impactful visual experiences. <span> I build Intuitive, Responsive, & Functional user interfaces.</span> </p> <p className='indented'>My attention to detail ensures high-quality results, and my problem-solving skills enable me to handle challenges efficiently. Continously seeking the latest trends,<span> I enjoy taking on new challenges</span> and collaborating to bring ideas to life through high-quality web experiences. </p> <p className='about-me-intro'>Let's connect and create something wonderful!</p>
    </div>
    <img  className='about-me-logo' src ={aboutLogo} alt='about-logo'/>
    </div>
    </div>
  )
}

export default About;
