"use client"
import { motion } from 'framer-motion'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    category: 'frontend',
    title: 'Modern React Project landing page',
    description: 'React + Tailwind Landing Page',
    image: '/assets/work/landing.png',
    link: 'https://modern-react-project-theta.vercel.app/',
    github: 'https://github.com/Alamin4D/modern-react-project',
    tech: ['react', 'tailwindcss', 'framer-motion'],
  },
  {
    id: 2,
    category: 'frontend',
    title: 'Frontend Project landing page',
    description: 'React + Tailwind Landing Page',
    image: '/assets/work/thumb3.png',
    link: '',
    github: '',
    tech: ['react', 'tailwindcss'],
  },
  {
    id: 3,
    category: 'fullstack',
    title: 'Food Delivery App',
    description: 'Food Delivery App is a software development project focused on creating a digital platform for ordering and delivering food.',
    image: '/assets/work/food.png',
    link: 'https://food-delivary-app-psi.vercel.app/',
    github: 'https://github.com/AlmasWD09/food-delivary-app',
    tech: ['nextjs', 'tailwindcss', 'nodejs', 'expressjs', 'mongodb'],
  },
  {
    id: 4,
    category: 'fullstack',
    title: 'Project 3',
    description: 'React + Tailwind Landing Page',
    image: '/assets/work/thumb4.png',
    link: '',
    github: '',
    tech: ['react', 'tailwindcss', 'nodejs', 'express', 'mongodb'],
  },
  {
    id: 5,
    category: 'uiux',
    title: 'Project 3',
    description: 'React + Tailwind Landing Page',
    image: '/assets/work/thumb2.png',
    link: '',
    github: '',
    tech: ['react', 'tailwindcss', 'nodejs', 'express', 'mongodb'],
  },
  {
    id: 6,
    category: 'uiux',
    title: 'Project 3',
    description: 'React + Tailwind Landing Page',
    image: '/assets/work/thumb2.png',
    link: '',
    github: '',
    tech: ['react', 'tailwindcss', 'nodejs', 'express', 'mongodb'],
  },
  {
    id: 7,
    category: 'branding',
    title: 'Project 3',
    description: 'React + Tailwind Landing Page',
    image: '/assets/work/thumb2.png',
    link: '',
    github: '',
    tech: ['react', 'tailwindcss', 'nodejs', 'express', 'mongodb'],
  },
  {
    id: 8,
    category: 'branding',
    title: 'Project 3',
    description: 'React + Tailwind Landing Page',
    image: '/assets/work/thumb2.png',
    link: '',
    github: '',
    tech: ['react', 'tailwindcss', 'nodejs', 'express', 'mongodb'],
  },
]

const categories = ['frontend', 'fullstack', 'uiux', 'branding']

const Work = () => {
  return (
    <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='min-h-screen flex items-center py-24 xl:py-0'
    >
      <div className='container mx-auto w-full h-full flex flex-col justify-center'>
        {/* heading */}
        <h2 className='h2 mb-6 xl:mb-12 max-w-[600px]'>My Latest
          <span className='text-accent'> Work</span>
        </h2>
        {/* tabs */}
        <Tabs defaultValue="frontend" className="w-full flex flex-col gap-6 xl:gap-12">
          {/* Tabs List */}
          <TabsList className='flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0'>
            {categories.map((category) => {
              return (
                <TabsTrigger value={category} key={category} className='capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer'>
                  {category === 'uiux' ? 'Ui Ux Design' : category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* Tabs Content */}
          <div className='h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible'>
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper modules={[Pagination]} pagination={{ clickable: true, dynamicBullets: true }} className='h-max xl:h-[460px]'>
                    {projects.filter((project) => project.category === category).map((project) => {
                      return (
                        <SwiperSlide key={project.id} className='h-full'>
                          <div className='flex flex-col xl:flex-row gap-8 xl:gap-12'>
                            {/* project info */}
                            <div className='w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none'>
                              {/* title */}
                              <h3 className='h3'>{project.title}</h3>
                              {/* tech */}
                              <div className='xl:mb-4 max-w-[300px] min-h-[130px]'>
                                <p className='mb-4'>Technologies Used</p>
                                <ul className='flex flex-wrap gap-4'>
                                  {project.tech.map((item, index) => {
                                    return (
                                      <li key={index} className='flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full'>{item}</li>
                                    )
                                  })}
                                </ul>
                              </div>
                              {/* btns */}
                              <div className='flex flex-col sm:flex-row gap-4 items-start'>
                                <Link href={project.link}>
                                  <button className='btn btn-sm btn-accent flex gap-2'>
                                    <MdArrowOutward className='text-xl' />
                                    <span>Live Project</span>
                                  </button>
                                </Link>
                                <Link href={project.github}>
                                  <button className='btn btn-sm btn-white flex gap-2'>
                                    <FaGithub className='text-xl' />
                                    <span>Github Repo</span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            {/* project image */}
                            <div className='w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden'>
                              <Image src={project.image} alt={project.image} fill className='object-cover' />
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  )
}

export default Work;