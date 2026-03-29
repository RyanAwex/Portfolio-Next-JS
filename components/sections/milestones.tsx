"use client";

import React from "react";
import { TiltCard } from "@/components/ui/tilt-card";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { Rocket, Layers, Users, Brain } from "lucide-react";

const milestones = [
  {
    year: "2023",
    icon: Rocket,
    headline: "Started My Dev Journey",
    body: "Wrote my very first lines of code. Fell in love with building things from scratch — HTML, CSS, JavaScript, and never looked back.",
    accent: "cyan",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/40",
    glowColor: "from-cyan-500/20 to-blue-500/20",
    barColor: "bg-cyan-500",
    dotColor: "bg-cyan-400",
    shadowColor: "shadow-cyan-500/20",
    tag: "{ origin: 'curiosity' }",
  },
  {
    year: "2024",
    icon: Layers,
    headline: "First Production App Shipped",
    body: "Designed, built, and deployed a full-stack application used by real users. React, Node.js, PostgreSQL — the complete loop, end-to-end.",
    accent: "violet",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/40",
    glowColor: "from-violet-500/20 to-indigo-500/20",
    barColor: "bg-violet-500",
    dotColor: "bg-violet-400",
    shadowColor: "shadow-violet-500/20",
    tag: "{ status: 'deployed' }",
  },
  {
    year: "2025",
    icon: Users,
    headline: "Freelance & Team Collaboration",
    body: "Worked alongside cross-functional teams and independent clients. Sharpened my skills in code reviews, agile sprints, and real-world product delivery.",
    accent: "blue",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/40",
    glowColor: "from-blue-500/20 to-cyan-500/20",
    barColor: "bg-blue-500",
    dotColor: "bg-blue-400",
    shadowColor: "shadow-blue-500/20",
    tag: "{ mode: 'team_player' }",
  },
  {
    year: "2026",
    icon: Brain,
    headline: "Building AI-Powered Products",
    body: "Integrating large language models and intelligent agents into production pipelines. Crafting the next generation of developer tooling and user experiences.",
    accent: "emerald",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/40",
    glowColor: "from-emerald-500/20 to-teal-500/20",
    barColor: "bg-emerald-500",
    dotColor: "bg-emerald-400",
    shadowColor: "shadow-emerald-500/20",
    tag: "{ era: 'AI_native' }",
  },
];

export const Milestones = () => {
  return (
    <section id="milestones" className="w-full py-32 px-6 relative overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-2xl">02.</span>
            My Journey
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-grow ml-4" />
          </h2>
          <p className="text-slate-400 text-lg mb-20 max-w-xl">
            A timeline of defining moments — the milestones that shaped who I am as a developer.
          </p>
        </FadeInSection>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-emerald-500/60 md:-translate-x-1/2" />

          <div className="flex flex-col gap-20">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isEven = i % 2 === 0;

              return (
                <FadeInSection key={m.year} direction={isEven ? "right" : "left"} delay={i * 80}>
                  <div
                    className={`relative flex items-center gap-8 md:gap-0 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10 flex-shrink-0">
                      <div
                        className={`w-4 h-4 rounded-full ${m.dotColor} ring-4 ring-slate-950 shadow-lg ${m.shadowColor}`}
                      />
                    </div>

                    {/* Year label — opposite side from card */}
                    <div
                      className={`hidden md:flex w-1/2 ${
                        isEven ? "justify-end pr-16" : "justify-start pl-16"
                      } items-center`}
                    >
                      <span
                        className={`font-mono text-6xl font-extrabold ${m.accentColor} opacity-20 select-none`}
                      >
                        {m.year}
                      </span>
                    </div>

                    {/* Card — takes up half width on md+ */}
                    <div
                      className={`w-full pl-16 md:pl-0 md:w-1/2 ${
                        isEven ? "md:pl-16" : "md:pr-16"
                      }`}
                    >
                      <TiltCard className="w-full">
                        {/* Glow blob */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-tr ${m.glowColor} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />

                        <div
                          className={`relative glass-panel rounded-2xl p-8 border ${m.borderColor} overflow-hidden group`}
                        >
                          {/* Animated left accent bar */}
                          <div
                            className={`absolute top-0 left-0 w-1 h-full ${m.barColor} transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500`}
                          />

                          {/* Mac-style dots */}
                          <div className="flex gap-2 mb-5">
                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <div className="w-3 h-3 rounded-full bg-green-500/70" />
                          </div>

                          {/* Year badge (mobile only) + icon */}
                          <div className="flex items-start justify-between mb-4">
                            <div
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border ${m.borderColor} text-xs font-mono ${m.accentColor}`}
                            >
                              <Icon className="w-3.5 h-3.5" />
                              {m.year}
                            </div>
                            <span className={`font-mono text-xs ${m.accentColor} opacity-50`}>
                              {m.tag}
                            </span>
                          </div>

                          {/* Headine */}
                          <h3 className="text-xl font-bold text-slate-100 mb-3 leading-snug">
                            {m.headline}
                          </h3>

                          {/* Body */}
                          <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>

                          {/* Bottom divider */}
                          <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                            <span className="text-xs tracking-widest text-slate-600 uppercase font-mono">
                              milestone_{String(i + 1).padStart(2, "0")}
                            </span>
                            <Icon className={`w-4 h-4 ${m.accentColor} opacity-50`} />
                          </div>
                        </div>
                      </TiltCard>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
