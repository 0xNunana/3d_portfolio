'use client'


import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Currently = () => {
  return (
    <section className='mb-28 max-w-[60rem] w-full text-center sm:mb-40 scroll-mt-28' id='currently'>
      <SectionTitle>What I&apos;m working on</SectionTitle>
      <p className='text-gray-600 dark:text-white/80 mb-10 text-lg'>
        My work currently sits at the intersection of software engineering, machine learning and efficient AI systems.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-left'>
        {/* Card 1 */}
        <motion.div
          className='bg-gray-100 border border-black/5 dark:bg-white/10 dark:border-white/10 rounded-xl p-6 flex flex-col h-full hover:bg-gray-200 dark:hover:bg-white/20 transition group'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className='text-xl font-bold mb-2'>AI Research</h3>
          <h4 className='font-semibold text-gray-700 dark:text-gray-300 mb-4'>DermaMNIST</h4>
          <p className='text-gray-600 dark:text-white/70 text-sm mb-6 flex-grow'>
            Investigating skin-lesion image classification with deep learning, with particular attention to model behaviour, failure modes and out-of-distribution performance.
          </p>
          <div className='flex flex-wrap gap-2 mb-6'>
            {['Python', 'PyTorch', 'Computer Vision', 'CNNs', 'Model Evaluation'].map((tag) => (
              <span key={tag} className='bg-black/[0.7] px-2 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'>
                {tag}
              </span>
            ))}
          </div>
          <Link href="#research" className='font-medium text-blue-600 dark:text-blue-400 group-hover:underline mt-auto inline-flex items-center'>
            View Research &rarr;
          </Link>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className='bg-gray-100 border border-black/5 dark:bg-white/10 dark:border-white/10 rounded-xl p-6 flex flex-col h-full hover:bg-gray-200 dark:hover:bg-white/20 transition group'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className='text-xl font-bold mb-2'>Edge AI</h3>
          <h4 className='font-semibold text-gray-700 dark:text-gray-300 mb-4'>Hardware-Aware Deep Learning</h4>
          <p className='text-gray-600 dark:text-white/70 text-sm mb-6 flex-grow'>
            MSc research exploring how deep-learning models can be optimized for different edge hardware configurations while balancing accuracy, latency, memory usage and computational efficiency.
          </p>
          <div className='flex flex-wrap gap-2 mb-6'>
            {['Edge AI', 'Deep Learning', 'Model Optimization', 'Computer Vision', 'Embedded AI'].map((tag) => (
              <span key={tag} className='bg-black/[0.7] px-2 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'>
                {tag}
              </span>
            ))}
          </div>
          <Link href="#research" className='font-medium text-blue-600 dark:text-blue-400 group-hover:underline mt-auto inline-flex items-center'>
            Research Direction &rarr;
          </Link>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className='bg-gray-100 border border-black/5 dark:bg-white/10 dark:border-white/10 rounded-xl p-6 flex flex-col h-full hover:bg-gray-200 dark:hover:bg-white/20 transition group'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className='text-xl font-bold mb-2'>Production Engineering</h3>
          <h4 className='font-semibold text-gray-700 dark:text-gray-300 mb-4'>Software & Energy Systems</h4>
          <p className='text-gray-600 dark:text-white/70 text-sm mb-6 flex-grow'>
            Building production software at BoxPower, working on applications and systems supporting energy infrastructure and related workflows.
          </p>
          <div className='flex flex-wrap gap-2 mb-6'>
            {['TypeScript', 'React', 'Next.js', 'Python', 'Cloud', 'Software Engineering'].map((tag) => (
              <span key={tag} className='bg-black/[0.7] px-2 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'>
                {tag}
              </span>
            ))}
          </div>
          <Link href="#experience" className='font-medium text-blue-600 dark:text-blue-400 group-hover:underline mt-auto inline-flex items-center'>
            View Experience &rarr;
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default Currently
