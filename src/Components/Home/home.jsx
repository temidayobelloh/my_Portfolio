import './home.css';
import About from '../About/about';
import Skills from '../MySkills/skills';
import Footer from '../Footer/footer';


const Home = () => {
  return (
    <div>
    <div className='homePage-wrapper'>
    <div className='homePage-text'>
    <p className='homePage-text-one'>Hello, my name is <span className='text-name'>Bello TEMIDAYO </span></p>
    <h1 className='homePage-text-two'>I am a Frontend Developer<br></br>dedicated to crafting <br></br>exceptional user interfaces.</h1>
    <button className='homePage-button'> Download CV </button>
    </div>
    </div>
    <About/>
    <Skills/>
    <Footer/>
    </div>
  )
}

export default Home;
