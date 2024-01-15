import React, { useRef } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xg9bf7b', 'template_dnhjgdo', form.current, 'o4mW4dG7dUAZ-_RRkVhBW')
      .then((result) => {
          console.log(result.text);
         
      }, (error) => {
          console.log(error.text);
      });
  };  

  return (
    <section id="contactpage">
        <div id="clients">
           <h1 className="contactpagetitle">My Clients</h1>
           <p className="clientdesc">
            I have had the opportunity to work with a diverse group of companies.
            Some of the notable companies I have worked with includes
            
           </p>
           <div className="clientImgs">
            <img src="walmart.png" alt="" className="clientimg" />
            <img src="adobe.png" alt="" className="clientimg" />
            <img src="microsoft.png" alt="" className="clientimg" />
            <img src="facebook.png" alt="" className="clientimg" />
           </div>
        </div>
        <div id="contact">
          <h1 className="contactpagetitle"> Contact Me </h1>
          <span className="contactDesc">Please fill out the form below to discuss any work opportunitties</span>
          <form  className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='Your Name' className='Name' name='your_name'/>
            <input type='email' placeholder='Your Email' className='Email' name='your_email'/>
            <textarea name='message' rows="5" placeholder='Your Message' className='msg'></textarea>
             <button type="submit" value="send" className='Submitbtn'  > Submit </button>
             <div className="links">
              <img src="facebook-icon.png" alt="facebook" className="link" />
              <img src="twitter.png" alt="twitter" className="link" />
              <img src="youtube.png" alt="youtube" className="link" />
              <img src="instagram.png" alt="instagram" className="link" />
             </div>
          </form>
        </div>
    </section>
  )
}

export default Contact
