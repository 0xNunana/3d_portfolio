import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveContextProvider from '@/components/ActiveContextProvider'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import Themer from '@/components/Themer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paul Yao Kudaya — Software Engineer & AI Researcher',
  description: 'Paul Yao Kudaya is a software engineer and AI researcher working across software engineering, computer vision, trustworthy AI and Edge AI.',
  keywords: 'Paul Yao Kudaya, Software Engineer, AI Researcher, Computer Vision, Edge AI, Machine Learning, PyTorch, React, Next.js, Trustworthy AI',
  authors: [{ name: 'Paul Yao Kudaya' }],
  creator: 'Paul Yao Kudaya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://0xnunana.vercel.app',
    title: 'Paul Yao Kudaya — Software Engineer & AI Researcher',
    description: 'Paul Yao Kudaya is a software engineer and AI researcher working across software engineering, computer vision, trustworthy AI and Edge AI.',
    siteName: 'Paul Yao Kudaya Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paul Yao Kudaya — Software Engineer & AI Researcher',
    description: 'Paul Yao Kudaya is a software engineer and AI researcher working across software engineering, computer vision, trustworthy AI and Edge AI.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4b2728]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#2b274b]'></div>
        
        <ActiveContextProvider>
          <Header />
          {children}
          <Footer />
          <Themer />
          <Toaster position='top-right' />
        </ActiveContextProvider>
      </body>
    </html>
  )
}
