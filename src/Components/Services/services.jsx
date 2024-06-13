import './services.css';

const Services = () => {
  return (
    <div>
    <h1 className='services-text'>My services</h1>
    <div className='services-wrapper'>
    <div className='services-box'>
    <h2 className='services-header'>Web Development</h2>
    <p>I specialize in front-end development with HTML, CSS, JavaScript, and React. <br></br> My focus is on creating responsive, visually appealing, and <br></br>functional websites with performance optimization and cross-browser compatibility. </p>
    </div>
    <div className='services-box'>
      <h2 className='services-header'>Clean code</h2>
    <p> I provide web development services centered on writing clean and maintainable code. <br></br>By following best practices and coding standards, I ensure that the codebase is easy to understand, scalable, and efficient.</p>
    </div>
    <div className='services-box'>
      <h2 className='services-header'>Responsive Design</h2>
      <p> I ensure your website adapts to various screen sizes and orientations, providing a consistent and engaging user experience. <br></br>Using modern design principles and frameworks, I create layouts that are flexible and visually appealing on all devices.</p>
      </div>
    </div>
    </div>
  )
}

export default Services;
