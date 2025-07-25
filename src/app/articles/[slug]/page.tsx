import { ArticleAuthor, articles } from "@/constants/articles";
import {
  UserPlus,
  Twitter,
  Heart,
  MessageCircle,
  Share2,
  Link2,
  Facebook,
  Linkedin,
  X,
} from "lucide-react";
import { FaRegLightbulb } from "react-icons/fa";

export default function Article({ params }: { params: { slug: string } }) {
  const article = articles.find((article) => article.slug === params.slug);

  return (
    <>
      <div className="max-w-4xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto font-[poppins]">
        <AuthorSection
          author={article?.author || { name: "", avatar: "" }}
          published={article?.published || ""}
        />

        <div className="space-y-5 md:space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
              {article?.title}
            </h2>

            <p className="text-lg text-gray-800 dark:text-neutral-200">
              {article?.excerpt}
            </p>
          </div>

          <figure>
            <img
              className="w-full object-cover rounded-xl h-72"
              src={
                process.env.NODE_ENV === "production"
                  ? "/hamza-portfolio" + article?.featured_image
                  : article?.featured_image
              }
              alt={article?.title}
            />
            <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
              {article?.media[0].alt}
            </figcaption>
          </figure>

          <div
            className="text-lg text-gray-800 dark:text-neutral-200"
            dangerouslySetInnerHTML={{ __html: article?.content || "" }}
          />

          <Tags tags={article?.tags || []} />
        </div>
      </div>

      <StickyButtons />
    </>
  );
}

const AuthorSection = ({
  author,
  published,
}: {
  author: ArticleAuthor;
  published: string;
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
        <div className="shrink-0">
          <img
            className="size-12 rounded-full"
            src={author.avatar}
            alt="Avatar"
          />
        </div>

        <div className="grow">
          <div className="flex justify-between items-center gap-x-2">
            <div>
              <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                  <span className="font-semibold text-gray-800 dark:text-neutral-200">
                    {author.name}
                  </span>
                </div>
              </div>

              <ul className="text-xs text-gray-500 dark:text-neutral-500">
                <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                  {published}
                </li>
                <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                  20 min
                </li>
              </ul>
            </div>

            {/* Button Group */}
            <div>
              <button
                type="button"
                className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                <FaRegLightbulb className="size-3.5" />
                Share
              </button>
            </div>
            {/* End Button Group */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div>
      {tags.map((tag) => (
        <a
          className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-xs bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          href="#"
        >
          {tag}
        </a>
      ))}
    </div>
  );
};

const StickyButtons = () => {
  return (
    <div className="sticky bottom-6 inset-x-0 text-center">
      <div className="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-neutral-800">
        <div className="flex items-center gap-x-1.5">
          {/* Button */}
          <div className="hs-tooltip inline-block">
            <button
              type="button"
              className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
            >
              <Heart className="shrink-0 size-4" />
              875
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-black"
                role="tooltip"
              >
                Like
              </span>
            </button>
          </div>
          {/* Button */}

          <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

          {/* Button */}
          <div className="hs-tooltip inline-block">
            <button
              type="button"
              className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
            >
              <MessageCircle className="shrink-0 size-4" />
              16
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-black"
                role="tooltip"
              >
                Comment
              </span>
            </button>
          </div>
          {/* Button */}

          <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

          {/* Button */}
          <div className="hs-dropdown relative inline-flex">
            <button
              id="hs-blog-article-share-dropdown"
              type="button"
              className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <Share2 className="shrink-0 size-4" />
              Share
            </button>
          </div>
          {/* Button */}
        </div>
      </div>
    </div>
  );
};
