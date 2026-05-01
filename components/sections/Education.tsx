"use client";

import { motion } from "motion/react";
import { EducationItem } from "@/lib/mdx";

export default function Education({
  education,
}: {
  education: EducationItem[];
}) {
  return (
    <section id="education" className="py-24 md:py-32 w-full bg-section border-b border-surface-border">
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
                Education
              </h2>
              <div className="h-[2px] w-12 bg-primary/30" />
            </motion.div>
          </div>

          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative p-8 bg-surface border border-surface-border rounded-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-4xl font-bold tracking-tighter text-primary/20 italic">0{idx + 1}</span>
                  </div>

                  <div className="space-y-6 relative z-10">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                        {edu.frontMatter.date}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {edu.frontMatter.degree}
                      </h3>
                      <p className="text-sm font-bold tracking-[0.1em] text-muted-foreground uppercase">
                        {edu.frontMatter.school}
                      </p>
                    </div>
                    
                    <div className="h-px w-full bg-border/30" />
                    
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {edu.frontMatter.location}
                      </p>
                      {edu.frontMatter.details && (
                        <p className="text-xs text-muted-foreground/50 leading-relaxed italic border-l border-primary/20 pl-4">
                          {edu.frontMatter.details}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
