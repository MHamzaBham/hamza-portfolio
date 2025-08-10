import {
  BookOpen,
  Newspaper,
  Code2,
  PenTool,
  Briefcase,
  Megaphone,
  Brain,
  Rocket,
} from "lucide-react";

export interface AuthorType {
  _id: string;
  name: string;
  avatar: string;
}

export interface ArticleType {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  featured_video: string;
  author: string;
  published: boolean;
  tags: string[];
  category: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateArticleType {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  featured_video: string;
  author: string;
  published: boolean;
  tags: string[];
  category: string;
}

export interface CategoryMapProps {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export const categoryMap: Record<string, CategoryMapProps> = {
  tech: {
    id: "tech",
    name: "Tech",
    icon: <BookOpen size={20} />,
  },
  news: {
    id: "news",
    name: "News",
    icon: <Newspaper size={20} />,
  },
  programming: {
    id: "programming",
    name: "Programming",
    icon: <Code2 size={20} />,
  },
  design: {
    id: "design",
    name: "Design",
    icon: <PenTool size={20} />,
  },
  business: {
    id: "business",
    name: "Business",
    icon: <Briefcase size={20} />,
  },
  marketing: {
    id: "marketing",
    name: "Marketing",
    icon: <Megaphone size={20} />,
  },
  ai: {
    id: "ai",
    name: "AI",
    icon: <Brain size={20} />,
  },
  startup: {
    id: "startup",
    name: "Startup",
    icon: <Rocket size={20} />,
  },
};
