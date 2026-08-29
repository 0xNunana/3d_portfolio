'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

import { NavViewer } from '@/lib/navView'


const Intro = () => {
  const { ref } = NavViewer('Home')
  return (
    <section className='mb-28 max-w-[50rem] sm:mb-20 text-center scroll-mt-40' id='home' ref={ref}>
      <div className='flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            type: 'spring',
          }}
        >
          <Image src='/me.jpg' alt='my pic' width={300} height={300} quality='95' priority={true} className='h-70 w-70 rounded-full 
          object-cover border-[0.35rem] border-white shadow-xl dark:border-gray-800'/>
        </motion.div>
      </div>

      <motion.h1 className='font-montserrat mb-4 mt-8 px-4 text-3xl font-medium !leading-[1.5] sm:text-5xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold font-palanquin block mb-2'>Software Engineer & AI Researcher</span>
      </motion.h1>

      <motion.p className='mb-6 px-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        I build production software and research practical, efficient machine learning systems for real-world applications.
      </motion.p>

      <motion.p className='mb-10 px-4 text-md text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        With 6+ years of software engineering experience and an MSc in Computer Science, I work across software engineering, artificial intelligence, computer vision and emerging Edge AI systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3
        }}
        className='flex flex-col sm:flex-row items-center justify-center gap-3 text-lg font-medium mb-4'>

        <Link href='#research' className='group hover:scale-105 active:scale-100 transition bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full'>
          Explore My Research <BsArrowRight className='group-hover:translate-x-2' />
        </Link>

        <Link href='#engineering' className='group hover:scale-105 active:scale-100 transition bg-white text-gray-900 dark:bg-gray-800 dark:text-white px-7 py-3 flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700'>
          View Engineering Work
        </Link>
      </motion.div>
      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-3 text-lg font-medium mb-16'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <a
          href='/PAUL YAO KUDAYA-august-cv.pdf'
          download
          className='group border border-coral-red  hover:scale-105 active:scale-100 transition bg-white text-coral-red dark:text-coral-red dark:bg-white  px-7 py-3 flex items-center gap-2 rounded-full'
        >
          Download CV <HiDownload className='group-hover:translate-y-1 transition' />
        </a>

      </motion.div>

      {/* Credential Strip */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className='grid grid-cols-2 md:grid-cols-5 gap-4 py-8 border-t border-b border-gray-200 dark:border-gray-800'
      >
        <div className='flex flex-col items-center text-center'>
          <span className='font-bold text-xl text-gray-900 dark:text-white font-montserrat'>6+ Years</span>
          <span className='text-xs text-gray-500 uppercase tracking-wider mt-1'>Software Engineering</span>
        </div>
        <div className='flex flex-col items-center text-center'>
          <span className='font-bold text-xl text-gray-900 dark:text-white font-montserrat'>MSc</span>
          <span className='text-xs text-gray-500 uppercase tracking-wider mt-1'>Computer Science</span>
        </div>
        <div className='flex flex-col items-center text-center'>
          <span className='font-bold text-xl text-gray-900 dark:text-white font-montserrat'>AI / ML</span>
          <span className='text-xs text-gray-500 uppercase tracking-wider mt-1'>Computer Vision</span>
        </div>
        <div className='flex flex-col items-center text-center'>
          <span className='font-bold text-xl text-gray-900 dark:text-white font-montserrat'>Edge AI</span>
          <span className='text-xs text-gray-500 uppercase tracking-wider mt-1'>Efficient ML</span>
        </div>
        <div className='flex flex-col items-center text-center col-span-2 md:col-span-1 mx-auto'>
          <span className='font-bold text-xl text-gray-900 dark:text-white font-montserrat'>Trustworthy AI</span>
          <span className='text-xs text-gray-500 uppercase tracking-wider mt-1'>Model Evaluation</span>
        </div>
      </motion.div>
    </section>
  )
}

export default Intro