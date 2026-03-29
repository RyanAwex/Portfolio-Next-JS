import { FadeInSection } from "@/components/ui/fade-in-section";
import { TiltCard } from "@/components/ui/tilt-card";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const Skills = async () => {
  let skills = [];

  try {
    const response = await fetch(`${BASE_URL}/api/skills`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      console.error("Failed to fetch skills:", response.status);
      skills = [];
    } else {
      const data = await response.json();
      skills = data.skills || [];
    }
  } catch (error) {
    console.error("Error fetching skills:", error);
    skills = [];
  }

  return (
    <section
      id="skills"
      className="w-full py-32 px-6 relative bg-slate-900/30 border-y border-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-2xl">02.</span>
            Tech Arsenal
            <div className="h-px bg-gradient-to-r from-violet-500/50 to-transparent flex-grow ml-4" />
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills && skills.length > 0 ? (
            skills.map(
              (skill: { name: string; icon: string }, index: number) => (
                <FadeInSection
                  key={skill.name}
                  delay={index * 50}
                  direction="up"
                >
                  <TiltCard>
                    <div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-4 group hover:bg-slate-800/50 transition-colors border border-transparent hover:border-cyan-500/30 h-32">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={32}
                        height={32}
                      />
                      <span className="font-medium text-sm text-center text-slate-300 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  </TiltCard>
                </FadeInSection>
              ),
            )
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-400 text-lg">
                Skills are currently being loaded...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
