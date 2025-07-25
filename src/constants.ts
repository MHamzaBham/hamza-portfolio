  import { ArrowBigDown } from "lucide-react";
import { projects } from "./constants/projects";

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const experiences = [
  {
    name: "Spectriv",
    role: "Jr. Software Engineer",
    description:
      "Built full-stack apps with Django, DRF, React.js, and Next.js for seamless APIs and performance.",
    icon: ArrowBigDown,
    logo: "/assets/spectriv.png",
    tenure: "MAR 2022 - OCT 2022"
  },
  {
    name: "Ibexoft technologies",
    role: "IT Apprentice",
    description:
      "Developed full-stack apps with Laravel and React.js, ensuring seamless integration and high performance in Agile teams.",
    icon: ArrowBigDown,
    logo: "/assets/ibexoft_logo.png",
    tenure: "MAR 2022 - OCT 2022"
  },
  {
    name: "Intrazix",
    role: "Web Developer",
    description:
      "Built intuitive UIs with HTML, CSS, JavaScript, and developed secure back-ends with Node.js, Express.js, and MongoDB.",
    icon: ArrowBigDown,
    logo: "/assets/intrazix_logo.png",
    tenure: "MAR 2022 - OCT 2022"
  },
];

export const SKILLS = [
  "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Express.js", "Django",
  "DRF", "MongoDB", "PostgreSQL", "MySQL", "Tailwind CSS", "Bootstrap",
  "HTML", "CSS", "Git", "GitHub", "Figma", "Agile",
  "Scrum", "REST APIs", "GraphQL", "WebSockets", "Socket.io",
  "Redux", "Context API", "Postman",]

export const CONTACTINFO = [
  {
    "email": "alihamzabham@gmail.com",
    "whatsapp": "+923281177401",
    "linkedin": "https://www.linkedin.com/in/hamzabham/"
  }
]

export const TRAINING_DATA = `
I specialize in building fast, dynamic, and scalable web applications using modern technologies like React, Node.js, Django and SQL. Lately, I’ve been diving into AI integrations to create smarter, more efficient solutions. Always eager to learn and innovate , I’m ready to bring ideas to life with clean, high-performance code.

Here are your projects:
${projects
  .map((project) => `${project.name} - ${project.description}`)
  .join("\n")}

Here is your working experience:
${experiences
  .map((experience) => `${experience.name} - ${experience.role} - ${experience.description}`)
  .join("\n")}

Here is an overview of your skills:
${SKILLS.map((skill) => `- ${skill}`).join("\n")}

Here are your contact info:
${CONTACTINFO.map((contact) => `- ${contact.email} - ${contact.whatsapp} - ${contact.linkedin}`).join("\n")}
`;
