"use client";

import { motion } from "motion/react";
import { Cpu, TerminalSquare, Code2, Layout, Database, Wrench } from "lucide-react";

type SkillCategory = {
  title: string;
  skills: string[];
};

export default function Skills({
  skillsCategories,
}: {
  skillsCategories: SkillCategory[];
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className="py-32 border-y border-border relative overflow-hidden w-full"
    >
      {/* No background glow */}

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Cpu className="w-10 h-10 text-primary" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Technical Arsenal.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive overview of the tools and technologies I use to
            build world-class digital experiences.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {skillsCategories.map((cat, idx) => {
            // Create dynamic staggered layout: alternating 5 and 7 columns
            const colSpan = idx === 0 || idx === 3 ? "md:col-span-5" : "md:col-span-7"; 
            
            const icons = [Code2, Layout, Database, Wrench];
            const bgIcons = [TerminalSquare, Layout, Database, Wrench];
            const Icon = icons[idx % icons.length];
            const BgIcon = bgIcons[idx % bgIcons.length];

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`relative p-7 md:p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-border/80 transition-all duration-700 group overflow-hidden ${colSpan}`}
              >
                {/* No top glow */}
                
                {/* Large decorative icon in background */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.015] pointer-events-none">
                  <BgIcon className="w-64 h-64 md:w-80 md:h-80 -mr-10" />
                </div>

                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 bg-secondary rounded-lg flex items-center justify-center border border-border group-hover:border-border/80 transition-colors duration-500 shrink-0 shadow-sm">
                      <Icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-6">
                    Core stack & ecosystem
                  </p>

                  {/* Subtle divider */}
                  <div className="h-px w-full bg-border/50 mb-6" />

                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 text-[13px] font-medium bg-background rounded-md text-foreground border border-border shadow-sm hover:bg-primary hover:text-primary-foreground hover:shadow-md transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
