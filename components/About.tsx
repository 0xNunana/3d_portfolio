'use client'

import React from 'react'
import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'
import { NavViewer } from '@/lib/navView'


const About = () => {
  const {ref} = NavViewer('About',0.55)
 
  return (
    // add a scroll margin top to push the section down to a level where everthing can be seen when there is a scroll
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28'
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{
        delay:0.9
    }}
    id='about'
    ref={ref}
    >
    <SectionTitle>About me</SectionTitle>
        <p className='mb-3 font-palanquin'>I&apos;m a results-driven software developer specializing in <span className='text-blue-500 font-montserrat font-bold'> React, TypeScript, Tailwind CSS, PostgreSQL,</span> and <span className='text-blue-500 font-montserrat font-bold'>Next.js</span>. My journey in the tech world began with a deep fascination for creating transformative solutions. Over the years, I&apos;ve honed my skills and gained versatile experience, turning ideas into reality.

I&apos;m committed to crafting exceptional user interfaces using React and maintaining code quality with TypeScript&apos;s type safety. My design approach prioritizes clean, responsive aesthetics through <span className='bg-gradient-to-r from-purple-400 via-yellow-300 to-coral-red text-transparent bg-clip-text'>Tailwind CSS</span>. Managing and optimizing databases is my forte, particularly with PostgreSQL, while Next.js helps me deliver efficient, server-rendered web applications.

What sets me apart is my passion for problem-solving, meticulous attention to detail, and a collaborative mindset. I stay updated with the latest tech trends and am eager to contribute my skills to your project. Let&apos;s work together to bring your vision to life!</p>
    </motion.section>
  )
}

export default About