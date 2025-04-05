import Image from "next/image";
import "@fontsource/poppins";
import { CiLocationArrow1 } from "react-icons/ci";

type ProjectProps = {
  project: {
    name: string;
    description: string;
    image: string;
  };
};

export default function Project({ project }: ProjectProps) {
  return (
    <>
      <div className="group hover:shadow-sm flex flex-col md:flex-row gap-10 mb-10 lg:mb-5 justify-between shadow-white/5 px-10 py-5 transition-all duration-300 rounded-xl cursor-pointer border-l-2 lg:border-transparent hover:border-indigo-300 border-indigo-300 shadow-md">
        <div>
          <h2 className="mb-6 text-lg font-[poppins]">{project.name}</h2>
          <p className="text-gray-400 text-md">
            {project.description}
          </p>
          <a href="#">
            <button
              type="button"
              className="group-hover:bg-gray-700 group-hover:text-white  group-hover:shadow-lg  group-hover:translate-y-[-2px]  group-hover:transition-all group-hover:duration-300 mt-5 rounded-4xl cursor-pointer py-2.5 px-5 me-2 text-xs font-medium focus:outline-none border focus:z-10 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 flex items-center gap-2 transition-all duration-300"
            >
              See Details
              <CiLocationArrow1 className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </a>
        </div>
        <Image
          src={`${process.env.NODE_ENV === 'production' ? '/hamza-portfolio' : ''}${project.image}`}
          alt={project.name}
          width={400}
          height={400}
          className="rounded-xl opacity-80"
        />
      </div>
    </>
  );
}
