import type { Profile } from "../types/profile";

export const profile: Profile = {
  name: "Fatima Tahir",
  headline: "Full Stack Software Engineer",
  location: "Espoo, Finland",
  summary:
    "Master’s student in Computer Science at Aalto University (Big Data & Large Scale Computing). Experienced in building production-grade web applications, service-oriented systems, OAuth2 authentication, and strong testing practices.",
  links: {
    email: "fatimatahir353@gmail.com",
    linkedin: "https://www.linkedin.com/in/fatima-tahir-20982617b/",
    github: "https://github.com/Fatima-Tahir",
  },
  highlights: [
    "Built and maintained 6+ production web applications using React, TypeScript, and backend services in Python / Ruby on Rails with PostgreSQL.",
    "Led migration from monolithic architecture to service-oriented systems, improving performance and scalability.",
    "Implemented OAuth 2.0 authentication and strengthened testing culture with Jest, React Testing Library, and RSpec.",
  ],
  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "Ruby on Rails (5–7)",
    "Python",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "MySQL",
    "DynamoDB",
    "AWS",
    "Docker",
    "TDD",
    "Jest",
    "React Testing Library",
    "CI/CD",
  ],
  projects: [
    {
      title: "Microservices Frontend",
      description:
        "Frontend features for a microservices-based system with secure OAuth 2.0 flows. Added unit + component tests using Jest and React Testing Library.",
      tags: ["React", "TypeScript", "OAuth2", "Testing"],
    },
    {
      title: "Marketplace",
      description:
        "Backend APIs + Zoom integration via custom wrapper. OAuth auth, PostgreSQL sessions, AWS secrets management.",
      tags: ["APIs", "PostgreSQL", "AWS", "OAuth"],
    },
    {
      title: "A+ Aalto / Rubyric",
      description:
        "Open-source learning platforms at Aalto University: feature development, debugging, and system integrations.",
      tags: ["Open Source", "Integrations", "Web Systems"],
    },
    {
      title: "Moodle-based E-learning System",
      description:
        "Legacy Moodle-based system: worked across frontend + backend, fixed bugs, improved features.",
      tags: ["Legacy", "Moodle", "Full Stack"],
    },
    {
      title: "Marketing Website",
      description:
        "Developed responsive UI screens and integrated REST + GraphQL APIs.",
      tags: ["Responsive UI", "REST", "GraphQL"],
    },
  ],
  experience: [
    {
      period: "Oct 2024 – Aug 2025",
      company: "Aalto University",
      role: "Research Assistant",
      summary:
        "Worked on A+ LMS and Rubyric: feature development, debugging, and open-source system integrations.",
    },
    {
      period: "Jul 2021 – May 2024",
      company: "Devsinc",
      role: "Software Engineer",
      summary:
        "Built and maintained 6+ production apps using React + TypeScript; backend services in Python / Ruby on Rails with PostgreSQL. Led migration from monolith to service-oriented architecture and contributed to sprint planning and technical decisions.",
    },
    {
      period: "Jan 2021 – Dec 2022",
      company: "Microsoft",
      role: "Microsoft Learn Student Ambassador",
      summary:
        "Founded a Women-in-Tech community, organized technical events, and supported students with skill development and career readiness.",
    },
  ],
};
