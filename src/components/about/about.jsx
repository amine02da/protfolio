import React from 'react'
import "./about.css"
import me from "../../assets/me.jpg"
import {FaAward} from "react-icons/fa"
import {FaUsers} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about' className='hidden'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={me} alt="About Me Image" />
            </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years working </small>
            </article>
            <article className="about_card">
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>1+ Worldwide </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed </small>
            </article>
          </div>
          <p>
          Hello, I’m a Amine, web-developer based on ouarzazate. I have rich experience in web site  building . Also I am good at
          html css JavaScript Php and Reactjs, Laravel
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About


 