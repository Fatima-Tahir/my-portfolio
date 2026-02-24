import { Section } from "../ui/Section";

export function AboutSection({ skills }: { skills: string[] }) {
  return (
    <Section
      id="about"
      title="About"
      subtitle="A quick overview of what I work with and enjoy building."
    >
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
          >
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}
