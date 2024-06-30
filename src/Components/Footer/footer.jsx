import './footer.css';
import email from '../assets/email-logo.svg';
import location from '../assets/location-logo.svg';
import linkedin from '../assets/icons8-linkedin.svg';
import github from '../assets/icons8-github.svg';
import contactInfo from '../assets/contact-logo.svg';

const handleButton = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-content'>
        <h3 className='contact-me-header'>Contact Me <img src={contactInfo} alt="contact-info"/> </h3>
        <p className='contact-item'>
          <img className="logo" src={email} alt= "email-icon"/> <a href="mailto:temidayobelloh@gmail.com">temidayobelloh@gmail.com</a>
        </p>
        <p className='contact-item'>
          <img className="logo" src={location} alt="location"/> Lagos, Nigeria
        </p>
        <p className='contact-item'>
          <img className="logo" src={linkedin} alt="linkedin"/> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"> Bello Temidayo Hajarah</a>
        </p>
        <p className='contact-item'>
        <img className="logo" src={github} alt="github"/><a href="https://github.com/temidayobelloh" target="_blank" rel="noopener noreferrer">github.com/temidayobelloh</a>
        </p>
      </div>
      <hr></hr>
      <h4 className='copyright-text'>Copyright © 2024</h4>
      <button className='exit-Btn' onClick={handleButton}>Back to top</button>
    </div>
  );
}

export default Footer;
