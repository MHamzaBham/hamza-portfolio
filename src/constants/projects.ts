import { FaBootstrap, FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaChartPie, FaRegChartBar, FaRegObjectGroup, FaRegCheckCircle, FaRegLightbulb, FaRegEye, FaRegUser, FaRegFileAlt, FaRegStar, FaRegFolderOpen, FaRegGem, FaRegCompass } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

export const projects = [
  {
    name: "Quiks",
    slug: "quiks",
    description:
      "A web application designed for reading and listening to shortbooks, perfect for those who enjoy learning on the go. It features a personalized dashboard, intuitive navigation, and a clean, engaging interface that makes discovering and consuming content quick and enjoyable.",
    image: "/assets/quiks.png",
    github: "https://github.com/hamzabham/quiks",
    live: "https://quiks.vercel.app",
    techIcons: [SiMysql, FaReact, FaNodeJs, RiTailwindCssFill],
    features: [
      {
        title: "Personalized dashboard",
        icon: FaRegUser,
        description:
          "A personalized dashboard that allows users to track their reading and listening progress",
      },
      {
        title: "Intuitive navigation",
        icon: FaRegCompass,
        description:
          "An intuitive navigation system that makes it easy for users to find and access the content they want to read or listen to.",
      },
      {
        title: "Clean, engaging interface",
        icon: FaRegEye,
        description:
          "A clean, engaging interface that makes it easy for users to read and listen to content.",
      },
    ],
    gallery: ["/assets/quiks/1.png"],
  },
  {
    name: "Spendara",
    slug: "spendara",
    description:
      "An expense management application built for both individuals and enterprises to keep track of their finances effortlessly. It offers detailed reports, spending insights, and organized data to help users understand their financial habits and make informed decisions for a better financial future.",
    image: "/assets/spendara.jpg",
    github: "https://github.com/hamzabham/spendara",
    live: "https://spendara.vercel.app",
    techIcons: [FaHtml5, FaCss3Alt, FaSquareJs, FaBootstrap],
    features: [
      {
        title: "Detailed reports",
        icon: FaRegFileAlt,
        description:
          "Generate comprehensive reports to analyze your expenses and income, helping you make informed financial decisions.",
      },
      {
        title: "Spending insights",
        icon: FaChartPie,
        description:
          "Gain valuable insights into your spending habits with categorized analytics and visualizations.",
      },
      {
        title: "Organized data",
        icon: FaRegFolderOpen,
        description:
          "Keep your financial data organized with easy-to-use categorization and filtering options.",
      },
    ],
    gallery: ["/assets/spendara/1.jpg"],
  },
  {
    name: "Ibexoft",
    slug: "ibexoft",
    description:
      "A company website created to highlight services, showcase completed projects, and reflect the brand’s identity with a clean and modern design. Built with a focus on user experience, it helps the software company establish a strong online presence, attract potential clients, and expand its reach in a competitive market.",
    image: "/assets/ibexoft.webp",
    github: "https://github.com/hamzabham/ibexoft",
    live: "https://ibexoft.vercel.app",
    techIcons: [FaHtml5, FaCss3Alt, FaSquareJs, FaBootstrap],
    features: [
      {
        title: "Services showcase",
        icon: FaRegStar,
        description:
          "Highlight a wide range of company services with dedicated sections and engaging visuals.",
      },
      {
        title: "Completed projects",
        icon: FaRegCheckCircle,
        description:
          "Showcase completed projects with detailed case studies and client testimonials.",
      },
      {
        title: "Brand identity & UX",
        icon: FaRegGem,
        description:
          "Reflect the brand’s identity through a clean, modern design and a user-focused experience.",
      },
    ],
    gallery: ["/assets/ibexoft/1.webp"],
  },
  {
    name: "eClerx Digital",
    slug: "eclerx-digital",
    description:
      "A landing page for a company that specializes in digital transformation and data analytics. The page is designed to be visually appealing, user-friendly, and informative, showcasing the company's services and expertise in the digital space.",
    image: "/assets/eclerx.jpg",
    github: "https://github.com/hamzabham/eclerx-digital",
    live: "https://eclerx-digital.vercel.app",
    techIcons: [RiNextjsFill, RiTailwindCssFill, FaSquareJs],
    features: [
      {
        title: "Digital transformation",
        icon: FaRegLightbulb,
        description:
          "Showcase the company's expertise in digital transformation with clear messaging and case studies.",
      },
      {
        title: "Data analytics",
        icon: FaRegChartBar,
        description:
          "Highlight advanced data analytics services with interactive charts and infographics.",
      },
      {
        title: "User-friendly & visual appeal",
        icon: FaRegObjectGroup,
        description:
          "Engage visitors with a visually appealing, modern, and easy-to-navigate landing page.",
      },
    ],
    gallery: ["/assets/eclerx/1.jpg"],
  },
];