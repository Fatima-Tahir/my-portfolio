import type { Experience } from "../../types/profile";
import { Section } from "../ui/Section";

export function ExperienceSection({ experience }: { experience: Experience[] }) {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-4">
        {experience.map((e) => (
          <div key={`${e.company}-${e.period}`} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs text-white/60">{e.period}</div>
            <div className="mt-1 text-base font-semibold text-white">
              {e.company} — {e.role}
            </div>
            <p className="mt-2 text-sm leading-7 text-white/75">{e.summary}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
