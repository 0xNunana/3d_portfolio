import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://github.com/0xnunana" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
            <BsGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/paul-yao-kudaya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition">
            <BsLinkedin size={20} />
          </a>
          <a href="mailto:kudayapaul@gmail.com" className="text-gray-400 hover:text-coral-red transition">
            <MdEmail size={22} />
          </a>
        </div>
        <div className='mb-2 font-semibold text-gray-700 dark:text-gray-300 font-montserrat'>
          Paul Yao Kudaya &copy; {new Date().getFullYear()}
        </div>
        <p className='text-xs'>
          Software Engineer &middot; AI Researcher
        </p>
        <p className='text-xs mt-2 text-gray-400'>
          Building software. Exploring intelligent systems.
        </p>
    </footer>
  )
}

export default Footer