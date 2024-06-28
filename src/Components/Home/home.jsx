import './home.css';
import DownloadcvButton from '../DownloadCVButton/downloadcvButton';
import homeLogo from '../assets/girl-sitting-on-armchair-with-laptop-by-oblik-studio.svg';

const Home = () => {
  return (
    <div>
    <div className='homePage-wrapper'>
    <div className='homePage-text'>
    <p className='homePage-text-one'>Hello there! I'm <span className='text-name'>Bello TEMIDAYO </span></p>
    <p className='homePage-text-two'>I am Frontend Developer, who loves turning ideas into reality through code.<br></br>I specialize in creating visually appealing and functional websites using HTML, CSS, JavaScript, and React.  <br></br> I am actively searching for entry-level positions to utilize my skills and advance in my profession</p>
    <div className='button-wrapper'>
    <DownloadcvButton/>
    <button className='homePage-button'>View Projects</button>
    </div>
    </div>
    <div> <img  className='home-logo'src={homeLogo} alt='homePage-logo'/> </div>
    </div>
    </div>
  )
}

export default Home;
