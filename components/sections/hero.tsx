"use client";
import React, { useState } from "react";
import {
  Terminal,
  Zap,
  Code,
  ChevronDown,
  Sparkles,
  Play,
  CheckCircle2,
} from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { TiltCard } from "@/components/ui/tilt-card";
import Link from "next/link";

type TabId = "dev" | "term" | "specs";

export const Hero = () => {
  const [activeTab, setActiveTab] = useState<TabId>("dev");
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "$ pnpm run dev",
    "✓ compiled client and server successfully",
    "✓ assets loaded from cache",
    "Ready on http://localhost:3000",
  ]);
  const [installingStatus, setInstallingStatus] = useState<
    "idle" | "running" | "completed"
  >("idle");

  const runNpxCommand = () => {
    if (installingStatus === "running") return;

    // Switch to terminal tab
    setActiveTab("term");
    setInstallingStatus("running");

    const lines = [
      "$ npx ryan-awex",
      "⠋ Resolving package 'ryan-awex'...",
      "✔ Found ryan-awex@1.2.6 (cached)",
      "⠙ Initializing interactive profile...",
      "✔ Name: Ryan Awex",
      "✔ Role: Full-Stack & Software Engineer",
      "✔ Stack: Next.js, React, Node.js, TS",
      "✔ Status: Available for freelance",
      "✨ AI Copilot active at bottom-right!",
    ];

    setTerminalLines([]);

    lines.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines((prev) => [...prev, line]);
        if (index === lines.length - 1) {
          setInstallingStatus("completed");
        }
      }, index * 400);
    });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:py-0"
    >
      {/* Ambient background light orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-zinc-800/10 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-zinc-900/20 blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 hidden lg:block">
        <Link
          href="#about"
          className="text-zinc-500 hover:text-white transition-colors duration-200"
        >
          <ChevronDown className="w-6 h-6" />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* Left Info Column */}
        <div className="space-y-6 text-left flex flex-col justify-center">
          <FadeInSection direction="right">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/60 border border-zinc-900 text-zinc-300 text-xs mb-4 font-mono w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
              </span>
              System Online
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-white">
              I Engineer <br />
              <span className="bg-gradient-to-r from-zinc-200 via-white to-zinc-550 bg-clip-text text-transparent font-medium">
                Digital Realities.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-zinc-450 max-w-lg mt-4 leading-relaxed font-normal">
              Full-Stack Developer engineering scalable solutions and immersive
              web experiences with clean, efficient code.
            </p>

            {/* Interactive Terminal Trigger Bar */}
            <div className="mt-8 p-3 rounded-2xl bg-zinc-950/60 border border-white/5 flex items-center justify-between gap-4 max-w-md shadow-inner backdrop-blur-md">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 pl-2">
                <span className="text-zinc-500 font-bold">$</span>
                <span className="text-zinc-300">npx ryan-awex</span>
              </div>
              <button
                onClick={runNpxCommand}
                disabled={installingStatus === "running"}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  installingStatus === "running"
                    ? "bg-zinc-800/50 text-zinc-500 border border-zinc-700/55 pointer-events-none"
                    : installingStatus === "completed"
                      ? "bg-emerald-950/50 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900/40"
                      : "bg-white text-black hover:bg-zinc-200 border border-white shadow-lg shadow-white/5"
                }`}
              >
                {installingStatus === "running" ? (
                  <>
                    <span className="w-3 h-3 rounded-full border-2 border-zinc-600 border-t-zinc-400 animate-spin" />
                    Running
                  </>
                ) : installingStatus === "completed" ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Success
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-black text-black" />
                    Run
                  </>
                )}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="#projects"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-all duration-200 shadow-md backdrop-blur-sm"
              >
                Deployed Projects
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full glass-panel text-white font-medium text-sm hover:bg-white/10 transition-all duration-200 flex items-center gap-2 border border-white/10"
              >
                <Terminal className="w-4 h-4 text-zinc-400" /> Initialize
                Contact
              </Link>
            </div>
          </FadeInSection>
        </div>

        {/* Right Interactive Card Column */}
        <div className="w-full flex justify-center relative">
          <FadeInSection direction="left" delay={200}>
            <TiltCard className="w-[340px] sm:w-[420px] h-[320px] sm:h-[360px]">
              {/* Soft blur highlight backing */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/10 to-zinc-950/20 rounded-2xl blur-xl" />

              <div className="w-full h-full glass-panel rounded-2xl flex flex-col justify-between relative overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                {/* Header & Tabs */}
                <div>
                  {/* Top Bar with controls */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-zinc-950/40">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    </div>

                    {/* Interactive Tab Controls */}
                    <div className="flex gap-1.5 sm:gap-2">
                      <button
                        onClick={() => setActiveTab("dev")}
                        className={`text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded transition-all duration-200 ${
                          activeTab === "dev"
                            ? "bg-white/10 text-white border border-white/10"
                            : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        developer.ts
                      </button>
                      <button
                        onClick={() => setActiveTab("term")}
                        className={`text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded transition-all duration-200 ${
                          activeTab === "term"
                            ? "bg-white/10 text-white border border-white/10"
                            : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        terminal.sh
                      </button>
                      <button
                        onClick={() => setActiveTab("specs")}
                        className={`text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded transition-all duration-200 ${
                          activeTab === "specs"
                            ? "bg-white/10 text-white border border-white/10"
                            : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        specs.json
                      </button>
                    </div>
                  </div>

                  {/* Tab Contents */}
                  <div className="p-5 sm:p-6 font-mono text-[10px] sm:text-xs text-zinc-350 space-y-1 sm:space-y-2 leading-relaxed max-h-[200px] sm:max-h-[240px] overflow-y-auto no-scrollbar">
                    {activeTab === "dev" && (
                      <>
                        <p className="text-zinc-500">
                          // Object structure representing skills
                        </p>
                        <p>
                          <span className="text-zinc-400">const</span>{" "}
                          <span className="text-white">developer</span> ={" "}
                          <span className="text-white">{"{"}</span>
                        </p>
                        <p className="pl-4">
                          <span className="text-zinc-400">role</span>:{" "}
                          <span className="text-zinc-200">'Full-Stack'</span>,
                        </p>
                        <p className="pl-4">
                          <span className="text-zinc-400">status</span>:{" "}
                          <span className="text-zinc-200">'Open'</span>,
                        </p>
                        <p className="pl-4">
                          <span className="text-zinc-400">passion</span>:{" "}
                          <span className="text-zinc-200">true</span>
                        </p>
                        <p>
                          <span className="text-white">{"}"}</span>;
                        </p>
                        <p className="text-zinc-500 mt-4">// Methods loaded</p>
                        <p className="text-zinc-300">
                          <span className="text-white">developer</span>.start();
                        </p>
                      </>
                    )}

                    {activeTab === "term" && (
                      <div className="space-y-1 font-mono text-[10px] sm:text-xs text-zinc-300">
                        {terminalLines.map((line, idx) => {
                          const isCommand = line.startsWith("$");
                          const isSuccess =
                            line.startsWith("✔") || line.startsWith("✨");
                          return (
                            <p
                              key={idx}
                              className={
                                isCommand
                                  ? "text-zinc-400 font-semibold"
                                  : isSuccess
                                    ? "text-emerald-400"
                                    : "text-zinc-300"
                              }
                            >
                              {line}
                            </p>
                          );
                        })}
                        {installingStatus === "running" && (
                          <span className="inline-block w-1.5 h-3.5 bg-zinc-400 animate-pulse ml-0.5" />
                        )}
                      </div>
                    )}

                    {activeTab === "specs" && (
                      <>
                        <p className="text-zinc-500">{"{"}</p>
                        <p className="pl-4">
                          <span className="text-zinc-400">"theme"</span>:{" "}
                          <span className="text-zinc-200">
                            "Glassmorphism 2.0"
                          </span>
                          ,
                        </p>
                        <p className="pl-4">
                          <span className="text-zinc-400">"ide"</span>:{" "}
                          <span className="text-zinc-200">"Antigravity"</span>,
                        </p>
                        <p className="pl-4">
                          <span className="text-zinc-400">"environment"</span>:{" "}
                          <span className="text-zinc-200">"NextJS 16"</span>,
                        </p>
                        <p className="pl-4">
                          <span className="text-zinc-400">"selection"</span>:{" "}
                          <span className="text-zinc-200">"ChatGPT Dark"</span>
                        </p>
                        <p className="text-zinc-500">{"}"}</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Footer status line inside card */}
                <div className="p-4 border-t border-white/5 flex justify-between items-center bg-zinc-950/20">
                  <span className="text-[10px] tracking-wider text-zinc-500 uppercase font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-zinc-400 animate-pulse" />
                    Status: Optimal
                  </span>
                  <Code className="text-zinc-400 w-4 h-4" />
                </div>
              </div>
            </TiltCard>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
