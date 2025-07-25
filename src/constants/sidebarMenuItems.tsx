import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { PiGithubLogoBold } from "react-icons/pi";
import {
  RiFileListLine,
  RiFolderOpenLine,
  RiHomeSmileLine,
  RiLinkedinBoxLine,
  RiMailOpenLine,
  RiSuitcaseLine,
} from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

export const menuItems = [
  {
    name: "Home",
    icon: <RiHomeSmileLine className="w-5 h-5" />, // Softer home icon
    sectionId: "home",
    link: "/",
  },
  {
    name: "Projects",
    icon: <RiFolderOpenLine className="w-5 h-5" />, // Open folder (rounded edges)
    sectionId: "projects",
    link: "/#projects",
  },
  {
    name: "Experience",
    icon: <RiSuitcaseLine className="w-5 h-5" />, // Softer briefcase icon
    sectionId: "experience",
    link: "/#experience",
  },
  {
    name: "Articles",
    icon: <RiFileListLine className="w-5 h-5" />, // Document list with rounded edges
    sectionId: "articles",
    link: "/#articles",
  },
  {
    name: "Contact",
    icon: <RiMailOpenLine className="w-5 h-5" />, // Open mail (friendlier)
    sectionId: "contact",
    link: "/#contact",
  },
];

export const socialItems = [
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="w-4 h-4" />,
    link: "https://www.linkedin.com/in/hamzabham",
  },
  {
    name: "GitHub",
    icon: <FaGithubAlt className="w-4 h-4" />,
    link: "https://github.com/MHamzaBham",
  },
  {
    name: "Leetcode",
    icon: <SiLeetcode className="w-4 h-4" />,
    link: "https://leetcode.com/u/hamzabham/",
  },
];
