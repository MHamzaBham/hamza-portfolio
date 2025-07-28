import "@fontsource/poppins";
import { type ArticleType } from "@/constants/articles";
import Article from "./Article";

export default async function List() {
  const articles = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
  const articlesData = await articles.json() as ArticleType[];

  return (
    <div className="mx-auto max-w-2xl md:max-w-4xl mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-10  max-w-4xl mx-auto">
        {articlesData.map((item, index) => (
          <Article key={index} article={item} />
        ))}
      </div>
    </div>
  );
}
