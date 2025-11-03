"use client"
import { motion } from 'framer-motion'
import { ScrollArea } from '@/components/ui/scroll-area'
import Image from 'next/image'
import Skills from '../components/Skills'
import Blob from '../components/Blob'
import Socials from '../components/Socials'
import Testimonials from '../components/Testimonials'

const About = () => {
  return (
    <motion.section initial={{ opacity: 0 }}
      animate={{
        opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-screen flex items-center py-24 xl:py-0'
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* image and social icons */}
          <div className='hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative'>
            <Image src="/assets/alamin.png" alt="Alamin" width={340} height={496} className='z-20 relative' />
            {/* overlay gradient */}
            <div className='w-full h-[80px] absolute top-[380px] left-0 right-0 bg-gradient-to-r from-primary via-primary/90 z-30'></div>

            <div className='absolute top-[80px] -left-[80px] z-10'>
              <Blob containerStyles='w-[400px] h-[400px]' />
            </div>

            <Socials containerStyles='flex gap-4 z-40 transform translate-x-[30px]' iconStyles='w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer' />
          </div>
          {/* scroll area */}
          <ScrollArea className='w-full h-[680px]'>
            <div className=''>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-2 h-2 bg-accent rounded-full'></div>
                <p>About Me</p>
              </div>
              <h2 className='h2 mb-6'>
                <span className='text-accent'>Alamin</span> Ahmed
              </h2>
              <p className='max-w-[540px] mb-12'>I focus on crafting visually stunning, user-friendly web experiences that not olny look great but also function seamlessly, ensuring every detail is carefully designed and executed.</p>
              <div className='flex flex-col items-start gap-16'>
                <Testimonials />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, facere! Unde illo quod consequatur! Libero optio nisi autem voluptas perferendis ab perspiciatis, culpa quod itaque magni animi eius alias provident. Fugiat optio delectus, minus nihil expedita dolorem, aliquam tenetur accusamus et quas, in ipsum quasi numquam quam doloremque totam labore officiis ex animi. Veritatis vitae impedit excepturi earum aut eveniet corrupti natus debitis quis. Rerum tenetur, nulla culpa sit ad distinctio placeat quidem magnam optio libero quisquam possimus numquam obcaecati. Quaerat ipsa, beatae omnis ea quasi temporibus iste numquam ducimus dolore asperiores eum at vel. Error mollitia commodi quis ullam!</p>
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  )
}

export default About;