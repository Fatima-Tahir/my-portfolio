export type Project = {
    title: string;
    description: string;
    tags: string[];
  };
  
  export type Experience = {
    period: string;
    company: string;
    role: string;
    summary: string;
  };
  
  export type Profile = {
    name: string;
    headline: string;
    location: string;
    summary: string;
    links: {
      email: string;
      linkedin: string;
      github: string;
    };
    highlights: string[];
    skills: string[];
    projects: Project[];
    experience: Experience[];
  };
  