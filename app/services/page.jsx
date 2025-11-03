"use client"
import { motion } from 'framer-motion'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

Image
import { MdOutlineArrowOutward, MdArrowRightAlt } from 'react-icons/md'
import Image from 'next/image';

const services = [
  {
    icon: "/assets/services/design.svg",
    href: "",
    title: "Website Interface Design",
  },
  {
    icon: "/assets/services/frontend.svg",
    href: "",
    title: "Frontend Development",
  },
  {
    icon: "/assets/services/backend.svg",
    href: "",
    title: "Backend Development",
  },
  {
    icon: "/assets/services/seo.svg",
    href: "",
    title: "Search Engine Optimization",
  },
  {
    icon: "/assets/services/video.svg",
    href: "",
    title: "Video Production",
  },
]




const Services = () => {
  return (
    <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='h-screen flex items-center'
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        {/* text */}
        <div className='flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8'>
          <h2 className='h2 max-w-[480px] text-left xl:mb-0'>Custom <span className='text-accent'>Web Solutions</span> To Boost Your Business</h2>
          <button className='btn btn-lg btn-accent flex gap-2'>All Services <MdArrowRightAlt className='text-2xl' /></button>
        </div>
        {/* slider */}
        <div>
          slide
        </div>
      </div>
    </motion.section>
  )
}

export default Services;