import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../utils/mongoose";
import Author from "../utils/models/Author";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const authors = await Author.find({});
      return res.status(200).json(authors);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  if (req.method === "POST") {
    try {
      const author = await Author.create(req.body);
      return res.status(201).json(author);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
