import './home.css';
import About from '../About/about';

const Home = () => {
  return (
    <div className='homePage-wrapper'>
    <div className='homePage-text'>
    <p className='homePage-text-one'>Hello, my name is <br></br> 
    Temidayo BELLO</p>
    <h1 className='homePage-text-two'>I am a Frontend Developer<br></br>dedicated to crafting <br></br>exceptional user interfaces</h1>
    <button className='homePage-button'> Download CV </button>
    </div>
    <About/>
    </div>
  )
}

export default Home;
