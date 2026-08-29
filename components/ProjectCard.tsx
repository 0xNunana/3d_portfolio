'use client'

import { projectsData } from '@/lib/data'
import { useScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: any;
  href: string;
  category?: string;
  status?: string;
}

const ProjectCard = ({ title, description, tags, imageUrl, category, status }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.13 1']
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <motion.div ref={ref} className='mb-3 sm:mb-8 last:mb-0 group w-full flex justify-center'
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress
      }}>
      <section
        className="bg-gray-100 max-w-[42rem] sm:w-[600px] my-3 border border-black/5 rounded-lg 
        overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-8
        dark:text-white dark:bg-white/10 dark:hover:bg-white/20 text-left">

        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          {status && (
            <span className="text-[0.6rem] font-bold uppercase tracking-wider text-coral-red mb-2 block">
              {status}
            </span>
          )}
          <h3 className="text-2xl font-semibold">{title}</h3>
          {category && <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{category}</span>}
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-white/70 text-sm">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  )
}

export default ProjectCard