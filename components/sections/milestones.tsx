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
    accentColor: "text-zinc-200",
    borderColor: "border-zinc-800/60",
    glowColor: "from-zinc-900/20 to-neutral-900/20",
    barColor: "bg-zinc-700",
    dotColor: "bg-zinc-500",
    shadowColor: "shadow-zinc-500/5",
    tag: "{ origin: 'curiosity' }",
  },
  {
    year: "2024",
    icon: Layers,
    headline: "Becoming a Frontend Developer",
    body: "Designed, built, and deployed frontend applications using React and modern development practices. Gained experience with state management, component libraries, and responsive design.",
    accentColor: "text-zinc-200",
    borderColor: "border-zinc-800/60",
    glowColor: "from-zinc-900/20 to-neutral-900/20",
    barColor: "bg-zinc-700",
    dotColor: "bg-zinc-500",
    shadowColor: "shadow-zinc-500/5",
    tag: "{ status: 'frontend' }",
  },
  {
    year: "2025",
    icon: Users,
    headline: "Becoming a Backend Developer",
    body: "Expanded my skillset to backend development with Node.js and Express. Built RESTful APIs, worked with databases, and learned about authentication, security, and server-side architecture.",
    accentColor: "text-zinc-200",
    borderColor: "border-zinc-800/60",
    glowColor: "from-zinc-900/20 to-neutral-900/20",
    barColor: "bg-zinc-700",
    dotColor: "bg-zinc-500",
    shadowColor: "shadow-zinc-500/5",
    tag: "{ mode: 'backend' }",
  },
  {
    year: "2026",
    icon: Brain,
    headline: "Freelance & Team Collaboration",
    body: "Worked alongside cross-functional teams and independent clients. Sharpened my skills in code reviews, agile sprints, and real-world product delivery.",
    accentColor: "text-zinc-200",
    borderColor: "border-zinc-800/60",
    glowColor: "from-zinc-900/20 to-neutral-900/20",
    barColor: "bg-zinc-700",
    dotColor: "bg-zinc-500",
    shadowColor: "shadow-zinc-500/5",
    tag: "{ era: 'team_player' }",
  },
];

export const Milestones = () => {
  return (
    <section
      id="milestones"
      className="w-full py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 flex items-center gap-4 text-white">
            <span className="text-zinc-500 font-mono text-xl">04.</span>
            My Journey
            <div className="h-px bg-zinc-800 flex-grow ml-4" />
          </h2>
          <p className="text-zinc-400 text-sm mb-20 max-w-xl">
            A timeline of defining moments — the milestones that shaped who I am
            as a developer.
          </p>
        </FadeInSection>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-850 md:-translate-x-1/2" />

          <div className="flex flex-col gap-20">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isEven = i % 2 === 0;

              return (
                <FadeInSection
                  key={m.year}
                  direction={isEven ? "right" : "left"}
                  delay={i * 60}
                >
                  <div
                    className={`relative flex items-center gap-8 md:gap-0 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Vertical Year label on mobile */}
                    <div className="absolute left-0 w-4 md:hidden flex flex-col items-center justify-center font-mono text-[11px] font-bold text-zinc-500/70 tracking-normal leading-[1.2] select-none top-1/2 -translate-y-1/2">
                      {Array.from(m.year).map((char, idx) => (
                        <span key={idx}>{char}</span>
                      ))}
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10 flex-shrink-0">
                      <div
                        className={`w-3.5 h-3.5 rounded-full ${m.dotColor} ring-[6px] ring-black shadow-lg ${m.shadowColor}`}
                      />
                    </div>

                    {/* Year label — opposite side from card */}
                    <div
                      className={`hidden md:flex w-1/2 ${
                        isEven ? "justify-end pr-16" : "justify-start pl-16"
                      } items-center`}
                    >
                      <span
                        className="font-mono text-5xl font-bold text-zinc-300 opacity-20 select-none"
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
                        <div
                          className={`relative glass-panel rounded-2xl p-7 md:p-8 border ${m.borderColor} overflow-hidden group`}
                        >
                          {/* Animated left accent bar */}
                          <div
                            className={`absolute top-0 left-0 w-1 h-full ${m.barColor} transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500`}
                          />

                          {/* Mac-style dots */}
                          <div className="flex gap-1.5 mb-5">
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                          </div>

                          {/* Year badge (mobile only) + icon */}
                          <div className="flex items-start justify-between mb-4">
                            <div
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/60 border ${m.borderColor} text-[10px] font-mono text-zinc-300`}
                            >
                              <Icon className="w-3.5 h-3.5 text-zinc-400" />
                              {m.year}
                            </div>
                            <span
                              className="font-mono text-[10px] text-zinc-500"
                            >
                              {m.tag}
                            </span>
                          </div>

                          {/* Headine */}
                          <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                            {m.headline}
                          </h3>

                          {/* Body */}
                          <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                            {m.body}
                          </p>

                          {/* Bottom divider */}
                          <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                            <span className="text-[10px] tracking-wider text-zinc-650 uppercase font-mono">
                              milestone_{String(i + 1).padStart(2, "0")}
                            </span>
                            <Icon
                              className="w-4 h-4 text-zinc-500 opacity-40 group-hover:opacity-80 transition-opacity"
                            />
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
