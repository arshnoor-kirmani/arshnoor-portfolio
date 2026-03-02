"use client";

import { motion } from "motion/react";
import { Briefcase, Building2, MapPin, ExternalLink } from "lucide-react";
import { ExperienceItem } from "@/lib/mdx";

export default function Experience({
  experience,
}: {
  experience: ExperienceItem[];
}) {
  return (
    <section id="experience" className="py-20 md:py-24 lg:py-28 w-full">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-4 mb-20">
          <Briefcase className="w-10 h-10 text-primary" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tight font-serif">
            Career Path.
          </h2>
        </div>

        <div className="relative pt-8">
          {/* Timeline vertical line */}
          <div className="absolute top-0 bottom-0 left-[26px] md:left-[240px] w-[2px] bg-border/50" />
          
          <div className="space-y-16 md:space-y-24">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Timeline dot */}
                <div className="absolute left-[26px] md:left-[240px] top-[40px] md:top-[46px] w-4 h-4 bg-border rounded-full -translate-x-[7px] ring-4 ring-background group-hover:bg-primary group-hover:scale-125 transition-all duration-500 z-10" />

                {/* Left side: Date & Location */}
                <div className="w-full md:w-[240px] pt-8 md:pt-10 pl-14 md:pl-0 md:pr-12 flex flex-col items-start md:items-end gap-2 mb-4 md:mb-0 flex-shrink-0">
                  <span className="inline-block px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-xs font-bold font-serif tracking-widest uppercase transition-colors duration-300 whitespace-nowrap border border-border/50">
                    {exp.frontMatter.date}
                  </span>
                  <div className="text-left md:text-right mt-1 w-full max-w-[200px]">
                    <p className="inline text-xs font-semibold font-serif text-muted-foreground uppercase tracking-widest leading-relaxed">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1.5 -mt-0.5 text-primary opacity-80" />
                      {exp.frontMatter.location}
                    </p>
                  </div>
                </div>

                {/* Right side: Content Card */}
                <div className="flex-1 w-full pl-14 md:pl-10">
                  <div className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-sm hover:border-border/80 hover:shadow-md transition-all duration-500 h-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                      <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {exp.frontMatter.title}
                      </h3>
                      {exp.frontMatter.live && (
                        <a 
                          href={exp.frontMatter.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-secondary/50 hover:bg-secondary text-secondary-foreground transition-colors w-fit border border-border/50"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          View Live
                        </a>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-bold font-serif uppercase tracking-widest text-primary mb-8 flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {exp.frontMatter.company}
                    </p>
                    <ul className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed">
                      {exp.content
                        .split("\n")
                        .filter((line) => line.trim().startsWith("-"))
                        .map((line, i) => {
                          const text = line.replace(/^- /, "").trim();
                          return (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-primary mt-1 text-lg leading-none">
                                &#8226;
                              </span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: text.replace(
                                    /\*\*(.*?)\*\*/g,
                                    '<strong class="text-foreground/90 font-semibold">$1</strong>'
                                  ),
                                }}
                              />
                            </li>
                          );
                        })}
                    </ul>
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
