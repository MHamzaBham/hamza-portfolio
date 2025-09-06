import Image from "next/image";
import "@fontsource/poppins";
import Link from "next/link";
import { CiLocationArrow1 } from "react-icons/ci";

type ProjectProps = {
  project: {
    name: string;
    slug: string;
    description: string;
    image: string;
    techIcons: Array<React.ElementType>;
  };
};

export default function Project({ project }: ProjectProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group hover:shadow-sm flex flex-col md:flex-row gap-10 mb-10 lg:mb-5 justify-between shadow-white/5 md:px-10 px-6 py-5 transition-all duration-300 rounded-xl cursor-pointer border-l-2 lg:border-transparent hover:border-indigo-300 border-indigo-300 shadow-md">
        <div>
          <h2 className="mb-6 text-lg font-[poppins]">{project.name}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-md">
            {project.description}
          </p>
          <div className="flex gap-2">
            {project.techIcons.map((tech, index) => (
              <TechIcon key={index} Icon={tech} />
            ))}
          </div>

        </div>
        <Image
          src={project.image}
          alt={project.name}
          width={400}
          height={400}
          className="rounded-xl opacity-90"
        />
      </div>
    </Link>
  );
}


type TechIconProps = {
  Icon: React.ElementType;
};

export const TechIcon = ({ Icon }: TechIconProps) => {
  return (
    <div className="w-8 h-8 mt-5 shadow rounded-md bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-center flex items-center justify-center transition-colors duration-300">
      <Icon className="w-5 h-5" />
    </div>
  );
};