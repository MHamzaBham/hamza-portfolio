import { cn } from "@/lib/utils";
import type { ArticleType } from "@/constants/articles";
import Link from "next/link";

export default function Article({ article }: { article: ArticleType }) {
  return (
    <Link
      href={`/articles/${article._id}`}
      className={cn(
        "group relative p-4 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
        "border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black",
        "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
        "hover:-translate-y-0.5 will-change-transform",
        "md:col-span-1 col-span-1"
      )}
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
      </div>

      <div className="relative flex flex-col h-full">
        <div className="flex items-center justify-between">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-linear-to-br transition-all duration-300">
            {/* {article.icon} */}
          </div>
          <span
            className={cn(
              "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-xs",
              "bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300"
            )}
          >
            {article.published || "NA"}
          </span>
        </div>

        <div className="space-y-2 flex-grow my-2">
          <h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-tight text-[20px] font-[poppins]">
            {article.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">
            {article.excerpt} {`...`}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            {article.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-xs transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-xs text-end mt-4 text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
          Read more →
        </p>
      </div>

      <div className="absolute inset-0 -z-10 rounded-xl p-px bg-linear-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}
