import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

import Projects from "@/components/Projects";
import SectionDiv from "@/components/SectionDiv";
import Skills from "@/components/Skills";
import Intro from "@/components/intro";
import Currently from "@/components/Currently";
import Research from "@/components/Research";
import Education from "@/components/Education";
import Github from "@/components/Github";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />

      <Currently />
      <Research />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <About />
      <Github />
      <Contacts />
    </main>
  )
}
