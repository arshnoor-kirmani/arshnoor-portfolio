import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import {
  getSortedContentByFrontmatter,
  ExperienceItem,
  ProjectItem,
  EducationItem,
} from "@/lib/mdx";
import fs from "fs";
import path from "path";

// ISR: Revalidate the page every 60 seconds
export const revalidate = 60;

export default async function Home() {
  // Read MDX Content using Node APIs
  const experienceFiles = getSortedContentByFrontmatter(
    "experience",
  ) as ExperienceItem[];
  const projectFiles = getSortedContentByFrontmatter(
    "projects",
  ) as ProjectItem[];
  const educationFiles = getSortedContentByFrontmatter(
    "education",
  ) as EducationItem[];

  // Read Skills JSON
  const skillsPath = path.join(process.cwd(), "content", "skills.json");
  const skillsData = JSON.parse(fs.readFileSync(skillsPath, "utf8"));

  return (
    <>
      <Nav />
      {/* Abstract Animated Background Watermark Fixes */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-10 animate-pulse duration-10000" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen opacity-10 animate-pulse delay-1000 duration-10000" />
        {/* Typographic Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none select-none opacity-[0.03]">
          <h1 className="font-black text-[clamp(6rem,15vw,20rem)] leading-none text-foreground">
            ENGINEER
          </h1>
        </div>
        <div className="absolute top-1/4 right-0 translate-x-1/4 -rotate-90 text-center pointer-events-none select-none opacity-[0.03]">
          <h1 className="font-black text-[clamp(4rem,10vw,15rem)] leading-none text-foreground">
            CREATIVE
          </h1>
        </div>
      </div>

      <main className="w-full flex min-h-screen flex-col items-center justify-between overflow-x-hidden relative z-10">
        <header className="sr-only">
          <h1>Arshnoor Kirmani Full Stack Developer</h1>
        </header>
        <article>
          <Hero />
          <About />
          <Experience experience={experienceFiles} />
          <Projects projects={projectFiles} />
          <Skills skillsCategories={skillsData.categories} />
          <Education education={educationFiles} />
          <Resume />
          <Contact />
        </article>
      </main>
      <Footer />
    </>
  );
}
