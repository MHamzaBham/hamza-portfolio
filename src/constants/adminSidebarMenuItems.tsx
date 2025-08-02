
import {
  RiFileListLine,
  RiUserLine,
  RiDashboardLine,
} from "react-icons/ri";

export const adminMenuItems = [
  {
    name: "Dashboard",
    icon: <RiDashboardLine className="w-5 h-5" />, // Softer home icon
    sectionId: "dashboard",
    link: "/admin",
  },
  {
    name: "Articles",
    icon: <RiFileListLine className="w-5 h-5" />, // Softer briefcase icon
    sectionId: "articles",
    link: "/admin/articles",
  },
  {
    name: "Authors",
    icon: <RiUserLine className="w-5 h-5" />, // Open folder (rounded edges)
    sectionId: "authors",
    link: "/admin/authors",
  },
];
