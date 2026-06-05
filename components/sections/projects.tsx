import { Github, ExternalLink, Sparkles } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { TiltCard } from "@/components/ui/tilt-card";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

interface ProjectItem {
  _id: string;
  title: string;
  description: string;
  tech: string[];
  links: {
    github: string;
    demo: string;
  };
  image: string;
}

const FALLBACK_PROJECTS: ProjectItem[] = [
  {
    _id: "1",
    title: "AI Copilot Dashboard",
    description: "An intelligent workspace dashboard featuring real-time stream aggregation, interactive prompts, and a clean glassmorphic design system that adjusts based on context.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Zustand"],
    links: {
      github: "https://github.com/RyanAwex",
      demo: "https://github.com/RyanAwex",
    },
    image: "/next.svg",
  },
  {
    _id: "2",
    title: "SaaS Analytics Engine",
    description: "A high-performance metrics tracker designed to capture page visits and actions with sub-second latency, visualizing them through fluid, interactive dashboard panels.",
    tech: ["React.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    links: {
      github: "https://github.com/RyanAwex",
      demo: "https://github.com/RyanAwex",
    },
    image: "/next.svg",
  },
];

export const Projects = async () => {
  let projects: ProjectItem[] = [];

  try {
    const response = await fetch(`${BASE_URL}/api/projects`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
      signal: AbortSignal.timeout(3000), // Timeout after 3 seconds
    });

    if (!response.ok) {
      console.warn("Failed to fetch projects from API, using default projects.");
      projects = FALLBACK_PROJECTS;
    } else {
      const data = await response.json();
      projects = data.projects && data.projects.length > 0 ? data.projects : FALLBACK_PROJECTS;
    }
  } catch (error) {
    console.warn("Error fetching projects, using default projects:", error);
    projects = FALLBACK_PROJECTS;
  }

  return (
    <section id="projects" className="w-full py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 flex items-center gap-4 text-white">
            <span className="text-zinc-500 font-mono text-xl">03.</span>
            Featured Deployments
            <div className="h-px bg-zinc-800 flex-grow ml-4" />
          </h2>
        </FadeInSection>

        <div className="space-y-24">
          {projects.map((project: ProjectItem, index: number) => (
            <FadeInSection
              key={project._id}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}
              >
                {/* Image Block */}
                <div className="w-full lg:w-3/5">
                  <TiltCard>
                    <div className="relative rounded-2xl overflow-hidden group border border-white/5 shadow-2xl bg-zinc-950">
                      {/* Dark overlay fading on hover */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                      
                      {/* Using fallback or project image */}
                      <div className="relative h-64 md:h-80 w-full flex items-center justify-center p-8">
                        {project.image.includes("next.svg") ? (
                          <div className="flex flex-col items-center gap-4 select-none opacity-40 group-hover:opacity-60 transition-opacity">
                            <Sparkles className="w-12 h-12 text-zinc-400" />
                            <span className="font-mono text-xs text-zinc-500">Workspace Application</span>
                          </div>
                        ) : (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-all duration-500"
                          />
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </div>

                {/* Text Block */}
                <div
                  className={`w-full lg:w-2/5 flex flex-col ${index % 2 === 0 ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"} relative z-20`}
                >
                  <span className="text-zinc-500 font-mono text-xs mb-2">
                    Featured Project
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white transition-colors duration-200">
                    {project.title}
                  </h3>

                  <div className="glass-panel p-6 rounded-xl mb-6 shadow-[0_12px_30px_rgba(0,0,0,0.5)] w-full lg:w-[115%] relative border border-white/5">
                    <p className="text-zinc-300 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  <ul
                    className={`flex flex-wrap gap-2.5 font-mono text-[10px] text-zinc-400 mb-6 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  >
                    {project.tech.map((tag) => (
                      <li
                        key={tag}
                        className="bg-zinc-950/60 px-2.5 py-0.5 rounded-full border border-zinc-900 text-zinc-400"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors duration-200 p-2 hover:bg-zinc-900/50 rounded-full"
                      title="Github Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors duration-200 p-2 hover:bg-zinc-900/50 rounded-full"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};
