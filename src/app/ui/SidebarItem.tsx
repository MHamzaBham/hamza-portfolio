"use client";
import TooltipDefault from "./Tooltip";

interface SidebarItemStructure {
    name: string;
    icon: React.ReactNode;
    sectionId?: string;
}

interface SidebarItemProps {
  sidebarItem: SidebarItemStructure;
}

export default function SidebarItem({ sidebarItem }: SidebarItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (sidebarItem.sectionId) {
      const section = document.getElementById(sidebarItem.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <li className="relative group">
      <a
        href={`#${sidebarItem.sectionId || ""}`}
        onClick={handleClick}
        className="flex items-center justify-center p-2 mb-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {sidebarItem.icon}
      </a>
      <TooltipDefault tooltip={sidebarItem.name} />
    </li>
  );
}