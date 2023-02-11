import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"

const Headersocials = () => {
  return (
    <div className="header__socials hidden" >
        <a href='https://www.linkedin.com/in/daaboub-amine-630276237/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/amine02da' target="_blank"><FaGithub/></a>
        <a href='https://www.instagram.com/daaboubamine/' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default Headersocials