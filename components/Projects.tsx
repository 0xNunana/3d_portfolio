'use client'

import React,{useEffect} from 'react'
import SectionTitle from './SectionTitle'
import { projectsData } from '@/lib/data'
import ProjectCard from './ProjectCard'
import { NavViewer } from '@/lib/navView'
import Link from 'next/link'

const Projects = () => {
 const {ref}=NavViewer('Projects',0.3)

  
  
  return (
    <section className='mb-5 sm:mb-20 scroll-mt-20 sm:scroll-mt-28' id='projects' ref={ref}>
        <SectionTitle>Recent Projects</SectionTitle>
        {projectsData.map((pro,i)=>(<div key={i} className=''>
            <Link href={pro.href} target='_blank'>
            <ProjectCard {...pro} />
            </Link>
       
        </div>
          
        ))}
    </section>
  )
}

export default Projects