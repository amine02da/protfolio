import React from 'react'
import "./portfolio.css"
import IMG from "../../assets/me.jpg"
import i1 from "../../assets/i1.webp"
import i2 from "../../assets/i2.webp"
import i3 from "../../assets/i3.webp"
import i4 from "../../assets/i4.webp"
import i5 from "../../assets/i5.webp"
import i6 from "../../assets/.i6.webp"

const data = [
  {
    id:1,
    img:i1,
    title:"Eclipse UI kit for Figma",
    github:"http://github.com/",
    demo:"http://github.com/"
    
  },
  {
    id:2,
    img:i2,
    title:"Orion UI kit ",
    github:"http://github.com/",
    demo:"http://github.com/"
    
  },
  {
    id:3,
    img:i3,
    title:"Eclipse UI kit for Figma",
    github:"http://github.com/",
    demo:"http://github.com/"
    
  },
  {
    id:4,
    img:i4,
    title:"Orion UI kit",
    github:"http://github.com/",
    demo:"http://github.com/"
    
  },
  {
    id:5,
    img:i5,
    title:"Eclipse UI kit for Figma",
    github:"http://github.com/",
    demo:"http://github.com/"
    
  },
  {
    id:6,
    img:i6,
    title:"Eclipse UI kit for Figma",
    github:"http://github.com/",
    demo:"http://github.com/"
    
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container hidden">
          {
            data.map(({id,img,title,github,demo})=>{
              return(
                <article className='portfolio__item' key={id}>
                <div className="protfolio__item-image">
                  <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo </a>
                </div>
              </article>
              )
            })
          }
      </div>
    </section>
  )
}

export default Portfolio