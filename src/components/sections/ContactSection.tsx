import { Button } from "../ui/Button";
import { Section } from "../ui/Section";

type ContactSectionProps = {
  email: string;
  linkedin: string;
  github: string;
};

export function ContactSection({ email, linkedin, github }: ContactSectionProps) {
  return (
    <Section id="contact" title="Contact">
      <p className="text-sm leading-7 text-white/75">
        Open to internships, research collaborations, and full-stack opportunities.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <Button href={`mailto:${email}`} variant="primary">
          Email
        </Button>
        <Button href={linkedin} external>
          LinkedIn
        </Button>
        <Button href={github} external>
          GitHub
        </Button>
      </div>
    </Section>
  );
}
