import Link from "next/link";
import TooltipDefault from "./Tooltip";

interface SocialMediaStructure {
    name: string;
    icon: React.ReactNode;
    link?: string;
}

interface SocialMediaProps {
  socialItem: SocialMediaStructure;
}

export default function SocialMedia({ socialItem }: SocialMediaProps) {
  

  return (
    <li className="relative group">
      <Link
        href={socialItem.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-2 mb-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {socialItem.icon}
      </Link>
      <TooltipDefault tooltip={socialItem.name} />
    </li>
  );
}