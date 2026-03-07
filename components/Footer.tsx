import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CodeXml, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background relative overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16 flex flex-col items-center md:items-start gap-12 md:gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-8">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-colors duration-300">
                <CodeXml className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="font-black text-xl tracking-tight">
                AK<span className="text-primary">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left font-medium">
              Crafted with React, Tailwind & Clean Architecture.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <div className="flex gap-4 md:gap-5">
              <Link
                className="size-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border hover:border-primary shadow-sm group"
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
                <span className="sr-only">X (formerly Twitter)</span>
              </Link>
              <Link
                className="size-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border hover:border-primary shadow-sm group"
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                className="size-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border hover:border-primary shadow-sm group"
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mt-2">
              © {currentYear} Arshnoor Kirmani. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
