"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeButton } from "../theme-toggle-btn";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About",      href: siteConfig.nav.about,      id: "about"      },
  { label: "Projects",   href: siteConfig.nav.projects,   id: "projects"   },
  { label: "Skills",     href: siteConfig.nav.skills,     id: "skills"     },
  { label: "Experience", href: siteConfig.nav.experience, id: "experience" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const ids = navLinks.map((l) => l.id);
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      setActiveSection(current ?? (window.scrollY < 80 ? "home" : activeSection));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5 sm:pt-6">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 relative"
      >
        <div
          className={`
            h-14 px-5 sm:px-6 flex items-center justify-between rounded-full
            bg-background/75 backdrop-blur-xl
            border transition-all duration-300
            ${scrolled ? "border-surface-border shadow-lg shadow-black/8" : "border-transparent"}
          `}
        >
          {/* ── Logo ─────────────────────────── */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="group relative flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
          >
            <Image
              src="https://github.com/arshnoorkirmani.png"
              alt="Arshnoor Kirmani"
              width={32}
              height={32}
              className="rounded-full ring-1 ring-border transition-all duration-200 group-hover:ring-2 group-hover:ring-primary"
            />
            {/* Amber dot — brand mark */}
            <div className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full bg-primary border-2 border-background" />
          </Link>

          {/* ── Desktop Nav ───────────────────── */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-secondary rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 38 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Actions ───────────────────────── */}
          <div className="flex items-center gap-3">
            <ThemeButton />
            <div className="hidden md:block h-4 w-px bg-border mx-1" />
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="hidden md:inline-flex text-[10px] font-bold uppercase tracking-[0.2em] text-foreground hover:text-primary px-4 py-2 rounded-full border border-transparent hover:border-border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Contact
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen((o) => !o)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Dropdown ──────────────────── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[68px] left-4 right-4 p-8 bg-background/95 backdrop-blur-2xl border border-surface-border rounded-2xl shadow-2xl z-40 md:hidden"
            >
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-6 items-center text-center"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xs font-bold uppercase tracking-[0.4em] transition-colors ${
                      activeSection === link.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px w-10 bg-border/50" />
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-xs font-bold uppercase tracking-[0.4em] text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
