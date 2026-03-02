"use client";

import Link from "next/link";
import { motion, Variants } from "motion/react";
import { Code, ExternalLink, Github } from "lucide-react";
import { ProjectItem } from "@/lib/mdx";
import { siteConfig } from "@/config/site";

export default function Projects({ projects }: { projects: ProjectItem[] }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 w-full bg-secondary/10"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Code className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                Featured Projects
              </h2>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
              Production-ready systems engineered with performance,
              scalability, and maintainability in mind.
            </p>
          </div>

          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md w-fit"
          >
            <span className="font-medium text-sm">View All on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 grid-cols-1 md:grid-cols-2 items-stretch"
        >
          {projects.map((project, idx) => (
            <motion.article
              key={idx}
              variants={item}
              className="group flex flex-col h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-5 space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {project.frontMatter.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-wide">
                    <span className="text-primary font-semibold">
                      {project.frontMatter.role}
                    </span>
                    <span className="w-1 h-1 bg-border rounded-full shrink-0" />
                    <span className="text-muted-foreground shrink-0">
                      {project.frontMatter.date}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {project.content
                    .split("\n")
                    .filter((line) => line.trim().startsWith("-"))
                    .map((line, i) => {
                      const text = line.replace(/^- /, "").trim();
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">
                            {text.split(/\*\*(.*?)\*\*/g).map((part, index) =>
                              index % 2 === 1 ? (
                                <span key={index} className="text-foreground font-semibold">
                                  {part}
                                </span>
                              ) : (
                                part
                              )
                            )}
                          </span>
                        </li>
                      );
                    })}
                </ul>

                {/* CTA Buttons */}
                <div className="mt-auto pt-6 flex flex-wrap gap-3">
                  {project.frontMatter.live && (
                    <a
                      href={project.frontMatter.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Preview
                    </a>
                  )}

                  <a
                    href={project.frontMatter.github || siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-secondary/40 transition"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="px-6 py-4 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {project.frontMatter.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground hover:text-foreground transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}