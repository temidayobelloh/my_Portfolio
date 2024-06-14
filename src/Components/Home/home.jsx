import './home.css';
import About from '../About/about';
import Skills from '../MySkills/skills';
import Footer from '../Footer/footer';
import DownloadcvButton from '../DownloadCVButton/downloadcvButton';
import Services from '../Services/services';
import Projects from '../Projects/projects';
import Contact from '../Contact/contact';


const Home = () => {
  return (
    <div>
    <div className='homePage-wrapper'>
    <div className='homePage-text'>
    <p className='homePage-text-one'>Hello there! I am <span className='text-name'>Bello TEMIDAYO </span></p>
    <p className='homePage-text-two'>I am Frontend Developer, who loves turning ideas into reality through code.<br></br>I specialize in creating visually appealing and functional websites using HTML, CSS, JavaScript, and React.  <br></br> I am actively searching for entry-level positions to utilize my skills and advance in my profession</p>
    <div className='button-wrapper'>
    <DownloadcvButton/>
    <button className='homePage-button'>View Projects</button>
    </div>
    </div>
    </div>
    <About/>
    <Services/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Home;
