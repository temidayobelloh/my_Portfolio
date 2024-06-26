import './home.css';
import DownloadcvButton from '../DownloadCVButton/downloadcvButton';
import homeLogo from '../assets/desktop-video-chat-coffee-by-oblik-studio.svg';

const Home = () => {

  const viewProject =()=> {
    const viewProjectSection = document.getElementById('project-section');
    if (viewProjectSection) {
    viewProjectSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div>
    <div className='homePage-wrapper'>
    <div className='homePage-text'>
    <p className='homePage-text-one'>Hello there! I'm <span className='text-name'>Bello TEMIDAYO </span></p>
    <p className='homePage-text-two'> A Frontend Developer, who loves turning ideas into reality through code.<br></br> I am actively seeking entry-level positions to utilize my skills and advance professionally.</p>
    <div className='button-wrapper'>
    <DownloadcvButton/>
    <button onClick ={viewProject} className='viewProject-button'>View Projects </button>
    </div>
    </div>
    <div> <img className='home-logo'src={homeLogo} alt='homePage-logo'/> </div>
    </div>
    </div>
  )
};

export default Home;
