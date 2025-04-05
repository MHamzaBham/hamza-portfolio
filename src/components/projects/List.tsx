import Project from "./Project";

export default function List() {
  return (
    <div className="my-20 grid grid-cols-1 gap-0">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}

const projects = [
  {
    name: "Ibexoft",
    description: `A professional and fully optimized WordPress website for a software
            company, ensuring top-notch performance, responsiveness, and a
            seamless user experience. The website was built with best practices
            in mind, focusing on speed, SEO, and a modern design that adapts
            beautifully to all devices.`,
    image: "/assets/ibexoft.webp",
  },
  {
    name: "Ibexoft",
    description: `A professional and fully optimized WordPress website for a software
            company, ensuring top-notch performance, responsiveness, and a
            seamless user experience. The website was built with best practices
            in mind, focusing on speed, SEO, and a modern design that adapts
            beautifully to all devices.`,
    image: "/assets/ibexoft.webp",
  },
];
