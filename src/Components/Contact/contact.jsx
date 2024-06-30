import './contact.css';
const Contact = () => {
  return (
    <div className="contact-info-wrapper">
    <div>
    <h2 className='contact-header'>Let's connect!</h2>
    <p className='contact-intro'> I am always eager to collaborate on exciting projects and bringing fresh ideas to the table. <p className='break'>If you have a project in mind, or want to discuss potential opportunities, I would love to hear from you!.</p> <p className='break'>Feel free to reach out through the form below or connect with me directly via email or social media. I look forward to exploring how we can work together to build great stuff.</p></p></div>
    <div className='contact-container'>
    <form className='form-content'> 
    <label for='name'>Name</label>
    <input type='text' id="name" name="name" placeholder='Name'/>
    <label for='email'>Email</label>
    <input type='email' id="email" name="email" placeholder='Email'/>
    <label for='subject'>Subject</label>
    <input type='text' id="subject" name="subject" placeholder='Subject'/>
    <label for='message'>Message</label><textarea id="textarea" name="textarea" placeholder="Enter your text here..." rows="4" cols="50"></textarea>
    <button id='contact-button'>Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Contact;
