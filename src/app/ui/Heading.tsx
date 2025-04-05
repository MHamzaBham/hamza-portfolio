import "@fontsource/poppins";
import { CiLocationArrow1 } from "react-icons/ci";

interface HeadingProps {
  section: string;
  title: string;
  button?: string;
  link?: string;
}

export default function Heading({
  section,
  title,
  button,
  link,
}: HeadingProps) {
  return (
    <div className="font-[poppins]">
      <div className="flex justify-between items-center">
        <h4 className="text-sm text-gray-400 font-extralight tracking-tight">
          {`[ ${section} ]`}
        </h4>
        {button && (
          <a href={link}>
            <button
              type="button"
              className="group cursor-pointer py-2.5 px-5 me-2 text-xs font-medium  focus:outline-none rounded-lg  focus:z-10  bg-black/5 dark:bg-white/10 text-gray-300 shadow-gray-600 shadow-sm hover:text-white hover:bg-gray-700 flex items-center gap-2 transition-all duration-300"
            >
              {button}
              <CiLocationArrow1 className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </a>
        )}
      </div>
      <div className="my-10">
        <h1 className="text-4xl font-[poppins] font-semibold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-200">
          {title}
        </h1>
      </div>
    </div>
  );
}
