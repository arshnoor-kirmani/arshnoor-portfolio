"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function IntroLoader() {
  return (
    <div
      aria-live="polite"
      aria-label="Loading portfolio"
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-background px-6 overflow-hidden"
    >
      {/* Scan-line accent */}
      <div aria-hidden className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
        <div className="h-[2px] w-full bg-primary absolute top-0 left-0 animate-scan" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        {/* Avatar brand mark */}
        <motion.div
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <Image
            src="https://github.com/arshnoorkirmani.png"
            alt="Arshnoor Kirmani"
            width={80}
            height={80}
            className="rounded-full shadow-2xl ring-2 ring-border"
            priority
          />
          {/* Amber dot */}
          <div className="absolute -right-1 -bottom-1 size-5 rounded-full bg-primary border-[3px] border-background" />
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-bold tracking-[0.35em] uppercase"
          >
            Arshnoor
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-[9px] text-muted-foreground font-bold tracking-[0.55em] uppercase"
        >
          Full Stack Engineer - React · Next.js · TypeScript
        </motion.p>
      </div>
    </div>
  );
}
