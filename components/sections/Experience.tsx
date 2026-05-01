"use client";

import { motion } from "motion/react";
import { ExperienceItem } from "@/lib/mdx";

export default function Experience({
  experience,
}: {
  experience: ExperienceItem[];
}) {
  return (
    <section id="experience" className="py-24 md:py-32 w-full relative bg-background border-b border-surface-border">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-4">
                Experience
              </h2>
              <div className="h-[2px] w-12 bg-primary/30" />
            </motion.div>
          </div>

          <div className="lg:w-3/4 space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 p-8 rounded-sm bg-surface border border-surface-border hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
              >
                {/* Visual Connector */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/20 group-hover:bg-primary transition-colors" />
                
                <div className="md:col-span-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                      {exp.frontMatter.date}
                    </span>
                    <p className="text-[9px] font-bold tracking-widest text-muted-foreground/50 uppercase">
                      {exp.frontMatter.location}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-9 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {exp.frontMatter.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                        {exp.frontMatter.company}
                      </p>
                      {exp.frontMatter.live && (
                        <>
                          <div className="size-1 rounded-full bg-border" />
                          <a href={exp.frontMatter.live} target="_blank" className="text-[9px] font-bold tracking-widest text-primary hover:underline uppercase">View Live</a>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-base text-muted-foreground leading-relaxed font-light">
                    {exp.content
                      .split("\n")
                      .filter((line) => line.trim().startsWith("-"))
                      .map((line, i) => {
                        const text = line.replace(/^- /, "").trim();
                        return (
                          <div key={i} className="relative pl-6">
                            <span className="absolute left-0 top-3 h-[1px] w-4 bg-primary/20" />
                            <p
                              dangerouslySetInnerHTML={{
                                __html: text.replace(
                                  /\*\*(.*?)\*\*/g,
                                  '<strong class="text-foreground font-normal border-b border-primary/20">$1</strong>'
                                ),
                              }}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
