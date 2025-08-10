import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    featured_image: { type: String, required: true },
    featured_video: { type: String, required: false },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
    published: { type: Boolean, default: true },
    tags: { type: [String], default: [] },
    category: {
      type: String,
      enum: [
        "tech",
        "news",
        "programming",
        "design",
        "business",
        "marketing",
        "ai",
        "startup",
        "learning",
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Article ||
  mongoose.model("Article", ArticleSchema);
