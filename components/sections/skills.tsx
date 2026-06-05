import { FadeInSection } from "@/components/ui/fade-in-section";
import { TiltCard } from "@/components/ui/tilt-card";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

interface SkillItem {
  name: string;
  icon: string;
}

const FALLBACK_SKILLS: SkillItem[] = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/ffffff" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/ffffff" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/ffffff" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/ffffff" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/ffffff" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/ffffff" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/ffffff" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/ffffff" },
];

export const Skills = async () => {
  let skills: SkillItem[] = [];

  try {
    const response = await fetch(`${BASE_URL}/api/skills`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
      signal: AbortSignal.timeout(3000), // Timeout after 3 seconds
    });

    if (!response.ok) {
      console.warn("Failed to fetch skills from API, using default tech stack.");
      skills = FALLBACK_SKILLS;
    } else {
      const data = await response.json();
      skills = data.skills && data.skills.length > 0 ? data.skills : FALLBACK_SKILLS;
    }
  } catch (error) {
    console.warn("Error fetching skills, using default tech stack:", error);
    skills = FALLBACK_SKILLS;
  }

  return (
    <section
      id="skills"
      className="w-full py-32 px-6 relative border-y border-zinc-900 bg-zinc-950/20"
    >
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 flex items-center gap-4 text-white">
            <span className="text-zinc-500 font-mono text-xl">02.</span>
            Tech Arsenal
            <div className="h-px bg-zinc-800 flex-grow ml-4" />
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill: SkillItem, index: number) => (
            <FadeInSection
              key={skill.name}
              delay={index * 40}
              direction="up"
            >
              <TiltCard>
                <div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-4 group h-32 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-300">
                  {skill.icon && (
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  )}
                  <span className="font-semibold text-sm text-center text-zinc-300 group-hover:text-white transition-colors duration-200">
                    {skill.name}
                  </span>
                </div>
              </TiltCard>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};
