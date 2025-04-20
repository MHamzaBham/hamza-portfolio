import { ArrowBigDown } from "lucide-react";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { FaNodeJs, FaSquareJs } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const projects = [
  {
    name: "Quiks",
    description: "A web application designed for reading and listening to shortbooks, perfect for those who enjoy learning on the go. It features a personalized dashboard, intuitive navigation, and a clean, engaging interface that makes discovering and consuming content quick and enjoyable.",
    image: `${process.env.NODE_ENV === 'production' ? '/hamza-portfolio' : ''}/assets/quiks.png`,
    techIcons: [SiMysql, FaReact, FaNodeJs, RiTailwindCssFill]
  },
  {
    name: "Spendara",
    description: "An expense management application built for both individuals and enterprises to keep track of their finances effortlessly. It offers detailed reports, spending insights, and organized data to help users understand their financial habits and make informed decisions for a better financial future.",
    image: `${process.env.NODE_ENV === 'production' ? '/hamza-portfolio' : ''}/assets/spendara.jpg`,
    techIcons: [FaHtml5, FaCss3Alt, FaSquareJs, FaBootstrap]
  },
  {
    name: "Ibexoft",
    description: "A company website created to highlight services, showcase completed projects, and reflect the brand’s identity with a clean and modern design. Built with a focus on user experience, it helps the software company establish a strong online presence, attract potential clients, and expand its reach in a competitive market.",
    image: `${process.env.NODE_ENV === 'production' ? '/hamza-portfolio' : ''}/assets/ibexoft.webp`,
    techIcons: [FaHtml5, FaCss3Alt, FaSquareJs, FaBootstrap]
  },
  {
    name: "eClerx Digital",
    description: "A landing page for a company that specializes in digital transformation and data analytics. The page is designed to be visually appealing, user-friendly, and informative, showcasing the company's services and expertise in the digital space.",
    image: `${process.env.NODE_ENV === 'production' ? '/hamza-portfolio' : ''}/assets/eclerx.jpg`,
    techIcons: [RiNextjsFill, RiTailwindCssFill, FaSquareJs]
  }
];

export const experiences = [
  {
    name: "Spectriv",
    role: "Software Engineer Intern",
    description:
      "Built full-stack apps with Django, DRF, React.js, and Next.js for seamless APIs and performance.",
    icon: ArrowBigDown,
    logo: `${process.env.NODE_ENV === 'production' ? '/hamza-portfolio' : ''}/assets/spectriv.png`
  },
  {
    name: "Ibexoft technologies",
    role: "IT Apprentice",
    description:
      "Developed full-stack apps with Laravel and React.js, ensuring seamless integration and high performance in Agile teams.",
    icon: ArrowBigDown,
    logo: `${process.env.NODE_ENV === 'production' ? '/hamza-portfolio' : ''}/assets/ibexoft_logo.png`
  },
  {
    name: "Intrazix",
    role: "Web Developer",
    description:
      "Built intuitive UIs with HTML, CSS, JavaScript, and developed secure back-ends with Node.js, Express.js, and MongoDB.",
    icon: ArrowBigDown,
    logo: `${process.env.NODE_ENV === 'production' ? '/hamza-portfolio' : ''}/assets/intrazix_logo.png`
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
