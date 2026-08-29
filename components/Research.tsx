'use client'


import { motion } from 'framer-motion'
import { NavViewer } from '@/lib/navView'
import Link from 'next/link'

const Research = () => {
  const { ref } = NavViewer('Research', 0.2)

  return (
    <section id="research" ref={ref} className="mb-28 max-w-[60rem] w-full scroll-mt-28">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-montserrat mb-4">Research</h2>
        <p className="text-gray-600 dark:text-white/80 text-lg">
          Exploring how machine learning systems can become more reliable, efficient and useful outside the laboratory.
        </p>
      </div>

      {/* RESEARCH PROJECT 1: DermaMNIST */}
      <motion.div
        className="mb-20 bg-gray-50 border border-gray-200 dark:bg-gray-900/50 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 text-xs font-semibold rounded-full mb-3 tracking-wide">
                COMPLETED / RESEARCH PROJECT
              </span>
              <h3 className="text-3xl font-bold font-montserrat mb-2">DermaMNIST — Trustworthy Computer Vision</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide">Computer Vision · Trustworthy AI · Deep Learning</p>
            </div>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
            <p className="text-lg leading-relaxed">
              DermaMNIST is a research and engineering project exploring deep-learning-based skin-lesion classification using the DermaMNIST dataset. The project goes beyond reporting classification accuracy by investigating model behaviour, limitations and failure cases.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-xl p-6 mb-8 border border-gray-100 dark:border-gray-700">
            <h4 className="text-xl font-bold mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">Research Question</h4>
            <p className="italic text-gray-700 dark:text-gray-300 mb-6">
              &quot;How reliably does a deep-learning classifier perform when confronted with data that differs from the distribution on which it was trained?&quot;
            </p>

            <h4 className="text-xl font-bold mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">Why it matters</h4>
            <p className="text-gray-700 dark:text-gray-300">
              High test accuracy does not necessarily imply that a model is reliable in real-world conditions. Understanding failure modes and distribution shifts is therefore an important part of trustworthy machine learning.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-gray-500 dark:text-gray-400">Experiments & Results</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center min-h-[100px] border border-dashed border-gray-300 dark:border-gray-600">
              <p className="text-gray-500 dark:text-gray-400 font-medium">Results available in research repository</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-gray-500 dark:text-gray-400">Research Themes</h4>
            <div className="flex flex-wrap gap-2">
              {['Image classification', 'Deep convolutional neural networks', 'Model evaluation', 'Out-of-distribution behaviour', 'Failure analysis', 'Trustworthy AI', 'Reproducible experimentation'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 dark:bg-amber-900/20 dark:border-amber-700 rounded-r-lg">
            <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">
              Research project developed in the context of the OTH Regensburg International Summer School 2026: Trustworthy AI – Machine Learning Meets Blockchain.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="https://github.com/0xnunana" target="_blank" className="px-6 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium rounded-full hover:scale-105 transition">
              GitHub &rarr;
            </Link>
          </div>
        </div>
      </motion.div>

      {/* RESEARCH PROJECT 2: Edge AI */}
      <motion.div
        className="mb-20 bg-gray-50 border border-gray-200 dark:bg-gray-900/50 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="p-8 md:p-12">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 text-xs font-semibold rounded-full mb-3 tracking-wide">
              MSc THESIS / IN PROGRESS
            </span>
            <h3 className="text-3xl font-bold font-montserrat mb-4">Hardware-Aware Optimization of Deep Learning Models for Real-Time Edge Computer Vision</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Investigating how deep-learning models can be optimized for deployment across different edge hardware configurations while maintaining an effective balance between predictive accuracy and system-level efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 mt-8">
            <div className="bg-white dark:bg-gray-800/80 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Accuracy</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">How much predictive performance is retained?</p>
            </div>
            <div className="bg-white dark:bg-gray-800/80 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Latency</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">How quickly can inference be performed?</p>
            </div>
            <div className="bg-white dark:bg-gray-800/80 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Memory</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">How much memory does the model require?</p>
            </div>
            <div className="bg-white dark:bg-gray-800/80 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Energy & Size</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">How efficiently can inference be performed and how much can it be compressed?</p>
            </div>
          </div>

          {/* Research Visualization */}
          <div className="mb-10 bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 overflow-x-auto">
            <pre className="text-xs md:text-sm text-gray-800 dark:text-gray-300 font-mono leading-relaxed text-center min-w-[500px]">
              {`                    ┌─────────────┐
                    │   Dataset   │
                    └──────┬──────┘
                           ↓
                    ┌─────────────┐
                    │ Base Model  │
                    └──────┬──────┘
                           ↓
             ┌─────────────┴─────────────┐
             ↓                           ↓
      Model Optimization          Baseline Model
             ↓                           ↓
       Quantization                 Benchmark
       Pruning                      Benchmark
       Distillation                     ↓
             ↓                    Compare Results
             └─────────────┬─────────────┘
                           ↓
                  Accuracy / Latency /
                  Memory / Energy`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-gray-500 dark:text-gray-400">Potential Techniques</h4>
            <div className="flex flex-wrap gap-2">
              {['Quantization', 'Pruning', 'Knowledge distillation', 'Lightweight architectures', 'Model compression', 'Hardware-aware benchmarking', 'Runtime optimization'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* SUMMER SCHOOL SECTION */}
      <motion.div
        className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" />
            <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold font-montserrat mb-1">International Summer School — Trustworthy AI</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">OTH Regensburg · Germany · 2026</p>
            </div>
            <span className="font-bold text-coral-red bg-coral-red/10 px-3 py-1 rounded-lg">
              6 ECTS
            </span>
          </div>

          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Trustworthy AI – Machine Learning Meets Blockchain</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl">
            Intensive international programme exploring trustworthy artificial intelligence, machine learning and blockchain technologies, with practical work across AI and decentralized systems.
          </p>

          <div className="flex flex-wrap gap-2">
            {['Trustworthy AI', 'Machine Learning', 'Blockchain', 'PyTorch', 'Research'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  )
}

export default Research
