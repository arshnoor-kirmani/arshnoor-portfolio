"use client";

import { motion } from "motion/react";
import { FileText, Download, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="resume" className="py-16 md:py-20 w-full">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col space-y-4 mb-16">
          <div className="flex items-center gap-4">
            <FileText className="w-10 h-10 text-primary" strokeWidth={2} />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
              Resume.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            A comprehensive overview of my professional timeline and technical expertise.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-500 overflow-hidden"
        >
          {/* Subtle low opacity texture */}
          <div className="absolute right-0 top-0 opacity-[0.01] pointer-events-none">
            <FileText className="w-96 h-96 -mt-20 -mr-20" />
          </div>

          <div className="p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            {/* Left Column */}
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-2xl font-black text-foreground tracking-tight">
                Want the full story?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Grab a copy of my traditional resume for a complete, printable breakdown of my background. The document includes:
              </p>
              <ul className="space-y-4 mt-6">
                {[
                  "Technical Skills Overview",
                  "Experience Breakdown",
                  "Project Highlights",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right shrink-0">
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-5 text-lg font-bold rounded-md shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto"
              >
                <Download className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
                <span>Download Resume</span>
              </a>
              
              <div className="mt-4 flex items-center gap-2 text-muted-foreground text-sm font-medium">
                <FileText className="w-4 h-4" />
                <span>PDF Format • ~120KB</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
