'use client'
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {ImQuotesLeft} from 'react-icons/im'

// data
const testimonial = [
    {
        message: 'alamin lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,',
        name: 'John Doe',
    },
    {
        message: 'b lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,',
        name: 'John Doe',
    },
    {
        message: 'c lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,',
        name: 'John Doe',
    },
]

const Testimonials = () => {
  return (
    <Swiper modules={{Autoplay}} loop={true} autoplay={{delay: 4000, disableOnInteraction: false}} className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg">
        {testimonial.map((person, index)=>{
            return <SwiperSlide key={index}>{person.message}</SwiperSlide>
        })}
    </Swiper>
  )
}

export default Testimonials;