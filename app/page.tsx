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
import Transition from "@/components/ui/transition";
import IntroLoader from "@/components/IntroLoader";
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
    <Transition
      introDuration={2}
      transitionDuration={1.2}
      type="curved"
      direction="bottom"
      autoExit
      className="bg-background"
      intro={<IntroLoader />}
    >
      <Nav />

      <main className="w-full flex min-h-screen flex-col items-center justify-between overflow-x-hidden relative z-10">
        <header className="sr-only">
          <h1>Arshnoor Kirmani | Software Engineer</h1>
        </header>

        <article className="w-full">
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
    </Transition>
  );
}
