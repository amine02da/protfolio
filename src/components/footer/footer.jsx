import React from 'react'
import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"

const Footer = () => {
  return (
    <footer className='hidden'>
      <a href="#" className='footer__logo'>DAABOUB AMINE</a>
      <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#experience">experience</a></li>
            <li><a href="#services">services</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#testimonials">testimonials</a></li>
            <li><a href="#contact">contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/amine.daaboub.9" target={"_blank"}><FaFacebookF/></a>
        <a href='https://www.instagram.com/daaboubamine/' target={"_blank"}><FiInstagram/></a>
        <a href="https://twitter.com/Amine_DAA" target={"_blank"}><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; DAABOUB AMINE.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer