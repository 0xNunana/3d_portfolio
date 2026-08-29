'use client'

import React from 'react'
import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'
import { NavViewer } from '@/lib/navView'

const About = () => {
  const {ref} = NavViewer('About',0.55)
 
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28'
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{ delay:0.2 }}
      viewport={{once: true}}
      id='about'
      ref={ref}
    >
      <SectionTitle>About me</SectionTitle>
      
      <div className='text-gray-700 dark:text-gray-300 space-y-4 mb-10 text-left font-palanquin'>
        <p>
          I&apos;m a software engineer with more than six years of experience building digital products and production software.
        </p>
        <p>
          My career began in software development, where I developed a strong foundation in frontend engineering, application architecture and product development. Over time, my interests expanded toward artificial intelligence, computer vision and machine learning.
        </p>
        <p>
          I&apos;m currently completing an MSc in Computer Science, with a growing research focus on trustworthy and efficient AI. My recent work includes deep-learning experiments with DermaMNIST and research into hardware-aware optimization for real-time Edge AI.
        </p>
        <p>
          I enjoy working at the boundary between software and intelligent systems — taking ideas from research and turning them into systems that can actually be tested, deployed and used.
        </p>
        <p className='pt-4 font-bold'>
          Current interests: <span className='font-normal text-gray-500 dark:text-gray-400'>Edge AI · Computer Vision · Efficient Deep Learning · Trustworthy AI · Machine Learning Systems</span>
        </p>
      </div>

      <div className='mt-16 text-left'>
        <h3 className='text-2xl font-bold font-montserrat mb-6 text-center'>Beyond the Code</h3>
        <p className='text-gray-700 dark:text-gray-300 mb-4'>
          My background is a little unconventional. I started my academic journey in Agricultural Biotechnology before moving into software engineering and eventually into computer science and AI.
        </p>
        <p className='text-gray-700 dark:text-gray-300'>
          That transition shaped how I approach technology: I enjoy crossing disciplines, learning unfamiliar systems and turning theoretical ideas into working software.
        </p>
      </div>

      <div className='mt-16'>
        <h3 className='text-2xl font-bold font-montserrat mb-8'>Career Transition</h3>
        
        <div className='flex flex-col items-center space-y-4 text-sm font-medium'>
          <div className='bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full border border-gray-200 dark:border-gray-700'>
            <span className='font-bold mr-2'>2018</span> QA / Software Quality
          </div>
          <div className='h-6 border-l-2 border-gray-300 dark:border-gray-700'></div>
          <div className='bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full border border-gray-200 dark:border-gray-700'>
            <span className='font-bold mr-2'>2019</span> Frontend Engineering
          </div>
          <div className='h-6 border-l-2 border-gray-300 dark:border-gray-700'></div>
          <div className='bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full border border-gray-200 dark:border-gray-700'>
            <span className='font-bold mr-2'>2023</span> Advanced Software Engineering
          </div>
          <div className='h-6 border-l-2 border-gray-300 dark:border-gray-700'></div>
          <div className='bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full border border-gray-200 dark:border-gray-700'>
            <span className='font-bold mr-2'>2024</span> Production Software / Energy Systems
          </div>
          <div className='h-6 border-l-2 border-gray-300 dark:border-gray-700'></div>
          <div className='bg-blue-50 text-blue-900 dark:bg-blue-900/30 dark:text-blue-100 px-6 py-2 rounded-full border border-blue-200 dark:border-blue-800'>
            <span className='font-bold mr-2'>2026</span> MSc Computer Science
          </div>
          <div className='h-6 border-l-2 border-blue-300 dark:border-blue-700'></div>
          <div className='bg-blue-50 text-blue-900 dark:bg-blue-900/30 dark:text-blue-100 px-6 py-2 rounded-full border border-blue-200 dark:border-blue-800'>
            <span className='font-bold mr-2'>2026</span> Trustworthy AI Research
          </div>
          <div className='h-6 border-l-2 border-coral-red border-dashed'></div>
          <div className='bg-coral-red text-white px-8 py-3 rounded-full shadow-md font-bold'>
            Next: Edge AI & Efficient Machine Learning
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default About