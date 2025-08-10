import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  ArticleType,
  AuthorType,
  UpdateArticleType,
} from "@/constants/articles";

export function useAuthors() {
  return useQuery<AuthorType[], Error>({
    queryKey: ["authors"],
    queryFn: async () => {
      const response = await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/authors`)
        .catch((error) => {
          console.error("Error fetching authors: ", error);
          alert("Error fetching authors");
          return error;
        });
      return response.data;
    },
  });
}

export function useArticles() {
  return useQuery<ArticleType[], Error>({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/articles`)
        .catch((error) => {
          console.error("Error fetching articles: ", error);
          alert("Error fetching articles");
          return error;
        });
      return response.data;
    },
  });
}

export function useArticle(id: string) {
  return useQuery<ArticleType, Error>({
    queryKey: ["articles", id],
    queryFn: async () => {
      const response = await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`)
        .catch((error) => {
          console.error("Error fetching article: ", error);
          alert("Error fetching article");
          return error;
        });
      return response.data;
    },
    enabled: !!id,
  });
}

export function useCreateArticle() {
  return useMutation<ArticleType, Error, ArticleType>({
    mutationFn: async (article: ArticleType) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/articles`,
        article
      );
      return response.data;
    },
    onError: (error) => {
      console.error("Error creating article: ", error);
      alert("Error creating article");
    },
  });
}

export function useUpdateArticle(id: string) {
  return useMutation<ArticleType, Error, UpdateArticleType>({
    mutationFn: async (article: any) => {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
        article
      );
      return response.data;
    },
    onError: (error) => {
      console.error("Error updating article: ", error);
      alert("Error updating article");
    },
  });
}

export function useDeleteArticle() {
  return useMutation<ArticleType, Error, string>({
    mutationFn: async (articleId: string) => {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/${articleId}`
      );
      return response.data;
    },
    onError: (error) => {
      console.error("Error deleting article: ", error);
      alert("Error deleting article");
    },
  });
}
