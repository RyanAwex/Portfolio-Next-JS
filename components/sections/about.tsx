import React from "react";
import { Layout, Server } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";

export const About = () => {
  return (
    <section id="about" className="w-full py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 flex items-center gap-4 text-white">
            <span className="text-zinc-500 font-mono text-xl">01.</span>
            About Me
            <div className="h-px bg-zinc-800 flex-grow ml-4" />
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection direction="right">
            <div className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden group">
              <p className="text-base text-zinc-300 leading-relaxed mb-8">
                Hello! I'm a passionate full-stack developer with a strong
                foundation in both front-end and back-end technologies. I love
                creating clean, efficient code and building intuitive user
                interfaces that deliver exceptional experiences.
              </p>
              <div className="space-y-6">
                <div className="p-5 rounded-xl bg-zinc-950/40 border border-zinc-900 hover:border-zinc-700 transition-colors duration-300">
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm">
                    <Layout className="w-4 h-4 text-zinc-400" /> Front-End
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Proficient in HTML, CSS, JavaScript, TypeScript, and
                    React.js, with expertise in Tailwind CSS for modern,
                    responsive designs.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-zinc-950/40 border border-zinc-900 hover:border-zinc-700 transition-colors duration-300">
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm">
                    <Server className="w-4 h-4 text-zinc-400" /> Back-End
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Experienced with Node.js, Express, PostgreSQL, and MongoDB
                    for building robust APIs and scalable server-side solutions.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="left" delay={200}>
            <div className="relative h-full flex items-center justify-center">
              <div className="w-full max-w-sm glass-panel rounded-2xl overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-zinc-950/40">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500">
                    developer.json
                  </span>
                </div>
                <div className="p-6 font-mono text-xs text-zinc-300 space-y-3 leading-relaxed">
                  <p>
                    <span className="text-zinc-500">1</span>{" "}
                    <span className="text-zinc-400">{"{"}</span>
                  </p>
                  <p>
                    <span className="text-zinc-500">2</span>{" "}
                    <span className="text-zinc-400">"name"</span>:{" "}
                    <span className="text-zinc-100">"Ryan Awex"</span>,
                  </p>
                  <p>
                    <span className="text-zinc-500">3</span>{" "}
                    <span className="text-zinc-400">"role"</span>:{" "}
                    <span className="text-zinc-100">
                      "Full-Stack Developer"
                    </span>
                    ,
                  </p>
                  <p>
                    <span className="text-zinc-500">4</span>{" "}
                    <span className="text-zinc-400">"experience"</span>:{" "}
                    <span className="text-zinc-100">3</span>,{" "}
                    <span className="text-zinc-500">// years</span>
                  </p>
                  <p>
                    <span className="text-zinc-500">5</span>{" "}
                    <span className="text-zinc-400">"focus"</span>:{" "}
                    <span className="text-zinc-400">[</span>
                    <span className="text-zinc-100">"Scalable APIs"</span>,{" "}
                    <span className="text-zinc-100">"Clean UI/UX"</span>
                    <span className="text-zinc-400">]</span>,
                  </p>
                  <p>
                    <span className="text-zinc-500">6</span>{" "}
                    <span className="text-zinc-400">"status"</span>:{" "}
                    <span className="text-zinc-100">
                      "open_for_opportunities"
                    </span>
                  </p>
                  <p>
                    <span className="text-zinc-500">7</span>{" "}
                    <span className="text-zinc-400">{"}"}</span>
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
