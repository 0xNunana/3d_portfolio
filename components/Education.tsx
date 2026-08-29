'use client'

import React from 'react'
import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'
import { educationData } from '@/lib/data'

const Education = () => {
  return (
    <section id="education" className="scroll-mt-28 mb-28 sm:mb-40 max-w-[53rem] w-full">
      <SectionTitle>Education</SectionTitle>

      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 border border-black/5 dark:bg-white/10 dark:border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-coral-red text-2xl shadow-sm">
                  {edu.icon}
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-2xl font-bold font-montserrat dark:text-white">{edu.degree}</h3>
                  <span className="text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">{edu.date}</span>
                </div>
                <h4 className="text-lg text-coral-red font-medium mb-4">{edu.school}</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {edu.results.length > 0 && (
                  <div className="bg-white dark:bg-gray-900/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                    <h5 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Selected Results</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {edu.results.map((res, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">{res.grade}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400 leading-tight mt-1">{res.subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
