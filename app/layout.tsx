import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveContextProvider from '@/components/ActiveContextProvider'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import Themer from '@/components/Themer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '0xNunana | Portfolio',
  description: '0xNunana is a full-stack developer with a lot of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        <ActiveContextProvider>
        <Header/>
        {children}
<Footer/>
<Themer/>
        <Toaster position='top-right'/>
        </ActiveContextProvider>
        
       
        </body>
    </html>
  )
}
