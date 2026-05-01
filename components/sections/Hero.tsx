"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-20 sm:pb-28 w-full overflow-hidden border-b border-surface-border"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 -z-10 bg-background" aria-hidden>
        <div className="absolute top-[8%]  right-[4%]  w-[550px] h-[550px] bg-primary/6  rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-[4%] left-[-4%] w-[480px] h-[480px] bg-primary/8  rounded-full blur-[110px] animate-pulse [animation-delay:700ms]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* ── Left: Headline ────────────────── */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Role typing label */}
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-primary" aria-hidden />
                <TypingAnimation
                  words={["Full Stack Engineer", "React Specialist", "Product Builder"]}
                  className="text-xs font-bold tracking-[0.4em] text-primary uppercase"
                />
              </div>

              {/* Name */}
              <h1 className="text-[clamp(4rem,10vw,9rem)] font-bold tracking-tighter leading-[0.85] text-foreground">
                Arshnoor{" "}
                <span className="text-muted-foreground/25 italic font-bold">
                  Kirmani
                </span>
              </h1>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Next.js", "TypeScript", "React", "Node.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full border border-border/50 bg-secondary/20 text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Description + CTAs ─────── */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Copy */}
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-foreground font-light leading-snug">
                  Building digital products with{" "}
                  <em className="font-medium not-italic underline decoration-primary/40 underline-offset-4">
                    technical discipline
                  </em>{" "}
                  and{" "}
                  <em className="font-medium not-italic underline decoration-primary/40 underline-offset-4">
                    visual clarity
                  </em>
                  .
                </p>
                <p className="text-base text-muted-foreground leading-relaxed font-light">
                  Based in India. Specializing in React ecosystems and clean
                  architecture to build tools that feel natural and perform at
                  scale.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href={siteConfig.nav.projects}
                  className="group relative inline-flex items-center justify-between bg-primary text-primary-foreground px-7 py-4 rounded-sm font-bold text-[11px] tracking-widest uppercase transition-all hover:bg-primary/90 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Explore Work
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden />
                </Link>
                <Link
                  href={siteConfig.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-border bg-transparent px-7 py-4 rounded-sm font-bold text-[11px] tracking-widest uppercase transition-all hover:bg-secondary hover:border-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                >
                  View Resume
                </Link>
              </div>

              {/* Availability badge */}
              <div
                role="status"
                aria-label="Current availability: open to new opportunities"
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/20 border border-border/40 w-fit"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <p className="text-xs text-muted-foreground font-medium">
                  Available for new opportunities
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
