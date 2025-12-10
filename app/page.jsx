"use client"
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import { MdArrowOutward } from 'react-icons/md'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import Blob from './components/Blob';
import Image from 'next/image';
import avatar from '../public/assets/alamin.png'
import Socials from './components/Socials';
import Pattern from './components/Pattern';

const Home = () => {
  return (
    <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='min-h-screen flex items-center py-24 xl:py-0'
    >
      {/* pattern */}
      <Pattern />
      <div className='flex flex-col xl:flex-row items-center justify-between w-full'>
        <div className='w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left'>
          <h1 className='h1 flex-1 mb-[28px]'>Hi! I'm Alamin, <br />
            <TypeAnimation sequence={["Web Developer", 2000, "Web Designer", 2000]}
              wrapper='span' speed={40} className='text-accent' repeat={Infinity} cursor={false} />
          </h1>
          <p className='max-w-[500px] mb-[44px]'>I build visually captivating, user-friendly websites and web apps that transform your ideas info seamless engaging digital experiences.</p>
          <button className='btn btn-lg btn-accent outline-0 mb-16'>
            <div className='flex items-center gap-3'>
              <span>Let's Talk.</span>
              <MdArrowOutward className='text-xl' />
            </div>
          </button>
          {/* contract info */}
          <div className='flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0'>
            {/* phone */}
            <div className='flex items-center gap-4 text-lg'>
              <span className='text-accent'>
                <HiOutlinePhone className='text-xl' />
              </span>
              <span>+01778911386</span>
            </div>
            {/* email */}
            <div className='flex items-center gap-4 text-lg'>
              <span className='text-accent'>
                <HiOutlineMail className='text-xl' />
              </span>
              <span>alaminahmed.dev@gmail.com</span>
            </div>
          </div>
          {/* socials */}
          <Socials containerStyles='flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2' iconStyles='bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full' />
        </div>
        <div className='hidden xl:block flex-1 relative z-20'>
          {/* blob */}
          <Blob containerStyles='w-[500px] h-[500px]' />
          {/* avatar img */}
          <Image src={avatar} alt='' width={500} height={600} quality={100} className='absolute -top-30 left-[70px]' />
          {/* overlay gradient */}
          <div className='w-full h-[164px] bg-gradient-to-t from-primary via-primary/90 to-primary/10 absolute bottom-0 left-0 right-0'></div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home;