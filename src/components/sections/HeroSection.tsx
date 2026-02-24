import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

type HeroSectionProps = {
  headline: string;
  location: string;
  summary: string;
  highlights: string[];
  links: {
    email: string;
    linkedin: string;
    github: string;
  };
};

export function HeroSection({
  headline,
  location,
  summary,
  highlights,
  links,
}: HeroSectionProps) {
  return (
    <section className="py-14">
      <p className="text-sm font-medium text-white/70">
        {headline} • {location}
      </p>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
        Building scalable web systems with{" "}
        <span className="text-indigo-300">React</span>,{" "}
        <span className="text-indigo-300">TypeScript</span> &{" "}
        <span className="text-indigo-300">cloud-native tools</span>.
      </h1>

      <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">{summary}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="#projects" variant="primary">
          View Projects
        </Button>
        <Button href="#contact">Contact</Button>
        <Button href={links.linkedin} external>
          LinkedIn
        </Button>
        <Button href={links.github} external>
          GitHub
        </Button>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {highlights.slice(0, 8).map((x) => (
          <Badge key={x}>{x}</Badge>
        ))}
      </div>

      {/* subtle glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[120px] h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
    </section>
  );
}
