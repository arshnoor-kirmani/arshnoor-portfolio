"use client";

import Link from "next/link";
import { motion, Variants } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/lib/mdx";
import { siteConfig } from "@/config/site";

export default function Projects({ projects }: { projects: ProjectItem[] }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 w-full bg-section border-b border-surface-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase">
              Selected Works
            </h2>
            <h3 className="text-4xl sm:text-6xl font-bold tracking-tighter text-foreground leading-tight">
              A collection of <br /> 
              <span className="text-muted-foreground/40 italic">technical solutions.</span>
            </h3>
          </div>

          <Link
            href={siteConfig.links.github}
            target="_blank"
            className="group inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            Archive / Github
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Projects List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {projects.map((project, idx) => (
            <motion.article
              key={idx}
              variants={item}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start p-8 rounded-sm bg-surface border border-surface-border hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
            >
              {/* Project Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-primary font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="h-[1px] flex-1 bg-border/20 group-hover:bg-primary/20 transition-colors" />
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {project.frontMatter.title}
                  </h4>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary/80 px-2 py-1 bg-primary/5 rounded-sm">
                      {project.frontMatter.role}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/40">
                      {project.frontMatter.date}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.frontMatter.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-sm bg-background/50 text-muted-foreground/70 uppercase border border-border/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-8 pt-4">
                  {project.frontMatter.live && (
                    <a
                      href={project.frontMatter.live}
                      target="_blank"
                      className="group/link flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-foreground hover:text-primary transition-colors"
                    >
                      Live Preview
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                  <a
                    href={project.frontMatter.github || siteConfig.links.github}
                    target="_blank"
                    className="group/link flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-foreground hover:text-primary transition-colors"
                  >
                    Repository
                    <Github className="w-3 h-3 transition-transform group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Project Content / Description */}
              <div className="lg:col-span-7">
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed font-light">
                  {project.content
                    .split("\n")
                    .filter((line) => line.trim().startsWith("-"))
                    .map((line, i) => {
                      const text = line.replace(/^- /, "").trim();
                      return (
                        <div key={i} className="relative pl-6">
                          <span className="absolute left-0 top-3 h-[1px] w-4 bg-primary/30" />
                          <p>
                            {text.split(/\*\*(.*?)\*\*/g).map((part, index) =>
                              index % 2 === 1 ? (
                                <span key={index} className="text-foreground font-medium underline decoration-primary/20 underline-offset-4">
                                  {part}
                                </span>
                              ) : (
                                part
                              )
                            )}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
