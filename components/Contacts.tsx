'use client'

import React from 'react'
import SectionTitle from './SectionTitle'
import { FaPaperPlane } from 'react-icons/fa'
import { NavViewer } from '@/lib/navView'
import {motion} from 'framer-motion'
import { sendEmail } from '@/lib/actions'


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
        <a className='underline cursor-pointer text-black' href='mailto:kudayapaul@gmail.com'>kudayapaul@gmail.com</a> {''} through this form.
    </p>
    <form className='w-[min(100%,38rem)] flex-col flex mt-10 px-1' 
    action={async(formData)=>{
     
      await sendEmail(formData)
        }}>
        <input type='email' required maxLength={500} 
        name='senderEmail'
        className=' h-14 border border-black/10 rounded-lg px-2 outline-none' placeholder='Your Email'/>
        <textarea  required 
        name='senderMessage'
        className='border h-52 my-3   border-black/10 rounded-lg px-2 py-2 outline-none' placeholder='Your Message'/>
        <button type='submit' className='group h-[3rem] w-[8rem] bg-gray-900
         text-white rounded-full  flex items-center gap-2 hover:bg-gray-950 
         justify-center transition-all focus:scale-110 hover:scale-110 active:scale-105'>Submit<FaPaperPlane className='
         group-hover:translate-x-1 group-hover:-translate-y-1
         text-xs opacity-70 transition-all'/></button>
    </form>
 </motion.section>
  )
}

export default Contacts