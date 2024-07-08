import React from 'react'
import './Hero.css' 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { Link } from 'react-router-dom';


import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Hero() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
         <SwiperSlide className="slide slide1">
          <div className="content">
              <h2 className="header">New Arrival</h2>
              <span className="span">Discover the latest trending- Shop New arrival now  </span>
              <div className='slide-btn'>
              <button className="Explore-btn">Explore Now</button>
              <button className="shop-btn">Shop Now</button>
              </div>
            </div>
         </SwiperSlide>
        <SwiperSlide className="slide slide2"> <div className="content">
              <h2 className="header">New Arrival</h2>
              <span className="span">Discover the latest trending- Shop New arrival now  </span>
              <div className='slide-btn'>
              <button className="Explore-btn">Explore Now</button>
              <button className="shop-btn">Shop Now</button>
              </div>
            </div></SwiperSlide>
        <SwiperSlide className="slide slide3"> 
        <div className="content">
              <h2 className="header">New Arrival</h2>
              <span className="span">Discover the latest trending- Shop New arrival now  </span>
              <div className='slide-btn'>
              <button className="Explore-btn">Explore Now</button>
              <button className="shop-btn">Shop Now</button>
              </div>
            </div></SwiperSlide>

       
      </Swiper>
    </>
  );
}
