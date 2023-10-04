import About from "@/components/About";
import Projects from "@/components/Projects";
import SectionDiv from "@/components/SectionDiv";
import Intro from "@/components/intro";


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      
    <Intro/>
    <SectionDiv/>
    <About/>
    <Projects/>
    </main>
  )
}
