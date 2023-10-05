'use client'

import React from 'react'
import SectionTitle from './SectionTitle'
import { NavViewer } from '@/lib/navView'
import {motion} from 'framer-motion'
import { sendEmail } from '@/lib/actions'
import SubmitBtn from './Submit'
import toast from 'react-hot-toast'


const Contacts = () => {
    const {ref}=NavViewer('Contact')


  return (
 <motion.section id='contact' 
 initial={{opacity:0}}
 whileInView={{opacity:1}}
 transition={{
    duration:1,
    delay:1
 }}
 viewport={{
    once:true
 }}
 className='mb-20 sm:mb-80 scroll-mt-28' ref={ref}>
    <SectionTitle>Contact Me</SectionTitle>
    <p className='text-gray-500 text-center'>Please contact me at  {''}
        <a className='underline cursor-pointer text-black dark:text-white' href='mailto:kudayapaul@gmail.com'>kudayapaul@gmail.com</a> {''} through this form.
    </p>
    <form className='w-[min(100%,38rem)] flex-col flex mt-10 px-1' 
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
        className=' h-14 border border-black/10 rounded-lg px-2 outline-none dark:bg-slate-300 dark:text-gray-700' placeholder='Your Email'/>
        <textarea  required 
        name='senderMessage'
        className='border h-52 my-3   border-black/10 rounded-lg px-2 py-2 outline-none dark:bg-slate-300 dark:text-gray-700' placeholder='Your Message'/>
      <SubmitBtn/>
      </form>
 </motion.section>
  )
}

export default Contacts