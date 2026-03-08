"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-24 sm:pb-32 w-full overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-50 sm:opacity-100" />
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-6"
        >
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full cursor-default"
          >
            {/* Animated glowing border effect */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-green-500/30 via-primary/30 to-blue-500/30 opacity-50 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-green-500/30 via-primary/30 to-blue-500/30 border border-white/10" />
            
            {/* Inner background */}
            <div className="absolute inset-px rounded-full bg-background/90 backdrop-blur-xl" />

            {/* Content */}
            <div className="relative flex items-center gap-2.5 z-10">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              </span>
              <span className="uppercase tracking-widest text-[11px] font-bold text-foreground/80 group-hover:text-foreground transition-colors mix-blend-plus-lighter">
                Available for engineering roles
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl lg:text-[6rem] xl:text-[7.5rem] font-bold tracking-tight leading-[1.05] max-w-5xl xl:max-w-7xl text-foreground">
            Arshnoor Kirmani
          </h1>

          <div className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-medium tracking-tight inline-block relative z-10 -mt-2 sm:-mt-4 lg:-mt-6">
            <TypingAnimation
              words={[
                "Full Stack Developer",
                "React Specialist",
                "UI/UX Enthusiast",
                "TypeScript Developer"
              ]}
              className="inline-block bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-relaxed py-1 pr-1"
            />
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-2">
            I build scalable web applications with a focus on performance, 
            accessibility, and maintainable code using{" "}
            <span className="text-foreground font-semibold">
              React, Next.js, and TypeScript.
            </span>
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-foreground">5+</span>
              <span className="mt-1 font-medium">Modern Tech Stacks</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-foreground">95+</span>
              <span className="mt-1 font-medium">Lighthouse Score</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-foreground">3+</span>
              <span className="mt-1 font-medium">Production Projects</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Link
              href={siteConfig.nav.projects}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40 w-full sm:w-auto text-center"
            >
              View Projects
            </Link>
            <Link
              href={siteConfig.links.resume}
              target="_blank"
              rel="noreferrer"
              className="border border-border bg-background px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-secondary hover:-translate-y-1 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-border w-full sm:w-auto text-center"
            >
              Download Resume
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}