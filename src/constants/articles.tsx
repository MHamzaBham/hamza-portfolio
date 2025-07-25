import { SiLaravel } from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa";

export interface ArticleAuthor {
  name: string;
  avatar: string;
}

export interface ArticleMedia {
  type: "image" | "video";
  url: string;
  alt?: string;
}

export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  media: ArticleMedia[];
  author: ArticleAuthor;
  published: string;
  tags: string[];
  icon: React.ReactNode;
}

export const articles: Article[] = [
  {
    title: "Exploring Laravel: Advantages and Core Concepts",
    slug: "exploring-laravel-advantages-core-concepts",
    excerpt:
      "Discover how Laravel streamlines web development and why it's a top choice for building efficient, powerful applications.",
    content: `
      <p>Are you looking to streamline your web development process and create efficient and powerful applications? Look no further than Laravel, a widely popular PHP framework that has revolutionized the way developers build web applications.</p>
      <h2>Advantages of Laravel</h2>
      <ul>
        <li>Elegant syntax and expressive code</li>
        <li>Robust routing and middleware</li>
        <li>Powerful ORM (Eloquent)</li>
        <li>Comprehensive authentication and security</li>
        <li>Active community and extensive documentation</li>
      </ul>
      <h2>Core Concepts</h2>
      <p>Laravel is built around the MVC (Model-View-Controller) architecture, making it easy to separate business logic from presentation. Features like Blade templating, migrations, and task scheduling further enhance productivity.</p>
    `,
    featured_image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
        alt: "Laravel code on screen"
      }
    ],
    author: {
      name: "Leyla Ludic",
      avatar: "https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    },
    published: "2024-05-31",
    tags: ["laravel", "development", "programming"],
    icon: <SiLaravel className="text-red-600" />
  },
  {
    title: "Getting Started with Laravel: A Beginner's Guide",
    slug: "getting-started-with-laravel-beginners-guide",
    excerpt:
      "Kickstart your Laravel journey with this beginner-friendly guide covering installation, setup, and first steps.",
    content: `
      <p>Laravel is a modern PHP framework designed to make web development simple and enjoyable. In this guide, we'll walk you through the basics of getting started with Laravel, from installation to your first project.</p>
      <h2>Installation</h2>
      <p>Install Laravel via Composer and set up your development environment with ease. The official documentation provides step-by-step instructions for various platforms.</p>
      <h2>First Steps</h2>
      <p>Learn about routing, controllers, and Blade templates to quickly build your first Laravel application.</p>
    `,
    featured_image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
        alt: "Beginner coding on laptop"
      }
    ],
    author: {
      name: "Leyla Ludic",
      avatar: "https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    },
    published: "2024-05-31",
    tags: ["laravel", "development", "programming"],
    icon: <FaRegLightbulb className="text-yellow-500" />
  }
];
