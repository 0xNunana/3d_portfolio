'use client'

import React from 'react'
import SectionTitle from './SectionTitle'
import { skillsData } from '@/lib/data'
import { NavViewer } from '@/lib/navView'
import { motion } from 'framer-motion'

const fadeInVariant ={
    initial:{
        opacity:0,
        y:50
    },
    animate:(index:number)=>({
        opacity:1,
        y:0,
        transition:{
          delay:0.1 * index
        }
    }),
}

const Skills = () => {
    const {ref}=NavViewer('Skills',0.75)
    const categories = Object.keys(skillsData) as Array<keyof typeof skillsData>;

  return (
   <section ref={ref} id='skills' className='mb-28 max-w-[53rem] w-full scroll-mt-28 text-center sm:mb-40'>
    <SectionTitle>Technical Skills</SectionTitle>
    
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-left'>
      {categories.map((category, index) => (
        <motion.div 
          key={category}
          variants={fadeInVariant}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          custom={index}
          className='bg-white dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm'
        >
          <h3 className='font-bold font-montserrat text-lg mb-4 text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2'>
            {category}
          </h3>
          <div className='flex flex-wrap gap-2'>
            {skillsData[category].map((skill, i) => (
              <span 
                key={i} 
                className='bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-3 py-1 text-sm rounded-lg border border-gray-200 dark:border-gray-700'
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
   </section>
  )
}

export default Skills