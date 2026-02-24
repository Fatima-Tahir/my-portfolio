import { profile } from "./data/profile";
import { Navbar } from "./components/layout/Navbar";
import { Container } from "./components/layout/Container";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ContactSection } from "./components/sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar name={profile.name} />
      <Container>
        <HeroSection
          headline={profile.headline}
          location={profile.location}
          summary={profile.summary}
          highlights={["React", "TypeScript", "Rails", "Python", "PostgreSQL", "AWS", "Docker", "TDD"]}
          links={profile.links}
        />
        <AboutSection skills={profile.skills} />
        <ProjectsSection projects={profile.projects} />
        <ExperienceSection experience={profile.experience} />
        <ContactSection
          email={profile.links.email}
          linkedin={profile.links.linkedin}
          github={profile.links.github}
        />
        <Footer name={profile.name} />
      </Container>
    </div>
  );
}
