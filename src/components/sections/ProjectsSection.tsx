import type { Project } from "../../types/profile";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work from industry + university platforms."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card
            key={p.title}
            title={p.title}
            description={p.description}
            footer={
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            }
          />
        ))}
      </div>
    </Section>
  );
}
