import React from 'react'
import "./tetstimonials.css"
import IMG from "../../assets/me.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:IMG,
    Name:"amine",
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti placeat commodi atque,
    consectetur, magnam velit minima optio nam animi labore tempora
    voluptatem architecto corrupti eveniet assumenda recusandae ea! Animi, quidem! `
  },
  {
    avatar:IMG,
    Name:"amine",
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti placeat commodi atque,
    consectetur, magnam velit minima optio nam animi labore tempora
    voluptatem architecto corrupti eveniet assumenda recusandae ea! Animi, quidem! `
  },
  {
    avatar:IMG,
    Name:"amine",
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti placeat commodi atque,
    consectetur, magnam velit minima optio nam animi labore tempora
    voluptatem architecto corrupti eveniet assumenda recusandae ea! Animi, quidem! `
  },
  {
    avatar:IMG,
    Name:"amine",
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti placeat commodi atque,
    consectetur, magnam velit minima optio nam animi labore tempora
    voluptatem architecto corrupti eveniet assumenda recusandae ea! Animi, quidem! `
  },
]

const Tetstimonials = () => {
  return (
    <section id='tetstimonials' className='hidden'>
      <h5>Review from clients</h5>
      <h2>Tetstimonials</h2>
      <Swiper className="container tetstimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>

        {
          data.map(({avatar,Name,review},index)=>{
            return(
            <SwiperSlide className='tetstimonial' key={index}>
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
              <h5>{Name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
          })
        }

      </Swiper>
    </section>
  )
}

export default Tetstimonials