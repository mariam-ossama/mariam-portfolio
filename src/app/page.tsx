"use client";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
// import Button from "@/components/ui/Button";
// import Image from "next/image";
// import HeaderPage from "./header/page";
// import AboutPage from "./about/page";
// import TechStackPage from "./tech-stacks/page";
// import EducationPage from "./education/page";
// import ProjectsPage from "./my-projects/page";
// import SkillsPage from "./skills/page";
// import ContactPage from "./contact/page";
import Header from "@/components/sections/Header";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import TechStacks from "@/components/sections/TechStacks";

export default function Home() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <h1>Portfolio</h1>
    //   <Button
    //     text="Click me"
    //     onClick={() => alert("Hello")}
    //   />
    // </div>
    <main>
      <Header />
      <About />
      <TechStacks />
      <Education />
      <Projects />
      <Skills />
      {/* <ContactPage /> */}
    </main>
  );
}
