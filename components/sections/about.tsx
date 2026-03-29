import React from "react";
import { Layout, Server, Terminal } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";

export const About = () => {
  return (
    <section id="about" className="w-full py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-2xl">01.</span>
            About Me
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-grow ml-4" />
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection direction="right">
            <div className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Hello! I'm a passionate full-stack developer with a strong foundation in both
                front-end and back-end technologies. I love creating clean, efficient code and
                building intuitive user interfaces that deliver exceptional experiences.
              </p>
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <h3 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                    <Layout className="w-5 h-5" /> Front-End
                  </h3>
                  <p className="text-sm text-slate-400">
                    Proficient in HTML, CSS, JavaScript, TypeScript, and React.js, with expertise in
                    Tailwind CSS for modern, responsive designs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/30 transition-colors">
                  <h3 className="text-violet-400 font-bold mb-2 flex items-center gap-2">
                    <Server className="w-5 h-5" /> Back-End
                  </h3>
                  <p className="text-sm text-slate-400">
                    Experienced with Node.js, Express, PostgreSQL, and MongoDB for building robust
                    APIs and scalable server-side solutions.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="left" delay={200}>
            <div className="relative h-full min-h-[400px] flex items-center justify-center">
              <div className="relative w-64 h-64 animate-float">
                <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border-2 border-violet-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-8 border-2 border-blue-400/30 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                    <Terminal className="w-10 h-10 text-slate-950 -rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
