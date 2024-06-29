import './contact.css';
const Contact = () => {
  return (
    <div className="contact-info-wrapper">
    <div>
    <h2 className='contact-header'>Let's connect!</h2>
    <p className='contact-intro'> I am always eager to collaborate on exciting projects and bringing fresh ideas to the table. <p className='break'>If you have a project in mind, or want to discuss potential opportunities, I would love to hear from you!.</p> <p className='break'>Feel free to reach out through the form below or connect with me directly via email or social media. I look forward to exploring how we can work together to build great stuff.</p></p></div>
    <div className='contact-container'>
    <form className='form-content'> 
    <label for='name'>Name<input type='text' placeholder='Name'/></label>
    <label for='email'>Email<input type='email' placeholder='Email'/></label>
    <label for='subject'>Subject<input type='text' placeholder='Subject'/></label>
    <label for='message'>Message<textarea rows="4" cols="50"> Enter your text here...</textarea></label>
    <button id='contactBtn'>Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Contact;
