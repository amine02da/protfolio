import React , {useState} from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServerLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi" 

const Nav = () => {
  const [activeclass,setActive] = useState("#")

  return (
    <nav>
      <a href="#" onClick={()=>setActive("#")} className={activeclass === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActive("#about")} className={activeclass === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActive("#experience")} className={activeclass === "#experience" ? "active" : ""}><BiBook/></a>
      <a href="#services" onClick={()=>setActive("#services")} className={activeclass === "#services" ? "active" : ""}><RiServerLine/></a>
      <a href="#contact" onClick={()=>setActive("#contact")} className={activeclass === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav