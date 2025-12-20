import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center">
      <Intro />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
