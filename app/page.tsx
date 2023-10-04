import About from "@/components/About";
import Experience from "@/components/Experience";

import Projects from "@/components/Projects";
import SectionDiv from "@/components/SectionDiv";
import Skills from "@/components/Skills";
import Intro from "@/components/intro";


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      
    <Intro/>
    <SectionDiv/>
    <About/>
    <Projects/>
    <Skills/>
    <Experience/>
  
    </main>
  )
}
