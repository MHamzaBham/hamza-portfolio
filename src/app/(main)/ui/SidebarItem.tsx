"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import TooltipDefault from "./Tooltip";
import { twMerge } from "tailwind-merge";

interface SidebarItemStructure {
  name: string;
  icon: React.ReactNode;
  sectionId?: string;
  link: string;
}

interface SidebarItemProps {
  sidebarItem: SidebarItemStructure;
  isAdmin?: boolean;
}

export default function SidebarItem({
  sidebarItem,
  isAdmin,
}: SidebarItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const handleClick = (e: React.MouseEvent) => {
    if (!sidebarItem.sectionId) {
      return;
    }

    e.preventDefault();
    if (isHomePage && sidebarItem.sectionId) {
      const section = document.getElementById(sidebarItem.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(sidebarItem.link);
    }
  };

  return (
    <li className="relative group">
      <Link
        href={sidebarItem.link}
        onClick={handleClick}
        className="flex p-2 mb-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {sidebarItem.icon}
        {isAdmin && <span className="ml-2">{sidebarItem.name}</span>}
        {!isAdmin && <TooltipDefault tooltip={sidebarItem.name} />}
      </Link>
    </li>
  );
}
