"use client";

import Heading from "@/app/(main)/ui/Heading";
import Article from "@/components/articles/Article";
import { useArticles } from "@/hooks/articles";

const ArticlesPage = () => {
  const { data: articles, isLoading, error } = useArticles();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mx-10 mt-10">
      <Heading
        section="Articles"
        title="Articles"
        button="Create Article"
        link="/admin/articles/create"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-10  max-w-4xl mx-auto">
        {articles?.map((item, index) => (
          <Article key={index} article={item} isAdmin={true} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
