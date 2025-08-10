"use client";
import { useDeleteArticle } from "@/hooks/articles";
import Form from "./form";
import { Trash2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const EditArticlePage = () => {
  const params = useParams();
  const articleId = params?.id as string;

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-gray-800 font-bold sm:text-2xl dark:text-white">
          Edit Article
        </h2>
      </div>
      <Form />
    </div>
  );
};

export default EditArticlePage;
