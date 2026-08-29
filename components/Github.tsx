'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BsGithub } from 'react-icons/bs'

const Github = () => {
  return (
    <motion.section 
      className="mb-28 max-w-[53rem] w-full text-center"
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
    >
      <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center">
        <BsGithub className="text-6xl mb-6 text-gray-300" />
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Open Source & Experiments</h2>
        <p className="text-gray-300 text-lg max-w-2xl mb-8">
          I use GitHub to document experiments, research projects and software engineering work.
        </p>
        <a 
          href="https://github.com/0xnunana" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-gray-900 font-bold px-8 py-3 rounded-full hover:scale-105 transition active:scale-95 inline-flex items-center gap-2"
        >
          View GitHub Profile
        </a>
      </div>
    </motion.section>
  )
}

export default Github
