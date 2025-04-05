import Experience from "./Experience";

import { ArrowBigDown, ArrowDown } from "lucide-react";

const experiences = [
  {
    name: "Spectriv",
    role: "Software Engineer Intern",
    description:
      "Built full-stack apps with Django, DRF, React.js, and Next.js for seamless APIs and performance.",
    icon: ArrowBigDown,
  },
  {
    name: "Ibexoft technologies",
    role: "IT Apprentice",
    description:
      "Developed full-stack apps with Laravel and React.js, ensuring seamless integration and high performance in Agile teams.",
    icon: ArrowBigDown,
  },
  {
    name: "Intrazix",
    role: "Web Developer",
    description:
      "Built intuitive UIs with HTML, CSS, JavaScript, and developed secure back-ends with Node.js, Express.js, and MongoDB.",
    icon: ArrowBigDown,
  },
];

export default function List() {
  return (
    <div className="mx-auto max-w-2xl md:max-w-4xl md:mt-40 mt-20">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:max-w-none md:grid-cols-2 lg:gap-y-16">
        {experiences.map((experience, index) => (
          <Experience key={experience.name} experience={experience} experienceLength={experiences.length} index={index} />
        ))}
      </dl>
    </div>
  );
}
