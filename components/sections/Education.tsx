"use client";

import { motion } from "motion/react";
import { GraduationCap, MapPin } from "lucide-react";
import { EducationItem } from "@/lib/mdx";

export default function Education({
  education,
}: {
  education: EducationItem[];
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-20 md:py-24 lg:py-28 w-full">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-4 mb-20">
          <GraduationCap className="w-10 h-10 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Education.
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative p-6 md:p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-border/80 transition-all duration-500 group overflow-hidden flex flex-col h-full"
              >
                {/* Decorative glow removed */}
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col gap-2 mb-6">
                    <span className="w-fit px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-[13px] font-bold tracking-wide border border-border/50">
                      {edu.frontMatter.date}
                    </span>
                    <h3 className="text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors mt-2">
                      {edu.frontMatter.degree}
                    </h3>
                  </div>

                  {/* Subtle divider */}
                  <div className="h-px w-full bg-border/50 mb-6" />

                  <div className="flex-1">
                    <p className="text-lg font-medium text-foreground/90">
                      {edu.frontMatter.school}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2 text-muted-foreground text-sm font-medium">
                      <MapPin className="w-4 h-4 text-primary/70" />
                      <span>{edu.frontMatter.location}</span>
                    </div>

                    {edu.frontMatter.details && (
                      <p className="mt-6 text-sm text-muted-foreground leading-relaxed font-medium">
                        {edu.frontMatter.details}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
