'use client'

import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import { useActiveContext } from './ActiveContextProvider'

const Header = () => {
  const { activeNav, setActiveNav } = useActiveContext()

  return (
    <header className='z-[999] relative '>
      <motion.div
        className="fixed border-coral-red top-0 left-1/2 h-[6.5rem] w-full rounded-none border border-opacity-20 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[48rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className='flex fixed top-10 left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-1 '>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map((link, index) => (
            <motion.li key={index} className='flex relative items-center justify-center h-3/4' initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <Link
                href={link.hash}
                className={`flex w-full px-3 py-2 justify-center items-center hover:text-gray-950 dark:hover:text-white transition ${activeNav === link.name ? 'text-gray-950 dark:text-white' : ''}`}
                onClick={() => setActiveNav(link.name)}
              >
                {link.name}
                {link.name === activeNav && (
                  <motion.span
                    layoutId='activeNav'
                    transition={{ type: 'spring' }}
                    className='bg-gray-200 dark:bg-gray-800 rounded-full absolute inset-0 -z-10'
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header