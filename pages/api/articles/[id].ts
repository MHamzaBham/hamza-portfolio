import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../utils/mongoose";
import Article from "../utils/models/Article";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const { id } = req.query;

  if (typeof id !== "string") {
    return res.status(400).json({ error: "Invalid article ID" });
  }

  try {
    if (req.method === "GET") {
      const article = await Article.findById(id);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      return res.status(200).json(article);
    }

    if (req.method === "PUT") {
      const updatedArticle = await Article.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedArticle) {
        return res.status(404).json({ error: "Article not found" });
      }
      return res.status(200).json(updatedArticle);
    }

    if (req.method === "DELETE") {
      const deletedArticle = await Article.findByIdAndDelete(id);
      if (!deletedArticle) {
        return res.status(404).json({ error: "Article not found" });
      }
      return res.status(200).json({ message: "Article deleted successfully" });
    }

    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return res.status(500).json({ error: message });
  }
}
