import "@fontsource/poppins";
import { CiLocationArrow1 } from "react-icons/ci";
import Link from "next/link";

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
        <span className="text-sm text-gray-400 font-extralight tracking-tight">
          {`[ ${section} ]`}
        </span>
        {button && (
          <Link href={link || "#"}>
            <button
              type="button"
              className="group cursor-pointer md:py-2.5 py-2 md:px-5 px-3 md:text-xs text-[10px] font-medium focus:outline-none rounded-lg focus:z-10 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-gray-200 dark:shadow-gray-800 shadow-sm  flex items-center gap-2 transition-all duration-300"
            >
              {button}
              <CiLocationArrow1 className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </Link>
        )}
      </div>
      <div className="my-10">
        <h1 className="font-[poppins] font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-black/90 to-indigo-200 dark:from-indigo-300 dark:via-white/90 dark:to-rose-200">
          {title}
        </h1>
      </div>
    </div>
  );
}
