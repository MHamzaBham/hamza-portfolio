import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../utils/mongoose";
import Author from "../utils/models/Author";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const { id } = req.query;

  if (typeof id !== "string") {
    return res.status(400).json({ error: "Invalid author ID" });
  }

  try {
    if (req.method === "GET") {
      const author = await Author.findById(id);
      if (!author) {
        return res.status(404).json({ error: "Author not found" });
      }
      return res.status(200).json(author);
    }

    if (req.method === "PUT") {
      const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedAuthor) {
        return res.status(404).json({ error: "Author not found" });
      }
      return res.status(200).json(updatedAuthor);
    }

    if (req.method === "DELETE") {
      const deletedAuthor = await Author.findByIdAndDelete(id);
      if (!deletedAuthor) {
        return res.status(404).json({ error: "Author not found" });
      }
      return res.status(200).json({ message: "Author deleted successfully" });
    }

    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return res.status(500).json({ error: message });
  }
}
