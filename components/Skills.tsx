'use client'

import React from 'react'
import SectionTitle from './SectionTitle'
import { skillsData } from '@/lib/data'
import { NavViewer } from '@/lib/navView'
import { motion } from 'framer-motion'


// cause an individual delay
const fadeInVariant ={
    initial:{
        opacity:0,
        y:100
    },
    animate:(index:number)=>({
        opacity:1,
        y:0,transition:{
    delay:0.05 * index
}
    }),
}

const Skills = () => {
    const {ref}=NavViewer('Skills',0.75)
  return (
   <section ref={ref} id='skills' className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
    <SectionTitle>My Skills</SectionTitle>
    <ul className='flex flex-wrap justify-center gap-2 text-lg font-montserrat text-gray-800'>
        {skillsData.map((skill,i)=>(
<motion.li key={i} 
variants={fadeInVariant}
initial='initial'
whileInView='animate'
viewport={{
    once:true
}}
custom={i}
className='bg-white border border-coral-red rounded-xl px-5 py-3 dark:bg-slate-300 dark:text-gray-900'>
    {skill}
</motion.li>
        ))}
    </ul>

   </section>
  )
}

export default Skills