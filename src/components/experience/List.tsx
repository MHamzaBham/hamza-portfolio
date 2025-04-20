import { experiences } from "@/constants";
import Experience from "./Experience";

import { ArrowBigDown, ArrowDown } from "lucide-react";

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
