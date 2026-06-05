import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Milestones } from "@/components/sections/milestones";
import { Contact } from "@/components/sections/contact";
import { BackgroundVFX } from "@/components/vfx/background-vfx";
import { Suspense } from "react";

const SkillsLoading = () => (
  <section className="py-24 bg-slate-800/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="h-8 w-48 bg-slate-700 rounded animate-pulse mx-auto mb-4"></div>
        <div className="h-4 w-96 bg-slate-700 rounded animate-pulse mx-auto"></div>
      </div>
    </div>
  </section>
);

const ProjectsLoading = () => (
  <section className="py-24 bg-slate-800/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="h-8 w-56 bg-slate-700 rounded animate-pulse mx-auto mb-4"></div>
        <div className="h-4 w-96 bg-slate-700 rounded animate-pulse mx-auto"></div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans overflow-x-hidden selection:bg-zinc-800 selection:text-white">
      <BackgroundVFX />
      <Navbar />

      <main className="relative z-10 flex flex-col items-center">
        <Hero />

        <About />
        <Milestones />
        <Suspense fallback={<SkillsLoading />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<ProjectsLoading />}>
          <Projects />
        </Suspense>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
