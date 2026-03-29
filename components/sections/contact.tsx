"use client";
import { Zap } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-32 px-6 relative bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection direction="up">
          <span className="text-cyan-400 font-mono text-lg mb-4 block">
            04. What's Next?
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>

          <div className="glass-panel p-8 md:p-12 rounded-2xl max-w-2xl mx-auto text-left relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-violet-500/20 blur-3xl rounded-full" />

            <form
              className="relative z-10 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-slate-400">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-slate-400">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-slate-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  placeholder="Initiate handshake..."
                ></textarea>
              </div>
              <button className="w-full py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 flex justify-center items-center gap-2 group">
                Send Message
                <Zap className="w-4 h-4 group-hover:scale-125 transition-transform" />
              </button>
            </form>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};
