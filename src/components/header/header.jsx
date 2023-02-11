import React from 'react'
import "./header.css"
import CTA from "./CTA"
import me from "../../assets/me.jpg"
import mee from "../../assets/mee.png"
import Headersocials from "./headersocials"
import Typical from 'react-typical'


const Header = () => {
  return (
    <header className='hidden'>
      <div className="container header__container">
        <h5>Hello I'm
          <span id='autoType'>
            <Typical
              steps={['Daaboub Amine', 1000, 'Fullstack Developer', 500]}
              loop={Infinity}
              wrapper="p"
            />
          </span>
        </h5>
        <h1 className='auto'></h1>
        <h5 className="text-light"> </h5>
        <CTA />
        <Headersocials />
        <div className="me">
          <img src={mee} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>ScrollDown</a>
      </div>
    </header>
  )
}

export default Header