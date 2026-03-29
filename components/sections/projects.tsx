import { Github, ExternalLink } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { TiltCard } from "@/components/ui/tilt-card";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const Projects = async () => {
  let projects = [];

  try {
    const response = await fetch(`${BASE_URL}/api/projects`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      console.error("Failed to fetch projects:", response.status);
      projects = [];
    } else {
      const data = await response.json();
      projects = data.projects || [];
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    projects = [];
  }

  return (
    <section id="projects" className="w-full py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-2xl">03.</span>
            Featured Deployments
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-grow ml-4" />
          </h2>
        </FadeInSection>

        <div className="space-y-24">
          {projects && projects.length > 0 ? (
            projects.map(
              (
                project: {
                  _id: string;
                  title: string;
                  description: string;
                  tech: string[];
                  links: {
                    github: string;
                    demo: string;
                  };
                  image: string;
                },
                index: number,
              ) => (
                <FadeInSection
                  key={project._id}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
                  >
                    <div className="w-full lg:w-3/5">
                      <TiltCard>
                        <div className="relative rounded-2xl overflow-hidden group">
                          <div className="absolute inset-0 bg-cyan-500/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                          />
                        </div>
                      </TiltCard>
                    </div>

                    <div
                      className={`w-full lg:w-2/5 flex flex-col ${index % 2 === 0 ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"} relative z-20`}
                    >
                      <span className="text-cyan-400 font-mono text-sm mb-2">
                        Featured Project
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-100 hover:text-cyan-400 transition-colors cursor-pointer">
                        {project.title}
                      </h3>
                      <div className="glass-panel p-6 rounded-xl mb-6 shadow-xl w-full lg:w-[120%] relative">
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                          {project.description}
                        </p>
                      </div>
                      <ul
                        className={`flex flex-wrap gap-4 font-mono text-xs text-slate-400 mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                      >
                        {project.tech.map((tag) => (
                          <li
                            key={tag}
                            className="bg-slate-900 px-3 py-1 rounded-full border border-slate-800"
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
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ),
            )
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">
                Projects are currently being loaded...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
