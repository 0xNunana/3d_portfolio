'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {BsArrowRight, BsGithub, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'

const Intro = () => {
  return (
  <section className='mb-28 max-w-[50rem] sm:mb-0 text-center'>
    <div className='flex items-center justify-center'>
<motion.div 
initial={{opacity:0 ,scale:0}}
animate={{opacity:1 ,scale:1}}
transition={{
    delay:0.2,
    type:'spring',
   
}}
>
    <Image src='/me.png' alt='my pic' width={200} height={200} quality='95' priority={true} className='h-40 w-40 rounded-full 
    object-cover border-[0.35rem] border-white shadow-xl'/>
</motion.div>

    </div>
    <motion.p className='font-montserrat mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
    initial={{opacity:0 , y:100}}
    animate={{opacity:1, y:0}}
    >
     <span className='font-bold font-palanquin'> Hello, I&apos;m Kudaya Paul Yao</span>. 
    I&apos;m a <span className='font-bold font-palanquin'>Software Developer</span> with <span className='font-bold font-palanquin'>5 years</span> of 
    experience. I enjoy building seamless applications. I&apos;m super competent in <span className='font-bold font-palanquin'>React (next.js)</span>
</motion.p>
<motion.div    
initial={{opacity:0 , y:100}}
    animate={{opacity:1, y:0}} 
    transition={{
        delay:0.1
    }}
     className='flex flex-col sm:flex-row items-center justify-center gap-2 text-lg font-medium'>
    <Link href='#contact' className='group hover:scale-105 active:scale-100 transition bg-coral-red text-white px-7 py-3 flex items-center gap-2 rounded-full'>
        Contact Me Here<BsArrowRight className='group-hover:translate-x-2'/>
    </Link>
    <Link  href='/CV.pdf' download className='flex cursor-pointer gap-2 items-center group hover:scale-105 active:scale-100 bg-white transition  border-coral-red rounded-full text-coral-red px-7 py-3 border'>
        Download CV <HiDownload className='group-hover:animate-ping'/>
    </Link>
    <Link href='' className='p-4 bg-white flex  group hover:scale-110 active:scale-100 transition border-coral-red items-center gap-2 text-gray-700 rounded-full border'>
        <BsLinkedin/>
    </Link>
    <Link href='' className='p-4 bg-white border group hover:scale-110 active:scale-100 transition border-coral-red flex items-center gap-2 text-gray-700 rounded-full'>
        <BsGithub/>
    </Link>
</motion.div>




  </section>
  )
}

export default Intro