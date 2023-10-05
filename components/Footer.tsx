import React from 'react'

const Footer = () => {
  return (
    <footer className='text-center pb-4 mb-2'>
        <p className='text-gray-600'> &copy;{new Date().getFullYear()} 0xNunana. All Rights reserved.</p>
           
        <p className='text-gray-400'>Built with <span className='text-gray-600'>React & Next.js, Typescript,Resend,Tailwindcss, Framer Motion </span>and <span>❤️</span>.</p>
      
    </footer>
  )
}

export default Footer