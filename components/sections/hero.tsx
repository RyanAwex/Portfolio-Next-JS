import { Terminal, Zap, Code, ChevronDown } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { TiltCard } from "@/components/ui/tilt-card";
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link
          href="#about"
          className="text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <FadeInSection direction="right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-cyan-500/30 text-cyan-400 text-sm mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              System Online
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              I Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-glow">
                Digital Realities.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-lg mt-6 leading-relaxed">
              Full-Stack Developer engineering scalable solutions and immersive
              web experiences with clean, efficient code.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="#projects"
                className="px-8 py-4 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300"
              >
                Deployed Projects
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 rounded-lg glass-panel font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Terminal className="w-5 h-5" /> Initialize Contact
              </Link>
            </div>
          </FadeInSection>
        </div>

        <div className="hidden lg:flex justify-center relative">
          <FadeInSection direction="left" delay={200}>
            <TiltCard className="w-96 h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-2xl blur-2xl animate-pulse" />
              <div className="w-full h-full glass-panel rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden border-t border-l border-white/20">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Code className="w-32 h-32 text-cyan-400" />
                </div>
                <div>
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="font-mono text-sm text-cyan-300 space-y-2">
                    <p>{`> const developer = {`}</p>
                    <p className="pl-4">{`role: 'Full-Stack',`}</p>
                    <p className="pl-4">{`status: 'Ready',`}</p>
                    <p className="pl-4">{`passion: true`}</p>
                    <p>{`};`}</p>
                    <p className="mt-4 text-violet-400">{`> developer.start();`}</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs tracking-widest text-slate-500 uppercase">
                    System Status: Optimal
                  </span>
                  <Zap className="text-cyan-400 w-5 h-5" />
                </div>
              </div>
            </TiltCard>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
