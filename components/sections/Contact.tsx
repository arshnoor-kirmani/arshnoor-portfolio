"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 md:py-48 w-full bg-section border-b border-surface-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          {/* Label */}
          <p className="text-xs font-bold tracking-[0.4em] text-primary uppercase">
            Get in Touch
          </p>

          {/* Headline */}
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-none">
            Let&apos;s build <br />
            <span className="text-muted-foreground/20 italic">the future.</span>
          </h2>

          {/* Sub-copy */}
          <p className="max-w-xl mx-auto text-lg text-muted-foreground font-light leading-relaxed">
            I&apos;m currently open to new roles and collaborations. Whether you
            have a specific project in mind or just want to say hello, my inbox
            is always open.
          </p>

          {/* Email CTA */}
          <div className="pt-4 flex flex-col items-center gap-4">
            <a
              href={`mailto:${siteConfig.links.email}`}
              aria-label={`Send email to ${siteConfig.links.email}`}
              className="group inline-flex items-center gap-3 px-8 sm:px-12 py-5 sm:py-6 bg-foreground text-background rounded-full font-bold tracking-tight transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
            >
              <span className="text-base sm:text-xl truncate-email sm:max-w-none">
                {siteConfig.links.email}
              </span>
              <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/50">
              or find me on
            </span>

            {/* Secondary social links — not repeated in footer icon-style, just plain text */}
            <div className="flex items-center gap-8">
              {[
                { label: "LinkedIn", href: siteConfig.links.linkedin },
                { label: "GitHub", href: siteConfig.links.github },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
