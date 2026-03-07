import React from "react";
import Link from "next/link";
import { ThemeButton } from "../theme-toggle-btn";
import { siteConfig } from "@/config/site";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={siteConfig.nav.home} className="flex items-center gap-0.5 group cursor-pointer">
          <span className="text-2xl font-black text-foreground tracking-tight">AK</span>
          <span className="text-2xl font-bold text-primary tracking-tight">.dev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            href={siteConfig.nav.about}
          >
            About
          </Link>
          <Link
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            href={siteConfig.nav.projects}
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            href={siteConfig.nav.skills}
          >
            Skills
          </Link>
          <Link
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            href={siteConfig.nav.experience}
          >
            Experience
          </Link>
          <a
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeButton />
          <a
            className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-bold rounded-md hover:opacity-90 transition-opacity"
            href={`mailto:${siteConfig.links.email}`}
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
