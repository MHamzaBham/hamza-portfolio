import "@fontsource/poppins";
import { articles } from "@/constants/articles";
import Article from "./Article";

export default function List() {
  return (
    <div className="mx-auto max-w-2xl md:max-w-4xl mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-10  max-w-4xl mx-auto">
        {articles.map((item, index) => (
          <Article key={index} article={item} />
        ))}
      </div>
    </div>
  );
}
