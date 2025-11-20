"use client"
import { motion } from 'framer-motion'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'

import { HiOutlineMapPin, HiOutlineArrowLongRight } from 'react-icons/hi2'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import { useState } from 'react'
import toast from 'react-hot-toast'

const Contact = () => {

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    formData.append("access_key", "395dd015-8cff-468c-b619-f09fca1802f3")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    let result = await response.json()

    if (result.success) {
      toast.success("Message sent successfully!")
      e.target.reset()
    } else {
      toast.error("Failed to send message!")
    }

    setLoading(false)
  }

  return (
    <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='h-screen flex items-center py-24 xl:py-0'>
      <div className='container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible'>
        <div className='w-full'>
          <div className='flex flex-col xl:flex-row gap-6'>

            {/* info text */}
            <div className='flex-1 xl:w-[600px] flex flex-col gap-12'>
              <div>
                <h2 className='h2 mb-6'>Get In <span className='text-accent'>Touch</span></h2>
                <p className='max-w-[460px]'>Let’s connect! I’m available for web development projects, collaborations, or any tech-related discussions.</p>
              </div>

              {/* info */}
              <div className='flex flex-col gap-8 mb-6 xl:mb-0'>
                <div className='flex items-center gap-4 text-lg'>
                  <span className='text-accent'><HiOutlinePhone className='text-2xl' /></span>
                  <span>01778911386</span>
                </div>
                <div className='flex items-center gap-4 text-lg'>
                  <span className='text-accent'><HiOutlineMail className='text-2xl' /></span>
                  <span>alaminahmed79000@gmail.com</span>
                </div>
                <div className='flex items-center gap-4 text-lg'>
                  <span className='text-accent'><HiOutlineMapPin className='text-2xl' /></span>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* form */}
            <div className='flex-1'>
              <form onSubmit={handleSubmit} className='flex flex-col gap-6 items-start'>
                
                {/* name */}
                <div className='w-full'>
                  <Label htmlFor='name'>Name <span className='text-accent'>*</span></Label>
                  <Input name='name' id='name' placeholder='Enter Your Name' required />
                </div>

                {/* email */}
                <div className='w-full'>
                  <Label htmlFor='email'>Email <span className='text-accent'>*</span></Label>
                  <Input name='email' id='email' placeholder='Enter your email' required />
                </div>

                {/* select */}
                <div className="w-full">
                  <Label>I'm interested in <span className='text-accent'>*</span></Label>
                  <Select name='service' required>
                    <SelectTrigger id='service' className='w-full !h-12 bg-white/5 border-white/10 px-4'>
                      <SelectValue placeholder='Choose here' />
                    </SelectTrigger>
                    <SelectContent className='bg-black border-white/20'>
                      <SelectItem value='Web Development'>Web Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* textarea */}
                <div className='w-full'>
                  <Label htmlFor='message'>Message <span className='text-accent'>*</span></Label>
                  <Textarea name='message' id='message' placeholder='Write your message' className='min-h-[160px]' required />
                </div>

                {/* button */}
                <button type='submit' className='btn btn-lg btn-accent'>
                  <div className='flex items-center gap-3'>
                    <span className='font-medium'>{loading ? "Sending..." : "Send Message"}</span>
                    <HiOutlineArrowLongRight className='text-xl' />
                  </div>
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;
