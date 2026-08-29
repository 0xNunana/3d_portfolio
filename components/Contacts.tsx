'use client'

import React from 'react'
import SectionTitle from './SectionTitle'
import { NavViewer } from '@/lib/navView'
import {motion} from 'framer-motion'
import { sendEmail } from '@/lib/actions'
import SubmitBtn from './Submit'
import toast from 'react-hot-toast'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Contacts = () => {
    const {ref}=NavViewer('Contact')

  return (
  <motion.section id='contact' 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{
        duration:1,
        delay:0.1
    }}
    viewport={{
        once:true
    }}
    className='mb-20 sm:mb-40 scroll-mt-28 w-full max-w-[42rem] mx-auto text-center' ref={ref}>
      <SectionTitle>Let&apos;s build something meaningful.</SectionTitle>
      
      <p className='text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed'>
        I&apos;m interested in software engineering, AI/ML systems, computer vision, Edge AI research and opportunities where engineering and intelligent systems intersect.
      </p>

      <div className="flex justify-center gap-6 mb-10">
        <a href="mailto:kudayapaul@gmail.com" className="text-gray-600 hover:text-coral-red dark:text-gray-400 dark:hover:text-coral-red transition underline font-medium">
          kudayapaul@gmail.com
        </a>
        <a href="https://github.com/0xnunana" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition flex items-center gap-2">
          <BsGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/paul-yao-kudaya" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition flex items-center gap-2">
          <BsLinkedin /> LinkedIn
        </a>
      </div>

      <form className='flex flex-col text-left' 
        action={async (formData) => {
          const {data,error}=await sendEmail(formData);
          if (error) {
            toast.error(error)
            return;
          }
          toast.success('Email Sent Successfully')
        }}>
          <input type='email' required maxLength={500} 
            name='senderEmail'
            className='h-14 border border-black/10 rounded-xl px-4 outline-none focus:border-coral-red dark:focus:border-coral-red dark:bg-gray-800/50 dark:border-gray-700 dark:text-white transition' 
            placeholder='Your Email'
          />
          <textarea required 
            name='senderMessage'
            className='h-52 my-3 border border-black/10 rounded-xl px-4 py-4 outline-none focus:border-coral-red dark:focus:border-coral-red dark:bg-gray-800/50 dark:border-gray-700 dark:text-white transition' 
            placeholder='Your Message'
          />
        <div className="self-end mt-2">
          <SubmitBtn/>
        </div>
      </form>
  </motion.section>
  )
}

export default Contacts;
