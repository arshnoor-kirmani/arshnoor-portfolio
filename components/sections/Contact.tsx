"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Mail, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-24 lg:py-28 w-full max-w-[1200px] mx-auto px-6 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-card rounded-lg p-8 md:p-12 lg:p-16 border border-border shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center size-20 bg-secondary rounded-md mb-8 border border-border shadow-sm group hover:scale-110 transition-transform">
            <Mail className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-balance">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700 dark:from-primary dark:to-blue-300">
            Amazing.
            </span>
          </h2>

          <p className="text-muted-foreground text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            I'm currently looking for new opportunities to build impactful
            digital products. My inbox is always open!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="w-full sm:w-auto bg-primary text-primary-foreground px-12 py-5 font-black text-lg rounded-md hover:scale-105 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-3"
            >
              Say Hello
            </a>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                className="size-16 bg-secondary rounded-md text-foreground flex items-center justify-center hover:bg-card hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300 border border-border shadow-sm group"
              >
                <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                className="size-16 bg-secondary rounded-md text-foreground flex items-center justify-center hover:bg-card hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300 border border-border shadow-sm group"
              >
                <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
