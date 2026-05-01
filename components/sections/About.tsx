"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 w-full relative overflow-hidden bg-section border-b border-surface-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Section Label */}
          <div className="lg:w-1/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-4">
                Philosophy
              </h2>
              <div className="h-[2px] w-12 bg-primary/30" />
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl"
            >
              <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
                Building with discipline. <br />
                Designing for people.
              </h3>
              
              <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed font-light">
                <p>
                  I approach software engineering as a craft. To me, code isn&apos;t just about making things work—it&apos;s about creating <span className="text-foreground font-normal italic underline decoration-primary/30 underline-offset-4">sustainable systems</span> that are easy to reason about and a joy to use.
                </p>
                <p>
                  With a background in both full-stack development and frontend instruction, I bridge the gap between complex backend logic and intuitive user interfaces. I believe the best products are built when technical rigor meets empathetic design.
                </p>
              </div>
            </motion.div>

            {/* Core Values / Focus Areas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-surface-border"
            >
              <div className="space-y-4 p-6 rounded-sm bg-surface border border-surface-border shadow-sm">
                <h4 className="font-bold text-foreground uppercase tracking-[0.2em] text-[10px]">Technical Focus</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  React ecosystems, Next.js, Type-safe development with TypeScript, and scalable Node.js architectures.
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-sm bg-surface border border-surface-border shadow-sm">
                <h4 className="font-bold text-foreground uppercase tracking-[0.2em] text-[10px]">Design Mindset</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  Minimalism, accessibility (a11y), responsive fluidity, and motion that serves a purpose.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
