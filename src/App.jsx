import React from 'react'
import Header from "./components/header/header"
import Nav from "./components/nav/nav"
import Experience from "./components/experience/experience"
import Portfolio from "./components/portfolio/portfolio"
import Testimonials from "../src/components/testimonials/tetstimonials"
import Services from "./components/services/services"
import About from "./components/about/about"
import Footer from "./components/footer/footer"
import Contact from "./components/contact/contact"


const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
