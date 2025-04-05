import { CheckCircle, TrendingUp, Video, Globe, Code } from "lucide-react";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  // meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

export const articles: BentoItem[] = [
  {
    title: "Exploring Laravel: Advantages and Core Concepts",
    // meta: "v2.4.1",
    description:
      "Are you looking to streamline your web development process and create efficient and powerful applications? Look no further than Laravel, a widely popular PHP framework that has",
    icon: <Code className="w-4 h-4 text-green-500" />,
    status: "May 31, 2024 ",
    tags: ["laravel", "development", "programming"],
    hasPersistentHover: false,
    },
    {
    title: "Exploring Laravel: Advantages and",
    // meta: "v2.4.1",
    description:
      "Are you looking to streamline your web development process and create efficient and powerful applications? Look no further than Laravel, a widely popular PHP framework that has",
    icon: <Globe className="w-4 h-4 text-blue-500" />,
    status: "May 31, 2024 ",
    tags: ["laravel", "development", "programming"],
    hasPersistentHover: false,
  },
];
