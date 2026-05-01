"use client";

import { motion } from "motion/react";
import { Code2, Layout, Database, Wrench, Terminal } from "lucide-react";

type SkillCategory = {
  title: string;
  skills: string[];
};

const ICON_MAP: Record<string, React.ElementType> = {
  Languages:         Terminal,
  Frontend:          Layout,
  "Backend & Cloud": Database,
  "Tools & Concepts": Wrench,
};

export default function Skills({
  skillsCategories,
}: {
  skillsCategories: SkillCategory[];
}) {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 w-full bg-background border-b border-surface-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* ── Sticky label ──────────────────── */}
          <div className="lg:w-1/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28 space-y-5"
            >
              <div className="space-y-3">
                <h2 className="text-xs font-bold tracking-[0.4em] text-primary uppercase">
                  Inventory
                </h2>
                <h3 className="text-4xl font-bold tracking-tight text-foreground leading-tight">
                  Technical{" "}
                  <span className="text-muted-foreground/35 italic">Capabilities.</span>
                </h3>
              </div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                A structured breakdown of my current tech stack and core
                engineering competencies.
              </p>
            </motion.div>
          </div>

          {/* ── Cards grid ────────────────────── */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsCategories.map((cat, idx) => {
                const Icon = ICON_MAP[cat.title] ?? Code2;
                return (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="group relative p-7 bg-surface border border-surface-border rounded-sm overflow-hidden transition-all duration-400 hover:shadow-lg hover:shadow-black/8 focus-within:shadow-lg"
                  >
                    {/* Hover amber glow */}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-primary/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <div className="relative z-10 space-y-7">
                      {/* Icon + section number */}
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 bg-background rounded-sm border border-border group-hover:border-primary/30 transition-colors">
                          <Icon className="w-4.5 h-4.5 text-primary" aria-hidden />
                        </div>
                        <span className="text-[9px] font-bold tracking-widest text-muted-foreground/30 uppercase tabular-nums">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Category title */}
                      <h4 className="text-sm font-bold tracking-widest text-foreground uppercase border-l-2 border-primary pl-3 leading-tight">
                        {cat.title}
                      </h4>

                      {/* Skill pills */}
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-sm bg-background/70 text-muted-foreground uppercase border border-border/40 hover:border-primary/40 hover:text-foreground transition-all duration-200 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
