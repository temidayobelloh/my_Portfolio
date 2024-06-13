import './footer.css';


const handleButton =()=>{
  window.location.href = '/';
};

const Footer = () => {
  return (
    <div className='footer-wrapper'>
    <h4 className='copyright-text'>Copyright © 2024 </h4>
    <button className='exit-Btn' onClick= {handleButton} > Back to top </button>
    </div>
  )
}

export default Footer;
