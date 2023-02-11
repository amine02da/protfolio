import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessageLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import  { useRef } from 'react';
import emailjs from "emailjs-com"



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_du3xacs', 'template_1lomjcn', form.current, 'r3RIxxf9Hyot8FOKZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact' className='hidden'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>daaboub.am@gmail.com</h5>
            <a href="mailto:daaboub.am@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessageLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>aminedaaboub</h5>
            <a href="https://www.facebook.com/amine.daaboub.9" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+212659540718</h5>
            <a href="https://api.whatsapp.com/send?phone=+212659540718" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name'  required/>
          <input type="email" name="email" placeholder='Your Email'  required/>
          <textarea name="message"   rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
