import React, { useEffect, useRef, useState } from 'react';
import './contact.css';
import arrow from '../assets/arrow-right.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [ isSubmitting, setisSubmitting ] = useState(false);
  const [submitted, setSubmitted ] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // note that this prevents default form submission
    setisSubmitting(true);
    fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.text())
      .then(data => {
        console.log('success', data);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
        setisSubmitting(false); 
        setSubmitted(true);
        setTimeout(()=> setSubmitted(false), 1000);
      })
      .catch((error) => {
        console.error('Error', error);
        setisSubmitting(false);
      });
  };

  const formRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          formRef.current.classList.add('show');
        } else {
          formRef.current.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="contact-info-wrapper">
      <div>
        <h2 className='contact-header'>Let's connect<img src={arrow} alt="arrow-right" /></h2>
        <div className='contact-details-wrapper'>
          <p className='contact-intro'>I am always eager to collaborate on exciting projects and bring fresh ideas to the table.</p>
          <p className='contact-intro'>If you have a project in mind, or want to discuss potential opportunities, I would love to hear from you!</p>
          <p className='contact-intro'>Feel free to reach out through the form below or connect with me directly via email or social media. I look forward to exploring how we can work together to build great stuff.</p>
        </div>
      </div>
      <div className='contact-container'>
        <form onSubmit={handleSubmit} className='form-content' ref={formRef}>
          <label htmlFor='name'>Name</label>
          <input type='text' id="name" name="name" placeholder='Name' value={formData.name} onChange={handleChange} autoComplete='given-name' required />
          <label htmlFor='email'>Email</label>
          <input type='email' id="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} autoComplete='family-name' required />
          <label htmlFor='subject'>Subject</label>
          <input type='text' id="subject" name="subject" placeholder='Subject' value={formData.subject} onChange={handleChange} autoComplete='off'required />
          <label htmlFor='message'>Message</label>
          <textarea id="message" name="message" placeholder="Enter your text here..." rows="4" cols="50" value={formData.message} onChange={handleChange} autoComplete='off' required></textarea>
          <button 
            id='contact-button' 
            type="submit" 
            disabled={isSubmitting} 
            style={{ backgroundColor: submitted ? 'green' : '', color: submitted ? 'white' : '' }}
          >
            {isSubmitting ? 'Submitting...' : submitted ? 'Submitted' : 'Submit'}
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default Contact;
