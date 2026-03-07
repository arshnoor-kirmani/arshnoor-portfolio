"use client";

import { motion } from "motion/react";
import { Lightbulb, Code2, Globe2, ScanFace, Box } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-24 lg:py-28 w-full relative overflow-hidden bg-card/50"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Beyond the Code.
              </h2>
              <div className="h-1.5 w-24 bg-primary"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              As a dedicated <strong className="font-semibold text-foreground">Frontend Developer</strong> from India, 
              I specialize in creating pixel-perfect, high-performance 
              React and Next.js interfaces that don't just look good, but are built to scale. 
              My approach combines technical rigor with a deep understanding of 
              user psychology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm <strong className="font-semibold text-foreground">Arshnoor Kirmani</strong>. 
              Beyond production code, I have a passion for education. As a
              frontend instructor, I focus on teaching the core fundamentals of
              the web, ensuring the next generation understands the{" "}
              <span className="text-foreground font-semibold italic">
                "why"
              </span>{" "}
              behind the{" "}
              <span className="text-foreground font-semibold italic">
                "how."
              </span>
            </p>

            <div className="flex items-center gap-5 pt-6 p-6 bg-secondary/30 rounded-md border border-border">
              <div className="size-14 shrink-0 bg-primary/10 rounded-md flex items-center justify-center border border-primary/20">
                <Lightbulb className="w-7 h-7 text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">
                  Creative Problem Solving
                </h4>
                <p className="text-sm text-muted-foreground">
                  Turning complex challenges into elegant, scalable solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6"
          >
            {[
              {
                label: "Projects Built",
                value: "10+",
                icon: (
                  <Code2
                    className="w-24 h-24 text-primary"
                    strokeWidth={1}
                  />
                ),
              },
              {
                label: "Students Mentored",
                value: "15+",
                icon: (
                  <ScanFace className="w-24 h-24 text-primary" strokeWidth={1} />
                ),
              },
              {
                label: "Performance Score",
                value: "97+",
                icon: (
                  <Globe2 className="w-24 h-24 text-primary" strokeWidth={1} />
                ),
              },
              {
                label: "Clean Code",
                value: "100%",
                icon: (
                  <Box className="w-24 h-24 text-primary" strokeWidth={1} />
                ),
              },
            ].map((stat, i) => (
              <motion.div
                variants={cardVariants}
                key={i}
                className="group relative p-6 md:p-8 bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-border/80"
              >
                <div className="absolute -top-4 -right-4 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 group-hover:rotate-12 duration-500 pointer-events-none">
                  {stat.icon}
                </div>
                <h4 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors relative z-10">
                  {stat.value}
                </h4>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest relative z-10">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
