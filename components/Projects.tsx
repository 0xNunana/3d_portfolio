'use client'

import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import { projectsData, legacyProjectsData } from '@/lib/data'
import ProjectCard from './ProjectCard'
import { NavViewer } from '@/lib/navView'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

type FilterType = "All" | "Research" | "AI / ML" | "Software Engineering" | "Web" | "Mobile";

const FILTERS: FilterType[] = ["All", "Research", "AI / ML", "Software Engineering", "Web", "Mobile"];

const Projects = () => {
  const { ref } = NavViewer('Engineering', 0.3)
  const [activeFilter, setActiveFilter] = useState<FilterType>("All")
  const [showLegacy, setShowLegacy] = useState(false)

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "AI / ML") {
      return project.category === "Research" || (project.tags as readonly string[]).includes("Machine Learning") || (project.tags as readonly string[]).includes("Deep Learning");
    }
    return project.category === activeFilter;
  })

  return (
    <section className='mb-28 sm:mb-40 scroll-mt-28 w-full max-w-[60rem]' id='engineering' ref={ref}>
      <SectionTitle>Selected Engineering</SectionTitle>

      {/* Filtering */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${activeFilter === filter
              ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className='flex flex-col items-center'>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((pro, i) => (
            <motion.div
              key={pro.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className='w-full flex justify-center'
            >
              <Link href={pro.href} target='_blank' className='w-full flex justify-center'>
                <ProjectCard {...pro} />
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Legacy Projects Accordion */}
      <div className="mt-16 w-full max-w-[42rem] mx-auto">
        <button
          onClick={() => setShowLegacy(!showLegacy)}
          className="w-full text-left bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex justify-between items-center transition"
        >
          <div>
            <h3 className="font-bold font-montserrat">Earlier Work</h3>
            <p className="text-sm text-gray-500">A selection of earlier projects from my journey into software engineering.</p>
          </div>
          <div className="text-xl">
            {showLegacy ? '−' : '+'}
          </div>
        </button>

        <AnimatePresence>
          {showLegacy && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-6 flex flex-col items-center">
                {legacyProjectsData.map((pro, i) => (
                  <div key={i} className='w-full flex justify-center'>
                    <Link href={pro.href} target='_blank' className='w-full flex justify-center'>
                      <ProjectCard {...pro} />
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects