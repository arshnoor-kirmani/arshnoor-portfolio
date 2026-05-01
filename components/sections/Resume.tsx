"use client";

import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Resume() {
  return (
    <section id="resume" className="py-24 md:py-32 w-full bg-background border-b border-surface-border">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface border border-surface-border p-8 md:p-16 rounded-sm shadow-xl shadow-black/5 flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase">
              Curriculum Vitae
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Looking for a <br />
              detailed technical history?
            </h3>
            <p className="max-w-md text-muted-foreground font-light leading-relaxed">
              My resume provides a comprehensive breakdown of my engineering experience, projects, and educational background.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-4">
            <a
              href={siteConfig.links.resume}
              target="_blank"
              className="group flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-sm font-bold tracking-widest uppercase rounded-sm transition-all hover:bg-primary/90"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              Download PDF
            </a>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-muted-foreground/60 uppercase">
              <FileText className="w-3 h-3" />
              Updated May 2025
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
