import {
  BookOpen,
  Newspaper,
  Code2,
  PenTool,
  Briefcase,
  Megaphone,
  Brain,
  Rocket,
  GraduationCap,
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
  author: AuthorType;
  published: string;
  tags: string[];
  category: string;
}

export const categoryIconMap: Record<string, React.ReactNode> = {
  tech: <BookOpen size={20} />,
  news: <Newspaper size={20} />,
  programming: <Code2 size={20} />,
  design: <PenTool size={20} />,
  business: <Briefcase size={20} />,
  marketing: <Megaphone size={20} />,
  ai: <Brain size={20} />,
  startup: <Rocket size={20} />,
  learning: <GraduationCap size={20} />,
};
